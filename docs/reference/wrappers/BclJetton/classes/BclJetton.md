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
| `address` | `readonly` | `Address` | [wrappers/BclJetton.ts:161](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L161) |

## Methods

### getBclData()

> **getBclData**(`provider`): `Promise`\<[`BclData`](../type-aliases/BclData.md)\>

Returns BCL specific data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`BclData`](../type-aliases/BclData.md)\>

#### Defined in

[wrappers/BclJetton.ts:274](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L274)

***

### getCoinPrice()

> **getCoinPrice**(`provider`): `Promise`\<`bigint`\>

Returns current price of token

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[wrappers/BclJetton.ts:197](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L197)

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
| `coins` | `bigint` | [wrappers/BclJetton.ts:211](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L211) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:211](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L211) |

#### Defined in

[wrappers/BclJetton.ts:208](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L208)

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
| `adminAddress` | `null` \| `Address` | [wrappers/BclJetton.ts:177](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L177) |
| `jettonContent` | `Cell` | [wrappers/BclJetton.ts:178](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L178) |
| `jettonWalletCode` | `Cell` | [wrappers/BclJetton.ts:179](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L179) |
| `mintable` | `boolean` | [wrappers/BclJetton.ts:176](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L176) |
| `totalSupply` | `bigint` | [wrappers/BclJetton.ts:175](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L175) |

#### Defined in

[wrappers/BclJetton.ts:172](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L172)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:230](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L230) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:230](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L230) |

#### Defined in

[wrappers/BclJetton.ts:227](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L227)

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

[wrappers/BclJetton.ts:298](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L298)

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

[wrappers/BclJetton.ts:186](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L186)

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

[wrappers/BclJetton.ts:246](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L246)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclJetton`](BclJetton.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclJetton`](BclJetton.md)

#### Defined in

[wrappers/BclJetton.ts:165](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/0bba482950e2b0c3c4571bd8d4571c35b1dd45d1/src/wrappers/BclJetton.ts#L165)
