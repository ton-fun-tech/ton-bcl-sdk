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
| `address` | `readonly` | `Address` | [wrappers/BclMaster.ts:89](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/wrappers/BclMaster.ts#L89) |

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
| `coins` | `bigint` | [wrappers/BclMaster.ts:174](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/wrappers/BclMaster.ts#L174) |
| `fees` | `bigint` | [wrappers/BclMaster.ts:174](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/wrappers/BclMaster.ts#L174) |

#### Defined in

[wrappers/BclMaster.ts:174](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/wrappers/BclMaster.ts#L174)

***

### getMasterData()

> **getMasterData**(`provider`): `Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

Get master parameters

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`MasterData`](../type-aliases/MasterData.md)\>

#### Defined in

[wrappers/BclMaster.ts:187](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/wrappers/BclMaster.ts#L187)

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

[wrappers/BclMaster.ts:106](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/wrappers/BclMaster.ts#L106)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclMaster`](BclMaster.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclMaster`](BclMaster.md)

#### Defined in

[wrappers/BclMaster.ts:93](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/2844ad70d72104e3115623db03ff9cc5fbf702ee/src/wrappers/BclMaster.ts#L93)
