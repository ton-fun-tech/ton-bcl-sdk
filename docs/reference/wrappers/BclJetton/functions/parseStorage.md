[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [wrappers/BclJetton](../README.md) / parseStorage

# Function: parseStorage()

> **parseStorage**(`cell`): `object`

Parses on-chain storage of BclJetton contract
useful if you're implementing your own indexer

## Parameters

• **cell**: `Cell`

## Returns

`object`

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `admin` | `Address` | - | [wrappers/BclJetton.ts:186](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L186) |
| `authorAddress` | `Address` | - | [wrappers/BclJetton.ts:195](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L195) |
| `bclSupply` | `bigint` | - | [wrappers/BclJetton.ts:189](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L189) |
| `content` | `Cell` | - | [wrappers/BclJetton.ts:187](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L187) |
| `feeAddress` | `Address` | - | [wrappers/BclJetton.ts:196](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L196) |
| `lastTradeDate` | `number` | - | [wrappers/BclJetton.ts:193](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L193) |
| `liqSupply` | `bigint` | - | [wrappers/BclJetton.ts:190](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L190) |
| `referral` | `Cell` | - | [wrappers/BclJetton.ts:202](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L202) |
| `routerAddress` | `Address` | - | [wrappers/BclJetton.ts:205](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L205) |
| `routerPtonWalletAddress` | `Address` | - | [wrappers/BclJetton.ts:206](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L206) |
| `seed` | `number` | - | [wrappers/BclJetton.ts:203](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L203) |
| `tonLiqCollected` | `bigint` | - | [wrappers/BclJetton.ts:194](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L194) |
| `totalSupply` | `bigint` | - | [wrappers/BclJetton.ts:188](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L188) |
| `tradingCloseFee` | `bigint` | - | [wrappers/BclJetton.ts:204](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L204) |
| `tradingEnabled` | `boolean` | - | [wrappers/BclJetton.ts:201](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L201) |
| `tradingFee` | `object` | - | [wrappers/BclJetton.ts:197](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L197) |
| `tradingFee.denominator` | `number` | tradingFeeDenominator | [wrappers/BclJetton.ts:199](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L199) |
| `tradingFee.numerator` | `number` | tradingFeeNumerator | [wrappers/BclJetton.ts:198](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L198) |
| `ttl` | `number` | - | [wrappers/BclJetton.ts:192](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L192) |
| `walletCode` | `Cell` | - | [wrappers/BclJetton.ts:191](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L191) |

## Defined in

[wrappers/BclJetton.ts:159](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/fc0c4a576371f976e2ad8eb17107815a1dcdee28/src/wrappers/BclJetton.ts#L159)
