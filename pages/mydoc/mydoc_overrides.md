---
title: Overrides
sidebar: mydoc_sidebar
permalink: mydoc_overrides.html
folder: mydoc
---

As of version **1.5.0**, the Buy Strategy can be overridden in any grouping. This means you can do things like change buy strategies: 

* For each market condition
* For different volume coins
* For coins that have a long term downtrend. 
etc. 

The syntax to do this is: 

		"FolderName": "02-boring",
			"MaxTopCoinAverageChange": "0.5",
			"BuyStrategy": {
				"BuyValue": "10",
				"BuyStrategy": "LOWBB",
				"Weight": "55"
			}

 
The above is saying that if the top coins have changes less than 0.5%, then it is a boring market. In this market, I want to override my default buy strategy in the general section of appsettings.json with LOWBB with a buy value of 10. 

#### Weight

The weight is a mandatory property which is required when there are one or more buy strategy overrides. For example, if you have overriden the buy strategy to EMAGAIN in a boring market condition, and also LOWBB for high volume coins, then PT Feeder needs to know which one to choose. The one with the highest weight is chosen. If there are two buy strategy overrides for the same coin, then the first one that it finds will be used. 

#### Offsets

Any BuyValueOffsets that you have in your configuration will be applied to the new buy value that you have used in your override. 