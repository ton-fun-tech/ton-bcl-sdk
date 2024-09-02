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
| `address` | `readonly` | `Address` | [wrappers/BclJetton.ts:139](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L139) |

## Methods

### getBclData()

> **getBclData**(`provider`): `Promise`\<[`BclData`](../type-aliases/BclData.md)\>

Returns BCL specific data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`BclData`](../type-aliases/BclData.md)\>

#### Defined in

[wrappers/BclJetton.ts:247](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L247)

***

### getCoinPrice()

> **getCoinPrice**(`provider`): `Promise`\<`bigint`\>

Returns current price of token

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[wrappers/BclJetton.ts:175](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L175)

***

### getCoinsForTons()

> **getCoinsForTons**(`provider`, `tons`): `Promise`\<`object`\>

Returns how many coins one can get for given amount of TONs

fees - amount of platform fees in TONs
coins - amount of coins buyer would receive

#### Parameters

• **provider**: `ContractProvider`

• **tons**: `bigint`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `coins` | `bigint` | [wrappers/BclJetton.ts:189](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L189) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:189](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L189) |

#### Defined in

[wrappers/BclJetton.ts:186](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L186)

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
| `adminAddress` | `null` \| `Address` | [wrappers/BclJetton.ts:155](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L155) |
| `jettonContent` | `Cell` | [wrappers/BclJetton.ts:156](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L156) |
| `jettonWalletCode` | `Cell` | [wrappers/BclJetton.ts:157](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L157) |
| `mintable` | `boolean` | [wrappers/BclJetton.ts:154](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L154) |
| `totalSupply` | `bigint` | [wrappers/BclJetton.ts:153](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L153) |

#### Defined in

[wrappers/BclJetton.ts:150](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L150)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:208](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L208) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:208](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L208) |

#### Defined in

[wrappers/BclJetton.ts:205](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L205)

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

[wrappers/BclJetton.ts:271](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L271)

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

[wrappers/BclJetton.ts:164](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L164)

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

• **opts.queryId?**: `bigint`

• **opts.referral**: `null` \| `Cell`

• **opts.tons**: `bigint`

#### Returns

`Promise`\<`void`\>

#### Defined in

[wrappers/BclJetton.ts:224](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L224)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclJetton`](BclJetton.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclJetton`](BclJetton.md)

#### Defined in

[wrappers/BclJetton.ts:143](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7c79deee0843005cc270344ad3ec486e60aeccd9/src/wrappers/BclJetton.ts#L143)
