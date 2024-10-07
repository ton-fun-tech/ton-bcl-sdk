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
| `address` | `readonly` | `Address` | [wrappers/BclJetton.ts:182](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L182) |

## Methods

### getBclData()

> **getBclData**(`provider`): `Promise`\<[`BclData`](../type-aliases/BclData.md)\>

Returns BCL specific data

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<[`BclData`](../type-aliases/BclData.md)\>

#### Defined in

[wrappers/BclJetton.ts:296](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L296)

***

### getCoinPrice()

> **getCoinPrice**(`provider`): `Promise`\<`bigint`\>

Returns current price of token

#### Parameters

• **provider**: `ContractProvider`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[wrappers/BclJetton.ts:218](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L218)

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
| `coins` | `bigint` | [wrappers/BclJetton.ts:233](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L233) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:233](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L233) |

#### Defined in

[wrappers/BclJetton.ts:230](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L230)

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
| `adminAddress` | `null` \| `Address` | [wrappers/BclJetton.ts:198](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L198) |
| `jettonContent` | `Cell` | [wrappers/BclJetton.ts:199](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L199) |
| `jettonWalletCode` | `Cell` | [wrappers/BclJetton.ts:200](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L200) |
| `mintable` | `boolean` | [wrappers/BclJetton.ts:197](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L197) |
| `totalSupply` | `bigint` | [wrappers/BclJetton.ts:196](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L196) |

#### Defined in

[wrappers/BclJetton.ts:193](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L193)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:252](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L252) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:252](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L252) |

#### Defined in

[wrappers/BclJetton.ts:249](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L249)

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

[wrappers/BclJetton.ts:325](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L325)

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

[wrappers/BclJetton.ts:207](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L207)

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

[wrappers/BclJetton.ts:268](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L268)

***

### createFromAddress()

> `static` **createFromAddress**(`address`): [`BclJetton`](BclJetton.md)

#### Parameters

• **address**: `Address`

#### Returns

[`BclJetton`](BclJetton.md)

#### Defined in

[wrappers/BclJetton.ts:186](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L186)
