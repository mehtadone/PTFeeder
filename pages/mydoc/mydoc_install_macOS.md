---
title: Installation macOS
sidebar: mydoc_sidebar
permalink: mydoc_install_macOS.html
folder: mydoc
---

__Important note:__ PT Feeder is a companion app to Profit Trailer. It doesn't have its own interface. It generates Config files for Profit Trailer. For details on that please see [How PT Feeder works](https://github.com/mehtadone/PTFeeder/wiki/How-PT-Feeder-works).

After you have installed PT Feeder you need to start/stop it in addtion to Profit Trailer.

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