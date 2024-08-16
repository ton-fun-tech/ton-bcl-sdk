[**ton-bcl-sdk**](/README.md) • **Docs**

***

[ton-bcl-sdk](/globals.md) / BclEventSell

# Type Alias: BclEventSell

> **BclEventSell**: `object`

This event occurs when someone sold coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:151](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/697168e6206aa7f76fe9d3d9c0b1a6a659d39868/src/client/types.ts#L151) |
| `referral` | `string` | - | [client/types.ts:156](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/697168e6206aa7f76fe9d3d9c0b1a6a659d39868/src/client/types.ts#L156) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is the amount of tokens user sold | [client/types.ts:147](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/697168e6206aa7f76fe9d3d9c0b1a6a659d39868/src/client/types.ts#L147) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:155](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/697168e6206aa7f76fe9d3d9c0b1a6a659d39868/src/client/types.ts#L155) |
| `tonValue` | `bigint` | Amount of TONs user received for sale | [client/types.ts:142](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/697168e6206aa7f76fe9d3d9c0b1a6a659d39868/src/client/types.ts#L142) |
| `trader` | `Address` | Address of the user | [client/types.ts:138](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/697168e6206aa7f76fe9d3d9c0b1a6a659d39868/src/client/types.ts#L138) |
| `type` | `"sell"` | - | [client/types.ts:134](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/697168e6206aa7f76fe9d3d9c0b1a6a659d39868/src/client/types.ts#L134) |

## Defined in

[client/types.ts:133](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/697168e6206aa7f76fe9d3d9c0b1a6a659d39868/src/client/types.ts#L133)
