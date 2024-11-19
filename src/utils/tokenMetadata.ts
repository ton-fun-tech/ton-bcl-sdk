import {Slice} from "@ton/core";
import { beginCell, Builder, Dictionary, DictionaryValue } from "@ton/ton";
import { sha256ToBigint } from "./sha256";

// Standard: https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md

// TLB schema
// tail#_ {bn:#} b:(bits bn) = SnakeData ~0;
// cons#_ {bn:#} {n:#} b:(bits bn) next:^(SnakeData ~n) = SnakeData ~(n + 1);
// chunked_data#_ data:(HashMapE 32 ^(SnakeData ~0)) = ChunkedData;

// text#_ {n:#} data:(SnakeData ~n) = Text;
// snake#00 data:(SnakeData ~n) = ContentData;
// chunks#01 data:ChunkedData = ContentData;
// onchain#00 data:(HashMapE 256 ^ContentData) = FullContent;
// offchain#01 uri:Text = FullContent;

const ON_CHAIN_CONTENT_PREFIX = 0x00;
const SNAKE_PREFIX = 0x00;

export function storeSnakeContentData(content: string) {
    return (builder: Builder) => {
        return builder
            .storeUint(SNAKE_PREFIX, 8)
            .storeStringTail(content)
    }
}

export function loadSnakeContentData(slice: Slice) {
    let tag = slice.loadUint(8)
    if (tag !== SNAKE_PREFIX) {
        throw new Error('Not snake ContentData')
    }

    return slice.loadStringTail()
}

const SnakeContentDataDictValue: DictionaryValue<string> = {
    serialize: (src, buidler) => {
        buidler.storeRef(beginCell().store(storeSnakeContentData(src)).endCell())
    },
    parse: (src) => {
        return loadSnakeContentData(src.loadRef().beginParse())
    }
}

export function storeTokenOnchainContent(content: {[key: string]: string | undefined}) {
    return (builder: Builder) => {
        const dict = Dictionary.empty(
            Dictionary.Keys.BigUint(256),
            SnakeContentDataDictValue,
        );

        for (const key in content) {
            if (!content[key]) {
                continue
            }
            dict.set(
                sha256ToBigint(key),
                content[key]
            )
        }

        return builder
            .storeUint(ON_CHAIN_CONTENT_PREFIX, 8)
            .storeDict(dict)
    }
}

export function loadTokenOnchainContent(slice: Slice) {
    let tag = slice.loadUint(8)

    if (tag !== ON_CHAIN_CONTENT_PREFIX) {
        throw new Error('Not on-chain content')
    }

    return slice.loadDict( Dictionary.Keys.BigUint(256), SnakeContentDataDictValue)
}
