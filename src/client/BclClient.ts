import { Api } from "tonapi-sdk-js";
import { Address } from "@ton/core";

import { AnyObject, normalizeCoin, normalizeCoinEvent } from "./adapters";
import { ClientOptions, Coin, Event } from "./types";
import { HttpProviderBase } from "../provider/httpProviderBase";
import { OfetchHttpProvider } from "./ofetchHttpProvider";

export type TransactionStatus = "done" | "failed" | "in_progress" | "not_found";

export class BclClient {
    readonly endpoint: string;
    readonly tonApi: Api<any>;
    readonly masterAddress: Address;
    readonly httpProvider: HttpProviderBase;

    constructor(options: ClientOptions) {
        this.endpoint = options.endpoint;
        this.tonApi = options.tonApi;
        this.masterAddress = options.masterAddress
        this.httpProvider = options.httpProvider ?? new OfetchHttpProvider();
    }
  
    protected fetch = async (path: string) => {
        return await ofetch(this.endpoint + path);
    };
  
    /**
     * Returns list of all coins
     */
    fetchCoins = async (): Promise<Coin[]> => {
        const res = await this.httpProvider.get<AnyObject>(this.endpoint + "/v1/getCoins");
        return res.map(normalizeCoin);
    };

    /**
     * Returns information on specific coin
     * @param address
     */
    fetchCoin = async (address: Address): Promise<Coin> => {
        const res = await this.httpProvider.get<AnyObject>(
            this.endpoint + "/v1/getCoin/" + address.toString({ urlSafe: true })
        );
        return normalizeCoin(res);
    };

    /**
     * Returns events of specific coin
     * @param address
     */
    fetchCoinEvents = async (address: Address): Promise<Event[]> => {
        const res = await this.httpProvider.get<AnyObject>(
            this.endpoint + "/v1/getCoinEvents/" + address.toString({ urlSafe: true })
        );
        return res.map((e: any) => {
            return {
                date: e.txUtime,
                txHash: e.txHash,
                event: normalizeCoinEvent(e.event)
            };
        });
    };

    /**
     * Returns buy operation status by tx hash of message hash
     */
    fetchBuyStatus = async (coinAddress: Address, txHash: string) => {
        let res;
        try {
            res = await this.tonApi.events.getEvent(txHash);
        } catch (e) {
            return "not_found";
        }

        if (res.in_progress) {
            return "in_progress";
        }

        const masterCall = res.actions.find((a) => a.type === "SmartContractExec" && Address.parse(a.SmartContractExec?.contract.address!).equals(coinAddress));

        if (!masterCall || masterCall.status !== "ok") {
            return "failed";
        }

        const failedAction = res.actions.find((act) => act.status !== "ok");
        if (failedAction) {
            return "failed";
        }

        return "done";
    };

    /**
     * Returns sell operation status by tx hash or message hash
     */
    fetchSellStatus = async (coinAddress: Address, txHash: string): Promise<TransactionStatus> => {
        let res;
        try {
            res = await this.tonApi.events.getEvent(txHash);
        } catch (e) {
            return "not_found";
        }

        if (res.in_progress) {
            return "in_progress";
        }

        const masterCall = res.actions.find((a) => a.type === "SmartContractExec" && Address.parse(a.SmartContractExec?.contract.address!).equals(coinAddress));

        if (!masterCall || masterCall.status !== "ok") {
            return "failed";
        }

        const failedAction = res.actions.find((act) => act.status !== "ok");
        if (failedAction) {
            return "failed";
        }

        return "done";
    };

    /**
     * Returns coin deploy status by tx hash or message hash
     */
    fetchCoinDeployStatus = async (txHash: string): Promise<TransactionStatus> => {
        let res;
        try {
            res = await this.tonApi.events.getEvent(txHash);
        } catch (e) {
            return "not_found";
        }

        if (res.in_progress) {
            return "in_progress";
        }

        const masterCall = res.actions.find((a) => a.type === "SmartContractExec" && Address.parse(a.SmartContractExec?.contract.address!).equals(this.masterAddress));

        if (!masterCall || masterCall.status !== "ok") {
            return "failed";
        }

        const coinDeployment = res.actions.find((a) => a.type === "ContractDeploy");

        if (!coinDeployment) {
            return "failed";
        }

        const failedAction = res.actions.find((act) => act.status !== "ok");
        if (failedAction) {
            return "failed";
        }

        return "done";
    };

    /**
     * Returns any contract TON balance
     */
    fetchAccountBalance = async (address: Address) => {
        try {
            const res = await this.tonApi.accounts.getAccount(address.toRawString());
            return BigInt(res.balance);
        } catch (e) {
            // In peacetime error means wallet does not exist, which means balance is 0
            return BigInt(0);
        }
    };
}
