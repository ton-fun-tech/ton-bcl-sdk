import { AccountStatus, Api } from "tonapi-sdk-js";
import {
    Address,
    Cell,
    comment,
    Contract,
    ContractProvider,
    ContractState,
    openContract,
    OpenedContract,
    StateInit,
    toNano,
    Transaction,
    TupleReader
} from "@ton/core";

import { TupleItemToTonapiString, TvmStackRecordToTupleItem } from "../utils/tonapiUtils";

export function simpleTonapiProvider(tonapi: Api<any>) {
    return {
        open<T extends Contract>(contract: T) {
            return openContract<T>(contract, (params) =>
                createProvider(tonapi, params)
            );
        }
    };
}

export function createProvider(
    client: Api<any>,
    params: { address: Address; init: StateInit | null }
): ContractProvider {
    return {
        async getState(): Promise<ContractState> {
            const res = await client.blockchain.getBlockchainRawAccount(
                params.address.toRawString()
            );

            let state: ContractState["state"];

            if (
                res.status === AccountStatus.Nonexist ||
                res.status === AccountStatus.Uninit
            ) {
                state = { type: "uninit" };
            } else if (res.status === AccountStatus.Active) {
                state = {
                    type: "active",
                    code: res.code ? Buffer.from(res.code, "hex") : null,
                    data: res.data ? Buffer.from(res.data, "hex") : null
                };
            } else if (res.status === AccountStatus.Frozen) {
                state = {
                    type: "frozen",
                    stateHash: Buffer.from(res.frozen_hash!, "hex")
                };
            } else {
                throw new Error("Unknown state");
            }

            return {
                balance: BigInt(res.balance),
                last: res.last_transaction_hash
                    ? {
                        lt: BigInt(res.last_transaction_lt),
                        hash: Buffer.from(res.last_transaction_hash, "hex")
                    }
                    : null,
                state
            };
        },
        async get(name, args) {
            const result = await client.blockchain.execGetMethodForBlockchainAccount(
                params.address.toRawString(),
                name as string,
                { args: args?.map(TupleItemToTonapiString) }
            );

            if (!result.success || result.exit_code !== 0) {
                throw new Error();
            }

            return {
                stack: new TupleReader(result.stack.map(TvmStackRecordToTupleItem))
            };
        },
        async external(message) {
            throw new Error("Not supported, try using TonClient / TonClient 4");
        },
        async internal(via, message) {
            // Resolve last
            // let last = await client.getLastBlock();

            // Resolve init
            const neededInit: StateInit | null = null;
            // if (init && (await client.getAccountLite(last.last.seqno, address)).account.state.type !== 'active') {
            //     neededInit = init;
            // }

            // Resolve bounce
            let bounce = true;
            if (message.bounce !== null && message.bounce !== undefined) {
                bounce = message.bounce;
            }

            // Resolve value
            let value: bigint;
            if (typeof message.value === "string") {
                value = toNano(message.value);
            } else {
                value = message.value;
            }

            // Resolve body
            let body: Cell | null = null;
            if (typeof message.body === "string") {
                body = comment(message.body);
            } else if (message.body) {
                body = message.body;
            }

            // Send internal message
            await via.send({
                to: params.address,
                value,
                bounce,
                sendMode: message.sendMode,
                init: neededInit,
                body
            });
        },
        open<T extends Contract>(contract: T): OpenedContract<T> {
            return openContract<T>(contract, (params) =>
                createProvider(client, params)
            );
        },
        async getTransactions(
            address: Address,
            lt: bigint,
            hash: Buffer,
            limit?: number
        ): Promise<Transaction[]> {
            throw new Error("Not supported, try using TonClient / TonClient 4");
        }
    };
}
