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
| `address` | `readonly` | `Address` | [wrappers/BclMaster.ts:93](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L93) |

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
| `coins` | `bigint` | [wrappers/BclMaster.ts:187](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L187) |
| `fees` | `bigint` | [wrappers/BclMaster.ts:187](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L187) |

#### Defined in

[wrappers/BclMaster.ts:187](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L187)

***

### getMasterData()

> **getMasterData**(`provider`): `Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

Get master parameters

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

#### Defined in

[wrappers/BclMaster.ts:200](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L200)

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

[wrappers/BclMaster.ts:110](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L110)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclMaster`](BclMaster.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclMaster`](BclMaster.md)

#### Defined in

[wrappers/BclMaster.ts:97](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L97)
