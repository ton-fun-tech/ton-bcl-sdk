[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [wrappers/BclMaster](../README.md) / DeployCoinOpts

# Type Alias: DeployCoinOpts

> **DeployCoinOpts**: `object`

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `firstBuy` | `RequiredFields`\<[`BuyOptions`](../../BclJetton/type-aliases/BuyOptions.md), `"buyerAddress"`\> | firstBuy field allows to make first buy of coins in same transaction as coin deploy Important: when using firstBuy, don't forget to set buyerAddress to the users address, otherwise coins will be lost | [wrappers/BclMaster.ts:59](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L59) |
| `forceDeploymentFee` | `bigint` | By default, deployment fee is fetched from network, but you can specify it directly using this field | [wrappers/BclMaster.ts:63](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L63) |

## Defined in

[wrappers/BclMaster.ts:54](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/64dd7b20da5f56f7ea4c5b48591cd0c0026f6ac1/src/wrappers/BclMaster.ts#L54)
