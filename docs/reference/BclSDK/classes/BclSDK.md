[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [BclSDK](../README.md) / BclSDK

# Class: BclSDK

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `api` | `readonly` | `BclClient` | [BclSDK.ts:51](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L51) |
| `apiProvider` | `readonly` | [`AnyApiProvider`](../type-aliases/AnyApiProvider.md) | [BclSDK.ts:50](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L50) |
| `masterAddress` | `readonly` | `Address` | [BclSDK.ts:52](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L52) |

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

[BclSDK.ts:80](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L80)

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
| `coins` | `bigint` | [wrappers/BclJetton.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/wrappers/BclJetton.ts#L113) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:113](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/wrappers/BclJetton.ts#L113) |

#### Defined in

[BclSDK.ts:88](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L88)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:129](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/wrappers/BclJetton.ts#L129) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:129](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/wrappers/BclJetton.ts#L129) |

#### Defined in

[BclSDK.ts:96](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L96)

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

[BclSDK.ts:104](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L104)

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

[BclSDK.ts:116](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L116)

***

### openCoin()

> **openCoin**(`address`): `OpenedContract`\<[`BclJetton`](../../wrappers/BclJetton/classes/BclJetton.md)\>

Returns instance of coin wrapper by its address

#### Parameters

• **address**: `Address`

#### Returns

`OpenedContract`\<[`BclJetton`](../../wrappers/BclJetton/classes/BclJetton.md)\>

#### Defined in

[BclSDK.ts:63](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L63)

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

[BclSDK.ts:72](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L72)

***

### create()

> `static` **create**(`options`): [`BclSDK`](BclSDK.md)

#### Parameters

• **options**: `SdkOptions`

#### Returns

[`BclSDK`](BclSDK.md)

#### Defined in

[BclSDK.ts:120](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L120)

***

### createSimple()

> `static` **createSimple**(`options`): [`BclSDK`](BclSDK.md)

#### Parameters

• **options**: `SdkOptionsSimple`

#### Returns

[`BclSDK`](BclSDK.md)

#### Defined in

[BclSDK.ts:124](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/4dc8576c8b5afcf36dbccde36654b6e5b45787e5/src/BclSDK.ts#L124)
