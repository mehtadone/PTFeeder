---
title: License activation
sidebar: mydoc_sidebar
permalink: mydoc_license_activation.html
folder: mydoc
---

This is how you activate your PT Feeder License.

__Important note__: Be aware that for PT Feeder running it also needs an activated and running Profit Trailer. You need to activate both ony our API keys. So for every Profit Trailer you want to feed with PT Feeder your PT Feeder License needs to be activated on the default key of that Profit Trailer. You can activate up to 4 API Keys with one PT Feeder License.

Activation works via Telegram. This is an automated process.

1. Open a chat message with PT Feeder Telegram bot [https://t.me/ptfeederlicensebot](https://t.me/ptfeederlicensebot) or the Discord bot on the PT Feeder discord with ID: PT Feeder License Bot#9756 
2. Type `/manage`
3. The Bot will ask you for your PTF License. 
4. If your PTF license was entered correctly, Bot will give you 3 options 1. List keys 2. Add API key 3. Remove API Key. Choose option 2. Add API key
5. Enter the Exchange API key you want to add

Notes:
1) You do not need to create a new API key, you will use the "Default" key from Profit Trailer. You will find this in your application.properties file in Profit Trailer folder, with the key default_apiKey = XXXXXXXXXXXX
2) You can add up to 4 Exchange API keys with 1 PT Feeder License, if you wish to use PT Feeder on multiple bots. 