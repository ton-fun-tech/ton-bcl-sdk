# Ton.fun API

Ton.fun provides API for getting information on coins.
This API is not recommended to be used directly on your client application.
Since every app needs its own set of data, own sorting logics for coins, etc. we think it's better for partners to implement servers for their apps themselves.


However, we found quire challenging for developers to parse TON blockchain for data from our contracts, so we provide simple API for that.
Ton.fun API is meant to be used from your server side to sync basic information about coins and events.

You can use our SDK to call API.

`BclClient` has several methods you can use for getting info on coins: 

### `fetchCoins`
Returns list paginated of all coins in system sorted by creation DESC/ASC.

### `fetchCoin`
Returns current information on specific coin by its TON address.

### `fetchCoinEvents`
Returns paginated list of events of specifics coin by its TON address. 

### `fetchServerEvents`
Returns paginated list of **all** events on **all** coins in the system.


### Best practice of usage

Basically you need to sync the list of all coins and corresponding events to your server.
Best approach is to poll `fetchServerEvents` which returns all event in system.

It returns events on: 
- new coin creation
- buy operation  
- sell operation
- liquidity send

Using this data you can recreate current state of the system on your server.
Note that `deployment` event returns coin data at the moment of deployment, not current one.
In order to have up-to-date information on coins you should store new deployed coins in your DB and update changed fields when events occur on that coin.
For example if your server receives `buy` event on specific coin -> it should update totalSupply field of that coin in your DB, this way you will always have up-to-date information.
