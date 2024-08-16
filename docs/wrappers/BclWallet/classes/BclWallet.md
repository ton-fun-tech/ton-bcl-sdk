[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../modules.md) / [wrappers/BclWallet](../README.md) / BclWallet

# Class: BclWallet

Wrapper for user bcl wallet contract

## Implements

- `Contract`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `readonly` | `Address` | [wrappers/BclWallet.ts:19](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclWallet.ts#L19) |

## Methods

### getData()

> **getData**(`provider`): `Promise`\<`object`\>

Returns standard jetton wallet data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `balance` | `bigint` | [wrappers/BclWallet.ts:34](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclWallet.ts#L34) |
| `owner` | `Address` | [wrappers/BclWallet.ts:35](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclWallet.ts#L35) |

#### Defined in

[wrappers/BclWallet.ts:30](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclWallet.ts#L30)

***

### getTransfersEnabled()

> **getTransfersEnabled**(`provider`): `Promise`\<`boolean`\>

Returns wallet lock status

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[wrappers/BclWallet.ts:82](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclWallet.ts#L82)

***

### sendSellCoins()

> **sendSellCoins**(`provider`, `via`, `opts`): `Promise`\<`void`\>

Sell operation

opts.amount - amount of tokens to sell
opts.minReceive - min amount of TONs expected to receive

#### Parameters

• **provider**: `ContractProvider`

• **via**: `Sender`

• **opts**

• **opts.amount**: `bigint`

• **opts.minReceive**: `bigint`

• **opts.refId**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclWallet.ts:45](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclWallet.ts#L45)

***

### sendUnlockWallet()

> **sendUnlockWallet**(`provider`, `via`): `Promise`\<`void`\>

Attempt to unlock wallet transfers

#### Parameters

• **provider**: `ContractProvider`

• **via**: `Sender`

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclWallet.ts:67](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclWallet.ts#L67)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclWallet`](BclWallet.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclWallet`](BclWallet.md)

#### Defined in

[wrappers/BclWallet.ts:23](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclWallet.ts#L23)
