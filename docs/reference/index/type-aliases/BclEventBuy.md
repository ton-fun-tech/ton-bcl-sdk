[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [index](../README.md) / BclEventBuy

# Type Alias: BclEventBuy

> **BclEventBuy**: `object`

This event occurs when someone bought coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:126](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L126) |
| `referral` | `string` | - | [client/types.ts:131](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L131) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is amount of coins bought for `tonValue` | [client/types.ts:122](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L122) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:130](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L130) |
| `tonValue` | `bigint` | Incoming ton value (without network fees) | [client/types.ts:117](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L117) |
| `trader` | `Address` | Address of the user | [client/types.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L113) |
| `type` | `"buy"` | - | [client/types.ts:109](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L109) |

## Defined in

[client/types.ts:108](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/client/types.ts#L108)
