[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [wrappers/BclJetton](../README.md) / BclJetton

# Class: BclJetton

Wrapper for BCL contract

## Implements

- `Contract`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `readonly` | `Address` | [wrappers/BclJetton.ts:237](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L237) |

## Methods

### getBclData()

> **getBclData**(`provider`): `Promise`\<[`BclData`](../type-aliases/BclData.md)\>

Returns BCL specific data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`BclData`](../type-aliases/BclData.md)\>

#### Defined in

[wrappers/BclJetton.ts:351](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L351)

***

### getCoinPrice()

> **getCoinPrice**(`provider`): `Promise`\<`bigint`\>

Returns current price of token

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[wrappers/BclJetton.ts:273](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L273)

***

### getCoinsForTons()

> **getCoinsForTons**(`provider`, `tons`): `Promise`\<`object`\>

Returns how many coins one can get for given amount of TONs
Calculations does not include TONs for gas. You should deduct Constants.CoinBuyGas from tons if you need to include gas fees.

fees - amount of platform fees in TONs
coins - amount of coins buyer would receive

#### Parameters

• **provider**: `ContractProvider`

• **tons**: `bigint`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `coins` | `bigint` | [wrappers/BclJetton.ts:288](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L288) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:288](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L288) |

#### Defined in

[wrappers/BclJetton.ts:285](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L285)

***

### getData()

> **getData**(`provider`): `Promise`\<`object`\>

Returns standard Jetton data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `adminAddress` | `null` \| `Address` | [wrappers/BclJetton.ts:253](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L253) |
| `jettonContent` | `Cell` | [wrappers/BclJetton.ts:254](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L254) |
| `jettonWalletCode` | `Cell` | [wrappers/BclJetton.ts:255](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L255) |
| `mintable` | `boolean` | [wrappers/BclJetton.ts:252](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L252) |
| `totalSupply` | `bigint` | [wrappers/BclJetton.ts:251](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L251) |

#### Defined in

[wrappers/BclJetton.ts:248](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L248)

***

### getTonsForCoins()

> **getTonsForCoins**(`provider`, `coins`): `Promise`\<`object`\>

Returns how many TONs one can get for given amount of coins

fees - amount of platform fees in TONs
tons - amount of TONs user seller would receive

#### Parameters

• **provider**: `ContractProvider`

• **coins**: `bigint`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `fees` | `bigint` | [wrappers/BclJetton.ts:307](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L307) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:307](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L307) |

#### Defined in

[wrappers/BclJetton.ts:304](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L304)

***

### getUserWallet()

> **getUserWallet**(`provider`, `userAddress`): `Promise`\<`OpenedContract`\<[`BclWallet`](../../BclWallet/classes/BclWallet.md)\>\>

Returns instance of BclWallet for given user address

#### Parameters

• **provider**: `ContractProvider`

• **userAddress**: `Address`

#### Returns

`Promise`\<`OpenedContract`\<[`BclWallet`](../../BclWallet/classes/BclWallet.md)\>\>

#### Defined in

[wrappers/BclJetton.ts:380](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L380)

***

### getWalletAddress()

> **getWalletAddress**(`provider`, `address`): `Promise`\<`Address`\>

Returns user Jetton wallet address

#### Parameters

• **provider**: `ContractProvider`

• **address**: `Address`

#### Returns

`Promise`\<`Address`\>

#### Defined in

[wrappers/BclJetton.ts:262](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L262)

***

### sendBuy()

> **sendBuy**(`provider`, `via`, `opts`): `Promise`\<`void`\>

Buy operation

opts.tons - how many TONs user wants to spend
opts.minReceive - min amount of coins expected to receive

#### Parameters

• **provider**: `ContractProvider`

• **via**: `Sender`

• **opts**: [`BuyOptions`](../type-aliases/BuyOptions.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclJetton.ts:323](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L323)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclJetton`](BclJetton.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclJetton`](BclJetton.md)

#### Defined in

[wrappers/BclJetton.ts:241](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/1fc3a1571223b62191ac87d755bf607bcf1766cd/src/wrappers/BclJetton.ts#L241)
