import {toNano} from "@ton/core";

export const Constants = {
    COIN_DEPLOYMENT_PRICE: toNano("0.1"),
    BUY_OPERATION_NETWORK_FEE: toNano("0.05"),
    SELL_OPERATION_NETWORK_FEE: toNano("0.06"),
    WALLET_UNLOCK_OPERATION_NETWORK_FEE: toNano("0.05")
};
