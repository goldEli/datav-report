(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/datav-report/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1230:function(t,e,a){"use strict";a("6cfa")},"1f71":function(t,e,a){"use strict";a("7730")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o={name:"app"},i=o,c=(a("034f"),a("2877")),l=Object(c["a"])(i,r,n,!1,null,null,null),u=l.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("top-view"),a("sales-view"),a("bottom-view"),a("map-view")],1)},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("bottom view")])},v=[],m={},y=m,_=Object(c["a"])(y,h,v,!1,null,"339ccc25",null),b=_.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("map view")])},x=[],w={},C=w,O=Object(c["a"])(C,g,x,!1,null,"9422040e",null),j=O.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Sales ")])},$=[],E={},T=E,M=Object(c["a"])(T,S,$,!1,null,"7deb2e34",null),k=M.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-view"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"hover"}},[a("total-sales")],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"hover"}},[a("total-orders")],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"hover"}},[a("today-users")],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"hover"}},[a("total-users")],1)],1)],1)],1)},A=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("common-card",{attrs:{title:"Total sales",value:"$3000"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("Yesterday's sales: ")]),a("span",{staticClass:"emphasis"},[t._v("$3200")])]},proxy:!0}])},[[a("div",{staticClass:"compare-wrapper"},[a("div",{staticClass:"compare"},[a("span",[t._v("Day-on-day:")]),a("span",{staticClass:"emphasis"},[t._v("7%")]),a("div",{staticClass:"increase-icon"})]),a("div",{staticClass:"compare"},[a("span",[t._v("Month-on-Month:")]),a("span",{staticClass:"emphasis"},[t._v("38.75%")]),a("div",{staticClass:"decrease-icon"})])])]],2)},I=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-card"},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"value"},[t._v(t._s(t.value))]),a("div",{staticClass:"chart"},[t._t("default")],2),a("div",{staticClass:"line"}),a("div",{staticClass:"tatal"},[t._t("footer")],2)])},D=[],W={props:{title:String,value:String}},H=W,J=(a("761f"),a("76483"),Object(c["a"])(H,V,D,!1,null,"07771182",null)),L=J.exports,U={components:{CommonCard:L}},Y={mixins:[U]},G=Y,R=(a("f289"),Object(c["a"])(G,B,I,!1,null,"79cf2000",null)),q=R.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("common-card",{attrs:{title:"Total users",value:"1,087,503"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"compare-wrapper"},[a("div",{staticClass:"compare"},[a("span",[t._v("Day-on-day:")]),a("span",{staticClass:"emphasis"},[t._v("7%")]),a("div",{staticClass:"increase-icon"})]),a("div",{staticClass:"compare month"},[a("span",[t._v("Month-on-Month:")]),a("span",{staticClass:"emphasis"},[t._v("8.73%")]),a("div",{staticClass:"decrease-icon"})])])]},proxy:!0}])},[[a("div",{style:{height:"100%",height:"100%"},attrs:{id:"total-users-chart"}})]],2)},F=[],K={mixins:[U],mounted:function(){var t=document.getElementById("total-users-chart"),e=this.$echarts.init(t,"light",{renderer:"svg"});e.setOption({xAxis:{type:"value",show:!1,min:0,max:450},yAxis:{type:"category",show:!1},series:[{itemStyle:{color:"#45c946"},stack:"1",type:"bar",data:[200],barWidth:"10px"},{itemStyle:{color:"#eee"},stack:"1",type:"bar",data:[250],barWidth:"10px"},{type:"custom",itemStyle:{color:"#45c946"},stack:"1",data:[200],renderItem:function(t,e){var a=e.value(0),s=e.coord([a,0]);return{type:"group",position:s,children:[{type:"path",shape:{d:"M981.33333301 128l-938.66666602 0L512 938.666667",x:-10,y:-30,width:20,height:20,layout:"center"},style:{fill:"#45c946"}},{type:"path",shape:{d:"M42.666667 896h938.666666L512 85.333333",x:-10,y:10,width:20,height:20,layout:"center"},style:{fill:"#45c946"}}]}}}],grid:{top:0,left:0,right:0,bottom:0}})}},N=K,Q=(a("1230"),a("b7b5")),X=a.n(Q),Z=Object(c["a"])(N,z,F,!1,null,"572fc699",null);"function"===typeof X.a&&X()(Z);var tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("common-card",{attrs:{title:"Total orders",value:"3000,238"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("Yesterday's orders: ")]),a("span",{staticClass:"emphasis"},[t._v("3200")])]},proxy:!0}])},[[a("div",{style:{height:"100%",height:"100%"},attrs:{id:"total-orders-chart"}})]],2)},at=[],st={mixins:[U],mounted:function(){var t=document.getElementById("total-orders-chart"),e=this.$echarts.init(t,"light",{renderer:"svg"});e.setOption({xAxis:{type:"category",show:!1,boundaryGap:!1},yAxis:{show:!1,min:0,max:600},series:[{type:"line",data:[300,123,345,423,432,333,222,433,345,435,399,456],areaStyle:{color:"purple"},lineStyle:{width:0},itemStyle:{opacity:0},smooth:!0}],grid:{top:0,left:0,right:0,bottom:0}})}},rt=st,nt=Object(c["a"])(rt,et,at,!1,null,"241a7328",null),ot=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("common-card",{attrs:{title:"Today users",value:"200"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("Return rate: ")]),a("span",{staticClass:"emphasis"},[t._v("2%")])]},proxy:!0}])},[[a("div",{style:{height:"100%",height:"100%"},attrs:{id:"today-users-chart"}})]],2)},ct=[],lt=(a("d81d"),{mixins:[U],mounted:function(){var t=document.getElementById("today-users-chart"),e=this.$echarts.init(t,"light",{renderer:"svg"}),a=[300,123,345,423,432,333,222,433,345,435,399,456];e.setOption({xAxis:{type:"category",show:!1,data:a.map((function(t,e){return"".concat(e,":00")}))},yAxis:{show:!1,min:0,max:600},series:[{color:["#3398DB"],type:"bar",data:a,barWidth:"60%"}],grid:{top:0,left:0,right:0,bottom:0}})}}),ut=lt,pt=Object(c["a"])(ut,it,ct,!1,null,"f48272d4",null),dt=pt.exports,ft={components:{TotalSales:q,TotalUsers:tt,TotalOrders:ot,TodayUsers:dt}},ht=ft,vt=Object(c["a"])(ht,P,A,!1,null,"fe74439c",null),mt=vt.exports,yt={name:"Home",components:{BottomView:b,MapView:j,SalesView:k,TopView:mt}},_t=yt,bt=(a("1f71"),Object(c["a"])(_t,d,f,!1,null,"5417f3a8",null)),gt=bt.exports;s["default"].use(p["a"]);var xt=[{path:"/",name:"Home",component:gt}],wt=new p["a"]({routes:xt}),Ct=wt,Ot=(a("f4f9"),a("450d"),a("c2cc")),jt=a.n(Ot),St=(a("7a0f"),a("0f6c")),$t=a.n(St),Et=(a("b8e0"),a("a4c4")),Tt=a.n(Et),Mt=a("b2d6"),kt=a.n(Mt),Pt=a("4897"),At=a.n(Pt);At.a.use(kt.a),s["default"].use(Tt.a),s["default"].use($t.a),s["default"].use(jt.a);var Bt=a("63e3");s["default"].config.productionTip=!1,s["default"].prototype.$echarts=Bt,new s["default"]({router:Ct,render:function(t){return t(u)}}).$mount("#app")},"6cfa":function(t,e,a){},"761f":function(t,e,a){"use strict";a("ac57")},76483:function(t,e,a){"use strict";a("c1eb")},7730:function(t,e,a){},"85ec":function(t,e,a){},ac57:function(t,e,a){},b7b5:function(t,e){},c1eb:function(t,e,a){},d6c6:function(t,e,a){},f289:function(t,e,a){"use strict";a("d6c6")}});
//# sourceMappingURL=app.2d9cf485.js.map