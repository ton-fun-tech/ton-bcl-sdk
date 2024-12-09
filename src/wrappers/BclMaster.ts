import {
    Address,
    beginCell,
    Cell,
    Contract,
    ContractProvider,
    Sender,
    SendMode, TupleBuilder,
} from "@ton/core";

import {Constants} from "../constants";
import {crc32str} from "../utils/crc32";
import {storeTokenOnchainContent} from "../utils/tokenMetadata";
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
     * social links of coin
     */
    socialLinks?: string[]
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

export type DeployCoinOpts = {
    /**
     * firstBuy field allows to make first buy of coins in same transaction as coin deploy
     * Important: when using firstBuy, don't forget to set buyerAddress to the users address, otherwise coins will be lost
     */
    firstBuy?: RequiredFields<BuyOptions, 'buyerAddress'>,
    /**
     * By default, deployment fee is fetched from network, but you can specify it directly using this field
     */
    forceDeploymentFee?: bigint
}

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
    fullPriceTon: bigint
    fullPriceTonFees: bigint
    /**
     * Whether this contract is enabled, if not new coin deployments will fail
     */
    isEnabled: boolean
    seed: bigint
    coinCode: Cell
    walletCode: Cell
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
     * opts.firstBuy field allows to make first buy of coins in same transaction as coin deploy
     * Important: when using firstBuy, don't forget to set buyerAddress to the users address, otherwise coins will be lost
     *
     * Note that deployment fee is fetched from network
     * In order to get rid of extra network call you can specify it directly via `forceDeploymentFee`
     */
    async sendDeployCoin(
        provider: ContractProvider,
        via: Sender,
        input: DeployCoinInput,
        opts?: DeployCoinOpts,
    ) {
        let content = beginCell()
            .store(storeTokenOnchainContent({
                name: input.name,
                description: input.description,
                image: input.imageUrl,
                symbol: input.symbol,
                decimals: '9',
                social_links: JSON.stringify(input.socialLinks),
                ...input.extraMetadata
            }))
            .endCell()

        let message = beginCell()
            .storeUint(crc32str('op::deploy_coin'), 32)
            .storeUint(input.queryId ?? 0, 64)
            .storeRef(content)
            .storeAddress(input.authorAddress)
            .storeRef(input.referral ?? beginCell().endCell())


        // Buy default forward body is simple topup operation
        // this way queryId is forwarded to coin contract
        // and could be used for deployment detection
        let forwardBody: Cell = beginCell()
            .storeUint(0xd372158c, 32)
            .storeUint(input.queryId ?? 0, 64)
            .endCell()

        if (opts?.firstBuy) {
            let buyMessage = beginCell()
                .storeUint(crc32str("op::buy"), 32)
                .storeUint(opts.firstBuy.queryId ?? 0, 64)
                .storeCoins(opts.firstBuy.minReceive)
                .storeMaybeRef(opts.firstBuy.referral)

            if (opts.firstBuy.buyerAddress) {
                buyMessage.storeAddress(opts.firstBuy.buyerAddress)
            }

            forwardBody = buyMessage.endCell()
        }

        message.storeMaybeRef(forwardBody)


        let deploymentFee: bigint

        if (opts?.forceDeploymentFee) {
            deploymentFee = opts.forceDeploymentFee
        } else {
            let data = await this.getMasterData(provider)
            deploymentFee = data.deploymentFee
        }

        let value = deploymentFee + Constants.CoinDeploymentGas

        if (opts?.firstBuy) {
            value += Constants.CoinBuyGas + opts.firstBuy.tons
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
            fullPriceTon: res.stack.readBigNumber(),
            fullPriceTonFees: res.stack.readBigNumber(),
            isEnabled: res.stack.readBoolean(),
            seed: res.stack.readBigNumber(),
            coinCode: res.stack.readCell(),
            walletCode: res.stack.readCell(),
        };
    }
}