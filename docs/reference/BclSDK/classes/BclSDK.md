[**ton-bcl-sdk**](../../README.md) • **Docs**

***

[ton-bcl-sdk](../../README.md) / [BclSDK](../README.md) / BclSDK

# Class: BclSDK

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `api` | `readonly` | [`BclClient`](../../client/BclClient/classes/BclClient.md) | [BclSDK.ts:32](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L32) |
| `apiProvider` | `readonly` | [`AnyApiProvider`](../type-aliases/AnyApiProvider.md) | [BclSDK.ts:31](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L31) |
| `masterAddress` | `readonly` | `Address` | [BclSDK.ts:33](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L33) |

## Methods

### deployCoin()

> **deployCoin**(`sender`, `config`, `firstBuy`?): `Promise`\<`void`\>

Deploys coin

firstBuy field allows to make first buy of coins in same transaction as coin deploy
Important: when using firstBuy, don't forget to set buyerAddress to the users address, otherwise coins will be lost

#### Parameters

• **sender**: `Sender`

• **config**: [`DeployCoinInput`](../../wrappers/BclMaster/type-aliases/DeployCoinInput.md)

• **firstBuy?**: `RequiredFields`\<[`BuyOptions`](../../wrappers/BclJetton/type-aliases/BuyOptions.md), `"buyerAddress"`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[BclSDK.ts:64](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L64)

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
| `coins` | `bigint` | [wrappers/BclJetton.ts:233](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L233) |
| `fees` | `bigint` | [wrappers/BclJetton.ts:233](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L233) |

#### Defined in

[BclSDK.ts:72](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L72)

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
| `coins` | `bigint` | [wrappers/BclMaster.ts:142](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclMaster.ts#L142) |
| `fees` | `bigint` | [wrappers/BclMaster.ts:142](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclMaster.ts#L142) |

#### Defined in

[BclSDK.ts:103](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L103)

***

### getMasterData()

> **getMasterData**(): `Promise`\<[`MasterData`](../../wrappers/BclMaster/type-aliases/MasterData.md)\>

Returns master contract data

#### Returns

`Promise`\<[`MasterData`](../../wrappers/BclMaster/type-aliases/MasterData.md)\>

#### Defined in

[BclSDK.ts:111](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L111)

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
| `fees` | `bigint` | [wrappers/BclJetton.ts:252](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L252) |
| `tons` | `bigint` | [wrappers/BclJetton.ts:252](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/wrappers/BclJetton.ts#L252) |

#### Defined in

[BclSDK.ts:80](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L80)

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

[BclSDK.ts:88](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L88)

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

[BclSDK.ts:116](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L116)

***

### openCoin()

> **openCoin**(`address`): `OpenedContract`\<[`BclJetton`](../../wrappers/BclJetton/classes/BclJetton.md)\>

Returns instance of coin wrapper by its address

#### Parameters

• **address**: `Address`

#### Returns

`OpenedContract`\<[`BclJetton`](../../wrappers/BclJetton/classes/BclJetton.md)\>

#### Defined in

[BclSDK.ts:44](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L44)

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

[BclSDK.ts:53](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L53)

***

### create()

> `static` **create**(`options`): [`BclSDK`](BclSDK.md)

#### Parameters

• **options**: `SdkOptions`

#### Returns

[`BclSDK`](BclSDK.md)

#### Defined in

[BclSDK.ts:120](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/BclSDK.ts#L120)
