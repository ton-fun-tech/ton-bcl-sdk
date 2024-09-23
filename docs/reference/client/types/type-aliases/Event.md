[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / Event

# Type Alias: Event

> **Event**: `object`

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `coinAddress` | `Address` | Address of coin to which event corresponds | [client/types.ts:118](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L118) |
| `event` | [`BclEvent`](BclEvent.md) | Event itself | [client/types.ts:114](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L114) |
| `id` | `string` | Id of the event, used for pagination | [client/types.ts:94](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L94) |
| `lt` | `number` | Lt of the transaction in which event occurred | [client/types.ts:98](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L98) |
| `queryId` | `string` | Query id of message that initiated transaction | [client/types.ts:110](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L110) |
| `txHash` | `string` | Hash of transaction of event | [client/types.ts:106](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L106) |
| `txUtime` | `number` | Unixtime of transaction | [client/types.ts:102](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L102) |

## Defined in

[client/types.ts:90](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7877991181ad2a3357235178011544813b695441/src/client/types.ts#L90)
