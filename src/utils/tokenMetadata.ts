import { Cell } from "@ton/core";
import { beginCell, Builder, Dictionary, DictionaryValue } from "@ton/ton";

import { sha256ToBigint } from "./sha256";

const OFF_CHAIN_CONTENT_PREFIX = 0x01;
const ON_CHAIN_CONTENT_PREFIX = 0x00;
const SNAKE_PREFIX = 0x00;

export function flattenSnakeCell(cell: Cell) {
    let c: Cell | null = cell;

    let res = Buffer.alloc(0);

    while (c) {
        const cs = c.beginParse();
        // let data = cs.readRemainingBytes()
        const data = cs.loadBuffer(cs.remainingBits / 8);
        res = Buffer.concat([res, data]);
        c = c.refs[0];
    }

    return res;
}

function bufferToChunks(buff: Buffer, chunkSize: number) {
    const chunks: Buffer[] = [];
    while (buff.byteLength > 0) {
        chunks.push(buff.slice(0, chunkSize));
        buff = buff.slice(chunkSize);
    }
    return chunks;
}

export function makeSnakeCell(data: Buffer) {
    const chunks = bufferToChunks(data, 127);
    const rootCell = beginCell();
    let curCell = rootCell;

    const refs = [];

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];

        curCell.storeBuffer(chunk);

        if (chunks[i + 1]) {
            const nextCell = beginCell();
            refs.push(nextCell);
            curCell = nextCell;
        }
    }

    if (refs.length > 0) {
        let prev: Builder | null = null;
        while (refs.length > 0) {
            const c = refs.pop()!;
            if (prev) {
                c.storeRef(prev);
            }
            prev = c;
        }
        rootCell.storeRef(prev!);
    }

    return rootCell;
}

export function encodeOffChainContent(content: string) {
    let data = Buffer.from(content);
    const offChainPrefix = Buffer.from([OFF_CHAIN_CONTENT_PREFIX]);
    data = Buffer.concat([offChainPrefix, data]);
    return makeSnakeCell(data);
}

export function decodeOffChainContent(content: Cell) {
    const data = flattenSnakeCell(content);

    const prefix = data[0];
    if (prefix !== OFF_CHAIN_CONTENT_PREFIX) {
        throw new Error(`Unknown content prefix: ${prefix.toString(16)}`);
    }
    return data.slice(1).toString();
}

export function encodeTextSnake(text: string) {
    const data = Buffer.from(text);
    const snakePrefix = Buffer.from([SNAKE_PREFIX]);
    return makeSnakeCell(Buffer.concat([snakePrefix, data]));
}

// tail#_ {bn:#} b:(bits bn) = SnakeData ~0;
// cons#_ {bn:#} {n:#} b:(bits bn) next:^(SnakeData ~n) = SnakeData ~(n + 1);
// chunked_data#_ data:(HashMapE 32 ^(SnakeData ~0)) = ChunkedData;

// text#_ {n:#} data:(SnakeData ~n) = Text;
// snake#00 data:(SnakeData ~n) = ContentData;
// chunks#01 data:ChunkedData = ContentData;
// onchain#00 data:(HashMapE 256 ^ContentData) = FullContent;
// offchain#01 uri:Text = FullContent;

// export function decodeContentData(content: Cell) {
//     let ds = content.beginParse()
//     let prefix = ds.loadUint(8)
//
//     if (prefix === 0x0) {
//         return flattenSnakeCell(ds.asCell())
//     } else if (prefix === 0x01) {
//         // let chunks = ds.readDict(32, (s) => s.readCell())
//         let chunks = ds.loadDict(Dictionary.Keys.Uint(32), Dictionary.Values.Cell())
//         let data = Buffer.alloc(0)
//
//         let keys = chunks.keys().sort((a, b) => a - b)
//
//         for (let key of keys) {
//             let value = chunks.get(key)!.beginParse()
//             data = Buffer.concat([data, value!.loadBuffer(value.remainingBits/8)])
//         }
//
//         return data
//     } else {
//         throw new Error('Unknown content data')
//     }
// }
//
// export class OnChainContent {
//     constructor(private map: Map<string, Buffer>) {
//     }
//
//     getString(key: string) {
//         let value = this.map.get(sha256ToNumStr(key))
//         if (!value) {
//             return null
//         }
//
//         return value.toString()
//     }
//
//     static decode(content: Cell) {
//         throw new Error()
//         // return new OnChainContent(decodeOnChainContent(content))
//     }
// }
//
// function createContentDataValue(): DictionaryValue<Buffer> {
//     return {
//         serialize: (src, buidler) => {
//             buidler.storeRef(buidler)
//         },
//         parse: (src) => {
//             return decodeContentData(src.loadRef())
//         }
//     }
// }
//
function createContentDataValueStore(): DictionaryValue<Builder> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(src.endCell());
        },
        parse: (src) => {
            return beginCell();
        }
    };
}

// export function decodeOnChainContent(content: Cell) {
//     let ds = content.beginParse()
//
//     let prefix = ds.loadUint(8)
//
//     if (prefix !== ON_CHAIN_CONTENT_PREFIX) {
//         throw new Error(`Unknown content prefix: ${prefix}`)
//     }
//
//     return ds.loadDict(Dictionary.Keys.BigUint(256), createContentDataValue())
// }

export type OnChainContentInput = {
    name?: string;
    description?: string;
    image?: string;
    decimals?: number;
    symbol?: string;
    extra?: {[key: string]: string};
};

export function encodeOnChainContent(input: OnChainContentInput) {
    const dict = Dictionary.empty(
        Dictionary.Keys.BigUint(256),
        createContentDataValueStore()
    );

    if (input.name) {
        dict.set(sha256ToBigint("name"), encodeTextSnake(input.name));
    }
    if (input.description) {
        dict.set(sha256ToBigint("description"), encodeTextSnake(input.description));
    }
    if (input.image) {
        dict.set(sha256ToBigint("image"), encodeTextSnake(input.image));
    }
    if (input.decimals) {
        dict.set(
            sha256ToBigint("decimals"),
            encodeTextSnake(input.decimals.toString())
        );
    }
    if (input.symbol) {
        dict.set(sha256ToBigint("symbol"), encodeTextSnake(input.symbol));
    }

    if (input.extra) {
        for (let key in input.extra) {
            let val = input.extra[key];
            dict.set(sha256ToBigint(key), encodeTextSnake(val));
        }
    }

    return beginCell()
        .storeUint(ON_CHAIN_CONTENT_PREFIX, 8)
        .storeDict(dict)
        .endCell();
}
