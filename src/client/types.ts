import {Api} from "tonapi-sdk-js";
import {Address} from "@ton/core";
import {HttpProviderBase} from "../provider/httpProviderBase";

export type CoinMetadata = {
    name: string; // Name of the coin
    symbol: string; // Symbol of the coin
    decimals: string; // Number of decimals for the coin
    image: string; // URL to the image of the coin
};

export type Coin = {
    /**
     * Internal id of coin in ton.fun system, used for pagination
     */
    id: string;
    /**
     * Address of the coin
     */
    address: Address;
    /**
     * Metadata of the coin
     */
    metadata: CoinMetadata;
    /**
     * Current supply of the coin
     */
    totalSupply: bigint;
    /**
     * BCL supply of the coin
     * This is the max amount of coins that are going to be sold on curve
     */
    bclSupply: bigint;
    /**
     * Amount of tokens be minted for liquidity on STON.fi
     */
    liqSupply: bigint;
    /**
     * Last trade unixtime
     */
    lastTradeDate: number;
    /**
     * Address of the author
     */
    authorAddress: Address;
    /**
     * Is trading phase active
     * false means coin is listed on STON.fi you cant sell/buy coins via BCL contract
     */
    tradingEnabled: boolean;
    /**
     * Referral cell
     */
    referral: string
    /**
     * Amount of TONs collected for STON.fi liquidity
     */
    tonLiqCollected: bigint;
    /**
     * Timestamp of coin creation
     */
    createdAt: number;
    /**
     * Platform fee on trading close in TONs
     */
    tradingCloseFee: bigint
    /**
     * Ston.fi v2 router that this jetton is using
     */
    routerAddress: Address
};

export type GetCoinsResponse = {
    items: Coin[]
    cursor: string | null
}

export type GetEventsResponse = {
    items: Event[]
    cursor: string | null
}

export type ClientOptions = {
    /**
     * Link to BCL API endpoint
     */
    endpoint: string;
    /**
     * Http client Provider
     */
    httpProvider?: HttpProviderBase;
};

export type Event = {
    /**
     * Id of the event, used for pagination
     */
    id: string
    /**
     * Lt of the transaction in which event occurred
     */
    lt: bigint
    /**
     * Unixtime of transaction
     */
    txUtime: number
    /**
     * Hash of transaction of event
     */
    txHash: string;
    /**
     * Query id of message that initiated transaction
     */
    queryId: bigint
    /**
     * Event itself
     */
    event: BclEvent;
    /**
     * Address of coin to which event corresponds
     */
    coinAddress: Address;
};

export type BclEvent =
    | BclEventSendLiq
    | BclEventBuy
    | BclEventSell
    | BclEventDeployment

/**
 * This event means trading phase is over,
 * all coins are sold and liquidity is sent to STON.fi
 */
export type BclEventSendLiq = {
    type: "send_liq";
    /**
     * Amount of TONs sent to pool in STON.fi
     */
    tonLiq: bigint;
    /**
     * Amount of tokens sent to STON.fi
     */
    jettonLiq: bigint;
};

/**
 * This event occurs when someone bought coins
 */
export type BclEventBuy = {
    type: "buy";
    /**
     * Address of the user
     */
    trader: Address | null;
    /**
     * Incoming ton value (without network fees)
     */
    tonValue: bigint;
    /**
     * How much supply of coin is changed
     * Basically this is amount of coins bought for `tonValue`
     */
    supplyDelta: bigint;
    /**
     * Current supply of the token
     */
    newSupply: bigint;
    /**
     * Current amount of TON liquidity collected by contract
     */
    tonLiqCollected: bigint;
    referral: string;
};

/**
 * This event occurs when someone sold coins
 */
export type BclEventSell = {
    type: "sell";
    /**
     * Address of the user
     */
    trader: Address | null;
    /**
     * Amount of TONs user received for sale
     */
    tonValue: bigint;
    /**
     * How much supply of coin is changed
     * Basically this is the amount of tokens user sold
     */
    supplyDelta: bigint;
    /**
     * Current supply of the token
     */
    newSupply: bigint;
    /**
     * Current amount of TON liquidity collected by contract
     */
    tonLiqCollected: bigint;
    referral: string;
};

/**
 * This event occurs when new coin is deployed
 * It contains coin information at the moment of deployment
 */
export type BclEventDeployment = {
    type: 'deployment',
    /**
     * Metadata of the coin
     */
    metadata: CoinMetadata;
    /**
     * Current supply of the coin
     */
    totalSupply: bigint;
    /**
     * BCL supply of the coin
     * This is the max amount of coins that are going to be sold on curve
     */
    bclSupply: bigint;
    /**
     * Amount of tokens be minted for liquidity on STON.fi
     */
    liqSupply: bigint;
    /**
     * Last trade unixtime
     */
    lastTradeDate: number;
    /**
     * Address of the author
     */
    authorAddress: Address | null;
    /**
     * Is trading phase active
     * false means coin is listed on STON.fi you cant sell/buy coins via BCL contract
     */
    tradingEnabled: boolean;
    /**
     * Referral cell
     */
    referral: string
    /**
     * Amount of TONs collected for STON.fi liquidity
     */
    tonLiqCollected: bigint;
    /**
     * Timestamp of coin creation
     */
    createdAt: number;
    /**
     * Platform fee on trading close in TONs
     */
    tradingCloseFee: bigint
    /**
     * Ston.fi v2 router that this jetton is using
     */
    routerAddress: Address
}
