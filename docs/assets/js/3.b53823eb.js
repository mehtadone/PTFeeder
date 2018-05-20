(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{60:function(e,t,r){"use strict";r.r(t);var i=r(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[e._v("Here's a list of frequently appearing errors and some explanation and help added to it.")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),r("p",[e._v("THIS IS WHAT PT FEEDER DOES. Please read the wiki again and watch any youtube videos on what it does.")]),e._m(6),r("p",[e._v('Add your pair to \' "ExcludedPairs": "" in appsettings.json and restart PT Feeder. For example, "ExcludedPairs": "XRP,LTC". Wait for it create pairs.properties. No config will be generated for these pairs and default All_trading_enabled will be false so these coins will not be traded.')]),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),r("p",[e._v("Your settings are setup so you cannot make any further buys due to existing balance. You can make changes to these properties in "),r("router-link",{attrs:{to:"/configuration.html#appsettings-json"}},[e._v("appsettings")]),e._v(" for PT Feeder and restart PT Feeder.")],1),r("p",[e._v("Important properties to look at in PT Feeder appsettings are DcaMinBuyBalance, MinBuyBalance and MaxCost and UseMinBuyBalancePercentage and UserMaxCostPercentage in hostsettings.json")]),e._m(12),r("p",[e._v("If you see errors like these...")]),r("p",[e._v("´´´\nUnable to bind to http://localhost:8083/ on the IPv4 loopback interface: 'Error -4092 EACCES permission denied'.\nUnable to bind to http://localhost:8083/ on the IPv6 loopback interface: 'Error -4092 EACCES permission denied'.\nUnable to start Kestrel.\n´´´")]),r("p",[e._v("...you have most likely changed the port in hostsettings.json to the same port your ProfitTrailer is running on. This is not how it works. Leave this to the default for now or at least to a different port as per the "),r("router-link",{attrs:{to:"/configuration.html#serverurls"}},[e._v("configuration page")]),e._v(". This is for a future Web Interface and has nothing to do with connecting to PT.")],1),e._m(13),e._m(14),e._m(15),r("p",[e._v("If you notice that the trigger is not being read correctly, check for any spaces in your config as the json syntax is very sensitive:")]),e._m(16),e._m(17),r("p",[e._v("If you see the following error, there are three things to try:")]),r("p",[e._v('"Handled exception: Could not update database. Will try again next time. An error occurred while updating the entries. See inner exception for details."')]),e._m(18),e._m(19),r("p",[e._v("A warning like the below is nothing to worry about. It is when a new coin enters an exchange and there is not enough historical data for PT Feeder to do its calculations.")]),e._m(20),e._m(21)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"common-problems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-problems","aria-hidden":"true"}},[this._v("#")]),this._v(" Common Problems")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"anything-that-says-bad-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anything-that-says-bad-json","aria-hidden":"true"}},[this._v("#")]),this._v(' Anything that says "Bad Json"')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Your hostsettings.json or appsettings.json has some incorrect syntax in it. Copy the contents of the file into a site like "),t("a",{attrs:{href:"http://jsonlint.com",target:"_blank",rel:"noopener noreferrer"}},[this._v("this")]),this._v(" and see where it notices any errors. Or you can download "),t("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Visual Studio Code")]),this._v(" which is the best tool in my opinion to see json errors.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"api-key-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-key-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Api key errors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Check that the correct api key is registered with the PT Feeder api bot. It needs to be the default_api_key from your application.properties in your PT installation directory. "),t("strong",[this._v("This is case sensitive")]),this._v('. The key in hostsettings.json of PT feeder is the one given to you by your reseller. If you want to see the key it is checking for and what is authorised, set the minimal log level in hostsettings.json to "Debug" from "Information".')])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pt-feeder-is-overwriting-my-profittrailer-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-is-overwriting-my-profittrailer-config","aria-hidden":"true"}},[this._v("#")]),this._v(" PT Feeder is overwriting my ProfitTrailer config.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-do-i-set-up-hodl-coins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-set-up-hodl-coins","aria-hidden":"true"}},[this._v("#")]),this._v(" How do I set up hodl coins?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"missing-dependecies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#missing-dependecies","aria-hidden":"true"}},[this._v("#")]),this._v(" Missing dependecies")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you see an issue like the one below, please install/reinstall dotnet 2.14 or higher from "),t("a",{attrs:{href:"https://www.microsoft.com/net/download/dotnet-core/sdk-2.1.4",target:"_blank",rel:"noopener noreferrer"}},[this._v("here")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("dependencies manifest (pt-feeder.deps.json) was not found:\n    package: 'Microsoft.AspNetCore.Antiforgery', version: '2.0.1'\n    path: 'lib/netstandard2.0/Microsoft.AspNetCore.Antiforgery.dll'\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"buy-will-exceed-min-buy-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buy-will-exceed-min-buy-balance","aria-hidden":"true"}},[this._v("#")]),this._v(" Buy will exceed min_buy_balance.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Please read this "),t("a",{attrs:{href:"https://wiki.profittrailer.io/doku.php/pairs.properties",target:"_blank",rel:"noopener noreferrer"}},[this._v("wiki")]),this._v(" and see how min_buy_balance/min_buy_balance_percentage and max_cost/max_cost_percentage works.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"kestrel-starting-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kestrel-starting-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Kestrel starting errors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"could-not-get-btc-price-change-from-bittrex-sequence-contains-no-elements-will-try-polo-next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#could-not-get-btc-price-change-from-bittrex-sequence-contains-no-elements-will-try-polo-next","aria-hidden":"true"}},[this._v("#")]),this._v(" Could not get BTC price change from bittrex. Sequence contains no elements. Will try Polo next.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Most likely your Timezone setting on your system is off and/or your Time is not in Sync. Please check that your system Timezone is set to the Timezone you live in. To get a reliable Time Sync on Windows, check out this "),t("a",{attrs:{href:"http://www.timesynctool.com/",target:"_blank",rel:"noopener noreferrer"}},[this._v("freeware tool")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"not-reading-correct-trigger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#not-reading-correct-trigger","aria-hidden":"true"}},[this._v("#")]),this._v(" Not reading correct trigger")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v('"MaxTopCoinAverageChange ": "2" will break')]),t("code",[this._v('"MaxTopCoinAverageChange": "2" will work')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"database-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-error","aria-hidden":"true"}},[this._v("#")]),this._v(" Database error")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[e._v("Stop PT Feeder. Delete the ptfeeder.db file in the database directory of PT Feeder. Restart feeder.")]),r("li",[e._v("If 1 does not work, check your time and timezone. A tool to help windows users to do this is provided in Common error number 3.")]),r("li",[e._v("If 1 and 2 do not work, make sure the database file is not in read only mode. This "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=dr6uA-IS_pg&t=65s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Youtube")]),e._v(" video describes how.")]),r("li",[e._v("Set CalculateTrailingValues as false in hostsettings.json. In appsettings.json, change MaxTrailingProfit to TrailingProfit and MaxTrailingBuy to TrailingBuy. Follow step 1 again and restart feeder.")]),r("li",[e._v("Try downgrading from 1.4.0 to "),r("a",{attrs:{href:"https://github.com/mehtadone/PTFeeder/releases/tag/pt-feeder-v1.3.5.329",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.3.5")]),e._v(". This has slightly different database handling.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"could-not-find-enough-prices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#could-not-find-enough-prices","aria-hidden":"true"}},[this._v("#")]),this._v(" Could not find enough prices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("[21:12:00 WRN] Could not find enough prices for BTC-ELC. Querying exchange again")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If this is happening to all coins, is is most likely your Timezone setting on your system is off and/or your Time is not in Sync. Please check that your system Timezone is set to the Timezone you live in. To get a reliable Time Sync on Windows, check out this "),t("a",{attrs:{href:"http://www.timesynctool.com/",target:"_blank",rel:"noopener noreferrer"}},[this._v("freeware tool")]),this._v(".\n ")])}],!1,null,null,null);t.default=n.exports}}]);