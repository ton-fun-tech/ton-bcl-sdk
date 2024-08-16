[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../modules.md) / [client/types](../README.md) / Coin

# Type Alias: Coin

> **Coin**: `object`

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `Address` | Address of the coin | [client/types.ts:15](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L15) |
| `authorAddress` | `Address` | Address of the author | [client/types.ts:40](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L40) |
| `bclSupply` | `bigint` | BCL supply of the coin This is the max amount of coins that are going to be sold on curve | [client/types.ts:28](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L28) |
| `createdAt` | `number` | Timestamp of coin creation | [client/types.ts:49](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L49) |
| `lastTradeDate` | `number` | Last trade unixtime | [client/types.ts:36](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L36) |
| `liqSupply` | `bigint` | Amount of tokens be minted for liquidity on STON.fi | [client/types.ts:32](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L32) |
| `metadata` | [`CoinMetadata`](CoinMetadata.md) | Metadata of the coin | [client/types.ts:19](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L19) |
| `referral` | `string` | - | [client/types.ts:54](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L54) |
| `tonLiqCollected` | `bigint` | Amount of TONs collected for STON.fi liquidity | [client/types.ts:53](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L53) |
| `totalSupply` | `bigint` | Current supply of the coin | [client/types.ts:23](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L23) |
| `tradingEnabled` | `boolean` | Is trading phase active false means coin is listed on STON.fi you cant sell/buy coins via BCL contract | [client/types.ts:45](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L45) |

## Defined in

[client/types.ts:11](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/types.ts#L11)
