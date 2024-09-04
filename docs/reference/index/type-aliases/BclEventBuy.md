[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [index](../README.md) / BclEventBuy

# Type Alias: BclEventBuy

> **BclEventBuy**: `object`

This event occurs when someone bought coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:160](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/client/types.ts#L160) |
| `referral` | `string` | - | [client/types.ts:165](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/client/types.ts#L165) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is amount of coins bought for `tonValue` | [client/types.ts:156](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/client/types.ts#L156) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:164](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/client/types.ts#L164) |
| `tonValue` | `bigint` | Incoming ton value (without network fees) | [client/types.ts:151](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/client/types.ts#L151) |
| `trader` | `Address` | Address of the user | [client/types.ts:147](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/client/types.ts#L147) |
| `type` | `"buy"` | - | [client/types.ts:143](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/client/types.ts#L143) |

## Defined in

[client/types.ts:142](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/client/types.ts#L142)
