---
title: Volatility Calculations
sidebar: mydoc_sidebar
permalink: mydoc_volatility_calculations.html
folder: mydoc
---

PT Feeder calculates the volatility of each coin to be used in multiple places. 

It does this by looking at all the five minute candles over the period defined in MinutesToMeasureTrend. For example, if `MinutesToMeasureTrend` was 60 in appsettings.json, then it would use 12 candles for the calculation. 

It then takes the open price and the high price to see what was its upside movement of each of these and then gets an average of all the candles in that period. This is what PT Feeder calls the **upside volatility**. The same applies for the open and low price and is what PT Feeder calls the **downside volatility**. 

### Where this is used. 

#### Trailing Values

If CalculateTrailingValues is set to true in hostsettings.json, then for the base of the trailing profit, the upside volatility divided by two is used as the base from which to offset. It is divided by two because if we used the actual upside volatility, then we would be trailing the candle up to the top and then all the way back to the open again. The same goes for trailing buy and the downside volatility. 

#### Offset Groupings

You can also apply offsets based on the actual upside and downside volatility. You can also take the addition of these two to offset the whole candle size average in a grouping called AverageCandleSize