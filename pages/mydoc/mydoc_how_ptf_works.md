---
title: How PT Feeder Works
sidebar: mydoc_sidebar
permalink: mydoc_how_ptf_works.html
folder: mydoc
---

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