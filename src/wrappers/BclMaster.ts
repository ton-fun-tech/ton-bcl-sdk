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
import {encodeOnChainContent} from "../utils/tokenMetadata";

export type DeployCoinInput = {
    authorAddress: Address;
    name: string;
    description?: string;
    imageUrl?: string;
    symbol?: string;
    referral: Cell | null
};

/**
 * Wrapper for Master BCL contract
 */
export class BclMaster implements Contract {
    private constructor(
        readonly address: Address,
    ) {
    }

    static createFromAddress(address: Address) {
        return new BclMaster(address);
    }

    /**
     * Deploys coin
     */
    async sendDeployCoin(
        provider: ContractProvider,
        via: Sender,
        input: DeployCoinInput,
        queryId?: bigint
    ) {
        let content = encodeOnChainContent({
            name: input.name,
            description: input.description,
            image: input.imageUrl,
            symbol: input.symbol,
            decimals: 9
        })

        await provider.internal(via, {
            value: Constants.COIN_DEPLOYMENT_PRICE,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            bounce: true,
            body: beginCell()
                .storeUint(crc32str("op::deploy_coin"), 32)
                .storeUint(queryId ?? 0n, 64)
                .storeRef(content)
                .storeAddress(input.authorAddress)
                .storeRef(input.referral ?? beginCell().endCell())
                .endCell()
        });
    }
}
