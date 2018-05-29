(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{54:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"pt-feeder-1-7-0-beta-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-7-0-beta-2","aria-hidden":"true"}},[a._v("#")]),a._v(" PT Feeder 1.7.0 Beta 2")]),s("h4",{attrs:{id:"added"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#added","aria-hidden":"true"}},[a._v("#")]),a._v(" Added")]),s("h3",{attrs:{id:"volume-weighted-moving-average"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volume-weighted-moving-average","aria-hidden":"true"}},[a._v("#")]),a._v(" Volume Weighted Moving Average")]),s("ul",[s("li",[a._v("Add VWMA as a property on the pair which compares the VWMA over two periods. These two properties need to be added into yhe PtFeeder section of your appsettings to use it. It can be used in custom conditions with the property "),s("code",[a._v("pair.VwmaPercentageChange")])])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v(" "),s("span",{attrs:{class:"token property"}},[a._v('"VwmaLength"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"24"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n "),s("span",{attrs:{class:"token property"}},[a._v('"VwmaLookBackPeriod"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"34"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),s("p",[a._v("Note Squiggles will be releasing a TV script soon")]),s("h3",{attrs:{id:"long-and-short-ema-and-sma-on-base-coin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#long-and-short-ema-and-sma-on-base-coin","aria-hidden":"true"}},[a._v("#")]),a._v(" Long and short EMA and SMA on base coin")]),s("ul",[s("li",[a._v("Add long and short EMA and SMA calculations on the Base coin to allow market conditions to be set based on these values. Add these to your PtFeeder section of your appsettings. Properties are "),s("code",[a._v("market.BaseCoinShortSma, market.BaseCoinLongSma, market.BaseCoinShortEma and market.BaseCoinLongEma")]),a._v(".")])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("  "),s("span",{attrs:{class:"token property"}},[a._v('"EmaShortCandleSize"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"1d"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{attrs:{class:"token property"}},[a._v('"EmaLongCandleSize"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"1d"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{attrs:{class:"token property"}},[a._v('"SmaShortCandleSize"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"1d"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{attrs:{class:"token property"}},[a._v('"SmaLongCandleSize"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"1d"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n  "),s("span",{attrs:{class:"token property"}},[a._v('"EmaShortPeriod"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"5"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{attrs:{class:"token property"}},[a._v('"EmaLongPeriod"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"20"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{attrs:{class:"token property"}},[a._v('"SmaShortPeriod"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"5"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{attrs:{class:"token property"}},[a._v('"SmaLongPeriod"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"20"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),s("p",[a._v("Possible candle sizes are 1m, 5m, 30m, 1h or 1d.")]),s("p",[a._v("As an example,")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[a._v('"MarketConditionsGrouping"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{attrs:{class:"token property"}},[a._v('"Condition"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"[market.BaseCoinShortSma] - [market.BaseCoinLongSma] < [config.SmaDifference]"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{attrs:{class:"token property"}},[a._v('"Configs"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{attrs:{class:"token property"}},[a._v('"Name"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"Bear"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{attrs:{class:"token property"}},[a._v('"SmaDifference"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"0"')]),a._v("\n\n      "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{attrs:{class:"token property"}},[a._v('"Name"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"Bull"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{attrs:{class:"token property"}},[a._v('"SmaDifference"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"100000"')]),a._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),s("h3",{attrs:{id:"average-true-range-percentage-of-top-coins-and-base-coin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#average-true-range-percentage-of-top-coins-and-base-coin","aria-hidden":"true"}},[a._v("#")]),a._v(" Average True Range Percentage of top coins and base coin")]),s("ul",[s("li",[a._v("Add ATRP available for market condition checks to change market conditions based on volatility")])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("market.BaseCoinAtrp\nmarket.MediumTermBaseCoinAtrp\nmarket.LongTermBaseCoinAtrp\n\nmarket.TopCoinsAtrpAverage\nmarket.MediumTermTopCoinsAtrpAverage\nmarket.LongTermTopCoinsAtrpAverage\n")])]),s("h3",{attrs:{id:"pair-specific-vwap-and-atrp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pair-specific-vwap-and-atrp","aria-hidden":"true"}},[a._v("#")]),a._v(" Pair specific VWAP and ATRP")]),s("ul",[s("li",[a._v("Add VWAP and ATRP as a pair specific property for use in custom market conditions")])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("pair.Atrp\npair.AtrpMediumTerm\npair.AtrpLongerTerm\n\npair.Vwap\npair.VwapMediumTerm\npair.VwapLongerTerm\n")])]),s("h2",{attrs:{id:"pt-feeder-1-7-0-beta-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-7-0-beta-1","aria-hidden":"true"}},[a._v("#")]),a._v(" PT Feeder 1.7.0 Beta 1")]),s("h4",{attrs:{id:"added-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#added-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Added")]),s("h3",{attrs:{id:"pt-dca-log-and-pairs-log-available-in-pt-feeder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pt-dca-log-and-pairs-log-available-in-pt-feeder","aria-hidden":"true"}},[a._v("#")]),a._v(" PT DCA log and Pairs log available in PT Feeder")]),s("ul",[s("li",[a._v("Create custom conditions based on ProfitTrailer positions. "),s("code",[a._v("ProfitTrailerServerApiToken1")]),a._v(" needs to be added to hostsettings. The object "),s("code",[a._v("positions")]),a._v(" is available and it has the following properties:")])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("positions.TotalDcaCurrentValue\npositions.TotalDcaCurrentValue\npositions.TotalPairsBoughtCost\npositions.TotalDcaBoughtCost\npositions.PairsBalance\npositions.DcaBalance\npositions.RealBalance\npositions.DcaCoinCount\npositions.PairsCoinCount\n")])]),s("h3",{attrs:{id:"choose-your-top-coins-for-your-top-coin-trend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#choose-your-top-coins-for-your-top-coin-trend","aria-hidden":"true"}},[a._v("#")]),a._v(" Choose your top coins for your top coin trend")]),s("ul",[s("li",[a._v("Choose which coins you would like your TopCoinTrendChange to be built off. Add "),s("code",[a._v("TopCoinTrendChangeCoins")]),a._v(" to your PtFeeder section of appsettings to use this feature.")])]),s("h3",{attrs:{id:"comments-on-which-configs-from-appsettings-were-used"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comments-on-which-configs-from-appsettings-were-used","aria-hidden":"true"}},[a._v("#")]),a._v(" Comments on which configs from appsettings were used")]),s("ul",[s("li",[a._v("Comments on pairs/dca config about which conditions were used from your appsettings.")])]),s("h3",{attrs:{id:"create-a-custom-market-condition-grouping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-market-condition-grouping","aria-hidden":"true"}},[a._v("#")]),a._v(" Create a custom market condition grouping")]),s("ul",[s("li",[a._v("Add ability to create a custom MarketCondition grouping config so something like this is possible "),s("a",{attrs:{href:"https://github.com/mehtadone/PTFeeder/issues/45",target:"_blank",rel:"noopener noreferrer"}},[a._v("github issue (45)")]),a._v(":")])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("Condition"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"[market.BaseCoinPriceChange] - [market.TopCoinsChange] < [config.SomePropertyFromConfig]"')]),a._v("\n")])]),s("h3",{attrs:{id:"override-and-calculate-each-trailing-individually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#override-and-calculate-each-trailing-individually","aria-hidden":"true"}},[a._v("#")]),a._v(" Override and calculate each trailing individually")]),s("ul",[s("li",[a._v("Added DcaMaxTrailingBuy/DcaMinTrailingBuy and DcaMaxTrailingProfit/DcaMinTrailingProfit in PT Feeder section.")])]),s("p",[a._v("If a user has TrailingBuy/TrailingProfit and/or DcaTrailingProfit/DcaTrailingBuy in their Defaults section, we assume that they "),s("strong",[a._v("DO NOT")]),a._v(" want to calculate trailings. They can use a combination this way, so they can have a fixed DcaTrailingProfit but calculate DcaTrailingBuy for example.")]),s("h3",{attrs:{id:"startup-discord-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#startup-discord-messages","aria-hidden":"true"}},[a._v("#")]),a._v(" Startup discord messages")]),s("ul",[s("li",[a._v("Added discord messages on startup")])])])}],!1,null,null,null);t.default=n.exports}}]);