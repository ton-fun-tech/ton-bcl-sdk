[**ton-bcl-sdk**](../README.md) • **Docs**

***

[ton-bcl-sdk](../globals.md) / BclSDK

# Class: BclSDK

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `api` | `readonly` | `BclClient` | [BclSDK.ts:46](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L46) |
| `apiProvider` | `readonly` | [`AnyApiProvider`](../type-aliases/AnyApiProvider.md) | [BclSDK.ts:45](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L45) |

## Methods

### deployCoin()

> **deployCoin**(`sender`, `config`): `Promise`\<`void`\>

Deploys new coin

#### Parameters

• **sender**: `Sender`

• **config**: [`DeployCoinInput`](../type-aliases/DeployCoinInput.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[BclSDK.ts:73](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L73)

***

### getCoinsForTons()

> **getCoinsForTons**(`coinAddress`, `tons`): `Promise`\<`object`\>

Returns amount of coins one can get for providing given amount of TONs

#### Parameters

• **coinAddress**: `Address`

• **tons**: `bigint`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `coins` | `bigint` | [wrappers/BclJetton.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/wrappers/BclJetton.ts#L113) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/wrappers/BclJetton.ts#L113) |

#### Defined in

[BclSDK.ts:81](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L81)

***

### getTonsForCoins()

> **getTonsForCoins**(`coinAddress`, `coins`): `Promise`\<`object`\>

Returns amount of TONs one can get for providing given amount of coins

#### Parameters

• **coinAddress**: `Address`

• **coins**: `bigint`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `fees` | `bigint` | [wrappers/BclJetton.ts:129](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/wrappers/BclJetton.ts#L129) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:129](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/wrappers/BclJetton.ts#L129) |

#### Defined in

[BclSDK.ts:89](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L89)

***

### getUserCoinBalance()

> **getUserCoinBalance**(`coinAddress`, `userAddress`): `Promise`\<`bigint`\>

Returns users balance for given coin

#### Parameters

• **coinAddress**: `Address`

• **userAddress**: `Address`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[BclSDK.ts:97](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L97)

***

### open()

> **open**\<`T`\>(`contract`): `OpenedContract`\<`T`\>

#### Type Parameters

• **T** *extends* `Contract`

#### Parameters

• **contract**: `T`

#### Returns

`OpenedContract`\<`T`\>

#### Defined in

[BclSDK.ts:109](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L109)

***

### openCoin()

> **openCoin**(`address`): `OpenedContract`\<`BclJetton`\>

Returns instance of coin wrapper by its address

#### Parameters

• **address**: `Address`

#### Returns

`OpenedContract`\<`BclJetton`\>

#### Defined in

[BclSDK.ts:56](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L56)

***

### openUserCoinWallet()

> **openUserCoinWallet**(`coinAddress`, `userAddress`): `Promise`\<`OpenedContract`\<`BclWallet`\>\>

Returns instance of user coin wallet

#### Parameters

• **coinAddress**: `Address`

address of the coin

• **userAddress**: `Address`

address of user

#### Returns

`Promise`\<`OpenedContract`\<`BclWallet`\>\>

#### Defined in

[BclSDK.ts:65](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L65)

***

### create()

> `static` **create**(`options`): [`BclSDK`](BclSDK.md)

#### Parameters

• **options**: `SdkOptions`

#### Returns

[`BclSDK`](BclSDK.md)

#### Defined in

[BclSDK.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L113)

***

### createSimple()

> `static` **createSimple**(`options`): [`BclSDK`](BclSDK.md)

#### Parameters

• **options**: `SdkOptionsSimple`

#### Returns

[`BclSDK`](BclSDK.md)

#### Defined in

[BclSDK.ts:117](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7a6a9e1b8bcd59d0f61ae7e9e2cf2e34a9873c67/src/BclSDK.ts#L117)
