[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [wrappers/BclWallet](../README.md) / BclWallet

# Class: BclWallet

Wrapper for user bcl wallet contract

## Implements

- `Contract`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `readonly` | `Address` | [wrappers/BclWallet.ts:18](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclWallet.ts#L18) |

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
| `balance` | `bigint` | [wrappers/BclWallet.ts:33](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclWallet.ts#L33) |
| `owner` | `Address` | [wrappers/BclWallet.ts:34](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclWallet.ts#L34) |

#### Defined in

[wrappers/BclWallet.ts:29](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclWallet.ts#L29)

***

### getTransfersEnabled()

> **getTransfersEnabled**(`provider`): `Promise`\<`boolean`\>

Returns wallet lock status

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[wrappers/BclWallet.ts:81](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclWallet.ts#L81)

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

• **opts.queryId**: `bigint`

• **opts.referral**: `null` \| `Cell`

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclWallet.ts:44](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclWallet.ts#L44)

***

### sendUnlockWallet()

> **sendUnlockWallet**(`provider`, `via`, `opts`): `Promise`\<`void`\>

Attempt to unlock wallet transfers

#### Parameters

• **provider**: `ContractProvider`

• **via**: `Sender`

• **opts**

• **opts.queryId?**: `bigint`

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclWallet.ts:66](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclWallet.ts#L66)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclWallet`](BclWallet.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclWallet`](BclWallet.md)

#### Defined in

[wrappers/BclWallet.ts:22](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclWallet.ts#L22)
