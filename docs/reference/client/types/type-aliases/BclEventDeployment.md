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
| `authorAddress` | `Address` | Address of the author | [client/types.ts:235](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L235) |
| `bclSupply` | `bigint` | BCL supply of the coin This is the max amount of coins that are going to be sold on curve | [client/types.ts:223](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L223) |
| `createdAt` | `number` | Timestamp of coin creation | [client/types.ts:252](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L252) |
| `lastTradeDate` | `number` | Last trade unixtime | [client/types.ts:231](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L231) |
| `liqSupply` | `bigint` | Amount of tokens be minted for liquidity on STON.fi | [client/types.ts:227](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L227) |
| `metadata` | [`CoinMetadata`](CoinMetadata.md) | Metadata of the coin | [client/types.ts:214](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L214) |
| `referral` | `string` | Referral cell | [client/types.ts:244](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L244) |
| `routerAddress` | `Address` | Ston.fi v2 router that this jetton is using | [client/types.ts:260](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L260) |
| `tonLiqCollected` | `bigint` | Amount of TONs collected for STON.fi liquidity | [client/types.ts:248](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L248) |
| `totalSupply` | `bigint` | Current supply of the coin | [client/types.ts:218](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L218) |
| `tradingCloseFee` | `bigint` | Platform fee on trading close in TONs | [client/types.ts:256](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L256) |
| `tradingEnabled` | `boolean` | Is trading phase active false means coin is listed on STON.fi you cant sell/buy coins via BCL contract | [client/types.ts:240](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L240) |
| `type` | `"deployment"` | - | [client/types.ts:210](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L210) |

## Defined in

[client/types.ts:209](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/client/types.ts#L209)
