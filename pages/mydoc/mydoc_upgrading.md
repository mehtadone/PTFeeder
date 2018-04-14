---
title: Updating PT Feeder
sidebar: mydoc_sidebar
permalink: mydoc_upgrading.html
folder: mydoc
---

### Instructions to upgrade 

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