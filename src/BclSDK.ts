import { Api } from "tonapi-sdk-js";
import { Address, Cell, Contract, OpenedContract, Sender } from "@ton/core";

import { BclClient } from "./client/BclClient";
import { ClientOptions } from "./client/types";
import { simpleTonapiProvider } from "./provider/simpleTonapiProvider";
import {BclJetton, BuyOptions} from "./wrappers/BclJetton";
import {BclMaster, DeployCoinInput, DeployCoinOpts} from "./wrappers/BclMaster";
import { HttpProviderBase } from "./provider/httpProviderBase";
import {RequiredFields} from "./utils/type";

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
     * Deploys coin
     *
     * opts.firstBuy field allows to make first buy of coins in same transaction as coin deploy
     * Important: when using firstBuy, don't forget to set buyerAddress to the users address, otherwise coins will be lost
     */
    async deployCoin(sender: Sender, config: DeployCoinInput, opts?: DeployCoinOpts) {
        const master = this.apiProvider.open(BclMaster.createFromAddress(this.masterAddress));
        await master.sendDeployCoin(sender, config, opts);
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

    /**
     * Returns amount of coins one can get for providing given amount of TONs on the first buy of a coin
     */
    async getFirstCoinsForTons(tons: bigint) {
        const master = this.apiProvider.open(BclMaster.createFromAddress(this.masterAddress));
        return await master.getCoinsForTons(tons);
    }

    /**
     * Returns master contract data
     */
    async getMasterData() {
        const master = this.apiProvider.open(BclMaster.createFromAddress(this.masterAddress));
        return await master.getMasterData();
    }

    open<T extends Contract>(contract: T) {
        return this.apiProvider.open(contract);
    }

    static create(options: SdkOptions) {
        return new BclSDK(options);
    }
}
