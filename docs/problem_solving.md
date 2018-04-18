---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Problem solving
description: Common errors and their solutions

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Configuration
        url: '/docs/configuration'
    next:
        content: Home
        url: '/'
---
Here's a list of frequently appearing errors and some explanation and help added to it.

#### Anything that says "Bad Json"

Your hostsettings.json or appsettings.json has some incorrect syntax in it. Copy the contents of the file into a site like [this](http://jsonlint.com) and see where it notices any errors. 

#### Api key errors.

Check that the correct api key is registered with the PT Feeder api bot. It needs to be the default_api_key from your application.properties in your PT installation directory. The key in hostsettings.json of PT feeder is the one given to you by your reseller. If you want to see the key it is checking for and what is authorised, set the minimal log level in hostsettings.json to "Debug" from "Information"

#### PT Feeder is overwriting my Profit Trailer config.

THIS IS WHAT PT FEEDER DOES. Please read the wiki again and watch any youtube videos on what it does. 

#### How do I set up hodl coins?

Add your pair to ' "ExcludedPairs": "" in appsettings.json and restart PT Feeder. For example, "ExcludedPairs": "XRP,LTC". Wait for it create pairs.properties. No config will be generated for these pairs and default All_trading_enabled will be false so these coins will not be traded. 

#### Kestral Error

This means the port in "ServerUrls" in hostsettings.json is already in use. Please change to another one and restart PT Feeder

#### ERROR: -1013, Filter failure: MIN_NOTIONAL

This is from the Profit Trailer announcement channel: 

`It may seem that binance has increased their minimum amount needed to buy.`

`Please change your BTC  in PAIRS.properties`
`ALL_max_cost = 0.0022`

`also in configuration.properties`
`BTC_dust = 0.00205`

`do this if you are receiving the min_notional error`

`I am noticing that ETH dust level has also changed. `
`Many ETH pairs on BINANCE now require:`
`ALL_max_cost = 0.025 <- recommended`

`also in configuration.properties`
`ETH_dust = 0.0205`

#### Buy will exceed min_buy_balance.

Please read this [wiki](https://wiki.profittrailer.io/doku.php/pairs.properties) and see how min_buy_balance/min_buy_balance_percentage and max_cost/max_cost_percentage works. 

Your settings are setup so you cannot make any further buys due to existing balance. You can make changes to these properties in [appsettings](https://github.com/mehtadone/PTFeeder/wiki/appsettings.json---General) for PT Feeder and restart PT Feeder. 

Important properties to look at in PT Feeder appsettings are DcaMinBuyBalance, MinBuyBalance and MaxCost and UseMinBuyBalancePercentage and UserMaxCostPercentage in hostsettings.json

#### Kestrel starting errors

If you see errors like these...

´´´
Unable to bind to http://localhost:8083/ on the IPv4 loopback interface: 'Error -4092 EACCES permission denied'.
Unable to bind to http://localhost:8083/ on the IPv6 loopback interface: 'Error -4092 EACCES permission denied'.
Unable to start Kestrel.
´´´

...you have most likely changed the port in hostsettings.json to the same port your Profit Trailer is running on. This is not how it works. Leave this to the default for now or at least to a different port. This is for a future Web Interface and has nothing to do with connecting to PT.

#### Could not get BTC price change from bittrex. Sequence contains no elements. Will try Polo next. 

Most likely your Timezone setting on your system is off and/or your Time is not in Sync. Please check that your system Timezone is set to the Timezone you live in. To get a reliable Time Sync on Windows, check out this [freeware tool](http://www.timesynctool.com/).

#### Errors with the Path to your Profit Trailer

If you're seeing an error like this:

    [00:35:18 ERR] Could not read api key to validate license: Could not find a part of the path 'C:\pt\polo\application.properties

This is because you forgot to escape your backslashes. On windows the path to your PT in hostsettings.json needs to have double backslashes like:

    "ProfitTrailerFolder1": "C:\\pt\\vps\\pt\\polo",

#### Not reading correct trigger

If you notice that the trigger is not being read correctly, check for any spaces in your config as the json syntax is very sensitive: 

`"MaxTopCoinAverageChange ": "2" will break`
`"MaxTopCoinAverageChange": "2" will work`

#### Database error

If you see the following error, there are three things to try:

"Handled exception: Could not update database. Will try again next time. An error occurred while updating the entries. See inner exception for details."

1. Stop PT Feeder. Delete the ptfeeder.db file in the database directory of PT Feeder. Restart feeder. 
2. If 1 does not work, check your time and timezone. A tool to help windows users to do this is provided in Common error number 3. 
3. If 1 and 2 do not work, make sure the database file is not in read only mode. This [Youtube](https://www.youtube.com/watch?v=dr6uA-IS_pg&t=65s) video describes how.
4. Set CalculateTrailingValues as false in hostsettings.json. In appsettings.json, change MaxTrailingProfit to TrailingProfit and MaxTrailingBuy to TrailingBuy. Follow step 1 again and restart feeder. 
5. Try downgrading from 1.4.0 to [1.3.5](https://github.com/mehtadone/PTFeeder/releases/tag/pt-feeder-v1.3.5.329). This has slightly different database handling. 

#### Could not find enough prices

A warning like the below is nothing to worry about. It is when a new coin enters an exchange and there is not enough historical data for PT Feeder to do its calculations. 

` [21:12:00 WRN] Could not find enough prices for BTC-ELC. Querying exchange again`

If this is happening to all coins, is is most likely your Timezone setting on your system is off and/or your Time is not in Sync. Please check that your system Timezone is set to the Timezone you live in. To get a reliable Time Sync on Windows, check out this [freeware tool](http://www.timesynctool.com/).
