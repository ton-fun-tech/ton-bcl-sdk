[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [BclSDK](../README.md) / BclSDK

# Class: BclSDK

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `api` | `readonly` | [`BclClient`](../../client/BclClient/classes/BclClient.md) | [BclSDK.ts:31](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L31) |
| `apiProvider` | `readonly` | [`AnyApiProvider`](../type-aliases/AnyApiProvider.md) | [BclSDK.ts:30](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L30) |
| `masterAddress` | `readonly` | `Address` | [BclSDK.ts:32](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L32) |

## Methods

### deployCoin()

> **deployCoin**(`sender`, `config`): `Promise`\<`void`\>

Deploys new coin

#### Parameters

• **sender**: `Sender`

• **config**: [`DeployCoinInput`](../../wrappers/BclMaster/type-aliases/DeployCoinInput.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[BclSDK.ts:60](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L60)

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
| `coins` | `bigint` | [wrappers/BclJetton.ts:189](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/wrappers/BclJetton.ts#L189) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:189](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/wrappers/BclJetton.ts#L189) |

#### Defined in

[BclSDK.ts:68](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L68)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:208](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/wrappers/BclJetton.ts#L208) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:208](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/wrappers/BclJetton.ts#L208) |

#### Defined in

[BclSDK.ts:76](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L76)

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

[BclSDK.ts:84](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L84)

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

[BclSDK.ts:96](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L96)

***

### openCoin()

> **openCoin**(`address`): `OpenedContract`\<[`BclJetton`](../../wrappers/BclJetton/classes/BclJetton.md)\>

Returns instance of coin wrapper by its address

#### Parameters

• **address**: `Address`

#### Returns

`OpenedContract`\<[`BclJetton`](../../wrappers/BclJetton/classes/BclJetton.md)\>

#### Defined in

[BclSDK.ts:43](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L43)

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

[BclSDK.ts:52](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L52)

***

### create()

> `static` **create**(`options`): [`BclSDK`](BclSDK.md)

#### Parameters

• **options**: `SdkOptions`

#### Returns

[`BclSDK`](BclSDK.md)

#### Defined in

[BclSDK.ts:100](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/3dee4fb16df3d2a9b10fc9541cf29b0c93974b86/src/BclSDK.ts#L100)
