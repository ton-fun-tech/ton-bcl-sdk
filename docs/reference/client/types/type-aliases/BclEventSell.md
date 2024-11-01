[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / BclEventSell

# Type Alias: BclEventSell

> **BclEventSell**: `object`

This event occurs when someone sold coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:197](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L197) |
| `referral` | `string` | - | [client/types.ts:202](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L202) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is the amount of tokens user sold | [client/types.ts:193](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L193) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:201](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L201) |
| `tonValue` | `bigint` | Amount of TONs user received for sale | [client/types.ts:188](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L188) |
| `trader` | `Address` \| `null` | Address of the user | [client/types.ts:184](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L184) |
| `type` | `"sell"` | - | [client/types.ts:180](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L180) |

## Defined in

[client/types.ts:179](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L179)
