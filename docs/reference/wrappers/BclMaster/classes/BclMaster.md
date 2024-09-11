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
| `address` | `readonly` | `Address` | [wrappers/BclMaster.ts:55](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclMaster.ts#L55) |

## Methods

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

[wrappers/BclMaster.ts:69](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclMaster.ts#L69)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclMaster`](BclMaster.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclMaster`](BclMaster.md)

#### Defined in

[wrappers/BclMaster.ts:59](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclMaster.ts#L59)
