import { Api } from "tonapi-sdk-js";
import { Address, Cell, Contract, OpenedContract, Sender } from "@ton/core";

import { BclClient } from "./client/BclClient";
import { ClientOptions } from "./client/types";
import { simpleTonapiProvider } from "./provider/simpleTonapiProvider";
import { BclJetton } from "./wrappers/BclJetton";
import { BclMaster, DeployCoinInput } from "./wrappers/BclMaster";
import { HttpProviderBase } from "./provider/httpProviderBase";

export type AnyApiProvider = {
    open<T extends Contract>(contract: T): OpenedContract<T>;
};

type SdkOptions = {
    /**
     * Any API provider compatible with `open` contract mechanics
     * You can use simpleTonapiProvider() which uses tonapi client under the hood
     * Another option is TonClient / TonClient4 from @ton/ton package (toncenter api and tonhub api respectively)
     */
    apiProvider: AnyApiProvider;
    clientOptions: ClientOptions;
    /**
     * Address of the BCL master contract
     */
    masterAddress: Address
};

type SdkOptionsSimple = {
    /**
     * Instance of TonApi
     */
    tonapiClient: Api<any>;
    clientOptions: Omit<ClientOptions, "tonApi" | "masterAddress">;
    /**
     * Address of the BCL master contract
     */
    masterAddress: Address
};

export class BclSDK {
    readonly apiProvider: AnyApiProvider;
    readonly api: BclClient;
    readonly masterAddress: Address;

    private constructor(options: SdkOptions) {
        this.apiProvider = options.apiProvider;
        this.api = new BclClient(options.clientOptions);
        this.masterAddress = options.masterAddress
    }

    /**
     * Returns instance of coin wrapper by its address
     */
    openCoin(address: Address) {
        return this.apiProvider.open(BclJetton.createFromAddress(address));
    }

    /**
     * Returns instance of user coin wallet
     * @param coinAddress address of the coin
     * @param userAddress address of user
     */
    async openUserCoinWallet(coinAddress: Address, userAddress: Address) {
        const coin = this.openCoin(coinAddress);
        return await coin.getUserWallet(userAddress);
    }

    /**
     * Deploys new coin
     */
    async deployCoin(sender: Sender, config: DeployCoinInput) {
        const master = this.apiProvider.open(BclMaster.createFromAddress(this.masterAddress));
        await master.sendDeployCoin(sender, config);
    }

    /**
     * Returns amount of coins one can get for providing given amount of TONs
     */
    async getCoinsForTons(coinAddress: Address, tons: bigint) {
        const coin = this.openCoin(coinAddress);
        return await coin.getCoinsForTons(tons);
    }

    /**
     * Returns amount of TONs one can get for providing given amount of coins
     */
    async getTonsForCoins(coinAddress: Address, coins: bigint) {
        const coin = this.openCoin(coinAddress);
        return await coin.getTonsForCoins(coins);
    }

    /**
     * Returns users balance for given coin
     */
    async getUserCoinBalance(coinAddress: Address, userAddress: Address) {
        const coin = this.openCoin(coinAddress);
        const wallet = await coin.getUserWallet(userAddress);
        try {
            const res = await wallet.getData();
            return res.balance;
        } catch {
            // In peacetime error means wallet does not exist, which means balance is 0
            return 0n;
        }
    }

    open<T extends Contract>(contract: T) {
        return this.apiProvider.open(contract);
    }

    static create(options: SdkOptions) {
        return new BclSDK(options);
    }

    static createSimple(options: SdkOptionsSimple) {
        return new BclSDK({
            clientOptions: {
                ...options.clientOptions,
                tonApi: options.tonapiClient,
                masterAddress: options.masterAddress
            },
            apiProvider: simpleTonapiProvider(options.tonapiClient),
            masterAddress: options.masterAddress
        });
    }
}
