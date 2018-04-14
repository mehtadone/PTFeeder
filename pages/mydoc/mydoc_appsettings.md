---
title: Appsettings.json
sidebar: mydoc_sidebar
permalink: mydoc_appsettings.html
folder: mydoc
---

The appsettings.json file is the second file of PTF configuration. It contains all your important tuning values that you wish to act it upon. Be sure to set this all right to your likings.


### Section: General

The General section of this file sets some basic values that partly get overridden and or mofidied in market or coin related sections later in the file. It is worth noting that PT Feeder generates coin specific overrides which in turn makes majority of the ALL_ properties obsolete. Only the ALL properties that not been overriden will have an impact on PT and they can be added in pairs.txt. 

Before reading these, you should be familiar with the Profit Trailer properties that they get translated to. 

**These can be found [here](https://wiki.profittrailer.io/doku.php) on the Profit Trailer wiki**

#### BaseCurrency

    "BaseCurrency": "BTC"

The Currency/Market your Bot is trading on. Should match the MARKET = BTC value in your PAIRS.properties file for ProfitTrailer. It is translated to the MARKET property. 

#### MaxCost (was Cost pre v1.4)

    "MaxCost": "0.003"

The Base value for cost per trade. It will be modified later by market conditions but this is the Base value for these modifications. It is translated to the ALL_max_cost property in pairs.properties. If UseMaxCostPercentage in hostsettings.json is set to true, then this should be a percentage value. 

#### BuyStrategy

    "BuyStrategy": "LOWBB"

This the strategy to use for buying and all values should be entered that relate to this strategy. e.g A BuyValue of 50 makes no sense for SMASPREAD. It is translated to the ALL_buy_strategy property. 

#### BuyValue

    "BuyValue": "30"

This is the default value to base the BuyValueOffset off and is used for the ALL_buy_value property. When moving from a positive to a negative BuyValue in the settings, you will need to change the sign of the BuyValueOffset to get the offset to move in the correct direction. **Don't forget to change it back once you change the BuyValue to positive again!** If you forget, your offset will move your BuyValue in the wrong direction. 

***

**WARNING!** In version 1.3.2 or older, if a negative value is used for BuyValue you will need to reverse all occurrences of BuyValueOffset in the config! Since the actual buy value is calculated as BuyValue + BuyValue * BuyValueOffset/100, when using negative BuyValue, it will make the calculated value higher when using a negative offset and vice versa. 

Example: 

BuyValue: "-10"

BuyValueOffset: "-10"

This will result in the calculated buy_value of -9 (because -10% of -10 is 1 and -10 plus 1 is -9) which is probably not what you want if you wanted to lower the value. Thus, for this to correctly work, you will have to swap the BuyValueOffset to +10 instead. 

***

#### BuyValueLimit

    "BuyValueLimit": "0"

This is the default value to base the BuyValueLimitOffset off and is used for the ALL_buy_value_limit property. This is only used for Cross and Spread strategies. This is an optional property

#### SellValue

    "SellValue": "1"

This is the default value to base the SellValueOffset from, and is used for the ALL_sell_value property in PT. 
 
#### DcaEnabled

    "DcaEnabled": "false" /  "DcaEnabled": "-3"

This is the default value for DCA enabled. False always takes precedence, so if any value is false, DCA Enabled will always be false. It is translated to the ALL_DCA_enabled property. This can also be a negative value to trigger DCA after a percentage drop of price. The corresponding offset is DcaEnabled. 

#### MinBuyBalance

    "MinBuyBalance": "0.02"

This is the property that gets translated to ALL_min_buy_balance. If UseMinBuyBalancePercentage is set to true, this should be a percentage value. 

#### MaxTradingPairs (was NumberOfPairs pre v1.4)

    "MaxTradingPairs": "15"

This is the property that gets translated to ALL_max_trading_pairs. 

#### ExcludedCoins (was ExcludedPairs pre v1.4)

    "ExcludedCoins": "SAFEX,BNB,BTS,BTA,DAR,DRACO,SLING,CRYPT,DOGE,UNO,SC,INCNT,NAUT,SJCX,NOTE,TKN,TIME"

These are pairs where no config is generated. The default list is made from coins that are or will be delisted from Bittrex. 

#### EnabledCoinsOnly (was EnabledPairsOnly pre v1.4)

    "EnabledCoinsOnly": "ETH,LTC"

Basically the opposite of ExcludedCoins. Coins here will be the only ones configuration is generated for. If a coin is on the Excluded list and Enabled list, then the coin will be not have any config generated for it. (Excluded has precedence). If you want to have coins on SomOnlyCoins and you use the EnabledCoinsOnly feature you need to enable them on this list first before you can use them on SomOnlyCoins

#### SomOnlyCoins (was SomOnlyPairs pre v1.4)

    "SomOnlyCoins": "SAFEX,BNB,BTS,BTA,DAR,DRACO,SLING,CRYPT,DOGE,UNO,SC,INCNT,NAUT,SJCX,NOTE,TKN,TIME"

These are pairs where coins are forced into sell only mode. 

#### DcaExcludedCoins (was DcaExcluded pre v1.4)

    "DcaExcludedCoins": "XRP"

These are pairs where DCA is always false no matter what the override

#### MaxTrailingProfit (this is only used when UseCalculatedTrailings is true in hostsettings from v1.4)

    "MaxTrailingProfit": "0.25"

This is the maximum value the calculated trailing profit can be. All TrailingProfitOffset are based off this value. It is translated to the ALL_trailing_profit property. See [here](https://github.com/mehtadone/PTFeeder/wiki/Trailing-Volatility) for more info about calculated trailing values

#### MinTrailingBuy ((this is only used when UseCalculatedTrailings is true in hostsettings from v1.4))

    "MinTrailingBuy": "0.05"

This is the minimum value the calculated trailing buy can be. See [here](https://github.com/mehtadone/PTFeeder/wiki/Trailing-Volatility) for more info about calculated trailing values

#### MinTrailingProfit

    "MinTrailingProfit": "0.05"

This is the minimum value the trailing profit can be. 

#### TrailingProfit (from v1.4 and used only when UseCalculatedTrailings is false in hostsettings.json)

    "TrailingProfit": "0.5"

This is the base value for your trailing profit. 

#### TrailingBuy (from v1.4 and used only when UseCalculatedTrailings is false in hostsettings.json)

    "TrailingBuy": "0.5"

This is the base value for your trailing profit. 

#### SellStrategy

    "SellStrategy": "GAIN"

This is the sell strategy. This gets translated to ALL_sell_strategy. 

#### MinBuyPrice

    "MinBuyPrice": "0.0055"

This gets translated to ALL_min_buy_price 

#### MinBuyVolume (from v.1.3.6)

    "MinBuyVolume": "500"

This gets translated to ALL_min_buy_volume 

#### MaxBuySpread

    "MaxBuySpread": "1"

This gets translated to ALL_max_buy_spread. This is an optional property

#### MinProfit

    "MinProfit": "1"

This gets translated to ALL_min_profit. Only applicable if your sell strategy is HIGHBB. This is an optional property

#### BuyAvailableVolumeTrigger (from v1.4.0)

    "BuyAvailableVolumeTrigger": "150"

This gets translated to ALL_buy_available_volume_trigger in pairs.properites. This is an optional property

#### RebuyTimeout (from v1.4.0)

    "RebuyTimeout": "5"

This gets translated to ALL_rebuy_timeout in dca.properites. This is an optional property

#### DcaTrailingBuy

    "DcaTrailingBuy": "0.15"

This is the base value of the DCA trailing buy. This is used for generation in dca.properties. Note that this is not pair specific.  

#### DcaTrailingProfit

    "DcaTrailingProfit": "0.15"

This is the base value of the DCA trailing profit. This is used for generation in dca.properties. Note that this is not pair specific.  

#### DcaMinBuyBalance

    "DcaMinBuyBalance": "10"

This is the property that gets translated to min_buy_balance in dca.properties. If UseMinBuyBalancePercentage is set to true, this should be a percentage value.  


#### DcaMaxCost

    "DcaMaxCost": "0"

This is the property that gets translated to max_cost in dca.properties. 

#### DcaMaxBuyTimes

    "DcaMaxBuyTimes": "5"

This is translated to max_buy_times in dca.properites. Note this is not pair specific. 

#### DcaSellStrategy

    "DcaSellStrategy": "GAIN"

This is translated to sell_strategy in dca.properites. Note this is not pair specific. 

#### DcaSellValue

    "DcaSellValue": "0.75"

This is translated to sell_value in dca.properites. Note this is not pair specific. 

#### DcaSellTrigger

    "DcaSellTrigger": "0.6"

This is translated to sell_trigger in dca.properites. Note this is not pair specific. This is an optional property

#### DcaMaxBuySpread

    "DcaMaxBuySpread": "1.5"

This is translated to max_buy_spread in dca.properites. Note this is not pair specific. This is an optional property

#### DcaBuyAvailableVolumeTrigger (from v1.4.0)

    "DcaBuyAvailableVolumeTrigger": "150"

This gets translated to buy_available_volume_trigger in dca.properites. Note this is not pair specific. This is an optional property

#### DcaRebuyTimeout (from v1.4.0)

    "DcaRebuyTimeout": "5"

This gets translated to rebuy_timeout in dca.properites. Note this is not pair specific. This is an optional property



#### TopCurrenciesToCheck

    "TopCurrenciesToCheck": "50"

When measuring top coins trend, this is how many top coins to check by volume from the exchanges that you have configured PT Feeder for. In this example, the top 50 coins will be checked and their price change over the MinutesToMeasureTrend property and the average change calculated. This average is used for the MaxTopCoinAverageChange property. 

#### MinutesToMeasureTrend

    "MinutesToMeasureTrend": "120"

This is how many minutes to measure the shorter trend, up to a maximum of 4320. It is used to measure top coins trends, BTC trend and the trend of each individual coin.

#### MinutesForLongerTermTrend

    "MinutesForLongerTermTrend": "720"

This is how many minutes to measure the longer trend, up to a maximum of 4320. It is used for the LongerTermPriceChange offset grouping