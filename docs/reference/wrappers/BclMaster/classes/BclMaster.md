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
| `address` | `readonly` | `Address` | [wrappers/BclMaster.ts:70](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclMaster.ts#L70) |

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
| `coins` | `bigint` | [wrappers/BclMaster.ts:142](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclMaster.ts#L142) |
| `fees` | `bigint` | [wrappers/BclMaster.ts:142](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclMaster.ts#L142) |

#### Defined in

[wrappers/BclMaster.ts:142](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclMaster.ts#L142)

***

### getMasterData()

> **getMasterData**(`provider`): `Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

Get master parameters

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

#### Defined in

[wrappers/BclMaster.ts:155](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclMaster.ts#L155)

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

[wrappers/BclMaster.ts:84](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclMaster.ts#L84)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclMaster`](BclMaster.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclMaster`](BclMaster.md)

#### Defined in

[wrappers/BclMaster.ts:74](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclMaster.ts#L74)
