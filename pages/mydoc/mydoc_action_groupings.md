---
title: Action groupings
sidebar: mydoc_sidebar
permalink: mydoc_action_groupings.html
folder: mydoc
---

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