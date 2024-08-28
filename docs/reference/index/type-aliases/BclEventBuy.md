[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [index](../README.md) / BclEventBuy

# Type Alias: BclEventBuy

> **BclEventBuy**: `object`

This event occurs when someone bought coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:131](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L131) |
| `referral` | `string` | - | [client/types.ts:136](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L136) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is amount of coins bought for `tonValue` | [client/types.ts:127](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L127) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:135](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L135) |
| `tonValue` | `bigint` | Incoming ton value (without network fees) | [client/types.ts:122](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L122) |
| `trader` | `Address` | Address of the user | [client/types.ts:118](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L118) |
| `type` | `"buy"` | - | [client/types.ts:114](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L114) |

## Defined in

[client/types.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/client/types.ts#L113)
