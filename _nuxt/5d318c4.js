(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{279:function(t,e,r){var content=r(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("35ed3d7f",content,!0,{sourceMap:!1})},282:function(t,e,r){"use strict";r(279)},283:function(t,e,r){var n=r(55)(!1);n.push([t.i,".top[data-v-31a2d670]{padding:0;font-weight:600}.avSeat[data-v-31a2d670]{text-align:right}.avFontSize[data-v-31a2d670]{font-weight:700}",""]),t.exports=n},284:function(t,e,r){"use strict";r.r(e);var n={name:"Top",props:["tourPackage"],data:function(){return{available_seat:"0"}},computed:{variant:function(){switch(this.available_seat=this.tourPackage.seat_available?this.tourPackage.seat_available:"0",!0){case this.available_seat>10:return"primary";case this.available_seat<10&&this.available_seat>0:return"warning";default:return"danger"}}}},o=(r(282),r(39)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top"},[r("b-alert",{attrs:{show:"",variant:"success"}},[r("b-row",[r("b-col",{attrs:{cols:"8"}},[r("p",[t._v("團名: "+t._s(t.tourPackage.tourSubject))]),t._v(" "),r("p",[t._v("出發日期: "+t._s(t.tourPackage.departureDate))])]),t._v(" "),r("b-col",{staticClass:"avSeat",attrs:{cols:"4"}},[r("p",[t._v("\n          Available Seats:\n          "),r("span",[r("b-avatar",{staticClass:"avFontSize",attrs:{variant:t.variant,text:String(t.available_seat)}})],1)])])],1)],1)],1)}),[],!1,null,"31a2d670",null);e.default=component.exports},288:function(t,e,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("1b7833da",content,!0,{sourceMap:!1})},296:function(t,e,r){"use strict";r(288)},297:function(t,e,r){var n=r(55)(!1);n.push([t.i,".container{padding:0;color:#434852;font-weight:500;margin-bottom:70px}",""]),t.exports=n},300:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(25),o=r(0),c=(r(67),r(31),r(11),r(66)),l=r(284),f=r(290);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Information:l.default,Register:f.default},head:function(){return{title:"Siloah Booking",meta:[{name:"Siloah",content:"Siloah Travel Booking System"}]}},data:function(){return{country:[],tourPackageData:""}},computed:v(v({},Object(c.b)("country",["GET_COUNTRY"])),Object(c.b)(["GET_TOKEN","GET_USERNAME","GET_PASSWORD"])),mounted:function(){var t=this;this.getToken(),setInterval((function(){t.getToken()}),9e5),this.country=this.GET_COUNTRY},methods:{getToken:function(){var t=this,e={method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/sessions",headers:{Authorization:"Basic "+btoa("".concat(this.GET_USERNAME,":").concat(this.GET_PASSWORD)),"Content-Type":"application/json"},data:{}};(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$axios(e);case 2:return n=r.sent,r.next=5,n.data.response;case 5:data=r.sent,t.$store.commit("SET_TOKEN",data.token),t.getTourPackage();case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}})()()},getTourPackage:function(){var t=this,e=JSON.stringify({query:[{groupNumber:this.$route.query.selectedGroupNumber}]}),r={method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/layouts/DATA_API_TOURPACKAGE/_find",headers:{Authorization:"Bearer ".concat(this.GET_TOKEN),"Content-Type":"application/json"},data:e};(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios(r);case 2:return n=e.sent,e.next=5,n.data.response.data[0].fieldData;case 5:data=e.sent,t.tourPackageData=data;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}},m=(r(296),r(39)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("Information",{attrs:{tourPackage:this.tourPackageData}}),t._v(" "),r("Register")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Information:r(284).default,Register:r(290).default})}}]);