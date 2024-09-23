[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / BclEventSell

# Type Alias: BclEventSell

> **BclEventSell**: `object`

This event occurs when someone sold coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:193](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L193) |
| `referral` | `string` | - | [client/types.ts:198](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L198) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is the amount of tokens user sold | [client/types.ts:189](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L189) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:197](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L197) |
| `tonValue` | `bigint` | Amount of TONs user received for sale | [client/types.ts:184](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L184) |
| `trader` | `Address` | Address of the user | [client/types.ts:180](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L180) |
| `type` | `"sell"` | - | [client/types.ts:176](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L176) |

## Defined in

[client/types.ts:175](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L175)
