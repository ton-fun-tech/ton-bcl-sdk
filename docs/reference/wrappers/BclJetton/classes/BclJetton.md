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
| `address` | `readonly` | `Address` | [wrappers/BclJetton.ts:166](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L166) |

## Methods

### getBclData()

> **getBclData**(`provider`): `Promise`\<[`BclData`](../type-aliases/BclData.md)\>

Returns BCL specific data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`BclData`](../type-aliases/BclData.md)\>

#### Defined in

[wrappers/BclJetton.ts:279](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L279)

***

### getCoinPrice()

> **getCoinPrice**(`provider`): `Promise`\<`bigint`\>

Returns current price of token

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[wrappers/BclJetton.ts:202](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L202)

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
| `coins` | `bigint` | [wrappers/BclJetton.ts:216](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L216) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:216](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L216) |

#### Defined in

[wrappers/BclJetton.ts:213](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L213)

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
| `adminAddress` | `null` \| `Address` | [wrappers/BclJetton.ts:182](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L182) |
| `jettonContent` | `Cell` | [wrappers/BclJetton.ts:183](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L183) |
| `jettonWalletCode` | `Cell` | [wrappers/BclJetton.ts:184](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L184) |
| `mintable` | `boolean` | [wrappers/BclJetton.ts:181](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L181) |
| `totalSupply` | `bigint` | [wrappers/BclJetton.ts:180](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L180) |

#### Defined in

[wrappers/BclJetton.ts:177](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L177)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:235](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L235) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:235](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L235) |

#### Defined in

[wrappers/BclJetton.ts:232](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L232)

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

[wrappers/BclJetton.ts:304](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L304)

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

[wrappers/BclJetton.ts:191](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L191)

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

[wrappers/BclJetton.ts:251](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L251)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclJetton`](BclJetton.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclJetton`](BclJetton.md)

#### Defined in

[wrappers/BclJetton.ts:170](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/476d1616e5c488190cb07691b9395a27bae66f3a/src/wrappers/BclJetton.ts#L170)
