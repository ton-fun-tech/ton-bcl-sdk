[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / BclEventBuy

# Type Alias: BclEventBuy

> **BclEventBuy**: `object`

This event occurs when someone bought coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:168](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L168) |
| `referral` | `string` | - | [client/types.ts:173](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L173) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is amount of coins bought for `tonValue` | [client/types.ts:164](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L164) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:172](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L172) |
| `tonValue` | `bigint` | Incoming ton value (without network fees) | [client/types.ts:159](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L159) |
| `trader` | `Address` \| `null` | Address of the user | [client/types.ts:155](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L155) |
| `type` | `"buy"` | - | [client/types.ts:151](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L151) |

## Defined in

[client/types.ts:150](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L150)
