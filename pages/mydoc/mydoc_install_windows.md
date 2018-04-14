---
title: Installation Windows
sidebar: mydoc_sidebar
permalink: mydoc_install_windows.html
folder: mydoc
---

__Important note:__ 

PT Feeder is a companion app to Profit Trailer. It doesn't have its own interface. It generates config for Profit Trailer. For details on that please see [How PT Feeder works](https://github.com/mehtadone/PTFeeder/wiki/How-PT-Feeder-works).

After you have installed PT Feeder you need to run it independently from Profit Trailer.

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