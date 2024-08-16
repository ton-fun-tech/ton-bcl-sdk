[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../modules.md) / [wrappers/BclJetton](../README.md) / BclJetton

# Class: BclJetton

Wrapper for BCL contract

## Implements

- `Contract`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `readonly` | `Address` | [wrappers/BclJetton.ts:66](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L66) |

## Methods

### getBclData()

> **getBclData**(`provider`): `Promise`\<[`BclData`](../type-aliases/BclData.md)\>

Returns BCL specific data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`BclData`](../type-aliases/BclData.md)\>

#### Defined in

[wrappers/BclJetton.ts:168](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L168)

***

### getCoinPrice()

> **getCoinPrice**(`provider`): `Promise`\<`bigint`\>

Returns current price of token

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[wrappers/BclJetton.ts:102](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L102)

***

### getCoinsForTons()

> **getCoinsForTons**(`provider`, `tons`): `Promise`\<`object`\>

Returns how many coins one can get for given amount of TONs

#### Parameters

• **provider**: `ContractProvider`

• **tons**: `bigint`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `coins` | `bigint` | [wrappers/BclJetton.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L113) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L113) |

#### Defined in

[wrappers/BclJetton.ts:110](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L110)

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
| `adminAddress` | `null` \| `Address` | [wrappers/BclJetton.ts:82](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L82) |
| `jettonContent` | `Cell` | [wrappers/BclJetton.ts:83](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L83) |
| `jettonWalletCode` | `Cell` | [wrappers/BclJetton.ts:84](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L84) |
| `mintable` | `boolean` | [wrappers/BclJetton.ts:81](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L81) |
| `totalSupply` | `bigint` | [wrappers/BclJetton.ts:80](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L80) |

#### Defined in

[wrappers/BclJetton.ts:77](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L77)

***

### getTonsForCoins()

> **getTonsForCoins**(`provider`, `coins`): `Promise`\<`object`\>

Returns how many TONs one can get for given amount of coins

#### Parameters

• **provider**: `ContractProvider`

• **coins**: `bigint`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `fees` | `bigint` | [wrappers/BclJetton.ts:129](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L129) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:129](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L129) |

#### Defined in

[wrappers/BclJetton.ts:126](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L126)

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

[wrappers/BclJetton.ts:191](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L191)

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

[wrappers/BclJetton.ts:91](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L91)

***

### sendBuy()

> **sendBuy**(`provider`, `via`, `opts`): `Promise`\<`void`\>

Buy operation

opts.tons - how many TONs user wants to spend
opts.minReceive - min amount of coins expected to receive

#### Parameters

• **provider**: `ContractProvider`

• **via**: `Sender`

• **opts**

• **opts.minReceive**: `bigint`

• **opts.referral**: `null` \| `Cell`

• **opts.tons**: `bigint`

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclJetton.ts:145](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L145)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclJetton`](BclJetton.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclJetton`](BclJetton.md)

#### Defined in

[wrappers/BclJetton.ts:70](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/wrappers/BclJetton.ts#L70)
