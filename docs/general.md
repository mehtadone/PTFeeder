---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Introduction
description: Below is a basic run through of what PT Feeder is, where you can find out more about it and where you can get it.  

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Home
        url: '/'
    next:
        content: Installation
        url: '/docs/installation'
---

THIS WIKI IN IN PROGRESS. PLEASE USE THE GITHUB WIKI UNTIL THIS ALERT IS REMOVED.

## General Information

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


PT Feeder (PTF) is a companion App to the Profit Trailer bot. It is able to feed three bot instances running on Bittrex, Binance and Poloniex at the same time provided they are on the same market (BTC, USDT, ETH for example), although it's not needed to run it on all three.

PTF doesn't need to run in any special directory or within the directory of PT. It just needs to know where the `trading` directory of PT is to copy over the generated configuration.

__When PTF generates config files for PT it completely overwrites your existing configuration files in the `trading` folder. Be aware of that and create a backup copy before you start PTF if you think it would be good to keep them.__

## How to buy PT Feeder

The following are the resellers for PT Feeder. Please contact them if you are interested in purchasing the product or would like any more info. 

### CryptoProfitBot (English, General Support)

#### 💸[Shop](https://cryptoprofitbot.com/)
#### 📺[YouTube](https://www.youtube.com/channel/UCCG84JjbL1Y38aN1Vtoa3ag)

### Pre installed VPS

LinkUpHost provides VPS solutions with Profit Trailer and PT Feeder pre installed. You still need to purchase a license from one of the resellers but this will save time in installation if you choose to go down this route. 

[PT/PTF Windows VPS](https://linkuphost.com/clients/cart.php?a=add&pid=28)

[PT/PTF Linux VPS](https://linkuphost.com/clients/cart.php?a=add&pid=29)

### International Resellers

- 🇩🇪 [Bit_Ben](https://telegram.me/bit_ben) (German) → [Telegram](https://telegram.me/bit_ben)
- 🇰🇷[Gio](https://telegram.me/cnarbro) (Korean) → [Telegram](https://telegram.me/cnarbro)
- 🇷🇺 [Nawwo](https://telegram.me/t1m3c) (Russian) → [Telegram](https://telegram.me/t1m3c)
- 🇮🇹 [Valez79](https://telegram.me/Valez79) (Italian) → [Telegram](https://telegram.me/Valez79)
- 🇨🇳 [Billy Wu](https://t.me/ProfitTrailerFeeder) (Chinese) → [Telegram](https://t.me/ProfitTrailerFeeder)
- 🇿🇦 [Vae Victus](https://telegram.me/iAmVaeVictus) (English) → [Telegram](https://telegram.me/iAmVaeVictus) / [Discord](https://discordapp.com/channels/@me/337094935620747266) / [Website](https://www.cryptobotsoftware.com/)
- 🇫🇷 [ZenPierre](https://discord.gg/cQ5CX8e) (French) → [Discord](https://discord.gg/cQ5CX8e) / [Website](https://profittrailer-services.com/)

## Newcomer checklist

You are all new to this? Don't worry, we will have you covered.

Here's a small checklist of things that you need to know.

### What is PT-Feeder actually?

It's an Addon for Profit Trailer. What it basically does is generating settings for Profit Trailer. So if you are using PT Feeder you tell this tool what you want your settings to look like and it generates settings for you. More importantly it does this based on how the Crypto market behaves. You will get options to modify your settings when the markets change. 

### What do I need to run it?

1. An account on one of the supported Crypto Exchanges
1. A Profit Trailer license
2. A PT-Feeder License
3. A computer (ideally a VPS in a datacenter) to run both on. Could be either Linux, Windows or macOS. 

### Ok, I have all of that. What do I do now?

You need to register your Exchange API Key with Profit Trailer __AND__ PT-Feeder. This is done through Telegram bots. After you have done so for PT head to [this](https://github.com/mehtadone/PTFeeder/wiki/License-Registration-and-Activation) page for instructions on how to do it for PT Feeder. Again: This needs to done with your PT License for PT and your PTF License for PTF. Both with the same API Key. This is important.

### Got my API Key and License activated. What now?

You need to install PT Feeder. PT Feeder is a program that runs based on Dotnet Core which is a software by Microsoft. It is available for all major Operating systems. Please check the [Installation Instruction Page](https://github.com/mehtadone/PTFeeder/wiki/Installation) on this Wiki for Details. Read carefully. There's also some information on how to start PT Feeder afterwards.

### Here is what happens after you start it

After you start PT Feeder you will notice from the output or the log what it is doing. It will take some time to query the prices from the exchanges. After a while you will see that it is generating your PAIRS.properties and the other files and puts it into your bots trading folder. At this point in time you should look at these files and see if they make sense to you.

### How do I change what PT Feeder generates?

You can change about anything that PTF does within the appsettings.json in the config folder. This is the place where you should alter your strategy. Make yourself comfortable with this Wiki. Most of the information is here yet. It might not always be easy to find, but it's most likely here. We're constantly working to improve the documentation.

### I still can't get XYZ going and need help

If you tried finding a solution but don't get it worked out by yourself, come over to the Discord and we try to help you.

## How PT Feeder works

In Addition to our newcomer checklist this is a more detailed explanation of about how PT Feeder works and how it works together with Profit Trailer. Please read this thoroughly to understand it.

__It is crucial to successfully run PT Feeder and Profit Trailer together.__

PT Feeder is an add-on to Profit Trailer. PT-Feeder does not do any trading, it just generates configuration for Profit Trailer. Even though it generates config, PT Feeder itself needs some settings made by you to know the ranges in which it should work. 

__None of both, Profit Trailer or PT Feeder, are automatic money making machines. Both need time and work to get things right.__

Here's a basic flow of what happens with PTF:

- PT-Feeder takes your basic configuration from the appsettings.json and the hostsettings.json
- It then checks your license by looking at the License Key set in hostsettings.json and the API key set in the Bot(s) configured there. (Licensing information)
- It fetches all important data from the Exchanges that are configured in hostsettings.json. This includes coins traded on this exchanges and their prices as well es market trend values.
- All parameters for the configuration of Profit Trailer  are then taken from  appsettings.json
- PTF will then look at the lower section of your appsettings.json and Offset these basic values depending on the Market situation and the coin prices fetched from Exchanges. This is an important part that you need to understand. All Offsets add up and the result of all this calculation will be added to your PAIRS.properties for Profit Trailer.
- Also PTF uses the trend and market values and your settings to select which Pairs will be traded at all. You can for example put Pairs on Sell-only-mode (SOM) based on what is happening on the market.

This flow is repeated every few minutes. Within this process the config for Profit Trailer will be generated and put into your trading folder of Profit Trailer. 

*Important:* Everything in that folder will be overwritten by PT Feeder. That's how it is supposed to work. This happens every few minutes, so generally don't edit your config as long as you use PT Feeder as your changes will be lost.

## Educational Videos

[CryptoProfitBot](https://cryptoprofitbot.com), the Crew selling and supporting PT Feeder did some videos. Here they are.

#### PT Feeder Part 1
[![PT Feeder Part 1](https://img.youtube.com/vi/YwtS9gg2IpQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=YwtS9gg2IpQ)

#### PT Feeder Part 2
[![PT Feeder Part 2](https://img.youtube.com/vi/BZyrnAKbDgY/maxresdefault.jpg)](https://www.youtube.com/watch?v=BZyrnAKbDgY)

#### CPB - More PTF Discussion and strategy talk
[![CPB - More PTF Discussion and strategy talk](https://img.youtube.com/vi/gh-imYaHCRY/maxresdefault.jpg)](https://www.youtube.com/watch?v=gh-imYaHCRY)


