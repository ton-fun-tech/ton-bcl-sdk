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
| `address` | `readonly` | `Address` | [wrappers/BclMaster.ts:30](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclMaster.ts#L30) |

## Methods

### sendDeployCoin()

> **sendDeployCoin**(`provider`, `via`, `input`): `Promise`\<`void`\>

Deploys coin

#### Parameters

• **provider**: `ContractProvider`

• **via**: `Sender`

• **input**: [`DeployCoinInput`](../type-aliases/DeployCoinInput.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclMaster.ts:41](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclMaster.ts#L41)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclMaster`](BclMaster.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclMaster`](BclMaster.md)

#### Defined in

[wrappers/BclMaster.ts:34](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/ffd6d588d9dc3d518bbd0964504b3e82bf668687/src/wrappers/BclMaster.ts#L34)
