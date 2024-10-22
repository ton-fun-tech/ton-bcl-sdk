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
| `address` | `readonly` | `Address` | [wrappers/BclMaster.ts:86](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclMaster.ts#L86) |

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
| `coins` | `bigint` | [wrappers/BclMaster.ts:171](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclMaster.ts#L171) |
| `fees` | `bigint` | [wrappers/BclMaster.ts:171](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclMaster.ts#L171) |

#### Defined in

[wrappers/BclMaster.ts:171](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclMaster.ts#L171)

***

### getMasterData()

> **getMasterData**(`provider`): `Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

Get master parameters

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

#### Defined in

[wrappers/BclMaster.ts:184](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclMaster.ts#L184)

***

### sendDeployCoin()

> **sendDeployCoin**(`provider`, `via`, `input`, `opts`?): `Promise`\<`void`\>

Deploys coin

opts.firstBuy field allows to make first buy of coins in same transaction as coin deploy
Important: when using firstBuy, don't forget to set buyerAddress to the users address, otherwise coins will be lost

Note that deployment fee is fetched from network
In order to get rid of extra network call you can specify it directly via `forceDeploymentFee`

#### Parameters

• **provider**: `ContractProvider`

• **via**: `Sender`

• **input**: [`DeployCoinInput`](../type-aliases/DeployCoinInput.md)

• **opts?**: [`DeployCoinOpts`](../type-aliases/DeployCoinOpts.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclMaster.ts:103](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclMaster.ts#L103)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclMaster`](BclMaster.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclMaster`](BclMaster.md)

#### Defined in

[wrappers/BclMaster.ts:90](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclMaster.ts#L90)
