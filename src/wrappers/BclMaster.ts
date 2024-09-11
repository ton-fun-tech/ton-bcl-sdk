import {
    Address,
    beginCell,
    Cell,
    Contract,
    ContractProvider,
    Sender,
    SendMode,
} from "@ton/core";

import {Constants} from "../constants";
import {crc32str} from "../utils/crc32";
import {encodeOnChainContent} from "../utils/tokenMetadata";
import {BuyOptions} from "./BclJetton";

export type DeployCoinInput = {
    /**
     * Address of the author of the coin
     */
    authorAddress: Address;
    /**
     * Name of the coin
     */
    name: string;
    /**
     * Description of the coin
     */
    description?: string;
    /**
     * Url to the image
     */
    imageUrl?: string;
    /**
     * symbol of the coin
     */
    symbol?: string;
    /**
     * Referral of coin deployment
     */
    referral: Cell | null
    /**
     * Extra metadata for coin
     */
    extraMetadata: { [key: string]: string }

    queryId?: bigint
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
     *
     * firstBuy field allows to make first buy of coins in same transaction as coin deploy
     * Important: when using firstBuy, don't forget to set buyerAddress to the users address, otherwise coins will be lost
     */
    async sendDeployCoin(
        provider: ContractProvider,
        via: Sender,
        input: DeployCoinInput,
        firstBuy?: BuyOptions
    ) {
        let content = encodeOnChainContent({
            name: input.name,
            description: input.description,
            image: input.imageUrl,
            symbol: input.symbol,
            decimals: 9,
            extra: input.extraMetadata
        })

        let message = beginCell()
            .storeUint(crc32str("op::deploy_coin"), 32)
            .storeUint(input.queryId ?? 0, 64)
            .storeRef(content)
            .storeAddress(input.authorAddress)
            .storeRef(input.referral ?? beginCell().endCell())


        let forwardBody: Cell|null = null

        if (firstBuy) {
            let buyMessage = beginCell()
                .storeUint(crc32str("op::buy"), 32)
                .storeUint(firstBuy.queryId ?? 0, 64)
                .storeCoins(firstBuy.minReceive)
                .storeMaybeRef(firstBuy.referral)

            if (firstBuy.buyerAddress) {
                buyMessage.storeAddress(firstBuy.buyerAddress)
            }

            forwardBody = buyMessage.endCell()
        }

        message.storeMaybeRef(forwardBody)

        await provider.internal(via, {
            value: Constants.COIN_DEPLOYMENT_PRICE,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            bounce: true,
            body: message.endCell()
        });
    }
}

// echo 0 |sudo tee /sys/class/leds/PWR/brightness