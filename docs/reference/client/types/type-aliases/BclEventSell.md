[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / BclEventSell

# Type Alias: BclEventSell

> **BclEventSell**: `object`

This event occurs when someone sold coins

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `newSupply` | `bigint` | Current supply of the token | [client/types.ts:199](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L199) |
| `referral` | `string` | - | [client/types.ts:204](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L204) |
| `supplyDelta` | `bigint` | How much supply of coin is changed Basically this is the amount of tokens user sold | [client/types.ts:195](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L195) |
| `tonLiqCollected` | `bigint` | Current amount of TON liquidity collected by contract | [client/types.ts:203](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L203) |
| `tonValue` | `bigint` | Amount of TONs user received for sale | [client/types.ts:190](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L190) |
| `trader` | `Address` \| `null` | Address of the user | [client/types.ts:186](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L186) |
| `type` | `"sell"` | - | [client/types.ts:182](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L182) |

## Defined in

[client/types.ts:181](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2c3a03eff23b95310615d175a0897f8d39565c83/src/client/types.ts#L181)
