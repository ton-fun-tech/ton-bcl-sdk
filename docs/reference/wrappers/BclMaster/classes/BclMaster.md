[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [wrappers/BclMaster](../README.md) / BclMaster

# Class: BclMaster

Wrapper for Master BCL contract

## Implements

- `Contract`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `readonly` | `Address` | [wrappers/BclMaster.ts:68](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclMaster.ts#L68) |

## Methods

### getCoinsForTons()

> **getCoinsForTons**(`provider`, `tons`): `Promise`\<`object`\>

Get amount of coins that can be bought for given amount of TONs when deploying a coin

#### Parameters

• **provider**: `ContractProvider`

• **tons**: `bigint`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `coins` | `bigint` | [wrappers/BclMaster.ts:140](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclMaster.ts#L140) |
| `fees` | `bigint` | [wrappers/BclMaster.ts:140](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclMaster.ts#L140) |

#### Defined in

[wrappers/BclMaster.ts:140](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclMaster.ts#L140)

***

### getMasterData()

> **getMasterData**(`provider`): `Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

Get master parameters

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

#### Defined in

[wrappers/BclMaster.ts:153](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclMaster.ts#L153)

***

### sendDeployCoin()

> **sendDeployCoin**(`provider`, `via`, `input`, `firstBuy`?): `Promise`\<`void`\>

Deploys coin

firstBuy field allows to make first buy of coins in same transaction as coin deploy
Important: when using firstBuy, don't forget to set buyerAddress to the users address, otherwise coins will be lost

#### Parameters

• **provider**: `ContractProvider`

• **via**: `Sender`

• **input**: [`DeployCoinInput`](../type-aliases/DeployCoinInput.md)

• **firstBuy?**: `RequiredFields`\<[`BuyOptions`](../../BclJetton/type-aliases/BuyOptions.md), `"buyerAddress"`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclMaster.ts:82](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclMaster.ts#L82)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclMaster`](BclMaster.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclMaster`](BclMaster.md)

#### Defined in

[wrappers/BclMaster.ts:72](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclMaster.ts#L72)
