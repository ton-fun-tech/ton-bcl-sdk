[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../modules.md) / [client/BclClient](../README.md) / BclClient

# Class: BclClient

## Constructors

### new BclClient()

> **new BclClient**(`options`): [`BclClient`](BclClient.md)

#### Parameters

• **options**: [`ClientOptions`](../../types/type-aliases/ClientOptions.md)

#### Returns

[`BclClient`](BclClient.md)

#### Defined in

[client/BclClient.ts:16](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L16)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `endpoint` | `readonly` | `string` | [client/BclClient.ts:13](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L13) |
| `tonApi` | `readonly` | `Api`\<`any`\> | [client/BclClient.ts:14](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L14) |

## Methods

### fetchAccountBalance()

> **fetchAccountBalance**(`address`): `Promise`\<`bigint`\>

Returns any contract TON balance

#### Parameters

• **address**: `Address`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[client/BclClient.ts:157](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L157)

***

### fetchBuyStatus()

> **fetchBuyStatus**(`coinAddress`, `txHash`): `Promise`\<`"failed"` \| `"done"` \| `"in_progress"` \| `"not_found"`\>

Returns buy operation status by tx hash of message hash

#### Parameters

• **coinAddress**: `Address`

• **txHash**: `string`

#### Returns

`Promise`\<`"failed"` \| `"done"` \| `"in_progress"` \| `"not_found"`\>

#### Defined in

[client/BclClient.ts:64](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L64)

***

### fetchCoin()

> **fetchCoin**(`address`): `Promise`\<[`Coin`](../../types/type-aliases/Coin.md)\>

Returns information on specific coin

#### Parameters

• **address**: `Address`

#### Returns

`Promise`\<[`Coin`](../../types/type-aliases/Coin.md)\>

#### Defined in

[client/BclClient.ts:37](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L37)

***

### fetchCoinDeployStatus()

> **fetchCoinDeployStatus**(`txHash`): `Promise`\<[`TransactionStatus`](../type-aliases/TransactionStatus.md)\>

Returns coin deploy status by tx hash or message hash

#### Parameters

• **txHash**: `string`

#### Returns

`Promise`\<[`TransactionStatus`](../type-aliases/TransactionStatus.md)\>

#### Defined in

[client/BclClient.ts:122](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L122)

***

### fetchCoinEvents()

> **fetchCoinEvents**(`address`): `Promise`\<[`Event`](../../types/type-aliases/Event.md)[]\>

Returns events of specific coin

#### Parameters

• **address**: `Address`

#### Returns

`Promise`\<[`Event`](../../types/type-aliases/Event.md)[]\>

#### Defined in

[client/BclClient.ts:48](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L48)

***

### fetchCoins()

> **fetchCoins**(): `Promise`\<[`Coin`](../../types/type-aliases/Coin.md)[]\>

Returns list of all coins

#### Returns

`Promise`\<[`Coin`](../../types/type-aliases/Coin.md)[]\>

#### Defined in

[client/BclClient.ts:28](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L28)

***

### fetchSellStatus()

> **fetchSellStatus**(`coinAddress`, `txHash`): `Promise`\<[`TransactionStatus`](../type-aliases/TransactionStatus.md)\>

Returns sell operation status by tx hash or message hash

#### Parameters

• **coinAddress**: `Address`

• **txHash**: `string`

#### Returns

`Promise`\<[`TransactionStatus`](../type-aliases/TransactionStatus.md)\>

#### Defined in

[client/BclClient.ts:93](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/dd5e1aad56460b504ee72a0e5d189cd8ce611083/src/client/BclClient.ts#L93)
