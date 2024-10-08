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
| `authorAddress` | `Address` | Address of the author | [client/types.ts:231](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L231) |
| `bclSupply` | `bigint` | BCL supply of the coin This is the max amount of coins that are going to be sold on curve | [client/types.ts:219](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L219) |
| `createdAt` | `number` | Timestamp of coin creation | [client/types.ts:248](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L248) |
| `lastTradeDate` | `number` | Last trade unixtime | [client/types.ts:227](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L227) |
| `liqSupply` | `bigint` | Amount of tokens be minted for liquidity on STON.fi | [client/types.ts:223](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L223) |
| `metadata` | [`CoinMetadata`](CoinMetadata.md) | Metadata of the coin | [client/types.ts:210](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L210) |
| `referral` | `string` | Referral cell | [client/types.ts:240](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L240) |
| `tonLiqCollected` | `bigint` | Amount of TONs collected for STON.fi liquidity | [client/types.ts:244](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L244) |
| `totalSupply` | `bigint` | Current supply of the coin | [client/types.ts:214](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L214) |
| `tradingCloseFee` | `bigint` | Platform fee on trading close in TONs | [client/types.ts:252](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L252) |
| `tradingEnabled` | `boolean` | Is trading phase active false means coin is listed on STON.fi you cant sell/buy coins via BCL contract | [client/types.ts:236](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L236) |
| `type` | `"deployment"` | - | [client/types.ts:206](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L206) |

## Defined in

[client/types.ts:205](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/types.ts#L205)
