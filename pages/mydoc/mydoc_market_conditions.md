---
title: Market Conditions
sidebar: mydoc_sidebar
permalink: mydoc_market_conditions.html
folder: mydoc
---

PT Feeder is always in one market condition. Each market condition has its corresponding folder where any non generated properties by PT Feeder can be added to the corresponding txt file. 

### Market Conditions

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