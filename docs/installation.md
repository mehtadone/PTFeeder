---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Installation
description: This is how you install PT Feeder on different operatating systems

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Introduction
        url: '/docs/general'
    next:
        content: Configuration
        url: '/docs/configuration'
---

Please follow our installation guides to make PT Feeder run on your system. Be aware that PT-Feeder is not a playful Utility with colorful buttons and a shiny UI. It is a power tool, that works nearly completely from the command line. Make sure you are safe enough to handle your operating system good enough and that you are able to edit configuration text files without breaking them.

## Professional Installation Service

Should you need help installing PT-Feeder, check out the [PT Feeder Installation](https://cryptoprofitbot.com/shop/pt-feeder-install/) available for purchase at the CryptoProfitBot Store.



__Important note:__ 

PT Feeder is a companion app to Profit Trailer. It doesn't have its own interface. It generates configuration for Profit Trailer. For details on that please see [How PT Feeder works](https://github.com/mehtadone/PTFeeder/wiki/How-PT-Feeder-works).

After you have installed PT Feeder you need to start/stop it in addtion to Profit Trailer.

# Linux

## Technical Requirements

- Linux (we're mostly using Ubuntu 16.04 LTS but that's up to you)
- At least 1GB RAM (2GB is better, but PT + PTF also run on 1GB VPS)
- .NET SDK
- A solid Text Editor. Nano, vi or whatever fits you most is fine.

## Start the installation

### Install .NET SDK

First of all install Dotnet Core by Microsoft. [You can get it the SDK from here](https://www.microsoft.com/net/learn/get-started/macos). Don't do anything else then Downloading and Installing the SDK from that page. Don't do the "Create your App" part on that page. You only need to install the SDK.

Microsoft has different selection of Linux choices there so take the one that fits your Distribution.

### Download and Unpack PT-Feeder

Now head to [the Release Page of PT-Feeder](https://github.com/mehtadone/PTFeeder/releases) and download your copy. It's that link they say something likes ```pt-feeder-v1.x.y.123.zip```. Grab the URL and download the package using wget or whatever fits you best. Unpack the zip file and copy it to a location of your choice. We keep it in /opt most of the time but that's up to you of course.

## Configure & Start PT Feeder

### Configure PT Feeder to your needs

__IMPORTANT__ This is key. You need to make yourself comfortable with how PT Feeder works. There are quite some documents on this wiki that help you on that. You need to at least do the basic setup in the hostsettings.json file and the appsettings.json. Both can be found in the config folder. Each of both has its own page on here. Check the navigation to the right to find your way.

Once you have your basic config done come back here and continue.

### Run PT Feeder

To run PT Feeder navigate to the folder where you unzipped PTF to. In there run:

    dotnet pt-feeder.dll

You should immediately get some output from that. Look closely at it and see what it reads. Maybe you will get some errors. These can relate to licensing issues or any other mistake you made on the config file. Try to parse this error and see the navigation on the right for Common known Errors before you ask support for help.

If everything runs well hit ```CTRL + C``` to shut down PT-Feeder again. 

**Only continue if everything went well so far. If you get any errors you need to solve them first.**

### Install PM2 process manager for ease of use.

1. Install Node.js following the instructions on [their Website](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
2. Install PM2 by typing: sudo npm install pm2@latest -g
3. When it is installed, navigate to your PT-Feeder folder
4. Type pm2 start pm2-PT-Feeder.json and hit enter

Now it should be running and you can follow what happens in your log file in PT-Feeder/Logs or via `pm2 logs`. See the [PM2 manual](http://pm2.keymetrics.io/docs/usage/quick-start/) on more details about how pm2 works.

IMPORTANT: Once PT-Feeder was added to your PM2 installation you can start and stop it using its ID. You don't need to navigate to the folder again. Just type `pm2 status` from any folder in your terminal. A column named ID with the ID next to your pt-feeder will be visible. If you connect to your Linux VPS from a PC you may need to widen your terminal window to see this column. Type `pm2 status` again after making it wider. If you have the ID you can easily do `pm2 restart 0` for example if 0 is the ID.

Note: You can also add PT to PM2 if you haven't already. There's a similar pm2-file in the folder of your Profit Trailer. Adding it works the same way and you can then use PM2 to comfortably manage both tools.

## Any Problems? 

[Check the Common Errors Page](https://github.com/mehtadone/PTFeeder/wiki/Common-errors)

# Windows

## Technical Requirements

__Note:__ You can install PT and PTF either on your local Windows or on a Windows VPS in a Datacenter. This is a more generic installation instruction that should work on both.

- Windows (ideally 64bit)
- At least 2GB RAM
- .NET SDK
- A solid Text Editor. Best practice is to use [Notepad++](https://notepad-plus-plus.org/) or [Atom](https://atom.io) on Windows

## Start the installation

### Install .NET SDK

First of all install Dotnet Core by Microsoft. [You can get it the SDK from here](https://www.microsoft.com/net/learn/get-started/windows). Don't do anything else then Downloading and Installing the SDK from that page.

### Download and Unpack PT-Feeder

Now head to [the Release Page of PT-Feeder](https://github.com/mehtadone/PTFeeder/releases) and download your copy. It's that link they say something like ```pt-feeder-v1.x.y.123.zip``` Unpack this ZIP-File into a location of your choice. It is best practice to look for a folder anywhere in the user directory. Don't just leave it in your downloads or the desktop or you might easily mess up. Also rename the folder to something general like pt-feeder so it can stay there for every new version too.

## Configure & Start PT Feeder

### Configure PT Feeder to your needs

__IMPORTANT__ This is key. You need to make yourself comfortable with how PT Feeder works. There are quite some documents on this wiki that help you on that. You need to at least do the basic setup in the hostsettings.json file and the appsettings.json. Both can be found in the config folder. Each of both has its own page on here. Check the navigation to the right to find your way.

Once you have your basic config done come back here and continue.

### Run PT Feeder

To run PT Feeder open a CMD window. 

**If you don't know how to do that or if you have any other problem navigating around your system,** there's good help on that [on other sites like this](https://www.computerhope.com/issues/chusedos.htm).

Also there are a bunch of videos out there on how to use the Windows Command Prompt [like these](https://www.youtube.com/watch?v=MBBWVgE0ewk&list=PL6gx4Cwl9DGDV6SnbINlVUd0o2xT4JbMu)

Now navigate to the folder where you unzipped PTF to. In there run:

    dotnet pt-feeder.dll

You should immediately get some output from that. Look closely at it and see what it reads. Maybe you will get some errors. These can relate to licensing issues or any other mistake you made on the config file. Try to parse this error and see the navigation on the right for Common known Errors before you ask support for help.

If everything runs well hit ```CTRL + C``` to shut down PT-Feeder again.

**Only continue if everything went well so far. If you get any errors you need to solve them first.**

### Create a .bat File for ease of use

Use Notepad++ or any other Text editor that you selected earlier and create a new file. Put this inside the file:

    dotnet pt-feeder.dll
    PAUSE

Both lines should go into that file. Now save it to the folder where PT Feeder is in. Name it something like pt-feeder.bat. You just need to double click that file now to start the Feeder.

Make sure it works. You should see something similar than before.

## Any Problems? 

[Check the Common Errors Page](https://github.com/mehtadone/PTFeeder/wiki/Common-errors)

# macOS

## Technical Requirements

- macOS (10.7 or higher should be fine)
- At least 4GB RAM
- .NET SDK
- A solid Text Editor. Best practice is to use [Atom](https://atom.io) or [Visual Studio Code](https://code.visualstudio.com/)

## Start the installation

### Install .NET SDK

First of all install Dotnet Core by Microsoft. [You can get it the SDK from here](https://www.microsoft.com/net/learn/get-started/macos). Don't do anything else then Downloading and Installing the SDK from that page. Don't do the "Creat your App" part on that page. You only need to install the SDK.

### Download and Unpack PT-Feeder

Now head to [the Release Page of PT-Feeder](https://github.com/mehtadone/PTFeeder/releases) and download your copy. It's that link they say something likes ```pt-feeder-v1.x.y.123.zip``` Unpack this ZIP-File into a location of your choice. It is best practice to look for a folder anywhere in the user directory. Don't just leave it in your downloads or the desktop or you might easily mess up. Also rename the folder to something general like pt-feeder so it can stay there for every new version too.

## Configure & Start PT Feeder

### Configure PT Feeder to your needs

__IMPORTANT__ This is key. You need to make yourself comfortable with how PT Feeder works. There are quite some documents on this wiki that help you on that. You need to at least do the basic setup in the hostsettings.json file and the appsettings.json. Both can be found in the config folder. Each of both has its own page on here. Check the navigation to the right to find your way.

Once you have your basic config done come back here and continue.

### Run PT Feeder

To run PT Feeder open a TERMINAL window. If you don't know how to do that or find any other problem with navigating around your system, there's good help on that [on other sites like this](https://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/).

Now navigate to the folder where you unzipped PTF to. In there run:

    dotnet pt-feeder.dll

You should immediately get some output from that. Look closely at it and see what it reads. Maybe you will get some errors. These can relate to licensing issues or any other mistake you made on the config file. Try to parse this error and see the navigation on the right for Common known Errors before you ask support for help.

If everything runs well hit ```CTRL + C``` to shut down PT-Feeder again. 

**Only continue if everything went well so far. If you get any errors you need to solve them first.**

### Install PM2 process manager for ease of use.

1. Download and install Node.js at from [their Website](https://nodejs.org/en/)
2. Start your Teminal and install PM2 by typing: sudo npm install pm2@latest -g
3. When it is installed, in Terminal, navigate to your PT-Feeder folder (where you put it on YOUR Mac)
4. Type pm2 start pm2-PT-Feeder.json and hit enter

Now it should be running and you can follow what happens in your log file in PT-Feeder/Logs or via `pm2 logs`. See the [PM2 manual](http://pm2.keymetrics.io/docs/usage/quick-start/) on more details about how pm2 works.

IMPORTANT: Once pt feeder was add to your PM2 installation you can start and stop it using its ID. You don't need to navigate to the folder again. Just type `pm2 status` from any folder in your terminal. If your terminal window is wide enough it should show a column named ID with the ID next to your pt-feeder. Else make your window wider and repeat the command. If you have the ID you can easily do `pm2 restart 0` for example if 0 is the ID.

Note: You can also add PT to PM2 if you haven't already. There's a similar pm2-file in the folder of your Profit Trailer. Adding it works the same way and you can then use PM2 to comfortably manage both tools.

## Any Problems? 

[Check the Common Errors Page](https://github.com/mehtadone/PTFeeder/wiki/Common-errors)

# License activation

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

# After installation but before running PT Feeder

PT Feeder does generate your Profit-Trailer configuration files for you. It overwrites your own PAIRS, DCA and INDICATOR configuration. 

Please make sure you run PT Feeder once before stating PT, and look at the configuration in the trading directory of Profit Trailer. Only start Profit Trailer if you are sure that config is how you want it to be.


# Upgrade instructions 

Whenever a new version comes out you need to care about updating your PT Feeder. Here's a simple explanation of how this works.

1. Download the new Release from the [Release Page](https://github.com/mehtadone/PTFeeder/releases)
2. Save it to a location different to your actual PTF Folder
3. Unzip it still in a new folder
4. Stop your running PT Feeder for a moment and if you feel insecure also stop your Bot
5. Remove everything from your existing PT Feeder directory besides the `config` and the `database` subfolder.
6. Copy over all files and folders again except the `config` and the `database` subfolder from the newly unzipped directory into the old, existing one.
7. Have a look at the [Release Page](https://github.com/mehtadone/PTFeeder/releases) for notes on the actual release. There may have been changes to the config files that you need to work in. It's also a good idea to open the config from the newly downloaded zip file and your config side by side and compare them to changes.
8. You are done. Start your Feeder again and wait for it to generate your PT config files. Have a look at those config files and see if they contain what you want them to before starting the Bot again.

Please follow this process thoroughly.

### Additional Note

On rare occasions, it might be good to delete the database file/folder when upgrading. You should find a note to that on the Release page if this is the case.