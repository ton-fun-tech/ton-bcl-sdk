[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / Coin

# Type Alias: Coin

> **Coin**: `object`

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `Address` | Address of the coin | [client/types.ts:20](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L20) |
| `authorAddress` | `Address` | Address of the author | [client/types.ts:45](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L45) |
| `bclSupply` | `bigint` | BCL supply of the coin This is the max amount of coins that are going to be sold on curve | [client/types.ts:33](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L33) |
| `createdAt` | `number` | Timestamp of coin creation | [client/types.ts:62](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L62) |
| `id` | `string` | Internal id of coin in ton.fun system, used for pagination | [client/types.ts:16](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L16) |
| `lastTradeDate` | `number` | Last trade unixtime | [client/types.ts:41](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L41) |
| `liqSupply` | `bigint` | Amount of tokens be minted for liquidity on STON.fi | [client/types.ts:37](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L37) |
| `metadata` | [`CoinMetadata`](CoinMetadata.md) | Metadata of the coin | [client/types.ts:24](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L24) |
| `referral` | `string` | Referral cell | [client/types.ts:54](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L54) |
| `routerAddress` | `Address` | Ston.fi v2 router that this jetton is using | [client/types.ts:70](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L70) |
| `tonLiqCollected` | `bigint` | Amount of TONs collected for STON.fi liquidity | [client/types.ts:58](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L58) |
| `totalSupply` | `bigint` | Current supply of the coin | [client/types.ts:28](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L28) |
| `tradingCloseFee` | `bigint` | Platform fee on trading close in TONs | [client/types.ts:66](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L66) |
| `tradingEnabled` | `boolean` | Is trading phase active false means coin is listed on STON.fi you cant sell/buy coins via BCL contract | [client/types.ts:50](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L50) |

## Defined in

[client/types.ts:12](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/efd7a3c444985cb69bafe2086033980ed29e3462/src/client/types.ts#L12)
