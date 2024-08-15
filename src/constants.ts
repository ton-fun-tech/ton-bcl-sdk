import { Address, Cell, toNano } from "@ton/core";

export const Constants = {
    // Address of BCL master contract
    MASTER_ADDRESS: Address.parse('EQD32rpeEHWWEV0I4QQSPy6sK-m6jalgja_P7vYQZSkAd3JG'),

    COIN_DEPLOYMENT_PRICE: toNano("0.1"),
    BUY_OPERATION_NETWORK_FEE: toNano("0.05"),
    SELL_OPERATION_NETWORK_FEE: toNano("0.06"),
    WALLET_UNLOCK_OPERATION_NETWORK_FEE: toNano("0.05")
};
