---
title: Installation Linux
sidebar: mydoc_sidebar
permalink: mydoc_install_linux.html
folder: mydoc
---

__Important note:__ 

PT Feeder is a companion app to Profit Trailer. It doesn't have its own interface. It generates Config files for Profit Trailer. For details on that please see [How PT Feeder works](https://github.com/mehtadone/PTFeeder/wiki/How-PT-Feeder-works).

After you have installed PT Feeder you need to start/stop it in addtion to Profit Trailer.

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