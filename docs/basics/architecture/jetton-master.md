BCL Jetton is modified TON Jetton contract.
This contract follows standard Jetton [spec](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md)  and adds some extra functions.

Main goal is to add ability to trade tokens on bonding curve without using DEX's and safely list token on DEX after all coins are sold.

### Important parameters

`total_supply` - current supply of token
`bcl_supply` - amount of tokens to be sold on curve
`liq_supply` - amount of tokens to be sent to DEX
`trading_enabled` - is trading phase active

### Flow

Contract starts with `total_supply=0` and `trading_enabled=0`
This means no tokens where sold yet and trading phase is active now.
When trading phase is active users are free to buy/sell coins (but not transfer, see [Lock mechanics](#lock-mechanics)).

Once `bcl_supply` amount of coins are sold `trading_enabled` is set to false and trading phase is over. When this happens `liq_supply` amount of tokens are minted and sent to the DEX with collected TONs from trades.

### Trading phase


### Listing phase


### Lock mechanics

All user jetton wallets are locked by default, this means that they cannot transfer tokens.
After trading phase is over users could unlock their wallets by sending special message to their jetton wallet.
Another case when wallet gets unlocked is when it receives transfer from another unlocked wallet.

This mechanics makes sure that during active trading phase no one would be able to create pair pool on DEX.


