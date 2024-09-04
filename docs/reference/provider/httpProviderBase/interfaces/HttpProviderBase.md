[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [provider/httpProviderBase](../README.md) / HttpProviderBase

# Interface: HttpProviderBase

## Methods

### get()

> **get**\<`T`\>(`url`, `opts`?): `Promise`\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **url**: `string`

• **opts?**

• **opts.query?**

#### Returns

`Promise`\<`T`\>

#### Defined in

[provider/httpProviderBase.ts:2](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/provider/httpProviderBase.ts#L2)

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

#### Defined in

[provider/httpProviderBase.ts:3](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/409085fd00df7301399c36c4c1a47414008814a9/src/provider/httpProviderBase.ts#L3)
