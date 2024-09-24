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
| `address` | `readonly` | `Address` | [wrappers/BclJetton.ts:174](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L174) |

## Methods

### getBclData()

> **getBclData**(`provider`): `Promise`\<[`BclData`](../type-aliases/BclData.md)\>

Returns BCL specific data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`BclData`](../type-aliases/BclData.md)\>

#### Defined in

[wrappers/BclJetton.ts:288](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L288)

***

### getCoinPrice()

> **getCoinPrice**(`provider`): `Promise`\<`bigint`\>

Returns current price of token

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[wrappers/BclJetton.ts:210](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L210)

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
| `coins` | `bigint` | [wrappers/BclJetton.ts:225](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L225) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:225](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L225) |

#### Defined in

[wrappers/BclJetton.ts:222](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L222)

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
| `adminAddress` | `null` \| `Address` | [wrappers/BclJetton.ts:190](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L190) |
| `jettonContent` | `Cell` | [wrappers/BclJetton.ts:191](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L191) |
| `jettonWalletCode` | `Cell` | [wrappers/BclJetton.ts:192](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L192) |
| `mintable` | `boolean` | [wrappers/BclJetton.ts:189](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L189) |
| `totalSupply` | `bigint` | [wrappers/BclJetton.ts:188](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L188) |

#### Defined in

[wrappers/BclJetton.ts:185](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L185)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:244](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L244) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:244](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L244) |

#### Defined in

[wrappers/BclJetton.ts:241](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L241)

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

[wrappers/BclJetton.ts:315](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L315)

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

[wrappers/BclJetton.ts:199](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L199)

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

[wrappers/BclJetton.ts:260](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L260)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclJetton`](BclJetton.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclJetton`](BclJetton.md)

#### Defined in

[wrappers/BclJetton.ts:178](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/92a3af862d3966a626243e6c0b5a6592026707d2/src/wrappers/BclJetton.ts#L178)
