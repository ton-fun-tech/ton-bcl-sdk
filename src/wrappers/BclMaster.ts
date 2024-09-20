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
import {RequiredFields} from "../utils/type";

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

export type MasterData = {
    admin: Address
    deploymentFee: bigint
    coinAdmin: Address
    coinTtl: number
    bclSupply: bigint
    liqSupply: bigint
    feeAddress: Address
    feeNumerator: number
    feeDenominator: number
    tradingCloseFee: bigint
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
        firstBuy?: RequiredFields<BuyOptions, 'buyerAddress'>
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

        let value = Constants.CoinDeploymentFee + Constants.CoinDeploymentGas

        if (firstBuy) {
            value += Constants.CoinBuyGas + firstBuy.tons
        }

        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            bounce: true,
            body: message.endCell()
        });
    }

    /**
     * Get amount of coins that can be bought for given amount of TONs when deploying a coin
     */
    async getCoinsForTons(provider: ContractProvider, tons: bigint): Promise<{ fees: bigint, coins: bigint }> {
        let res = await provider.get('coins_for_tons', [
            {type: 'int', value: tons}
        ]);
        return {
            fees: res.stack.readBigNumber(),
            coins: res.stack.readBigNumber()
        };
    }

    /**
     * Get master parameters
     */
    async getMasterData(provider: ContractProvider): Promise<MasterData> {
        let res = await provider.get('get_factory_data', []);
        return {
            admin: res.stack.readAddress(),
            deploymentFee: res.stack.readBigNumber(),
            coinAdmin: res.stack.readAddress(),
            coinTtl: res.stack.readNumber(),
            bclSupply: res.stack.readBigNumber(),
            liqSupply: res.stack.readBigNumber(),
            feeAddress: res.stack.readAddress(),
            feeNumerator: res.stack.readNumber(),
            feeDenominator: res.stack.readNumber(),
            tradingCloseFee: res.stack.readBigNumber(),
        };
    }
}