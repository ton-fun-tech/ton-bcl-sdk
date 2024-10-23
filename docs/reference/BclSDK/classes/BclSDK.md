[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [BclSDK](../README.md) / BclSDK

# Class: BclSDK

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `api` | `readonly` | [`BclClient`](../../client/BclClient/classes/BclClient.md) | [BclSDK.ts:33](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L33) |
| `apiProvider` | `readonly` | [`AnyApiProvider`](../type-aliases/AnyApiProvider.md) | [BclSDK.ts:32](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L32) |
| `masterAddress` | `readonly` | `Address` | [BclSDK.ts:34](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L34) |

## Methods

### deployCoin()

> **deployCoin**(`sender`, `config`, `opts`?): `Promise`\<`void`\>

Deploys coin

opts.firstBuy field allows to make first buy of coins in same transaction as coin deploy
Important: when using firstBuy, don't forget to set buyerAddress to the users address, otherwise coins will be lost

#### Parameters

• **sender**: `Sender`

• **config**: [`DeployCoinInput`](../../wrappers/BclMaster/type-aliases/DeployCoinInput.md)

• **opts?**: [`DeployCoinOpts`](../../wrappers/BclMaster/type-aliases/DeployCoinOpts.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[BclSDK.ts:65](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L65)

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
| `coins` | `bigint` | [wrappers/BclJetton.ts:288](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/wrappers/BclJetton.ts#L288) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:288](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/wrappers/BclJetton.ts#L288) |

#### Defined in

[BclSDK.ts:73](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L73)

***

### getFirstCoinsForTons()

> **getFirstCoinsForTons**(`tons`): `Promise`\<`object`\>

Returns amount of coins one can get for providing given amount of TONs on the first buy of a coin

#### Parameters

• **tons**: `bigint`

#### Returns

`Promise`\<`object`\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `coins` | `bigint` | [wrappers/BclMaster.ts:174](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/wrappers/BclMaster.ts#L174) |
| `fees` | `bigint` | [wrappers/BclMaster.ts:174](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/wrappers/BclMaster.ts#L174) |

#### Defined in

[BclSDK.ts:104](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L104)

***

### getMasterData()

> **getMasterData**(): `Promise`\<[`MasterData`](../../wrappers/BclMaster/type-aliases/MasterData.md)\>

Returns master contract data

#### Returns

`Promise`\<[`MasterData`](../../wrappers/BclMaster/type-aliases/MasterData.md)\>

#### Defined in

[BclSDK.ts:112](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L112)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:307](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/wrappers/BclJetton.ts#L307) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:307](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/wrappers/BclJetton.ts#L307) |

#### Defined in

[BclSDK.ts:81](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L81)

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

[BclSDK.ts:89](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L89)

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

[BclSDK.ts:117](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L117)

***

### openCoin()

> **openCoin**(`address`): `OpenedContract`\<[`BclJetton`](../../wrappers/BclJetton/classes/BclJetton.md)\>

Returns instance of coin wrapper by its address

#### Parameters

• **address**: `Address`

#### Returns

`OpenedContract`\<[`BclJetton`](../../wrappers/BclJetton/classes/BclJetton.md)\>

#### Defined in

[BclSDK.ts:45](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L45)

***

### openUserCoinWallet()

> **openUserCoinWallet**(`coinAddress`, `userAddress`): `Promise`\<`OpenedContract`\<[`BclWallet`](../../wrappers/BclWallet/classes/BclWallet.md)\>\>

Returns instance of user coin wallet

#### Parameters

• **coinAddress**: `Address`

address of the coin

• **userAddress**: `Address`

address of user

#### Returns

`Promise`\<`OpenedContract`\<[`BclWallet`](../../wrappers/BclWallet/classes/BclWallet.md)\>\>

#### Defined in

[BclSDK.ts:54](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L54)

***

### create()

> `static` **create**(`options`): [`BclSDK`](BclSDK.md)

#### Parameters

• **options**: `SdkOptions`

#### Returns

[`BclSDK`](BclSDK.md)

#### Defined in

[BclSDK.ts:121](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/7ee0ff6d1b35906d586d4feb09739aac48bafc30/src/BclSDK.ts#L121)
