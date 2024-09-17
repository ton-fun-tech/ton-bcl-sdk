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