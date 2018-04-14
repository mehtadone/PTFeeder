---
title: Hostsettings.json
sidebar: mydoc_sidebar
permalink: mydoc_hostsettings.html
folder: mydoc
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