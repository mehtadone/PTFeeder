---
title: Offsets
sidebar: mydoc_sidebar
permalink: mydoc_offsets.html
folder: mydoc
---

### Offset Calculation 

With the offset calculation method, if you want a negative number to move further away from zero, simply apply a negative offset. If you want it to move closer to zero, apply a positive offset. Same applies for positive values as you would expect. Move away from zero, apply a positive offset. To move closer to zero, apply a negative offset.

For upgrading to 1.3.3 from 1.3.2 or before, you need to look at any setting that has a **negative Default value** in the General section. Any offsets used later in the appsettings.json file need to be changed to go in the direction you wish to go. 

`e.g If BuyValueOffset was 50(%) previously to go from -3 to -4.5, this will need to be changed to -50 to go from -3 to -4.5`

The offset calculation in version 1.3.3 and above is from an absolute number from your base setting: doesn't matter if its positive or negative. 

##### Offset Calculation Formula:

`BuyValue + (Absolute(BuyValue)/100 * BuyValueOffset)`

Here are some examples:

    BuyValue : "-10"
    BuyValueOffset: "-10"
    Result: -11 

another one

    BuyValue : "10"
    BuyValueOffset: "-10"
    Result: 9 

and one more with a positive offset

    BuyValue : "40"
    BuyValueOffset: "10"
    Result: 44 

***

## 0 Default

One thing to note if that if you have a 0 default value, none of the above calculations will take effect as a percentage of 0 is 0. The only workaround for this at the moment is using a very very small number such as 0.001 and using an offset based on that. 
