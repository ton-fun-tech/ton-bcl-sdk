[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [index](../README.md) / BclEventSell

# Type Alias: BclEventSell

> **BclEventSell**: `object`

This event occurs when someone sold coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:155](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L155) |
| `referral` | `string` | - | [client/types.ts:160](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L160) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is the amount of tokens user sold | [client/types.ts:151](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L151) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:159](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L159) |
| `tonValue` | `bigint` | Amount of TONs user received for sale | [client/types.ts:146](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L146) |
| `trader` | `Address` | Address of the user | [client/types.ts:142](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L142) |
| `type` | `"sell"` | - | [client/types.ts:138](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L138) |

## Defined in

[client/types.ts:137](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L137)
