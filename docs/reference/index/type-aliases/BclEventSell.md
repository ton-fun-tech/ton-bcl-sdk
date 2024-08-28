[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [index](../README.md) / BclEventSell

# Type Alias: BclEventSell

> **BclEventSell**: `object`

This event occurs when someone sold coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:160](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L160) |
| `referral` | `string` | - | [client/types.ts:165](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L165) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is the amount of tokens user sold | [client/types.ts:156](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L156) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:164](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L164) |
| `tonValue` | `bigint` | Amount of TONs user received for sale | [client/types.ts:151](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L151) |
| `trader` | `Address` | Address of the user | [client/types.ts:147](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L147) |
| `type` | `"sell"` | - | [client/types.ts:143](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L143) |

## Defined in

[client/types.ts:142](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L142)
