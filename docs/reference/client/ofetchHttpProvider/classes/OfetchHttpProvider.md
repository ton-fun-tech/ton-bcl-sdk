[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/ofetchHttpProvider](../README.md) / OfetchHttpProvider

# Class: OfetchHttpProvider

## Implements

- [`HttpProviderBase`](../../../provider/httpProviderBase/interfaces/HttpProviderBase.md)

## Constructors

### new OfetchHttpProvider()

> **new OfetchHttpProvider**(): [`OfetchHttpProvider`](OfetchHttpProvider.md)

#### Returns

[`OfetchHttpProvider`](OfetchHttpProvider.md)

## Methods

### get()

> **get**(`url`, `opts`): `Promise`\<`any`\>

#### Parameters

• **url**: `string`

• **opts**

• **opts.query**

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`HttpProviderBase`](../../../provider/httpProviderBase/interfaces/HttpProviderBase.md).[`get`](../../../provider/httpProviderBase/interfaces/HttpProviderBase.md#get)

#### Defined in

[client/ofetchHttpProvider.ts:5](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/ofetchHttpProvider.ts#L5)

***

### post()

> **post**\<`T`\>(`url`, `data`): `Promise`\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **url**: `string`

• **data**: `unknown`

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`HttpProviderBase`](../../../provider/httpProviderBase/interfaces/HttpProviderBase.md).[`post`](../../../provider/httpProviderBase/interfaces/HttpProviderBase.md#post)

#### Defined in

[client/ofetchHttpProvider.ts:9](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/c213f02e444c5052c6fd716eb7ea87fc1e996e58/src/client/ofetchHttpProvider.ts#L9)
