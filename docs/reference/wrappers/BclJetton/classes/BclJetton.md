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
| `address` | `readonly` | `Address` | [wrappers/BclJetton.ts:181](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L181) |

## Methods

### getBclData()

> **getBclData**(`provider`): `Promise`\<[`BclData`](../type-aliases/BclData.md)\>

Returns BCL specific data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`BclData`](../type-aliases/BclData.md)\>

#### Defined in

[wrappers/BclJetton.ts:295](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L295)

***

### getCoinPrice()

> **getCoinPrice**(`provider`): `Promise`\<`bigint`\>

Returns current price of token

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[wrappers/BclJetton.ts:217](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L217)

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
| `coins` | `bigint` | [wrappers/BclJetton.ts:232](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L232) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:232](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L232) |

#### Defined in

[wrappers/BclJetton.ts:229](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L229)

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
| `adminAddress` | `null` \| `Address` | [wrappers/BclJetton.ts:197](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L197) |
| `jettonContent` | `Cell` | [wrappers/BclJetton.ts:198](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L198) |
| `jettonWalletCode` | `Cell` | [wrappers/BclJetton.ts:199](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L199) |
| `mintable` | `boolean` | [wrappers/BclJetton.ts:196](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L196) |
| `totalSupply` | `bigint` | [wrappers/BclJetton.ts:195](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L195) |

#### Defined in

[wrappers/BclJetton.ts:192](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L192)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:251](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L251) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:251](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L251) |

#### Defined in

[wrappers/BclJetton.ts:248](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L248)

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

[wrappers/BclJetton.ts:324](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L324)

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

[wrappers/BclJetton.ts:206](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L206)

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

[wrappers/BclJetton.ts:267](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L267)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclJetton`](BclJetton.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclJetton`](BclJetton.md)

#### Defined in

[wrappers/BclJetton.ts:185](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/wrappers/BclJetton.ts#L185)
