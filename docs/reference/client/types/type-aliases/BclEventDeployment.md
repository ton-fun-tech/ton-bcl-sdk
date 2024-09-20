[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / BclEventDeployment

# Type Alias: BclEventDeployment

> **BclEventDeployment**: `object`

This event occurs when new coin is deployed
It contains coin information at the moment of deployment

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `authorAddress` | `Address` | Address of the author | [client/types.ts:227](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L227) |
| `bclSupply` | `bigint` | BCL supply of the coin This is the max amount of coins that are going to be sold on curve | [client/types.ts:215](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L215) |
| `createdAt` | `number` | Timestamp of coin creation | [client/types.ts:244](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L244) |
| `lastTradeDate` | `number` | Last trade unixtime | [client/types.ts:223](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L223) |
| `liqSupply` | `bigint` | Amount of tokens be minted for liquidity on STON.fi | [client/types.ts:219](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L219) |
| `metadata` | [`CoinMetadata`](CoinMetadata.md) | Metadata of the coin | [client/types.ts:206](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L206) |
| `referral` | `string` | Referral cell | [client/types.ts:236](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L236) |
| `tonLiqCollected` | `bigint` | Amount of TONs collected for STON.fi liquidity | [client/types.ts:240](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L240) |
| `totalSupply` | `bigint` | Current supply of the coin | [client/types.ts:210](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L210) |
| `tradingEnabled` | `boolean` | Is trading phase active false means coin is listed on STON.fi you cant sell/buy coins via BCL contract | [client/types.ts:232](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L232) |
| `type` | `"deployment"` | - | [client/types.ts:202](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L202) |

## Defined in

[client/types.ts:201](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/client/types.ts#L201)
