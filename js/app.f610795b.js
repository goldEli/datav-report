(function(e){function a(a){for(var l,o,s=a[0],i=a[1],u=a[2],m=0,v=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);c&&c(a);while(v.length)v.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],l=!0,s=1;s<t.length;s++){var i=t[s];0!==n[i]&&(l=!1)}l&&(r.splice(a--,1),e=o(o.s=t[0]))}return e}var l={},n={app:0},r=[];function o(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=l,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)o.d(t,l,function(a){return e[a]}.bind(null,l));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/datav-report/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var c=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("85ec")},"1f71":function(e,a,t){"use strict";t("7730")},"39f7":function(e,a,t){},"431f":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e623"),t("e379"),t("5dc8"),t("37e1");var l=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o={name:"app"},s=o,i=(t("034f"),t("2877")),u=Object(i["a"])(s,n,r,!1,null,null,null),c=u.exports,m=t("8c4f"),v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("top-view"),t("sales-view"),t("bottom-view"),t("map-view")],1)},d=[],p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bottom-view"},[t("div",{staticClass:"view"},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"title-wrapper"},[e._v("Keyword Search")])]},proxy:!0}])},[[t("div",{staticClass:"chart-wrapper"},[t("div",{staticClass:"chart-inner"},[t("div",{staticClass:"chart"},[t("div",{staticClass:"chart-title"},[e._v("搜索用户数")]),t("div",{staticClass:"chart-data"},[e._v(e._s(e._f("format")(e.userCount)))]),t("v-chart",{attrs:{options:e.searchUserOption}})],1),t("div",{staticClass:"chart"},[t("div",{staticClass:"chart-title"},[e._v("搜索量")]),t("div",{staticClass:"chart-data"},[e._v(e._s(e._f("format")(e.searchCount)))]),t("v-chart",{attrs:{options:e.searchNumberOption}})],1)]),t("div",{staticClass:"table-wrapper"},[t("el-table",{attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"rank",label:"排名"}}),t("el-table-column",{attrs:{prop:"keyword",label:"关键词"}}),t("el-table-column",{attrs:{prop:"count",label:"总搜索量"}}),t("el-table-column",{attrs:{prop:"users",label:"搜索用户数"}}),t("el-table-column",{attrs:{prop:"range",label:"搜索占比"}})],1),t("el-pagination",{attrs:{layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,background:""},on:{"current-change":e.onPageChange}})],1)])]],2)],1),t("div",{staticClass:"view"},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"title-wrapper"},[t("div",{staticClass:"title"},[e._v("分类销售排行")]),t("div",{staticClass:"radio-wrapper"},[t("el-radio-group",{attrs:{size:"small"},on:{change:e.onCategoryChange},model:{value:e.radioSelect,callback:function(a){e.radioSelect=a},expression:"radioSelect"}},[t("el-radio-button",{attrs:{label:"品类"}}),t("el-radio-button",{attrs:{label:"商品"}})],1)],1)])]},proxy:!0}])},[[t("div",{staticClass:"chart-wrapper"},[t("v-chart",{attrs:{options:e.categoryOptions}})],1)]],2)],1)])},f=[],y=(t("fb6a"),t("b0c0"),{data:function(){return{searchUserOption:{},searchNumberOption:{},tableData:[{rank:1,keyword:"123",count:3e3,users:3234,range:"20%"},{rank:2,keyword:"123",count:3e3,users:3234,range:"20%"},{rank:3,keyword:"123",count:3e3,users:3234,range:"20%"},{rank:4,keyword:"123",count:3e3,users:3234,range:"20%"}],totalData:[],total:0,pageSize:4,userCount:0,searchCount:0,radioSelect:"品类",categoryOptions:{}}},methods:{onCategoryChange:function(e){this.radioSelect=e},onPageChange:function(e){},renderPieChart:function(){var e=[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}];this.categoryOptions={title:[{text:"".concat(this.radioSelect,"分布"),textStyle:{fontSize:14,color:"#666"},left:20,top:20},{text:"累计订单量",subtext:"1000",x:"34.5%",y:"42.5%",textStyle:{fontSize:14,color:"#999"},subtextStyle:{fontSize:28,color:"#333"},textAlign:"center"}],series:[{name:"品类分布",type:"pie",data:e,label:{normal:{show:!0,position:"outter",formatter:function(e){return e.data.name}}},center:["35%","50%"],radius:["45%","60%"],labelLine:{normal:{length:5,length2:3,smooth:!0}},clockwise:!1,itemStyle:{borderWidth:4,borderColor:"#fff"}}],legend:{type:"scroll",orient:"vertical",height:250,left:"70%",top:"middle",textStyle:{color:"#8c8c8c"},data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]}}},renderTable:function(e){this.tableData=this.totalData.slice((e-1)*this.pageSize,(e-1)*this.pageSize+this.pageSize)},renderLineChart:function(){var e=function(e){var a=[123,234,465];return{xAxis:{type:"category",boundaryGap:!1},yAxis:{show:!1},tooltip:{},series:[{type:"line",data:a,areaStyle:{color:"rgba(95,187,255,.5)"},lineStyle:{color:"rgb(95,187,255)"},itemStyle:{opacity:0},smooth:!0}],grid:{top:0,left:0,bottom:0,right:0}}};this.searchUserOption=e("user"),this.searchNumberOption=e("count")}},mounted:function(){this.renderLineChart(),this.renderPieChart()}}),h=y,b=(t("e86b"),Object(i["a"])(h,p,f,!1,null,"3cc14756",null)),w=b.exports,g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"map-view"},[t("div",{staticClass:"left"},[t("b-map-scatter")],1),t("div",{staticClass:"right"},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"title"},[e._v("用户月同比增长")])]},proxy:!0}])},[[t("div",{staticClass:"chart-wrapper"},[t("liquid-fill")],1)]],2),t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"title"},[e._v("热门搜索")])]},proxy:!0}])},[[t("div",{staticClass:"chart-wrapper"},[t("word-cloud")],1)]],2)],1)])},x=[],C=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ve-bmap",{attrs:{settings:e.chartSettings,series:e.chartSeries,tooltip:e.chartTooltip,title:e.title,height:"100%"}})},T=[],_=(t("99af"),t("4160"),t("159b"),t("2909")),S=[{featureType:"water",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"land",elementType:"all",stylers:{color:"#f3f3f3"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"all",stylers:{color:"#fdfdfd"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#fefefe"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#fefefe"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{visibility:"off"}},{featureType:"subway",elementType:"all",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"local",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"all",stylers:{color:"#fefefe"}},{featureType:"building",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"label",elementType:"labels.text.fill",stylers:{color:"#999999"}}],k=[{name:"海门",value:9},{name:"鄂尔多斯",value:12},{name:"招远",value:12},{name:"舟山",value:12},{name:"齐齐哈尔",value:14},{name:"盐城",value:15},{name:"赤峰",value:16},{name:"青岛",value:18},{name:"乳山",value:18},{name:"金昌",value:19},{name:"泉州",value:21},{name:"莱西",value:21},{name:"日照",value:21},{name:"胶南",value:22},{name:"南通",value:23},{name:"拉萨",value:24},{name:"云浮",value:24},{name:"梅州",value:25},{name:"文登",value:25},{name:"上海",value:25},{name:"攀枝花",value:25},{name:"威海",value:25},{name:"承德",value:25},{name:"厦门",value:26},{name:"汕尾",value:26},{name:"潮州",value:26},{name:"丹东",value:27},{name:"太仓",value:27},{name:"曲靖",value:27},{name:"烟台",value:28},{name:"福州",value:29},{name:"瓦房店",value:30},{name:"即墨",value:30},{name:"抚顺",value:31},{name:"玉溪",value:31},{name:"张家口",value:31},{name:"阳泉",value:31},{name:"莱州",value:32},{name:"湖州",value:32},{name:"汕头",value:32},{name:"昆山",value:33},{name:"宁波",value:33},{name:"湛江",value:33},{name:"揭阳",value:34},{name:"荣成",value:34},{name:"连云港",value:35},{name:"葫芦岛",value:35},{name:"常熟",value:36},{name:"东莞",value:36},{name:"河源",value:36},{name:"淮安",value:36},{name:"泰州",value:36},{name:"南宁",value:37},{name:"营口",value:37},{name:"惠州",value:37},{name:"江阴",value:37},{name:"蓬莱",value:37},{name:"韶关",value:38},{name:"嘉峪关",value:38},{name:"广州",value:38},{name:"延安",value:38},{name:"太原",value:39},{name:"清远",value:39},{name:"中山",value:39},{name:"昆明",value:39},{name:"寿光",value:40},{name:"盘锦",value:40},{name:"长治",value:41},{name:"深圳",value:41},{name:"珠海",value:42},{name:"宿迁",value:43},{name:"咸阳",value:43},{name:"铜川",value:44},{name:"平度",value:44},{name:"佛山",value:44},{name:"海口",value:44},{name:"江门",value:45},{name:"章丘",value:45},{name:"肇庆",value:46},{name:"大连",value:47},{name:"临汾",value:47},{name:"吴江",value:47},{name:"石嘴山",value:49},{name:"沈阳",value:50},{name:"苏州",value:50},{name:"茂名",value:50},{name:"嘉兴",value:51},{name:"长春",value:51},{name:"胶州",value:52},{name:"银川",value:52},{name:"张家港",value:52},{name:"三门峡",value:53},{name:"锦州",value:54},{name:"南昌",value:54},{name:"柳州",value:54},{name:"三亚",value:54},{name:"自贡",value:56},{name:"吉林",value:56},{name:"阳江",value:57},{name:"泸州",value:57},{name:"西宁",value:57},{name:"宜宾",value:58},{name:"呼和浩特",value:58},{name:"成都",value:58},{name:"大同",value:58},{name:"镇江",value:59},{name:"桂林",value:59},{name:"张家界",value:59},{name:"宜兴",value:59},{name:"北海",value:60},{name:"西安",value:61},{name:"金坛",value:62},{name:"东营",value:62},{name:"牡丹江",value:63},{name:"遵义",value:63},{name:"绍兴",value:63},{name:"扬州",value:64},{name:"常州",value:64},{name:"潍坊",value:65},{name:"重庆",value:66},{name:"台州",value:67},{name:"南京",value:67},{name:"滨州",value:70},{name:"贵阳",value:71},{name:"无锡",value:71},{name:"本溪",value:71},{name:"克拉玛依",value:72},{name:"渭南",value:72},{name:"马鞍山",value:72},{name:"宝鸡",value:72},{name:"焦作",value:75},{name:"句容",value:75},{name:"北京",value:79},{name:"徐州",value:79},{name:"衡水",value:80},{name:"包头",value:80},{name:"绵阳",value:80},{name:"乌鲁木齐",value:84},{name:"枣庄",value:84},{name:"杭州",value:84},{name:"淄博",value:85},{name:"鞍山",value:86},{name:"溧阳",value:86},{name:"库尔勒",value:86},{name:"安阳",value:90},{name:"开封",value:90},{name:"济南",value:92},{name:"德阳",value:93},{name:"温州",value:95},{name:"九江",value:96},{name:"邯郸",value:98},{name:"临安",value:99},{name:"兰州",value:99},{name:"沧州",value:100},{name:"临沂",value:103},{name:"南充",value:104},{name:"天津",value:105},{name:"富阳",value:106},{name:"泰安",value:112},{name:"诸暨",value:112},{name:"郑州",value:113},{name:"哈尔滨",value:114},{name:"聊城",value:116},{name:"芜湖",value:117},{name:"唐山",value:119},{name:"平顶山",value:119},{name:"邢台",value:119},{name:"德州",value:120},{name:"济宁",value:120},{name:"荆州",value:127},{name:"宜昌",value:130},{name:"义乌",value:132},{name:"丽水",value:133},{name:"洛阳",value:134},{name:"秦皇岛",value:136},{name:"株洲",value:143},{name:"石家庄",value:147},{name:"莱芜",value:148},{name:"常德",value:152},{name:"保定",value:153},{name:"湘潭",value:154},{name:"金华",value:157},{name:"岳阳",value:169},{name:"长沙",value:175},{name:"衢州",value:177},{name:"廊坊",value:193},{name:"菏泽",value:194},{name:"合肥",value:229},{name:"武汉",value:273},{name:"大庆",value:279}],O={"海门":[121.15,31.89],"鄂尔多斯":[109.781327,39.608266],"招远":[120.38,37.35],"舟山":[122.207216,29.985295],"齐齐哈尔":[123.97,47.33],"盐城":[120.13,33.38],"赤峰":[118.87,42.28],"青岛":[120.33,36.07],"乳山":[121.52,36.89],"金昌":[102.188043,38.520089],"泉州":[118.58,24.93],"莱西":[120.53,36.86],"日照":[119.46,35.42],"胶南":[119.97,35.88],"南通":[121.05,32.08],"拉萨":[91.11,29.97],"云浮":[112.02,22.93],"梅州":[116.1,24.55],"文登":[122.05,37.2],"上海":[121.48,31.22],"攀枝花":[101.718637,26.582347],"威海":[122.1,37.5],"承德":[117.93,40.97],"厦门":[118.1,24.46],"汕尾":[115.375279,22.786211],"潮州":[116.63,23.68],"丹东":[124.37,40.13],"太仓":[121.1,31.45],"曲靖":[103.79,25.51],"烟台":[121.39,37.52],"福州":[119.3,26.08],"瓦房店":[121.979603,39.627114],"即墨":[120.45,36.38],"抚顺":[123.97,41.97],"玉溪":[102.52,24.35],"张家口":[114.87,40.82],"阳泉":[113.57,37.85],"莱州":[119.942327,37.177017],"湖州":[120.1,30.86],"汕头":[116.69,23.39],"昆山":[120.95,31.39],"宁波":[121.56,29.86],"湛江":[110.359377,21.270708],"揭阳":[116.35,23.55],"荣成":[122.41,37.16],"连云港":[119.16,34.59],"葫芦岛":[120.836932,40.711052],"常熟":[120.74,31.64],"东莞":[113.75,23.04],"河源":[114.68,23.73],"淮安":[119.15,33.5],"泰州":[119.9,32.49],"南宁":[108.33,22.84],"营口":[122.18,40.65],"惠州":[114.4,23.09],"江阴":[120.26,31.91],"蓬莱":[120.75,37.8],"韶关":[113.62,24.84],"嘉峪关":[98.289152,39.77313],"广州":[113.23,23.16],"延安":[109.47,36.6],"太原":[112.53,37.87],"清远":[113.01,23.7],"中山":[113.38,22.52],"昆明":[102.73,25.04],"寿光":[118.73,36.86],"盘锦":[122.070714,41.119997],"长治":[113.08,36.18],"深圳":[114.07,22.62],"珠海":[113.52,22.3],"宿迁":[118.3,33.96],"咸阳":[108.72,34.36],"铜川":[109.11,35.09],"平度":[119.97,36.77],"佛山":[113.11,23.05],"海口":[110.35,20.02],"江门":[113.06,22.61],"章丘":[117.53,36.72],"肇庆":[112.44,23.05],"大连":[121.62,38.92],"临汾":[111.5,36.08],"吴江":[120.63,31.16],"石嘴山":[106.39,39.04],"沈阳":[123.38,41.8],"苏州":[120.62,31.32],"茂名":[110.88,21.68],"嘉兴":[120.76,30.77],"长春":[125.35,43.88],"胶州":[120.03336,36.264622],"银川":[106.27,38.47],"张家港":[120.555821,31.875428],"三门峡":[111.19,34.76],"锦州":[121.15,41.13],"南昌":[115.89,28.68],"柳州":[109.4,24.33],"三亚":[109.511909,18.252847],"自贡":[104.778442,29.33903],"吉林":[126.57,43.87],"阳江":[111.95,21.85],"泸州":[105.39,28.91],"西宁":[101.74,36.56],"宜宾":[104.56,29.77],"呼和浩特":[111.65,40.82],"成都":[104.06,30.67],"大同":[113.3,40.12],"镇江":[119.44,32.2],"桂林":[110.28,25.29],"张家界":[110.479191,29.117096],"宜兴":[119.82,31.36],"北海":[109.12,21.49],"西安":[108.95,34.27],"金坛":[119.56,31.74],"东营":[118.49,37.46],"牡丹江":[129.58,44.6],"遵义":[106.9,27.7],"绍兴":[120.58,30.01],"扬州":[119.42,32.39],"常州":[119.95,31.79],"潍坊":[119.1,36.62],"重庆":[106.54,29.59],"台州":[121.420757,28.656386],"南京":[118.78,32.04],"滨州":[118.03,37.36],"贵阳":[106.71,26.57],"无锡":[120.29,31.59],"本溪":[123.73,41.3],"克拉玛依":[84.77,45.59],"渭南":[109.5,34.52],"马鞍山":[118.48,31.56],"宝鸡":[107.15,34.38],"焦作":[113.21,35.24],"句容":[119.16,31.95],"北京":[116.46,39.92],"徐州":[117.2,34.26],"衡水":[115.72,37.72],"包头":[110,40.58],"绵阳":[104.73,31.48],"乌鲁木齐":[87.68,43.77],"枣庄":[117.57,34.86],"杭州":[120.19,30.26],"淄博":[118.05,36.78],"鞍山":[122.85,41.12],"溧阳":[119.48,31.43],"库尔勒":[86.06,41.68],"安阳":[114.35,36.1],"开封":[114.35,34.79],"济南":[117,36.65],"德阳":[104.37,31.13],"温州":[120.65,28.01],"九江":[115.97,29.71],"邯郸":[114.47,36.6],"临安":[119.72,30.23],"兰州":[103.73,36.03],"沧州":[116.83,38.33],"临沂":[118.35,35.05],"南充":[106.110698,30.837793],"天津":[117.2,39.13],"富阳":[119.95,30.07],"泰安":[117.13,36.18],"诸暨":[120.23,29.71],"郑州":[113.65,34.76],"哈尔滨":[126.63,45.75],"聊城":[115.97,36.45],"芜湖":[118.38,31.33],"唐山":[118.02,39.63],"平顶山":[113.29,33.75],"邢台":[114.48,37.05],"德州":[116.29,37.45],"济宁":[116.59,35.38],"荆州":[112.239741,30.335165],"宜昌":[111.3,30.7],"义乌":[120.06,29.32],"丽水":[119.92,28.45],"洛阳":[112.44,34.7],"秦皇岛":[119.57,39.95],"株洲":[113.16,27.83],"石家庄":[114.48,38.03],"莱芜":[117.67,36.19],"常德":[111.69,29.05],"保定":[115.48,38.85],"湘潭":[112.91,27.87],"金华":[119.64,29.12],"岳阳":[113.09,29.37],"长沙":[113,28.21],"衢州":[118.88,28.97],"廊坊":[116.7,39.53],"菏泽":[115.480656,35.23375],"合肥":[117.27,31.86],"武汉":[114.31,30.52],"大庆":[125.03,46.58]},j=function(e,a){var t=[];return e.forEach((function(e){var l=e.name,n=e.value,r=a[l];t.push({name:l,value:[].concat(Object(_["a"])(r),[n])})})),t},z={data:function(){return this.chartTooltip={show:!0},{chartSettings:{key:"oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK",bmap:{center:[104.114129,37.550339],zoom:5,roam:!0,mapStyle:{styleJson:S}}},chartTooltip:{},chartSeries:[{name:"销售额",type:"scatter",coordinateSystem:"bmap",data:j(k,O),encode:{value:2},itemStyle:{color:"purple"},symbolSize:function(e){return e[2]/10},label:{show:!1,formatter:"{b}",position:"right"},emphasis:{label:{show:!0}}},{name:"top 10",type:"effectScatter",coordinateSystem:"bmap",data:j(k.sort((function(e,a){return a.value-e.value})),O).slice(0,10),encode:{value:2},itemStyle:{color:"purple",shadowBlur:10,shadowColor:"#333"},symbolSize:function(e){return e[2]/10},label:{show:!1,formatter:function(e){return"".concat(e.data.name," - ").concat(e.data.value[2])},position:"right"},hoverAnimation:!0,emphasis:{label:{show:!0}},rippleEffect:{brushType:"stroke"}}],title:{text:"销售数据大盘",subtext:"销售趋势统计",sublink:"https://www.baidu.com",left:"center"}}}},D=z,$=(t("800a"),Object(i["a"])(D,C,T,!1,null,null,null)),M=$.exports,E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ve-liquidfill",{attrs:{data:e.chartData,height:"100%",settings:e.chartSettings}})},A=[];function L(e){return e>0&&e<=.5?"rgba(97,216,0,.7)":e>.5&&e<=.8?"rgba(204,178,26,.7)":e>.8?"rgba(241,47,28,.7)":"#c7c7cb"}var P={data:function(){return{chartData:{columns:["title","percent"],rows:[{title:"rate",percent:.6}]},chartSettings:{}}},mounted:function(){this.chartSettings={seriesMap:{rate:{radius:"80%",label:{formatter:function(e){return"".concat(Math.floor(100*e.data.value),"%")},textStyle:{fontSize:36,color:"#999",fontWeight:"normal"},position:["50%","50%"],insideColor:"#fff"},outline:{itemStyle:{borderColor:"#aaa4a4",borderWidth:1,color:"none",shadowBlur:0,shadowColor:"#fff"},borderDistance:0},backgroundStyle:{color:"#fff"},itemStyle:{shadowBlur:0,shadowColor:"#fff"},amplitude:8,color:[L(this.chartData.rows[0].percent)]}}}}},W=P,B=Object(i["a"])(W,E,A,!1,null,null,null),V=B.exports,I=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ve-wordcloud",{attrs:{data:e.chartData,height:"100%"}})},G=[],K={data:function(){return{chartData:{columns:["word","count"],rows:U()}}}};function U(){return[{word:"visualMap",count:22199},{word:"continuous",count:10288},{word:"contoller",count:620},{word:"series",count:274470},{word:"gauge",count:12311},{word:"detail",count:1206},{word:"piecewise",count:4885},{word:"textStyle",count:32294},{word:"markPoint",count:18574},{word:"pie",count:38929},{word:"roseType",count:969},{word:"label",count:37517},{word:"emphasis",count:12053},{word:"yAxis",count:57299},{word:"name",count:15418},{word:"type",count:22905},{word:"gridIndex",count:5146},{word:"normal",count:49487},{word:"itemStyle",count:33837},{word:"min",count:4500},{word:"silent",count:5744},{word:"animation",count:4840},{word:"offsetCenter",count:232},{word:"inverse",count:3706},{word:"borderColor",count:4812},{word:"markLine",count:16578},{word:"line",count:76970},{word:"radiusAxis",count:6704},{word:"radar",count:15964},{word:"data",count:60679},{word:"dataZoom",count:24347},{word:"tooltip",count:43420},{word:"toolbox",count:25222},{word:"geo",count:16904},{word:"parallelAxis",count:4029}]}var H=K,J=Object(i["a"])(H,I,G,!1,null,null,null),N=J.exports,R={components:{BMapScatter:M,LiquidFill:V,WordCloud:N}},Y=R,q=(t("67fa"),Object(i["a"])(Y,g,x,!1,null,"a0af40be",null)),F=q.exports,Z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"sales-view"},[t("el-card",{attrs:{shadow:"hover","body-style":{padding:0}},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"menu-wrapper"},[t("el-menu",{staticClass:"sales-view-menu",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.onMenuSelect}},[t("el-menu-item",{attrs:{index:"1"}},[e._v("sales")]),t("el-menu-item",{attrs:{index:"2"}},[e._v("visits")])],1),t("div",{staticClass:"menu-right"},[t("el-radio-group",{attrs:{size:"small"},model:{value:e.radioSelect,callback:function(a){e.radioSelect=a},expression:"radioSelect"}},[t("el-radio-button",{attrs:{label:"Today"}}),t("el-radio-button",{attrs:{label:"Week"}}),t("el-radio-button",{attrs:{label:"Month"}}),t("el-radio-button",{attrs:{label:"Year"}})],1),t("el-date-picker",{staticClass:"sales-view-date-picker",attrs:{type:"daterange","start-placeholder":"start","end-placeholder":"end",size:"small","unlink-panels":"","picker-options":e.pickerOptions},model:{value:e.date,callback:function(a){e.date=a},expression:"date"}})],1)],1)]},proxy:!0}])},[[t("div",{staticClass:"sales-view-chart-wrapper"},[t("v-chart",{attrs:{options:e.chartOptions}}),t("div",{staticClass:"sales-view-list"},[t("div",{staticClass:"sales-view-list-title"},[e._v("Ranking")]),t("div",{staticClass:"list-item-wrapper"},e._l(e.rankData,(function(a){return t("div",{key:a.no,staticClass:"list-item"},[t("div",{class:["list-item-no",a.no<=3?"top-no":""]},[e._v(" "+e._s(a.no)+" ")]),t("div",{staticClass:"list-item-name"},[e._v(e._s(a.name))]),t("div",{staticClass:"list-item-money"},[e._v(e._s(a.money))])])})),0)])],1)]],2)],1)},Q=[];function X(e,a){var t=new Date,l=new Date;t.setTime(t.getTime()-864e5*a),e.$emit("pick",[t,l])}var ee={data:function(){return{activeIndex:"1",radioSelect:"Today",date:null,pickerOptions:{shortcuts:[{text:"last week",onClick:function(e){X(e,7)}},{text:"last month",onClick:function(e){X(e,30)}},{text:"last three months",onClick:function(e){X(e,90)}}]},chartOptions:{title:{text:"Sales",textStyle:{fontSize:12,color:"#666"},left:25,top:20},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisTick:{alignWithLabel:!0,lineStyle:{color:"#999"}},axisLine:{lineStyle:{color:"#999"}},axisLabel:{color:"#333"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dotted",color:"#eee"}}},series:[{type:"bar",barWidth:"35%",data:[123,345,234,123,345,567,345,234,123,345,234,234]}],color:["#3398DB"],grid:{top:70,left:60,right:60,bottom:50}},rankData:[{no:1,name:"McDonald's",money:"323,234"},{no:2,name:"KFC",money:"323,234"},{no:3,name:"Dex",money:"323,234"},{no:4,name:"Pizza Hut",money:"323,234"}]}},methods:{onMenuSelect:function(e){this.activeIndex=e}}},ae=ee,te=(t("ce4a"),Object(i["a"])(ae,Z,Q,!1,null,"58d25fdf",null)),le=te.exports,ne=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"top-view"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("total-sales")],1)],1),t("el-col",{attrs:{span:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("total-orders")],1)],1),t("el-col",{attrs:{span:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("today-users")],1)],1),t("el-col",{attrs:{span:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("total-users")],1)],1)],1)],1)},re=[],oe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("common-card",{attrs:{title:"Total sales",value:"$3000"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("span",[e._v("Yesterday's sales: ")]),t("span",{staticClass:"emphasis"},[e._v("$3200")])]},proxy:!0}])},[[t("div",{staticClass:"compare-wrapper"},[t("div",{staticClass:"compare"},[t("span",[e._v("Day-on-day:")]),t("span",{staticClass:"emphasis"},[e._v("7%")]),t("div",{staticClass:"increase-icon"})]),t("div",{staticClass:"compare"},[t("span",[e._v("Month-on-Month:")]),t("span",{staticClass:"emphasis"},[e._v("38.75%")]),t("div",{staticClass:"decrease-icon"})])])]],2)},se=[],ie=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"common-card"},[t("div",{staticClass:"title"},[e._v(e._s(e.title))]),t("div",{staticClass:"value"},[e._v(e._s(e.value))]),t("div",{staticClass:"chart"},[e._t("default")],2),t("div",{staticClass:"line"}),t("div",{staticClass:"tatal"},[e._t("footer")],2)])},ue=[],ce={props:{title:String,value:String}},me=ce,ve=(t("761f"),t("7648"),Object(i["a"])(me,ie,ue,!1,null,"07771182",null)),de=ve.exports,pe={components:{CommonCard:de}},fe={mixins:[pe]},ye=fe,he=(t("f289"),Object(i["a"])(ye,oe,se,!1,null,"79cf2000",null)),be=he.exports,we=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("common-card",{attrs:{title:"Total users",value:"1,087,503"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"compare-wrapper"},[t("div",{staticClass:"compare"},[t("span",[e._v("Day-on-day:")]),t("span",{staticClass:"emphasis"},[e._v("7%")]),t("div",{staticClass:"increase-icon"})]),t("div",{staticClass:"compare month"},[t("span",[e._v("Month-on-Month:")]),t("span",{staticClass:"emphasis"},[e._v("8.73%")]),t("div",{staticClass:"decrease-icon"})])])]},proxy:!0}])},[[t("v-chart",{attrs:{options:e.getOptions()}})]],2)},ge=[],xe={mixins:[pe],methods:{getOptions:function(){return{xAxis:{type:"value",show:!1,min:0,max:450},yAxis:{type:"category",show:!1},series:[{itemStyle:{color:"#45c946"},stack:"1",type:"bar",data:[200],barWidth:"10px"},{itemStyle:{color:"#eee"},stack:"1",type:"bar",data:[250],barWidth:"10px"},{type:"custom",itemStyle:{color:"#45c946"},stack:"1",data:[200],renderItem:function(e,a){var t=a.value(0),l=a.coord([t,0]);return{type:"group",position:l,children:[{type:"path",shape:{d:"M981.33333301 128l-938.66666602 0L512 938.666667",x:-10,y:-30,width:20,height:20,layout:"center"},style:{fill:"#45c946"}},{type:"path",shape:{d:"M42.666667 896h938.666666L512 85.333333",x:-10,y:10,width:20,height:20,layout:"center"},style:{fill:"#45c946"}}]}}}],grid:{top:0,left:0,right:0,bottom:0}}}}},Ce=xe,Te=(t("920b"),Object(i["a"])(Ce,we,ge,!1,null,"74224ff6",null)),_e=Te.exports,Se=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("common-card",{attrs:{title:"Total orders",value:"3000,238"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("span",[e._v("Yesterday's orders: ")]),t("span",{staticClass:"emphasis"},[e._v("3200")])]},proxy:!0}])},[[t("v-chart",{attrs:{options:e.getOptions()}})]],2)},ke=[],Oe={mixins:[pe],methods:{getOptions:function(){return{xAxis:{type:"category",show:!1,boundaryGap:!1},yAxis:{show:!1,min:0,max:600},series:[{type:"line",data:[300,123,345,423,432,333,222,433,345,435,399,456],areaStyle:{color:"purple"},lineStyle:{width:0},itemStyle:{opacity:0},smooth:!0}],grid:{top:0,left:0,right:0,bottom:0}}}}},je=Oe,ze=Object(i["a"])(je,Se,ke,!1,null,"8f53ad3a",null),De=ze.exports,$e=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("common-card",{attrs:{title:"Today users",value:"200"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("span",[e._v("Return rate: ")]),t("span",{staticClass:"emphasis"},[e._v("2%")])]},proxy:!0}])},[[t("v-chart",{attrs:{options:e.getOptions()}})]],2)},Me=[],Ee=(t("d81d"),{mixins:[pe],methods:{getOptions:function(){var e=[300,123,345,423,432,333,222,433,345,435,399,456];return{xAxis:{type:"category",show:!1,data:e.map((function(e,a){return"".concat(a,":00")}))},yAxis:{show:!1,min:0,max:600},series:[{color:["#3398DB"],type:"bar",data:e,barWidth:"60%"}],grid:{top:0,left:0,right:0,bottom:0}}}}}),Ae=Ee,Le=Object(i["a"])(Ae,$e,Me,!1,null,"d4bdb16a",null),Pe=Le.exports,We={components:{TotalSales:be,TotalUsers:_e,TotalOrders:De,TodayUsers:Pe}},Be=We,Ve=Object(i["a"])(Be,ne,re,!1,null,"fe74439c",null),Ie=Ve.exports,Ge={name:"Home",components:{BottomView:w,MapView:F,SalesView:le,TopView:Ie}},Ke=Ge,Ue=(t("1f71"),Object(i["a"])(Ke,v,d,!1,null,"5417f3a8",null)),He=Ue.exports,Je=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-chart",{attrs:{options:e.options}})},Ne=[],Re=(t("a00a"),{data:function(){return{options:{}}},mounted:function(){this.options={bmap:{key:"G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb",center:[104.114129,37.550339],zoom:5,roam:!1,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"land",elementType:"all",stylers:{color:"#f3f3f3"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"all",stylers:{color:"#fdfdfd"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#fefefe"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#fefefe"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{visibility:"off"}},{featureType:"subway",elementType:"all",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"local",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"all",stylers:{color:"#fefefe"}},{featureType:"building",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"label",elementType:"labels.text.fill",stylers:{color:"#999999"}}]}}}}}),Ye=Re,qe=Object(i["a"])(Ye,Je,Ne,!1,null,null,null),Fe=qe.exports;l["default"].use(m["a"]);var Ze=[{path:"/",name:"Home",component:He},{path:"/bmap",name:"Bmap",component:Fe}],Qe=new m["a"]({routes:Ze}),Xe=Qe,ea=(t("672e"),t("450d"),t("101e")),aa=t.n(ea),ta=(t("5466"),t("ecdf")),la=t.n(ta),na=(t("38a0"),t("ad41")),ra=t.n(na),oa=(t("826b"),t("c263")),sa=t.n(oa),ia=(t("3c52"),t("0d7b")),ua=t.n(ia),ca=(t("fe07"),t("6ac5")),ma=t.n(ca),va=(t("b5d8"),t("f494")),da=t.n(va),pa=(t("8bd8"),t("4cb2")),fa=t.n(pa),ya=(t("4ca3"),t("443e")),ha=t.n(ya),ba=(t("f4f9"),t("c2cc")),wa=t.n(ba),ga=(t("7a0f"),t("0f6c")),xa=t.n(ga),Ca=(t("b8e0"),t("a4c4")),Ta=t.n(Ca),_a=t("b2d6"),Sa=t.n(_a),ka=t("4897"),Oa=t.n(ka);Oa.a.use(Sa.a),l["default"].use(Ta.a),l["default"].use(xa.a),l["default"].use(wa.a),l["default"].use(ha.a),l["default"].use(fa.a),l["default"].use(da.a),l["default"].use(ma.a),l["default"].use(ua.a),l["default"].use(sa.a),l["default"].use(ra.a),l["default"].use(la.a),l["default"].use(aa.a);var ja=t("2819"),za=t.n(ja);t("aabe");l["default"].use(za.a);var Da=t("9ca8");t("94b1"),t("ef97"),t("c037"),t("e057"),t("627c"),t("d28f"),t("0b4b"),t("007d");l["default"].component("v-chart",Da["a"]);var $a=t("313e");t("b29b");l["default"].config.productionTip=!1,l["default"].prototype.$echarts=$a,new l["default"]({router:Xe,render:function(e){return e(c)}}).$mount("#app")},"67fa":function(e,a,t){"use strict";t("6dc3")},"6dc3":function(e,a,t){},"761f":function(e,a,t){"use strict";t("ac57")},7648:function(e,a,t){"use strict";t("c1eb")},7730:function(e,a,t){},"800a":function(e,a,t){"use strict";t("e966")},"85ec":function(e,a,t){},"920b":function(e,a,t){"use strict";t("39f7")},ac57:function(e,a,t){},b29b:function(e,a,t){},c1eb:function(e,a,t){},ce4a:function(e,a,t){"use strict";t("431f")},cf33:function(e,a,t){},d6c6:function(e,a,t){},e86b:function(e,a,t){"use strict";t("cf33")},e966:function(e,a,t){},f289:function(e,a,t){"use strict";t("d6c6")}});
//# sourceMappingURL=app.f610795b.js.map