[**ton-bcl-sdk**](../README.md) • **Docs**

***

[ton-bcl-sdk](../globals.md) / BclEventBuy

# Type Alias: BclEventBuy

> **BclEventBuy**: `object`

This event occurs when someone bought coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:122](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/13871a60088d7e9186be67107dbe2dc597dc6855/src/client/types.ts#L122) |
| `referral` | `string` | - | [client/types.ts:127](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/13871a60088d7e9186be67107dbe2dc597dc6855/src/client/types.ts#L127) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is amount of coins bought for `tonValue` | [client/types.ts:118](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/13871a60088d7e9186be67107dbe2dc597dc6855/src/client/types.ts#L118) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:126](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/13871a60088d7e9186be67107dbe2dc597dc6855/src/client/types.ts#L126) |
| `tonValue` | `bigint` | Incoming ton value (without network fees) | [client/types.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/13871a60088d7e9186be67107dbe2dc597dc6855/src/client/types.ts#L113) |
| `trader` | `Address` | Address of the user | [client/types.ts:109](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/13871a60088d7e9186be67107dbe2dc597dc6855/src/client/types.ts#L109) |
| `type` | `"buy"` | - | [client/types.ts:105](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/13871a60088d7e9186be67107dbe2dc597dc6855/src/client/types.ts#L105) |

## Defined in

[client/types.ts:104](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/13871a60088d7e9186be67107dbe2dc597dc6855/src/client/types.ts#L104)
