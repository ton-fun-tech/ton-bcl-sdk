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
| `address` | `readonly` | `Address` | [wrappers/BclMaster.ts:54](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ef763c160920e1ad75340ad15c4b7021fb9ec8c0/src/wrappers/BclMaster.ts#L54) |

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

• **firstBuy?**: [`BuyOptions`](../../BclJetton/type-aliases/BuyOptions.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclMaster.ts:68](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ef763c160920e1ad75340ad15c4b7021fb9ec8c0/src/wrappers/BclMaster.ts#L68)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclMaster`](BclMaster.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclMaster`](BclMaster.md)

#### Defined in

[wrappers/BclMaster.ts:58](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ef763c160920e1ad75340ad15c4b7021fb9ec8c0/src/wrappers/BclMaster.ts#L58)
