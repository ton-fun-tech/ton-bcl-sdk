# SDK

This section contains information about SDK for tonfun protocol

## Overview

SDK is written in TypeScript.
It's designed to be a layer between your code, contracts and tonfun backend.
It could be used both on backend and frontend.

SDK is build using [@ton](https://github.com/ton-org/ton) package and contains wrapper for all contracts.
It also relies on [TonApi](https://tonapi.io/) for transaction status fetching and on our backed for obtaining coins information.

## Installation

```npm install ton-bcl-sdk```
```yarn add ton-bcl-sdk```

## Configuration

You can create instance of SDK this way: 

```typescript
import { Api, HttpClient } from "tonapi-sdk-js";
import { BclSDK } from "ton-bcl-sdk";
import { Address } from "@ton/core";

const TONAPI_TOKEN = 'YOUR_TONAPI_TOKEN'

let sdk = BclSDK.createSimple({
    tonapiClient: new Api(
        new HttpClient({
            baseUrl: 'https://tonapi.io',
            baseApiParams: {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${TONAPI_TOKEN}`
                },
            },
        })
    ),
    clientOptions: {
        endpoint: 'https://test.tonfun.tech/api/',
    },
    masterAddress: Address.parse('EQACCsLnwJTRO4OhA4jx-94AyNRgqfMxQhHj0pPnqPY4K2wl')
});
```

## Test environment

For test environment you can use this parameters: 

BCL Master address - `EQACCsLnwJTRO4OhA4jx-94AyNRgqfMxQhHj0pPnqPY4K2wl`
TonFun api address - `https://test.tonfun.tech/api/`

Test coin parameters: 

- commission is 50%
- emission that is sold is 800M
- emission that is minted to STON.fi is 200M
- total emission is 1000M
- it costs ~6 TON to buyout whole 800M tokens 

## SDK Reference

You can find detailed SDK reference [here](../reference/README.md)