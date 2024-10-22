### 0.2.9
- updated dependency to `@ton/core`

### 0.2.8
- added `MasterData.isEnabled` field which indicates if master contract is enabled now
- removed `Constants.CoinDeploymentFee`, you can use `BclMaster.getMasterData` to fetch that value from network
- added `forceDeploymentFee` option to `sendDeployCoin` which could be used to manually specify deployment fee, otherwise it's got automatically fetched from network

### 0.2.7
- changed `Event.lt` and `Event.queryId` types to `bigint`

### 0.2.6
- added `parseStorage` function to decode BclJetton on-chain storage 

### 0.2.5
- added `routerAddress` and `routerPtonWalletAddress` fields to `Coin` and `BclEventDeployment`
- moved @ton dependencies to peerDependencies

### 0.2.4
- added `routerAddress` and `routerPtonWalletAddress` fields to `BclData`
- moved @ton dependencies to peerDependencies

### 0.2.3
- added `fullPriceTon` and `fullPriceTonFees` fields to `MasterData` and `BclData`

### 0.2.2
- added `getFirstCoinsForTons` method to `BclSDK`
- added `getMasterData` method to `BclSDK`

### 0.2.1
- added `tradingCloseFee` field to `Coin` and `BclEventDeployment`
- deployed new versions of contracts

### 0.2.0
- `getCoinsForTons` now does not include gas fees in calculations
- Added `BclMaster.getMasterData` method to retrieve master contract data.
- Added `BclMaster.getCoinsForTons` method to calculate the amount of coins that can be bought for a given amount of TONs.

### 0.1.11
- fixed gas amount on sell operation

### 0.1.10
- documented constants
- fixed amount of tons sent on coin deploy operation
- buyerAddress is now required field when deploying coin with first buy

### 0.1.9
- fixes buy operation

### 0.1.8
- fixed coins deployment again

### 0.1.7
- fixed coins deployment

### 0.1.6
- added `firstBuy` field to `deployCoin` method of SDK

### 0.1.5
- added ability to buy first coins in same transaction as coin deployment
- added ability to pass extra metadata fields when deploying coin
- fixed gas constants
- updated docs
- new master contract address

### 0.1.4
- all api endpoints are paginated now
- added method to fetch all server events, useful for syncing your server with ton.fun api
- removed tonapi from client
- updated docs

### 0.1.3
- exported gas constants
- improvements in docs
- added methods for working with referral system

### 0.1.2

- added ability to pass query id for contract method calls
- fixed referall field in sell operation
- added external http provider
- added types & decoder for on-chain events of contract

### 0.1.1

- First alpha release