BCL Master contract is a simple contract that supports single operation - deployment of other contracts.
It accepts [stateinit](https://docs.ton.org/develop/data-formats/msg-tlb#stateinit-tl-b) of contract to be deployed.
It also takes TON fees for that operation. 

### Why do we need it? 

This contract serves two goals: 
1. Take fees for deployment of new coin
2. Make indexing easier

TON is quite hard to find information you need, we actually need to index whole network for new deployments of contracts in order to find new deployed coins.
Much easier approach is to have single "gateway" contract for deployment of all coins, this way backend could simply watch for new transactions on BCL Master contract and find out new deployments of coins.
This way servers task is to watch for new transactions on BCL master, check if it was sucessfull and lead to other contract deployment, next it should check if that contract is an instance of BCL Jetton contract, check if parameters are correct and thats it.
 