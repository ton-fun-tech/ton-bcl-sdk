import { Api } from "tonapi-sdk-js";
import { Address } from "@ton/core";

export type CoinMetadata = {
    name: string; // Name of the coin
    symbol: string; // Symbol of the coin
    decimals: string; // Number of decimals for the coin
    image: string; // URL to the image of the coin
};

export type Coin = {
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
     * Timestamp of coin creation
     */
    createdAt: number;
    /**
     * Amount of TONs collected for STON.fi liquidity
     */
    tonLiqCollected: bigint;
    referral: string
};

export type ClientOptions = {
    /**
     * Link to BCL API endpoint
     */
    endpoint: string;
    /**
     * Instance of TonApi client
     */
    tonApi: Api<any>;
    /**
     * Address of the BCL master contract
     */
    masterAddress: Address;
};

export type Event = {
    /**
     * Unixtime of event
     */
    date: number;
    /**
     * Hash of TX of event
     */
    txHash: string;
    /**
     * BCL Event
     */
    event: BclEvent;
};

export type BclEvent = BclEventSendLiq | BclEventBuy | BclEventSell;

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
    trader: Address;
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
    trader: Address;
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
