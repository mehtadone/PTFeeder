---
title: Newcomer checklist
sidebar: mydoc_sidebar
permalink: mydoc_newcomer_checklist.html
folder: mydoc
---

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