---
title: General
sidebar: mydoc_sidebar
permalink: mydoc_general.html
folder: mydoc
---

PT Feeder (PTF) is a companion App to the Profit Trailer bot. It is able to feed three bot instances running on Bittrex, Binance and Poloniex at the same time provided they are on the same market (BTC, USDT, ETH for example), although it's not needed to run it on all three.

PTF doesn't need to run in any special directory or within the directory of PT. It just needs to know where the `trading` directory of PT is to copy over the generated configuration.

__When PTF generates config files for PT it completely overwrites your existing configuration files in the `trading` folder. Be aware of that and create a backup copy before you start PTF if you think it would be good to keep them.__

## Configuration files of PTF

All configuration files of PTF are located within the `config` sub folder. When updating PTF to a new version, be sure not to overwrite this folder. Depending on the changes from the last update, the configuration files may need to be altered. Please be sure to review the Changelog for notes on that and/or also review the config files included in the download package to make sure you have everything important in your config.

## Environment variable (from v1.4.0)

If you would like to move your config folder outside of your PT Feeder directory, the location specified in the environment variable PTFEEDER_CONFIG_DIRECTORY will be checked first. 