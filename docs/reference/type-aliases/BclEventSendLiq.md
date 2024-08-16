[**ton-bcl-sdk**](../README.md) • **Docs**

***

[ton-bcl-sdk](../globals.md) / BclEventSendLiq

# Type Alias: BclEventSendLiq

> **BclEventSendLiq**: `object`

This event means trading phase is over,
all coins are sold and liquidity is sent to STON.fi

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `jettonLiq` | `bigint` | Amount of tokens sent to STON.fi | [client/types.ts:98](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/client/types.ts#L98) |
| `tonLiq` | `bigint` | Amount of TONs sent to pool in STON.fi | [client/types.ts:94](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/client/types.ts#L94) |
| `type` | `"send_liq"` | - | [client/types.ts:90](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/client/types.ts#L90) |

## Defined in

[client/types.ts:89](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/client/types.ts#L89)
