[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / BclEventBuy

# Type Alias: BclEventBuy

> **BclEventBuy**: `object`

This event occurs when someone bought coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:170](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L170) |
| `referral` | `string` | - | [client/types.ts:175](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L175) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is amount of coins bought for `tonValue` | [client/types.ts:166](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L166) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:174](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L174) |
| `tonValue` | `bigint` | Incoming ton value (without network fees) | [client/types.ts:161](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L161) |
| `trader` | `Address` \| `null` | Address of the user | [client/types.ts:157](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L157) |
| `type` | `"buy"` | - | [client/types.ts:153](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L153) |

## Defined in

[client/types.ts:152](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L152)
