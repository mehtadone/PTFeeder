---
title: Configuration
lang: en-US

meta:
  - name: Configuration
    content: How to setup PT Feeder, how offsets and overrides work and the volatility calculations and how they relate to trailing. 

sidebar: auto
---

The config files are split into sections All these sections are surrounded by curly brackets like this

```json{4}
    "Host": {
      "ProfitTrailerFolder1": "",
      "ProfitTrailerFolder2": "",
      "HostName": "BTC",
      ...
    },
```

## Hostsettings.json 

This files contains settings are for the running of the application.

### Section: Host 

#### Mandatory

#### Folder Locations

    "ProfitTrailerFolder1": "/opt/bot/trex",

This needs to point to the root directory of Profit Trailer. 

Note that windows path will need double \, for example `C:\\Users\\HeMan\\Desktop\\trex\\PT`

As PT Feeder can support up to 4 Profit Trailer bots, you can add the following to your hostsettings.json file: 

    "ProfitTrailerFolder2": "",
    "ProfitTrailerFolder3": "",
    "ProfitTrailerFolder4": "",

#### Profit Trailer Endpoint

    "ProfitTrailerApiEndPoint1": "http://locationhost:8081",

This is the location of your Profit Trailer monitoring page. PT Feeder saves your settings using the Profit Trailer api so needs to know this location to know where to send the generated config. 

Note that if you are using enforced SSL, you may need to give your full address as locahost may not be available on http. 

As PT Feeder can support up to 4 Profit Trailer bots, you can add the following to your hostsettings.json file: 

    "ProfitTrailerApiEndPoint1": "",
    "ProfitTrailerApiEndPoint2": "",
    "ProfitTrailerApiEndPoint3": "",

#### HostName

    "HostName": "My PT-Feeder Bot1",

The Name of your instance. When running multiple instances this helps to separate them in Telegram/Discord Messages and is the name of your config in PT. 

#### LicenseKey

    "LicenseKey": "XXXX-XXXX-XXXX-XXXX",

This is the license key for PT Feeder provided to you by your reseller. Note that you also need to register your API key that you use on your bot with the PT Feeder License bot on Telegram or Discord. See our [License Activation page](/installation.html#license-activation) about details here.

#### CalculateTrailingValues

    "CalculateTrailingValues": "true",

PT Feeder by default [calculates the optimal trailing buy and profit](/configuration.html#volatility-calculations) based on historic candles. Several settings use this calculation as a base for the configured [offsets](/configuration.html#offset-calculation). 

If `CalculateTrailingValues` is set to `false`, the value set in `MaxTrailingBuy` (appsettings.json) is used as the base and the values from candles are not used. 

If set to `true` the candles are used and the `MaxTrailingBuy` value will define define the cap that this value can get to. The same is true for `MaxTrailingProfit`

#### Optional

These are not in the default hostsettings file that comes with Feeder but you can add them if needs be. 

#### ServerUrls 

    "ServerUrls": "http://localhost:5010",

This is for later use and currently not used. Please leave the defaults in there. In the rare cased where this port (5010) is used on the system just change it to whatever free port.

#### MarketConditionCheckInMinutes

    "MarketConditionCheckInMinutes": "5",

This is how often PT Feeder should check for changes in the market condition. 

#### BackupTradingFiles 

    "BackupTradingFiles": "true",

PT Feeder will save a copy of the config it generates in the trading/backup directory of your Profit Trailer directory. 

#### TurnsToRegenerateFiles

    "TurnsToRegenerateFiles": "5",

PT Feeder will regenerate Profit Trailer properties files every market condition change or this many times regardless. The default is 5.

#### VolatilityDivider 

    "VolatilityDivider ": "2",

When using CalculateTrailingValues, the default divisor of the upside or downside volatility is 2. This can be changed here. 

#### TelegramBotId and TelegramChatId`

    "TelegramBotId": "4178xxx:AAxxxxxxxxxxxxxxTY",
    "TelegramChatId": "1xxxxx6",

The BotId and ChatId of your Telegram Bot if you are going to use one. PTF will notify you of market changes via this bot. Keep this secret.

#### DiscordBotToken and DiscordChatName`

    "DiscordBotToken": "",
    "DiscordChatName": "",

The BotToken and ChatToken of your Discord Bot if you are going to use one. PTF will notify you of market changes via this bot. Keep this secret.

#### Test Mode

    "TestMode": "true",

If the test mode is set to true, then BTC_DOGE_trading_enabled = false, for all pairs. 

### Section: Serilog 


    "Serilog": {
      "MinimumLevel": "Information"
    },


Defines the log level. When set to `Debug` more information is logged to the console. Might help tracking down problems but usually `Information` should be good.

## Appsettings.json 

The appsettings.json file contains all the settings for you to setup to generate your PT config file.

### PT Feeder naming convention

PT Feeder follows a naming convention to translate into PT properties. PT Feeder will split the property name by case and insert _ to generate the PT property. There are three types of config in Profit Trailer. Pairs, DCA and indicators. The prefix of the PT Feeder property name determines where the property which is translated to ends up. Lets take a few examples. No prefix means it will go to pairs. 

The common section and default section of the appsettings file will determine if it is a pair specific property or not. 

**1. A property called MaxTradingPairs in the Common section of appsettings.**

This has no prefix so will go into the pairs configuration. It will split at T and P. So this will get translation to Max_Trading_Pairs. 

**2. A property called DcaKeepBalance in the Common section of appsettings.**

This has a prefix of Dca so will go into the DCA configuration. It will split at K and B so will go to Keep_Balance. 

**3. A property called IndicatorsBbLength in the Common section of appsettings.**

This has a prefix of Indicators so will go into the indicators configuration. It will split at B and L so will go to Bb_Length.

**3. A property called MaxBuySpread in the Default section of appsettings**

This has no prefix so will go into the pairs config in PT.  It will be split at B and S and will have a DEFAULT property and a pair specific property. So this will go to DEFAULT_Max_Buy_Spread and ETH_Max_Buy_Spread for example. 

**4. A property called DcaMaxBuySpread in the Default section of appsettings.**

This has a DCA prefix so will go into the DCA config in PT. It will be split at B and S and will have a DEFAULT property and a pair specific property. So this will so to DEFAULT_Dca_Max_Buy_Spread and ETH_Dca_Max_Buy_Spread. 

### Section: PtFeeder 

The first section is the PtFeeder section and these are properties that are PT Feeder specific and **DO NOT** get converted to any PT property directly.

#### BaseCurrency

    "BaseCurrency": "BTC"

his is needed by Feeder for its queries to the exchange and used as the MARKET for PT.

#### Trailing calculation boundaries 

#### MaxTrailingBuy 

    "MaxTrailingBuy": "0.25"

This is the maximum value the calculated trailing profit can be. All TrailingBuyOffset are based off this value. It is AFTER the calculation, translated to the ALL_trailing_buy property. See [here](/configuration.html#volatility-calculations) for more info about calculated trailing values

#### MaxTrailingProfit 

    "MaxTrailingProfit": "0.25"

This is the maximum value the calculated trailing profit can be. All TrailingProfitOffset are based off this value. It is translated to the ALL_trailing_profit property. See [here](/configuration.html#volatility-calculations) for more info about calculated trailing values

#### MinTrailingBuy

    "MinTrailingBuy": "0.05"

This is the minimum value the calculated trailing buy can be. See [here](/configuration.html#volatility-calculations) for more info about calculated trailing values

#### MinTrailingProfit

    "MinTrailingProfit": "0.05"

This is the minimum value the trailing profit can be. 

#### Coin lists

#### ExcludedCoins

    "ExcludedCoins": "SAFEX,BNB,BTS,BTA,DAR,DRACO,SLING,CRYPT,DOGE,UNO,SC,INCNT,NAUT,SJCX,NOTE,TKN,TIME"

These are pairs where no config is generated. The default list is made from coins that are or will be delisted from Bittrex. 

#### EnabledCoinsOnly 

    "EnabledCoinsOnly": "ETH,LTC"

Basically the opposite of ExcludedCoins. Coins here will be the only ones configuration is generated for. If a coin is on the Excluded list and Enabled list, then the coin will be not have any config generated for it. (Excluded has precedence). If you want to have coins on SomOnlyCoins and you use the EnabledCoinsOnly feature you need to enable them on this list first before you can use them on SomOnlyCoins

#### SomOnlyCoins 

    "SomOnlyCoins": "SAFEX,BNB,BTS,BTA,DAR,DRACO,SLING,CRYPT,DOGE,UNO,SC,INCNT,NAUT,SJCX,NOTE,TKN,TIME"

These are pairs where coins are forced into sell only mode. 

#### HiddenCoins 

    "HiddenCoins": "SAFEX,BNB,BTS,BTA,DAR,DRACO,SLING,CRYPT,DOGE,UNO,SC,INCNT,NAUT,SJCX,NOTE,TKN,TIME"

These coins will be hidden from the PT Monitor. 

#### DcaExcludedCoins 

    "DcaExcludedCoins": "XRP"

These are pairs where DCA is always false no matter what the override

#### DcaIncludedCoins 

    "DcaIncludedCoins": "XRP"

These are pairs where DCA is enabled only for the ones on the list

#### Trend measurement 

#### TopCurrenciesToCheck

    "TopCurrenciesToCheck": "50"

When measuring top coins trend, this is how many top coins to check by volume from the exchanges that you have configured PT Feeder for. In this example, the top 50 coins will be checked and their price change over the MinutesToMeasureTrend property and the average change calculated. This average is used for the MaxTopCoinAverageChange property. 

#### MinutesToMeasureTrend

    "MinutesToMeasureTrend": "120"

This is how many minutes to measure the shorter trend, up to a maximum of 4320. It is used to measure top coins trends, BTC trend and the trend of each individual coin.

#### MinutesForLongerTermTrend

    "MinutesForLongerTermTrend": "720"

This is how many minutes to measure the longer trend, up to a maximum of 4320. It is used for the LongerTermPriceChange offset grouping


### Section: Common 

All properties in this section get translated to properties in PT config, without DEFAULT in front of them and follow the PT Feeder naming convention and **DO NOT** have pair specific overrides. To see all the properties possible, familiarise yourself with the [Profit Trailer wiki](http://wiki.profittrailer.com/doku.php)

Examples of properties that can be placed in this section are:

```json{4}
    "MaxTradingPairs": "10"
    "StartBalance": "2.1827",


    //DCA
    "DcaKeepBalance": "0",
    "DcaKeepBalancePercentage": "0",

    // Indicators
    "IndicatorsBbStd": "2",
    "IndicatorsBbCandlePeriod": "300",
    "IndicatorsBbLength": "20",
```

### Section: Defaults

All properties in this section get translated to PT properties, based on the PT Feeder naming convention, with DEFAULT_ at the beginning and also have pair specific overrides. To see all the properties possible, familiarise yourself with the [Profit Trailer wiki](http://wiki.profittrailer.com/doku.php)

Examples of what can be placed in this section are below:

```json{4}
 
    "InitialCost": "0",
    "InitialCostPercentage": "7",

    "ABuyStrategy": "EMACROSS",
    "ABuyValue": "-0.01",
    "ABuyValueLimit": "-3",

    "DcaEnabled": "-1",
    "MaxBuySpread": "3",
    "MinOrderbookVolumePercentage": "101",
    "RebuyTimeout": "15",

    // Sell strategy properties
    "ASellStrategy": "GAIN",
    "ASellValue": "0.5",

    // coin filters
    "MinBuyPrice": "0",
    "MinBuyVolume": "500",

    // DCA Properties
    //buy
    "DcaMaxCost": "1",
    "DcaMaxBuyTimes": "20",

    // DCA buy strategies
    "DcaABuyStrategy": "EMACROSS",
    "DcaABuyValue": "-0.01",
    "DcaABuyValueLimit": "-10",

    "DcaBuyPercentage": "100",
    "DcaBuyTrigger": "-1",

    // DCA sell strategies
    "DcaASellStrategy": "GAIN",
    "DcaASellValue": "1.5",
```
### Section: Groupings

The groupings in the appsettings file are your triggers and the action you want to happen to it if the trigger condition is true. 

There are two types of groupings, ones that apply to all pairs and the only groupings that fall into this section are Market Conditions and Exchanges. 

All other groupings are pair specific and only apply if the trigger is true based on the pair specific trend or property. 

Each groupings follows the same pattern. A trigger and the offsets or overrides to apply. Below is an example. 

```json{4}
 "PriceTrendChangeGrouping": {
    "Configs": [
      {
        "MaxPriceTrendPercentageChange": "-10",   // <--- THIS IS THE TRIGGER 
        "MinBuyVolumeOffset": "-50", // <--- THESE ARE OFFSETS TO APPLY
        "StartBalanceOffset": "-31.28",
        "Override": {
          "BBuyValue": "20" <--- THESE ARE OVERRIDES
          "BBuyStrategy": "LOWBB",
          "Weight": "10"
        }
      }
    ]
  },
``` 
 

### Section: Market Conditions

In the below example, there are three market conditions, bear, boring and bull. The market condition grouping can have multiple triggers, and also needs a `name` property. Multiple triggers are treated as an OR, which means if any of the triggers are true, then the market condition applied. The triggers that can be used in market conditions are described below.

Each section of the grouping is checked sequentially and only the first one that is true will be applied.  

```json{4}
"MarketConditionsGrouping": {
    "Configs": [
      {
        "Name": "Bear", // <- A name to identify the market condition
        "MaxTopCoinAverageChange": "-5",
        "DcaStopLossTriggerOffset": "-100",
        "ABuyValueOffset": "-500", 
        "ABuyValueLimitOffset": "-200"
      },
      {
        "Name": "Boring",
        "MaxTopCoinAverageChange": "2.5"
      },
      {
        "Name": "Bull",
        "MaxTopCoinAverageChange": "5",
        "InitialCostPercentageOffset": "-20"
      }
    ]
  },
```

#### Market condition triggers

  `"MaxTopCoinAverageChange": "-3"`

This is saying that if the maximum change of the top coins from your configured exchanges is less than this max of -3% (e.g -5%), then we are in this market condition and will use the below offsets. The number of coins whose percentage price change is measured is configured in TopCurrenciesToCheck in the [Default Section](/configuration.html#section-defaults) of appsettings.json. This uses the MinutesToMeasureTrend from the Default section of appsettings. 

  `"MaxTopCoinLongTermAverageChange": "-3"`

Same as above buts uses the MinutesForLongerTermTrend from the Default section of appsettings. 

 `"MinBaseCoinPriceChange": "3",`

This is saying that if the minimum change of your base coin (e.g ETH or BTC) against USDT is more than this min of 2% (e.g 5%), then we are in this market condition and will use the below offsets. This uses the MinutesToMeasureTrend from the Default section of appsettings. **Note that this does not work currently when  your base coin is USDT.**

  `"MinBaseCoinLongTermPriceChange": "-3"`

Same as above buts uses the MinutesForLongerTermTrend from the Default section of appsettings. 

 `"MaxVwapTrendChange": "3",`

This caluclated the volume weighted average price for all coins that have been selected by your PT Feeder config and the value is an average of these. This excludes coins in your SOM list, below your min volume and in your excluded list. This uses the MinutesToMeasureTrend from the Default section of appsettings. 

  `"MaxTopCoinAverageChange": "-3"`

Same as above buts uses the MinutesForLongerTermTrend from the Default section of appsettings. 

### Section: Pair groupings 

Each of the following section are optional. If you do not need them, you can remove any section or grouping but be sure to keep the json format. You can copy and paste the contents of the appsettings.json file to [this site](https://jsonformatter.curiousconcept.com/) to make sure it is correct. 

Remember as with anything in the appsettings.json, the sections in each grouping are checked sequentially in order, so the first group that matches will be the group settings that are used. 

Below are the triggers for each section to be true. For each of the section, you can offet or override any PT property. You can also add as many sections in each grouping as you like. 

To add a grouping, this is the format:

```json{4}
 "DownsideVolatilityGrouping": { <-- This is the grouping name
    "Configs": [
      {
        "MaxChangeFromOpen": "1.5" <-- This is the trigger
      },
      {
        "MaxChangeFromOpen": "1000", <-- This is the trigger. 
        "SellOnlyModeEnabled": "true",
        "DcaASellValueOffset": "-50", 
      }
    ]
  }
```

#### PriceGrouping

**Trigger** - `"MaxPrice": "0.001"`

If the price is lower than this maximum, then these offsets will apply. In the case above, anything lower than 0.001 BTC, this section will apply. 

#### VolumeGrouping

**Trigger** `"MaxVolume": "200"`

If the volume is lower than this maximum, then these offsets will apply. In the case above, anything lower than 200 BTC, this section will apply. Note that this over a 24 hour period. 

#### PriceTrendChangeGrouping

**Trigger** `"MaxPriceTrendPercentageChange": "-5"`

If price change for a coin is less than this maximum over the period defined in MinutesToMeasureTrend, then the offsets defined will apply. This is the price at the end of the time window subtracted from the price and the start of the time window.

A community trading view script that shows this has been developed by Squiggles and can be found [here](https://uk.tradingview.com/script/npxFL6cG-PTF-Short-and-Long-Term-Price-Change-for-Profit-Trailer-Feeder/) 

#### LongerTermPriceChangeGrouping

**Trigger** `"MaxPriceTrendPercentageChange": "-5"`

If price change for a coin is less than this maximum over the period defined in MinutesForLongerTermTrend, then the offsets defined will apply. This is the price at the end of the time window subtracted from the price and the start of the time window. 

A community trading view script that shows this has been developed by Squiggles and can be found [here](https://uk.tradingview.com/script/npxFL6cG-PTF-Short-and-Long-Term-Price-Change-for-Profit-Trailer-Feeder/) 

#### ExchangeGrouping

**Trigger** `"ExchangeName": "Bittrex"`

Offsets can be applied if the exchange name matches the ExchangeName property. Can be used to alter things like the MinBuyVolume per exchange if PT Feeder is being used to drive multiple bots on different exchanges. The options are Bittrex, Poloniex and Binance

#### HighLowPricePercentageGrouping

**Trigger** `"MaxHighLowPricePercentage": "-5"`

This is a property to try and check the variance of the price from the norm and is over the MinutesToMeasureTrend time window. The math is: 

		firstVariance = (high.ActualPrice - low.ActualPrice) / 2
		medianVariance = high.ActualPrice - firstVariance
		highLowPercentage = (latestActualPrice - medianVariance) / latestActualPrice * 100
       
A community trading view script that shows this has been developed by Squiggles and can be found [here](https://uk.tradingview.com/script/QdZJvmj5-PTF-HighLowPricePercentage-for-Profit-Trailer-Feeder/) 

#### LongerTermHighLowPricePercentageGrouping

**Trigger** `"MaxHighLowPricePercentage": "-5"`

This is a property to try and check the variance of the price from the norm and is over the LongerTermMinutesToMeasureTrend time window. The math is the same as the HighLowPricePercentage

A community trading view script that shows this has been developed by Squiggles and can be found [here](https://uk.tradingview.com/script/QdZJvmj5-PTF-HighLowPricePercentage-for-Profit-Trailer-Feeder/) 

#### DownsideVolatilityGrouping

**Trigger** `"MaxChangeFromOpen": "0.1"`

The downside volatility is measured as the average change as a percentage between the open and low of the 5 minute candles over a period defined in MinutesToMeasureTrend. If this is less than 0.1%, then the offsets apply. 

A community trading view script that shows this has been developed by Squiggles and can be found [here](https://uk.tradingview.com/script/4Mn1YoY8-PTF-UpDownVolatility-for-Profit-Trailer-Feeder/) 

#### UpsideVolatilityGrouping

**Trigger** `"MaxChangeFromOpen": "0.1"`

The upside volatility is measured as the average change as a percentage between the open and high of the 5 minute candles over a period defined in MinutesToMeasureTrend. If this is less than 0.1%, then the offsets apply. 

A community trading view script that shows this has been developed by Squiggles and can be found [here](https://uk.tradingview.com/script/4Mn1YoY8-PTF-UpDownVolatility-for-Profit-Trailer-Feeder/) 

#### UpsideDownsideVolatilityDifferenceGrouping

**Trigger** `"MaxUpsideDownsideVolatilityDifference": "0.1"`

This is the difference from the upside and downside volatility. 

#### AverageCandleSizeGrouping

**Trigger** `"MaxPercentageSizeOfPrice": "0.1"`

The average candle size is the addition of the upside and downside volatiltiy. If this is less than 0.1%, then the offsets apply. 

#### NewCoinsGrouping

**Trigger** `"CoinAge": "0.1"`
**ExtraProperty** `"TimeUnit":"Days"`

Apply offsets and overrides for any coin that has an age younger than the CoinAge specified. The extra property, TimeUnit must be provided and can be Days, Hours, Minutes, Seconds or Milliseconds. 

## Offset Calculation 

With the offset calculation method, if you want a negative number to move further away from zero, simply apply a negative offset. If you want it to move closer to zero, apply a positive offset. Same applies for positive values as you would expect. Move away from zero, apply a positive offset. To move closer to zero, apply a negative offset.

For upgrading to 1.3.3 from 1.3.2 or before, you need to look at any setting that has a **negative Default value** in the General section. Any offsets used later in the appsettings.json file need to be changed to go in the direction you wish to go. 

`e.g If BuyValueOffset was 50(%) previously to go from -3 to -4.5, this will need to be changed to -50 to go from -3 to -4.5`

The offset calculation in version 1.3.3 and above is from an absolute number from your base setting: doesn't matter if its positive or negative. 

### Offset Calculation Formula

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

### Default of 0

One thing to note if that if you have a 0 default value, none of the above calculations will take effect as a percentage of 0 is 0. The only workaround for this at the moment is using a very very small number such as 0.001 and using an offset based on that. 


## Overrides

As well as offsetting, you can also override any property in any grouping. 

* For each market condition
* For different volume coins
* For coins that have a long term downtrend. 
etc. 

The syntax to do this is: 
``` json{4}
		"FolderName": "02-boring",
			"MaxTopCoinAverageChange": "0.5",
			"Overrides": {
				"BuyValue": "10",
				"BuyStrategy": "LOWBB",
				"Weight": "55"
			}
```

 
The above is saying that if the top coins have changes less than 0.5%, then it is a boring market. In this market, I want to override my default buy strategy in the general section of appsettings.json with LOWBB with a buy value of 10. 

#### Weight

The weight is a property which is required when there are one or more buy strategy overrides. If it is not supplied, a weight of 0 is used. 

For example, if you have overriden the buy strategy to EMAGAIN in a boring market condition, and also LOWBB for high volume coins, then PT Feeder needs to know which one to choose. The one with the highest weight is chosen. If there are two buy strategy overrides for the same coin, then the first one that it finds will be used. 

#### Offsets

Any BuyValueOffsets that you have in your configuration will be applied to the new buy value that you have used in your override. 

## Volatility Calculations

PT Feeder calculates the volatility of each coin to be used in multiple places. 

It does this by looking at all the five minute candles over the period defined in MinutesToMeasureTrend. For example, if `MinutesToMeasureTrend` was 60 in appsettings.json, then it would use 12 candles for the calculation. 

It then takes the open price and the high price to see what was its upside movement of each of these and then gets an average of all the candles in that period. This is what PT Feeder calls the **upside volatility**. The same applies for the open and low price and is what PT Feeder calls the **downside volatility**. 

To see this in action, PuppyTherapy created a TradingView script [here](https://www.tradingview.com/script/4zHMsNkV-PT-Feeder-Upside-Downside-Volatility-Difference-Candlesize/) and 

### Where this is used. 

#### Trailing Values / CalculateTrailingValues

If CalculateTrailingValues is set to true in hostsettings.json, then for the base of the trailing profit, the upside volatility divided by two is used as the base from which to offset. It is divided by two because if we used the actual upside volatility, then we would be trailing the candle up to the top and then all the way back to the open again. The same goes for trailing buy and the downside volatility. 

#### Offset Groupings

You can also apply offsets based on the actual upside and downside volatility. You can also take the addition of these two to offset the whole candle size average in a grouping called AverageCandleSize

## Moving config directory

If you would like to move your config folder outside of your PT Feeder directory, the location specified in the environment variable PTFEEDER_CONFIG_DIRECTORY will be checked first. 

The appsettings.json file is the second file of PTF configuration. It contains all your important tuning values that you wish to act it upon. Be sure to set this all right to your likings.

## Trading View Scripts

A collection of community developed tradingview scripts can be found below:

- [HighLowPriceChangePercentage by Squiggles](https://uk.tradingview.com/script/QdZJvmj5-PTF-HighLowPricePercentage-for-Profit-Trailer-Feeder/)
- [Upside and downside volatility by Squiggles](https://uk.tradingview.com/script/4Mn1YoY8-PTF-UpDownVolatility-for-Profit-Trailer-Feeder/)
- [Upside and downside volatility by PuppyTherapy](https://www.tradingview.com/script/4zHMsNkV-PT-Feeder-Upside-Downside-Volatility-Difference-Candlesize/)
- [Price Trend Change by Squiggles](https://uk.tradingview.com/script/npxFL6cG-PTF-Short-and-Long-Term-Price-Change-for-Profit-Trailer-Feeder/)