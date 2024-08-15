import { Api } from "tonapi-sdk-js";
import { Address, Cell, Contract, OpenedContract, Sender, toNano } from "@ton/core";

import { BclClient } from "./client/BclClient";
import { ClientOptions } from "./client/types";
import { simpleTonapiProvider } from "./provider/simpleTonapiProvider";
import { encodeOnChainContent } from "./utils/tokenMetadata";
import { BclJetton } from "./wrappers/BclJetton";
import { BclMaster } from "./wrappers/BclMaster";
import { Constants } from "./constants";
import { beginCell } from "@ton/ton";

export type DeployCoinInput = {
    authorAddress: Address;
    name: string;
    description?: string;
    imageUrl?: string;
    symbol?: string;
    referral: Cell | null
};

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
};

type SdkOptionsSimple = {
    /**
     * Instance of TonApi
     */
    tonapiClient: Api<any>;
    clientOptions: Omit<ClientOptions, "tonApi">;
};

export class BclSDK {
    private apiProvider: AnyApiProvider;
    private api: BclClient;

    private constructor(options: SdkOptions) {
        this.apiProvider = options.apiProvider;
        this.api = new BclClient(options.clientOptions);
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
        const master = this.apiProvider.open(BclMaster.createFromAddress(Constants.MASTER_ADDRESS));
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
                tonApi: options.tonapiClient
            },
            apiProvider: simpleTonapiProvider(options.tonapiClient)
        });
    }
}
