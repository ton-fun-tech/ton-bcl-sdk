[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [index](../README.md) / Coin

# Type Alias: Coin

> **Coin**: `object`

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `Address` | Address of the coin | [client/types.ts:16](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L16) |
| `authorAddress` | `Address` | Address of the author | [client/types.ts:41](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L41) |
| `bclSupply` | `bigint` | BCL supply of the coin This is the max amount of coins that are going to be sold on curve | [client/types.ts:29](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L29) |
| `createdAt` | `number` | Timestamp of coin creation | [client/types.ts:50](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L50) |
| `lastTradeDate` | `number` | Last trade unixtime | [client/types.ts:37](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L37) |
| `liqSupply` | `bigint` | Amount of tokens be minted for liquidity on STON.fi | [client/types.ts:33](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L33) |
| `metadata` | [`CoinMetadata`](CoinMetadata.md) | Metadata of the coin | [client/types.ts:20](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L20) |
| `referral` | `string` | - | [client/types.ts:55](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L55) |
| `tonLiqCollected` | `bigint` | Amount of TONs collected for STON.fi liquidity | [client/types.ts:54](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L54) |
| `totalSupply` | `bigint` | Current supply of the coin | [client/types.ts:24](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L24) |
| `tradingEnabled` | `boolean` | Is trading phase active false means coin is listed on STON.fi you cant sell/buy coins via BCL contract | [client/types.ts:46](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L46) |

## Defined in

[client/types.ts:12](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L12)
