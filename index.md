---
title: "Welcome to the PT Feeder Wiki"
sidebar: mydoc_sidebar
permalink: index.html
---

{% include warning.html content="THIS WIKI IN IN PROGRESS. PLEASE USE THE GITHUB WIKI UNTIL THIS ALERT IS REMOVED." %}


### Is this your first time with PT-Feeder? 

Check our [Newcomer Checklist](https://github.com/mehtadone/PTFeeder/wiki/Newcomer-Checklist)

### Getting an Error somewhere?

We have a list of [Commmon Errors](https://github.com/mehtadone/PTFeeder/wiki/Common-errors) - check this page out.

Otherwise look through our navigation to the right and help yourself.

---

### General information

PT Feeder is an authorised-add on to [Profit Trailer](https://profittrailer.io/pt/mehtadone/), one of the best crypto trading bots. However it is developed and supported by a different team and the Profit Trailer support channels will not be able to provide any support information about this tool.

### Community & Support

For support, please [read the wiki](https://github.com/mehtadone/PTFeeder/wiki) and go to the [CryptoProfitBot Central Help Page](https://help.cryptoprofitbot.com/start/). You will also find a link to the __Discord Community__ on that Help Page.

### Warning

This tool is not for beginners. If you are wondering how much extra profit this will make you, this probably isn't the tool for you yet. It is NOT paid-for settings. This will require a thorough understanding of Profit Trailer configuration, how it works and buy and sell strategies. Please read the [Profit Trailer wiki](https://wiki.profittrailer.io/doku.php) first. 

The default settings in the zip file are there to show you all the possibilities of this tool. Using them out of the box will lead to a big reduction in trades. It is up to you, with the help of your reseller, to construct a strategy to your liking. 

### Un-warning

So why should I get it? There are many variables that need to be taken into account when constructing a strategy to use for Profit Trailer. Some of these, like BTC price, the trend of the coin, the volume of the coin, etc, all change constantly. "Signaling" a buy for a coin under these conditions can result in a "bag" or a poor buy. PT Feeder analyses all of these and more to generate specific pair overrides for all pairs based on their attributes at that moment in time and the criteria you have set. 

### Some of the things PT Feeder does

* Auto switch between different market configurations according to your settings and the current market trends
* Detect optimal trailing buy and sell per coin based on market situation
* Adjust most configurations per pair automatically based on market situation
* Dynamic generation of all properties files for Profit Trailer. 

### Examples of what can be done

* If BTC rises by 5%, then lower my buy value by 50%. 
* If a coin has been dropping in price for the last 2 hours, then increase my trailing buy by 10%. 
* If the volume of a coin is less than 500 BTC, then lower my cost per trade by 20%. 
* If the price of a coin is less than 0.005%, then lower my trailing profit by 15%. 
* If the average price change of the top 30 coins have dropped in the last 12 hours, then don't enabled DCA for any coin. 
* If the BTC drops by 10%, then increase my max pairs by 30%. 

And yes, you can set PTF to watch for all of the above and more.

