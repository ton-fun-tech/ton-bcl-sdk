[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/BclClient](../README.md) / BclClient

# Class: BclClient

## Constructors

### new BclClient()

> **new BclClient**(`options`): [`BclClient`](BclClient.md)

#### Parameters

• **options**: [`ClientOptions`](../../types/type-aliases/ClientOptions.md)

#### Returns

[`BclClient`](BclClient.md)

#### Defined in

[client/BclClient.ts:13](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/BclClient.ts#L13)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `endpoint` | `readonly` | `string` | [client/BclClient.ts:10](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/BclClient.ts#L10) |
| `httpProvider` | `readonly` | [`HttpProviderBase`](../../../provider/httpProviderBase/interfaces/HttpProviderBase.md) | [client/BclClient.ts:11](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/BclClient.ts#L11) |

## Methods

### fetchCoin()

> **fetchCoin**(`address`): `Promise`\<[`Coin`](../../types/type-aliases/Coin.md)\>

Returns information on specific coin

#### Parameters

• **address**: `Address`

#### Returns

`Promise`\<[`Coin`](../../types/type-aliases/Coin.md)\>

#### Defined in

[client/BclClient.ts:38](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/BclClient.ts#L38)

***

### fetchCoinEvents()

> **fetchCoinEvents**(`address`, `opts`?): `Promise`\<[`GetEventsResponse`](../../types/type-aliases/GetEventsResponse.md)\>

Returns events of specific coin

#### Parameters

• **address**: `Address`

• **opts?**

• **opts.after?**: `string`

• **opts.first?**: `number`

• **opts.reverse?**: `boolean`

#### Returns

`Promise`\<[`GetEventsResponse`](../../types/type-aliases/GetEventsResponse.md)\>

#### Defined in

[client/BclClient.ts:47](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/BclClient.ts#L47)

***

### fetchCoins()

> **fetchCoins**(`opts`?): `Promise`\<[`GetCoinsResponse`](../../types/type-aliases/GetCoinsResponse.md)\>

Returns paginated list of all coins

#### Parameters

• **opts?**

• **opts.after?**: `string`

• **opts.first?**: `number`

• **opts.reverse?**: `boolean`

#### Returns

`Promise`\<[`GetCoinsResponse`](../../types/type-aliases/GetCoinsResponse.md)\>

#### Defined in

[client/BclClient.ts:25](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/BclClient.ts#L25)

***

### fetchServerEvents()

> **fetchServerEvents**(`opts`?): `Promise`\<[`GetEventsResponse`](../../types/type-aliases/GetEventsResponse.md)\>

Returns all events in ton.fun system
Useful for syncing with server

#### Parameters

• **opts?**

• **opts.after?**: `string`

• **opts.first?**: `number`

• **opts.reverse?**: `boolean`

#### Returns

`Promise`\<[`GetEventsResponse`](../../types/type-aliases/GetEventsResponse.md)\>

#### Defined in

[client/BclClient.ts:71](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/BclClient.ts#L71)
