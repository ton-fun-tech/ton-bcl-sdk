[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / Event

# Type Alias: Event

> **Event**: `object`

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `coinAddress` | `Address` | Address of coin to which event corresponds | [client/types.ts:122](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L122) |
| `event` | [`BclEvent`](BclEvent.md) | Event itself | [client/types.ts:118](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L118) |
| `id` | `string` | Id of the event, used for pagination | [client/types.ts:98](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L98) |
| `lt` | `bigint` | Lt of the transaction in which event occurred | [client/types.ts:102](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L102) |
| `queryId` | `bigint` | Query id of message that initiated transaction | [client/types.ts:114](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L114) |
| `txHash` | `string` | Hash of transaction of event | [client/types.ts:110](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L110) |
| `txUtime` | `number` | Unixtime of transaction | [client/types.ts:106](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L106) |

## Defined in

[client/types.ts:94](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/client/types.ts#L94)
