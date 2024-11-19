### Collection of Coin contracts storage layout

Useful for partners writing their own indexer.
Since storage layout may vary from version to version the only way to be sure how to parse storage cell is to check coin code hash.


Code hash `0196d7fcc720254282347d98d1e723de0e9d5b90918695a8ecf69af91bbb4fa0`

```
storage#_ 
    total_supply:Coins
    admin:MsgAddress
    content:^Cell
    wallet_code:^Cell
    last_trade_date:uint32
    ton_liq_collected:Coins
    max_ton:Coins
    lp_receiver:MsgAddress
    ^[
        bcl_supply:Coins
        liq_supply:Coins
        author_address:MsgAddress
        fee_address:MsgAddress
        trading_fee_numerator:uint16
        trading_fee_denominator:uint16
        trading_enabled:Bool
        referral:^Cell
        seed:uint64
        trading_close_fee:Coins
        ^[
            router_address:MsgAddress
            router_pton_wallet_address:MsgAddress
        ]
    ] = Storage;
```

---

Code hash `912b0317bfb5c79760eac245efcc709245aa382a1332dadb5a4524e7834e1dcf`
```
storage#_ 
    total_supply:Coins
    admin:MsgAddress
    content:^Cell
    wallet_code:^Cell
    ttl:uint32
    last_trade_date:uint32
    ton_liq_collected:Coins
    max_ton:Coins
    ^[
        bcl_supply:Coins
        liq_supply:Coins
        author_address:MsgAddress
        fee_address:MsgAddress
        trading_fee_numerator:uint16
        trading_fee_denominator:uint16
        trading_enabled:Bool
        referral:^Cell
        seed:uint64
        trading_close_fee:Coins
        ^[
            router_address:MsgAddress
            router_pton_wallet_address:MsgAddress
        ]
    ] = Storage;
```
