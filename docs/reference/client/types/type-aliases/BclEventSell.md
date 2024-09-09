[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / BclEventSell

# Type Alias: BclEventSell

> **BclEventSell**: `object`

This event occurs when someone sold coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:189](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L189) |
| `referral` | `string` | - | [client/types.ts:194](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L194) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is the amount of tokens user sold | [client/types.ts:185](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L185) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:193](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L193) |
| `tonValue` | `bigint` | Amount of TONs user received for sale | [client/types.ts:180](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L180) |
| `trader` | `Address` | Address of the user | [client/types.ts:176](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L176) |
| `type` | `"sell"` | - | [client/types.ts:172](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L172) |

## Defined in

[client/types.ts:171](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L171)
