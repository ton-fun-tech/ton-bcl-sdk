# Table of contents

* [Welcome](README.md)
 
## Basics

* [Glossary](basics/glossary.md)
* [Architecture](basics/architecture/README.md)
  * [BclMaster](basics/architecture/bcl-master.md)
  * [JettonMaster](basics/architecture/jetton-master.md)
  * [JettonWallet](basics/architecture/jetton-wallet.md)
  * [JettonMaster storage layout](basics/architecture/jetton-master-storage.md)
* [API](api/README.md)
* [SDK](sdk/README.md)
  * [changelog](sdk/changelog/README.md)

## SDK Api reference

* [BclSDK](reference/BclSDK/README.md)
    * [classes](reference/BclSDK/classes/README.md)
        * [BclSDK](reference/BclSDK/classes/BclSDK.md)
    * [type-aliases](reference/BclSDK/type-aliases/README.md)
        * [AnyApiProvider](reference/BclSDK/type-aliases/AnyApiProvider.md)
* [client](reference/client/README.md)
    * [adapters](reference/client/adapters/README.md)
        * [functions](reference/client/adapters/functions/README.md)
            * [normalizeCoin](reference/client/adapters/functions/normalizeCoin.md)
            * [normalizeCoinEvent](reference/client/adapters/functions/normalizeCoinEvent.md)
        * [type-aliases](reference/client/adapters/type-aliases/README.md)
            * [AnyObject](reference/client/adapters/type-aliases/AnyObject.md)
    * [BclClient](reference/client/BclClient/README.md)
        * [classes](reference/client/BclClient/classes/README.md)
            * [BclClient](reference/client/BclClient/classes/BclClient.md)
        * [type-aliases](reference/client/BclClient/type-aliases/README.md)
            * [TransactionStatus](reference/client/BclClient/type-aliases/TransactionStatus.md)
    * [ofetchHttpProvider](reference/client/ofetchHttpProvider/README.md)
        * [classes](reference/client/ofetchHttpProvider/classes/README.md)
            * [OfetchHttpProvider](reference/client/ofetchHttpProvider/classes/OfetchHttpProvider.md)
    * [types](reference/client/types/README.md)
        * [type-aliases](reference/client/types/type-aliases/README.md)
            * [BclEvent](reference/client/types/type-aliases/BclEvent.md)
            * [BclEventBuy](reference/client/types/type-aliases/BclEventBuy.md)
            * [BclEventDeployment](reference/client/types/type-aliases/BclEventDeployment.md)
            * [BclEventSell](reference/client/types/type-aliases/BclEventSell.md)
            * [BclEventSendLiq](reference/client/types/type-aliases/BclEventSendLiq.md)
            * [ClientOptions](reference/client/types/type-aliases/ClientOptions.md)
            * [Coin](reference/client/types/type-aliases/Coin.md)
            * [CoinMetadata](reference/client/types/type-aliases/CoinMetadata.md)
            * [Event](reference/client/types/type-aliases/Event.md)
            * [GetCoinsResponse](reference/client/types/type-aliases/GetCoinsResponse.md)
            * [GetEventsResponse](reference/client/types/type-aliases/GetEventsResponse.md)
* [index](reference/index/README.md)
    * [functions](reference/index/functions/README.md)
        * [crc32](reference/index/functions/crc32.md)
        * [crc32str](reference/index/functions/crc32str.md)
        * [packReferralConfig](reference/index/functions/packReferralConfig.md)
        * [unpackReferralConfig](reference/index/functions/unpackReferralConfig.md)
    * [type-aliases](reference/index/type-aliases/README.md)
        * [ReferralConfig](reference/index/type-aliases/ReferralConfig.md)
    * [variables](reference/index/variables/README.md)
        * [Constants](reference/index/variables/Constants.md)
* [provider](reference/provider/README.md)
    * [httpProviderBase](reference/provider/httpProviderBase/README.md)
        * [interfaces](reference/provider/httpProviderBase/interfaces/README.md)
            * [HttpProviderBase](reference/provider/httpProviderBase/interfaces/HttpProviderBase.md)
    * [simpleTonapiProvider](reference/provider/simpleTonapiProvider/README.md)
        * [functions](reference/provider/simpleTonapiProvider/functions/README.md)
            * [createProvider](reference/provider/simpleTonapiProvider/functions/createProvider.md)
            * [simpleTonapiProvider](reference/provider/simpleTonapiProvider/functions/simpleTonapiProvider.md)
    * [tonConnectSender](reference/provider/tonConnectSender/README.md)
        * [functions](reference/provider/tonConnectSender/functions/README.md)
            * [tonConnectSender](reference/provider/tonConnectSender/functions/tonConnectSender.md)
        * [type-aliases](reference/provider/tonConnectSender/type-aliases/README.md)
            * [TonConnectLikeObject](reference/provider/tonConnectSender/type-aliases/TonConnectLikeObject.md)
* [wrappers](reference/wrappers/README.md)
    * [BclJetton](reference/wrappers/BclJetton/README.md)
        * [classes](reference/wrappers/BclJetton/classes/README.md)
            * [BclJetton](reference/wrappers/BclJetton/classes/BclJetton.md)
        * [functions](reference/wrappers/BclJetton/functions/README.md)
            * [parseBclEvent](reference/wrappers/BclJetton/functions/parseBclEvent.md)
        * [type-aliases](reference/wrappers/BclJetton/type-aliases/README.md)
            * [BclData](reference/wrappers/BclJetton/type-aliases/BclData.md)
            * [BuyOptions](reference/wrappers/BclJetton/type-aliases/BuyOptions.md)
            * [ContractEvent](reference/wrappers/BclJetton/type-aliases/ContractEvent.md)
            * [EventBuy](reference/wrappers/BclJetton/type-aliases/EventBuy.md)
            * [EventSell](reference/wrappers/BclJetton/type-aliases/EventSell.md)
            * [EventSendLiq](reference/wrappers/BclJetton/type-aliases/EventSendLiq.md)
    * [BclMaster](reference/wrappers/BclMaster/README.md)
        * [classes](reference/wrappers/BclMaster/classes/README.md)
            * [BclMaster](reference/wrappers/BclMaster/classes/BclMaster.md)
        * [type-aliases](reference/wrappers/BclMaster/type-aliases/README.md)
            * [DeployCoinInput](reference/wrappers/BclMaster/type-aliases/DeployCoinInput.md)
            * [DeployCoinOpts](reference/wrappers/BclMaster/type-aliases/DeployCoinOpts.md)
            * [MasterData](reference/wrappers/BclMaster/type-aliases/MasterData.md)
    * [BclWallet](reference/wrappers/BclWallet/README.md)
        * [classes](reference/wrappers/BclWallet/classes/README.md)
            * [BclWallet](reference/wrappers/BclWallet/classes/BclWallet.md)