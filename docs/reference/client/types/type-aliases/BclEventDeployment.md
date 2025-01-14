[**ton-bcl-sdk**](../../../README.md) • **Docs**

***

[ton-bcl-sdk](../../../README.md) / [client/types](../README.md) / BclEventDeployment

# Type Alias: BclEventDeployment

> **BclEventDeployment**: `object`

This event occurs when new coin is deployed
It contains coin information at the moment of deployment

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `authorAddress` | `Address` \| `null` | Address of the author | [client/types.ts:237](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L237) |
| `bclSupply` | `bigint` | BCL supply of the coin This is the max amount of coins that are going to be sold on curve | [client/types.ts:225](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L225) |
| `createdAt` | `number` | Timestamp of coin creation | [client/types.ts:254](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L254) |
| `lastTradeDate` | `number` | Last trade unixtime | [client/types.ts:233](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L233) |
| `liqSupply` | `bigint` | Amount of tokens be minted for liquidity on STON.fi | [client/types.ts:229](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L229) |
| `metadata` | [`CoinMetadata`](CoinMetadata.md) | Metadata of the coin | [client/types.ts:216](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L216) |
| `referral` | `string` | Referral cell | [client/types.ts:246](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L246) |
| `routerAddress` | `Address` | Ston.fi v2 router that this jetton is using | [client/types.ts:262](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L262) |
| `tonLiqCollected` | `bigint` | Amount of TONs collected for STON.fi liquidity | [client/types.ts:250](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L250) |
| `totalSupply` | `bigint` | Current supply of the coin | [client/types.ts:220](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L220) |
| `tradingCloseFee` | `bigint` | Platform fee on trading close in TONs | [client/types.ts:258](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L258) |
| `tradingEnabled` | `boolean` | Is trading phase active false means coin is listed on STON.fi you cant sell/buy coins via BCL contract | [client/types.ts:242](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L242) |
| `type` | `"deployment"` | - | [client/types.ts:212](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L212) |

## Defined in

[client/types.ts:211](https://github.com/ton-fun-tech/ton-bcl-sdk/blob/57ae5e6ea1d5ef20b2d4656add2e407869f7e2f0/src/client/types.ts#L211)
