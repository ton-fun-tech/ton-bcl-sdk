import {toNano} from "@ton/core";

export const Constants = {
    /**
     * Service fee on coin deployment
     */
    CoinDeploymentFee: toNano('0'),

    /**
     * Amount of gas consumed for coin deployment
     */
    CoinDeploymentGas: toNano('0.05'),

    /**
     * Amount of gas consumed on buy operation
     */
    CoinBuyGas: toNano('0.05'),

    /**
     * Amount of gas consumed on sell operation
     */
    CoinSellGas: toNano('0.06'),

    /**
     * Amount of gas consumed for wallet unlock operation
     */
    WalletUnlockGas: toNano('0.05'),
};
