[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / Event

# Type Alias: Event

> **Event**: `object`

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `coinAddress` | `Address` | Address of coin to which event corresponds | [client/types.ts:114](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L114) |
| `event` | [`BclEvent`](BclEvent.md) | Event itself | [client/types.ts:110](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L110) |
| `id` | `string` | Id of the event, used for pagination | [client/types.ts:90](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L90) |
| `lt` | `number` | Lt of the transaction in which event occurred | [client/types.ts:94](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L94) |
| `queryId` | `string` | Query id of message that initiated transaction | [client/types.ts:106](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L106) |
| `txHash` | `string` | Hash of transaction of event | [client/types.ts:102](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L102) |
| `txUtime` | `number` | Unixtime of transaction | [client/types.ts:98](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L98) |

## Defined in

[client/types.ts:86](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6b80908ebab30efbdc8b1f59fd42fa681bf4aa/src/client/types.ts#L86)
