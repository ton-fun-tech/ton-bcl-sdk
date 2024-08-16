  
## High level contract architecture
  
Setup contains of three contracts  
- BCL Master
- BCL Jetton master
- BCL Jetton wallet
 



### BCL Master

Master contract is used to deploy new coins, it's role is to take TONs for deployment and deploy Jetton master contract.   

### Jetton master 

BCL Jetton is modified TON Jetton contract, it follows standard [spec](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md)  
and also adds ability to trade on bonding curve.

### Jetton wallet

Just like normal Jettons BCL Jetton also has wallet contract per each holder, the difference is that BCL Jetton wallet has ability to directly sell coins back to Jetton master contract.  

Additional change over standard jettons implementation is lock mechanics. 
- All wallets are locked by default, this means that no wallet -> wallet transfers are allowed.
- After trade phase is over and liquidity is sent to Ston.fi - wallet could be unlocked by sending special message to the jetton master
- If wallet receives transfer from any other wallet it gets unlocked automatically

Last point makes sure that after trade phase any new created wallets will get unlocked and users could use their coins as they wish.


