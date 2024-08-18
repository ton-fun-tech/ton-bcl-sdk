import {
    Address,
    beginCell,
    Cell,
    Contract,
    ContractProvider,
    Sender,
    SendMode,
} from "@ton/core";

import { Constants } from "../constants";
import { crc32str } from "../utils/crc32";

/**
 * Wrapper for user bcl wallet contract
 */
export class BclWallet implements Contract {
    private constructor(
        readonly address: Address,
    ) {
    }

    static createFromAddress(address: Address) {
        return new BclWallet(address);
    }

    /**
     * Returns standard jetton wallet data
     */
    async getData(provider: ContractProvider) {
        const res = await provider.get("get_wallet_data", []);

        return {
            balance: res.stack.readBigNumber(),
            owner: res.stack.readAddress(),
        };
    }

    /**
     * Sell operation
     *
     * opts.amount - amount of tokens to sell
     * opts.minReceive - min amount of TONs expected to receive
     */
    async sendSellCoins(
        provider: ContractProvider,
        via: Sender,
        opts: { amount: bigint; minReceive: bigint; referral: Cell | null },
    ) {
        await provider.internal(via, {
            value: Constants.SELL_OPERATION_NETWORK_FEE,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            bounce: true,
            body: beginCell()
                .storeUint(crc32str("op::sell"), 32)
                .storeUint(0, 64)
                .storeCoins(opts.amount)
                .storeCoins(opts.minReceive)
                .storeMaybeRef(opts.referral)
                .endCell(),
        });
    }

    /**
     * Attempt to unlock wallet transfers
     */
    async sendUnlockWallet(provider: ContractProvider, via: Sender) {
        await provider.internal(via, {
            value: Constants.WALLET_UNLOCK_OPERATION_NETWORK_FEE,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            bounce: true,
            body: beginCell()
                .storeUint(crc32str('op::unlock_wallet'), 32)
                .storeUint(0, 64)
                .endCell()
        })
    }

    /**
     * Returns wallet lock status
     */
    async getTransfersEnabled(provider: ContractProvider) {
        let res = await provider.get('get_transfers_enabled', [])
        return res.stack.readBoolean()
    }
}
