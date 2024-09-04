import { Address } from "@ton/core";

import { BclEvent, Coin } from "./types";

export type AnyObject = Record<string, any>;

export function normalizeCoin(coin: AnyObject): Coin {
    return {
        id: coin.id,
        address: Address.parse(coin.address),
        metadata: coin.metadata,
        totalSupply: BigInt(coin.totalSupply),
        bclSupply: BigInt(coin.bclSupply),
        liqSupply: BigInt(coin.liqSupply),
        lastTradeDate: coin.lastTradeDate,
        authorAddress: Address.parse(coin.authorAddress),
        tradingEnabled: coin.tradingEnabled,
        tonLiqCollected: BigInt(coin.tonLiqCollected),
        referral: coin.referral,
        createdAt: coin.createdAt
    };
}

export function normalizeCoinEvent(event: AnyObject): BclEvent {
    if (event.type === "buy") {
        return {
            type: "buy",
            trader: Address.parse(event.trader),
            tonValue: BigInt(event.tonValue),
            supplyDelta: BigInt(event.supplyDelta),
            newSupply: BigInt(event.newSupply),
            tonLiqCollected: BigInt(event.tonLiqCollected),
            referral: event.referral,
        }
    } else if (event.type === "sell") {
        return {
            type: "sell",
            trader: Address.parse(event.trader),
            tonValue: BigInt(event.tonValue),
            supplyDelta: BigInt(event.supplyDelta),
            newSupply: BigInt(event.newSupply),
            tonLiqCollected: BigInt(event.tonLiqCollected),
            referral: event.referral,
        };
    } else if (event.type === "sendLiq") {
        return {
            type: "send_liq",
            tonLiq: BigInt(event.tonLiq),
            jettonLiq: BigInt(event.jettonLiq)
        }
    } else if (event.type === "deployment") {
        return {
            type: "deployment",
            metadata: event.metadata,
            totalSupply: BigInt(event.totalSupply),
            bclSupply: BigInt(event.bclSupply),
            liqSupply: BigInt(event.liqSupply),
            lastTradeDate: event.lastTradeDate,
            authorAddress: Address.parse(event.authorAddress),
            tradingEnabled: event.tradingEnabled,
            tonLiqCollected: BigInt(event.tonLiqCollected),
            referral: event.referral,
            createdAt: event.createdAt
        }
    }

    throw new Error("Unknown BCL event: " + JSON.stringify(event));
}
