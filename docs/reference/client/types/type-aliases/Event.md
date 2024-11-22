[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / Event

# Type Alias: Event

> **Event**: `object`

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `coinAddress` | `Address` | Address of coin to which event corresponds | [client/types.ts:124](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/94d6b89dd4da487f7f59e76bb49397e251522dcd/src/client/types.ts#L124) |
| `event` | [`BclEvent`](BclEvent.md) | Event itself | [client/types.ts:120](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/94d6b89dd4da487f7f59e76bb49397e251522dcd/src/client/types.ts#L120) |
| `id` | `string` | Id of the event, used for pagination | [client/types.ts:100](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/94d6b89dd4da487f7f59e76bb49397e251522dcd/src/client/types.ts#L100) |
| `lt` | `bigint` | Lt of the transaction in which event occurred | [client/types.ts:104](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/94d6b89dd4da487f7f59e76bb49397e251522dcd/src/client/types.ts#L104) |
| `queryId` | `bigint` | Query id of message that initiated transaction | [client/types.ts:116](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/94d6b89dd4da487f7f59e76bb49397e251522dcd/src/client/types.ts#L116) |
| `txHash` | `string` | Hash of transaction of event | [client/types.ts:112](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/94d6b89dd4da487f7f59e76bb49397e251522dcd/src/client/types.ts#L112) |
| `txUtime` | `number` | Unixtime of transaction | [client/types.ts:108](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/94d6b89dd4da487f7f59e76bb49397e251522dcd/src/client/types.ts#L108) |

## Defined in

[client/types.ts:96](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/94d6b89dd4da487f7f59e76bb49397e251522dcd/src/client/types.ts#L96)
