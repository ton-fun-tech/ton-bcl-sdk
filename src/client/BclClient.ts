import {Address} from "@ton/core";
import {AnyObject, normalizeCoin, normalizeCoinEvent} from "./adapters";
import {ClientOptions, Coin, GetCoinsResponse, GetEventsResponse} from "./types";
import {HttpProviderBase} from "../provider/httpProviderBase";
import {OfetchHttpProvider} from "./ofetchHttpProvider";

export type TransactionStatus = "done" | "failed" | "in_progress" | "not_found";

export class BclClient {
    readonly endpoint: string;
    readonly httpProvider: HttpProviderBase;

    constructor(options: ClientOptions) {
        this.endpoint = options.endpoint;
        this.httpProvider = options.httpProvider ?? new OfetchHttpProvider();
    }

    private fetch = async (path: string, opts?: { query: { [key: string]: any } }) => {
        return await this.httpProvider.get<AnyObject>(this.endpoint + path, {query: opts?.query})
    }

    /**
     * Returns paginated list of all coins
     */
    fetchCoins = async (opts?: { first?: number, after?: string, reverse?: boolean }): Promise<GetCoinsResponse> => {
        const res = await this.fetch('/getCoins', { query: opts ?? {} });

        return {
            items: res.items.map(normalizeCoin),
            cursor: res.cursor
        }
    };

    /**
     * Returns information on specific coin
     * @param address
     */
    fetchCoin = async (address: Address): Promise<Coin> => {
        let res = await this.fetch('/getCoin/' + address.toString({urlSafe: true}));
        return normalizeCoin(res);
    };

    /**
     * Returns events of specific coin
     * @param address
     */
    fetchCoinEvents = async (address: Address, opts?: { first?: number, after?: string, reverse?: boolean }): Promise<GetEventsResponse> => {
        const res = await this.fetch('/getCoinEvents/' + address.toString({urlSafe: true}), { query: opts ?? {} });

        return {
            items: res.items.map((e: any) => {
                return {
                    id: e.id,
                    lt: e.lt,
                    txUtime: e.txUtime,
                    txHash: e.txHash,
                    queryId: e.queryId,
                    event: normalizeCoinEvent(e.event),
                    coinAddress: Address.parse(e.coinAddress)
                };
            }),
            cursor: res.cursor
        }
    };

    /**
     * Returns all events in ton.fun system
     * Useful for syncing with server
     * @param opts
     */
    fetchServerEvents = async (opts?: { first?: number, after?: string, reverse?: boolean }) => {
        const res = await this.fetch('/getServerEvents', { query: opts ?? {} })

        return {
            items: res.items.map((e: any) => {
                return {
                    id: e.id,
                    lt: e.lt,
                    txUtime: e.txUtime,
                    txHash: e.txHash,
                    queryId: e.queryId,
                    event: normalizeCoinEvent(e.event),
                    coinAddress: Address.parse(e.coinAddress)
                };
            }),
            cursor: res.cursor
        }
    }
}
