[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / Coin

# Type Alias: Coin

> **Coin**: `object`

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `Address` | Address of the coin | [client/types.ts:22](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L22) |
| `authorAddress` | `Address` | Address of the author | [client/types.ts:47](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L47) |
| `bclSupply` | `bigint` | BCL supply of the coin This is the max amount of coins that are going to be sold on curve | [client/types.ts:35](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L35) |
| `createdAt` | `number` | Timestamp of coin creation | [client/types.ts:64](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L64) |
| `id` | `string` | Internal id of coin in ton.fun system, used for pagination | [client/types.ts:18](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L18) |
| `lastTradeDate` | `number` | Last trade unixtime | [client/types.ts:43](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L43) |
| `liqSupply` | `bigint` | Amount of tokens be minted for liquidity on STON.fi | [client/types.ts:39](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L39) |
| `metadata` | [`CoinMetadata`](CoinMetadata.md) | Metadata of the coin | [client/types.ts:26](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L26) |
| `referral` | `string` | Referral cell | [client/types.ts:56](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L56) |
| `routerAddress` | `Address` | Ston.fi v2 router that this jetton is using | [client/types.ts:72](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L72) |
| `tonLiqCollected` | `bigint` | Amount of TONs collected for STON.fi liquidity | [client/types.ts:60](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L60) |
| `totalSupply` | `bigint` | Current supply of the coin | [client/types.ts:30](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L30) |
| `tradingCloseFee` | `bigint` | Platform fee on trading close in TONs | [client/types.ts:68](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L68) |
| `tradingEnabled` | `boolean` | Is trading phase active false means coin is listed on STON.fi you cant sell/buy coins via BCL contract | [client/types.ts:52](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L52) |

## Defined in

[client/types.ts:14](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/client/types.ts#L14)
