---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Configuration
description: How to setup PT Feeder, how offsets and overrides work and the volatility calculations and how they relate to trailing. 

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Installation
        url: '/docs/installation'
    next:
        content: Problem Solving
        url: '/docs/problem_solving'
---

This is one of two basic configuration files for PTF. It contains some basic information:


### Section: Host


The config file is split into sections All these sections are surrounded by curly brackets like this

    "Host": {
      "ProfitTrailerFolder1": "",
      "ProfitTrailerFolder2": "",
      "HostName": "BTC",
      ...
    },

The Host section is the first one containing these variables:

#### Folder Locations

    "ProfitTrailerFolder1": "/opt/bot/trex",

This needs to point to the root directory of Profit Trailer. 

Note that windows path will need double \, for example `C:\\Users\\HeMan\\Desktop\\trex\\PT`

As PT Feeder can support up to 4 Profit Trailer bots, you can add the following to your hostsettings.json file: 

    "ProfitTrailerFolder2": "",
    "ProfitTrailerFolder3": "",
    "ProfitTrailerFolder4": "",

On versions prior to 1.4.0, see [here](https://github.com/mehtadone/PTFeeder/wiki/Pre-1.4-Folder-Locations-in-hostsettings.json)

#### HostName

    "HostName": "My PT-Feeder Bot1",

The Name of your instance. When running multiple instances this helps to separate them in Telegram Messages.

#### LicenseKey

    "LicenseKey": "XXXX-XXXX-XXXX-XXXX",

This is the license key for PT Feeder provided to you by your reseller. Note that you also need to register your API key that you use on your bot with the PT Feeder License bot on Telegram. See our [License Activation page](https://github.com/mehtadone/PTFeeder/wiki/License-Registration-and-Activation) about details here.

#### ServerUrls (leave default)

    "ServerUrls": "http://localhost:5010",

This is for later use and currently not used. Please leave the defaults in there. In the rare cased where this port (5010) is used on the system just change it to whatever free port.

#### MarketConditionCheckInMinutes

    "MarketConditionCheckInMinutes": "5",

This is how often PT Feeder should check for changes in the market condition. 

#### CalculateTrailingValues

    "CalculateTrailingValues": "true",

PT Feeder by default [calculates the optimal trailing buy and profit](https://github.com/mehtadone/PTFeeder/wiki/Trailing-Volatility) based on historic candles. Several settings use this calculation as a base for the configured [offsets](https://github.com/mehtadone/PTFeeder/wiki/Trailing-Calculation). 

If `CalculateTrailingValues` is set to `false`, the value set in `MaxTrailingBuy` (appsettings.json) is used as the base and the values from candles are not used. 

If set to `true` the candles are used and the `MaxTrailingBuy` value will define define the cap that this value can get to. The same is true for `MaxTrailingProfit`

#### UseMaxCostPercentage

    "UseMaxCostPercentage": "true",

If this is set to `true`, then the `Cost` value in appsettings.json will use a percentage of your TCV. If this is set to false, then the `Cost` is an absolute value. 

#### UseMinBuyBalancePercentage

    "UseMinBuyBalancePercentage": "true",

If this is set to `true`, then the `MinBuyBalance` value in appsettings.json will use a percentage of your TPV. If this is set to `false`, then the `MinBuyBalance` is an absolute value.

#### BackupTradingFiles (from 1.3.5)

    "BackupTradingFiles": "true",

Automatically create backups of your existing .properties files in your Profit Trailer trading directory on startup of PT Feeder. This can be switched off by settings this to false. 

#### TurnsToRegenerateFiles (from 1.3.5)

    "TurnsToRegenerateFiles": "5",

PT Feeder will regenerate Profit Trailer properties files every market condition change or this many times regardless. The default is 5.

#### VolatilityDivider (from 1.3.5)

    "VolatilityDivider ": "2",

When using CalculateTrailingValues, the default divisor of the upside or downside volatility is 2. This can be changed here. 

#### TelegramBotId and TelegramChatId`

    "TelegramBotId": "4178xxx:AAxxxxxxxxxxxxxxTY",
    "TelegramChatId": "1xxxxx6",

The BotId and ChatId of your Telegram Bot if you are going to use one. PTF will notify you of market changes via this bot. Keep this secret.

#### Test Mode (from version 1.3.3)

    "TestMode": "true",

If the test mode is set to true, then BTC_DOGE_trading_enabled = false, for all pairs. 

### Section: Serilog

    "Serilog": {
      "MinimumLevel": "Information"
    },

Defines the log level. When set to `Debug` more information is logged to the console. Might help tracking down problems but usually `Information` should be good.

## Configuration files of PTF

All configuration files of PTF are located within the `config` sub folder. When updating PTF to a new version, be sure not to overwrite this folder. Depending on the changes from the last update, the configuration files may need to be altered. Please be sure to review the Changelog for notes on that and/or also review the config files included in the download package to make sure you have everything important in your config.

## Environment variable (from v1.4.0)

If you would like to move your config folder outside of your PT Feeder directory, the location specified in the environment variable PTFEEDER_CONFIG_DIRECTORY will be checked first. 


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


PT Feeder is always in one market condition. Each market condition has its corresponding folder where any non generated properties by PT Feeder can be added to the corresponding txt file. 

## Market Conditions

Each section of the market condition is checked sequentially. 

    "FolderName": "01-superbear",
    "MaxTopCoinAverageChange": "-3",
    "MinBaseCoinPriceChange": "2",
    "SellOnlyMode": "true",
    "DcaEnabled": "false",
    "TrailingProfitOffset": "-20",
    "SellValueOffset": "-20"

In this example above we have: 

  `"MaxTopCoinAverageChange": "-3"`

This is saying that if the maximum change of the top coins from your configured exchanges is less than this max of -3% (e.g -5%), then we are in this market condition and will use the below offsets. The number of coins whose percentage price change is measured is configured in TopCurrenciesToCheck in the [General Section](https://github.com/mehtadone/PTFeeder/wiki/appsettings.json---General) of appsettings.json. 

 `"MinBaseCoinPriceChange": "3",`

This is saying that if the minimum change of your base coin (e.g ETH or BTC) against USDT is more than this min of 2% (e.g 5%), then we are in this market condition and will use the below offsets. **Note that this does not work currently when  your base coin is USDT.**

The above two are OR. If one OR the other is true, then this is the market condition. You can also use just one of these properties, if so desired. Just delete the property you do not wish to use. 

The rest of the items can be anything from the [pairs offset list](https://github.com/mehtadone/PTFeeder/wiki/appsettings.json---Offset-List) or [DCA offset list](https://github.com/mehtadone/PTFeeder/wiki/appsettings.json---DCA-Offset-List). 

## Action groupings 

Each of the following section are optional. If you do not need them, you can remove any section or grouping but be sure to keep the json format. You can copy and paste the contents of the appsettings.json file to [this site](https://jsonformatter.curiousconcept.com/) to make sure it is correct. 

Remember as with anything in the appsettings.json, the sections in each grouping are checked sequentially in order, so the first group that matches will be the group settings that are used. 

Below are the criteria for each section to be true. For each of the section, you can add any property from the offset list. You can also add as many sections in each grouping as you like. 

### Price

`"MaxPrice": "0.001"`

If the price is lower than this maximum, then these offsets will apply. In the case above, anything lower than 0.001 BTC, this section will apply. 

### Volume

`"MaxVolume": "200"`

If the volume is lower than this maximum, then these offsets will apply. In the case above, anything lower than 200 BTC, this section will apply. Note that this over a 24 hour period. 

### PriceTrendChange

`"MaxPriceTrendPercentageChange": "-5"`

If price change for a coin is less than this maximum over the period defined in MinutesToMeasureTrend, then the offsets defined will apply. This is the price at the end of the time window subtracted from the price and the start of the time window. 

### LongerTermPriceChange 

`"MaxPriceTrendPercentageChange": "-5"`

If price change for a coin is less than this maximum over the period defined in MinutesForLongerTermTrend, then the offsets defined will apply. This is the price at the end of the time window subtracted from the price and the start of the time window. 

### Exchange (version 1.4 +)

`"ExchangeName": "Bittrex"`

Offsets can be applied if the exchange name matches the ExchangeName property. Can be used to alter things like the MinBuyVolume per exchange if PT Feeder is being used to drive multiple bots on different exchanges. The options are Bittrex, Poloniex and Binance

### HighLowPricePercentage (version 1.4 +)

`"MaxHighLowPricePercentage": "-5"`

This is a property to try and check the variance of the price from the norm and is over the MinutesToMeasureTrend time window. The math is: 

		firstVariance = (high.ActualPrice - low.ActualPrice) / 2
		medianVariance = high.ActualPrice - firstVariance
		highLowPercentage = (latestActualPrice - medianVariance) / latestActualPrice * 100

### LongerTermHighLowPricePercentage  (version 1.4 +)

`"MaxHighLowPricePercentage": "-5"`

This is a property to try and check the variance of the price from the norm and is over the LongerTermMinutesToMeasureTrend time window. The math is the same as the HighLowPricePercentage

### DownsideVolatility

`"MaxChangeFromOpen": "0.1"`

The downside volatility is measured as the average change as a percentage between the open and low of the 5 minute candles over a period defined in MinutesToMeasureTrend. If this is less than 0.1%, then the offsets apply. 

### UpsideVolatility

`"MaxChangeFromOpen": "0.1"`

The upside volatility is measured as the average change as a percentage between the open and high of the 5 minute candles over a period defined in MinutesToMeasureTrend. If this is less than 0.1%, then the offsets apply. 

### UpsideDownsideVolatilityDifference  (version 1.4 +)

`"MaxUpsideDownsideVolatilityDifference": "0.1"`

This is the difference from the upside and downside volatility. 

### AverageCandleSize

`"MaxPercentageSizeOfPrice": "0.1"`

The average candle size is the addition of the upside and downside volatiltiy. If this is less than 0.1%, then the offsets apply. 

## Offset Calculation 

With the offset calculation method, if you want a negative number to move further away from zero, simply apply a negative offset. If you want it to move closer to zero, apply a positive offset. Same applies for positive values as you would expect. Move away from zero, apply a positive offset. To move closer to zero, apply a negative offset.

For upgrading to 1.3.3 from 1.3.2 or before, you need to look at any setting that has a **negative Default value** in the General section. Any offsets used later in the appsettings.json file need to be changed to go in the direction you wish to go. 

`e.g If BuyValueOffset was 50(%) previously to go from -3 to -4.5, this will need to be changed to -50 to go from -3 to -4.5`

The offset calculation in version 1.3.3 and above is from an absolute number from your base setting: doesn't matter if its positive or negative. 

##### Offset Calculation Formula:

`BuyValue + (Absolute(BuyValue)/100 * BuyValueOffset)`

Here are some examples:

    BuyValue : "-10"
    BuyValueOffset: "-10"
    Result: -11 

another one

    BuyValue : "10"
    BuyValueOffset: "-10"
    Result: 9 

and one more with a positive offset

    BuyValue : "40"
    BuyValueOffset: "10"
    Result: 44 

***

## 0 Default

One thing to note if that if you have a 0 default value, none of the above calculations will take effect as a percentage of 0 is 0. The only workaround for this at the moment is using a very very small number such as 0.001 and using an offset based on that. 


## Overrides

As of version **1.5.0**, the Buy Strategy can be overridden in any grouping. This means you can do things like change buy strategies: 

* For each market condition
* For different volume coins
* For coins that have a long term downtrend. 
etc. 

The syntax to do this is: 

		"FolderName": "02-boring",
			"MaxTopCoinAverageChange": "0.5",
			"BuyStrategy": {
				"BuyValue": "10",
				"BuyStrategy": "LOWBB",
				"Weight": "55"
			}

 
The above is saying that if the top coins have changes less than 0.5%, then it is a boring market. In this market, I want to override my default buy strategy in the general section of appsettings.json with LOWBB with a buy value of 10. 

#### Weight

The weight is a mandatory property which is required when there are one or more buy strategy overrides. For example, if you have overriden the buy strategy to EMAGAIN in a boring market condition, and also LOWBB for high volume coins, then PT Feeder needs to know which one to choose. The one with the highest weight is chosen. If there are two buy strategy overrides for the same coin, then the first one that it finds will be used. 

#### Offsets

Any BuyValueOffsets that you have in your configuration will be applied to the new buy value that you have used in your override. 

## Volatility Calculations

PT Feeder calculates the volatility of each coin to be used in multiple places. 

It does this by looking at all the five minute candles over the period defined in MinutesToMeasureTrend. For example, if `MinutesToMeasureTrend` was 60 in appsettings.json, then it would use 12 candles for the calculation. 

It then takes the open price and the high price to see what was its upside movement of each of these and then gets an average of all the candles in that period. This is what PT Feeder calls the **upside volatility**. The same applies for the open and low price and is what PT Feeder calls the **downside volatility**. 

### Where this is used. 

#### Trailing Values

If CalculateTrailingValues is set to true in hostsettings.json, then for the base of the trailing profit, the upside volatility divided by two is used as the base from which to offset. It is divided by two because if we used the actual upside volatility, then we would be trailing the candle up to the top and then all the way back to the open again. The same goes for trailing buy and the downside volatility. 

#### Offset Groupings

You can also apply offsets based on the actual upside and downside volatility. You can also take the addition of these two to offset the whole candle size average in a grouping called AverageCandleSize