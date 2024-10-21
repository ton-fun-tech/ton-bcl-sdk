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
import {Api, HttpClient} from "tonapi-sdk-js";
import {Address} from "@ton/core";
import { BclSDK, simpleTonapiProvider } from "ton-bcl-sdk";

const TONAPI_TOKEN = 'YOUR_TONAPI_TOKEN'

let sdk = BclSDK.create({
    apiProvider: simpleTonapiProvider(new Api(
        new HttpClient({
            baseUrl: 'https://tonapi.io',
            baseApiParams: {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${TONAPI_TOKEN}`
                },
            },
        })
    )),
    clientOptions: {
        endpoint: 'https://test-indexer-3a4wy.ondigitalocean.app',
    },
    masterAddress: Address.parse('UQBuUf6q1yPXBVf49_QxZKw-rZrR026xEXdjVwSmIkuX5iN4')
});
```

## Test environment

For test environment you can use this parameters: 

- BCL Master address - `UQBuUf6q1yPXBVf49_QxZKw-rZrR026xEXdjVwSmIkuX5iN4`
- TonFun api address - `https://test-indexer-3a4wy.ondigitalocean.app/`

Test coin parameters: 

- commission is 1%
- emission that is sold is 800M
- emission that is minted to STON.fi is 200M
- total emission is 1000M
- it costs ~3 TON to buyout whole 800M tokens 
- trading close fee is 0 TON

## SDK Reference

You can find detailed SDK reference [here](../reference/README.md)