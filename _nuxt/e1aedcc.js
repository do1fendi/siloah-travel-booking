(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,5,6,7],{277:function(e,t,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("08d0af14",content,!0,{sourceMap:!1})},278:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),o=r(66);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){var e=new Date;return{formTraveler:[],form:{lastTName:"",firstTName:"",birthday:""},index:null,disableFutureDate:new Date(e.getFullYear(),e.getMonth(),e.getDate())}},computed:c(c(c({},Object(o.b)("form",["GET_TRAVELER","GET_TRAVELERNUMBER","GET_FORM"])),Object(o.c)("form",["SET_TRAVELER"])),{},{travelerCount:function(){return this.GET_TRAVELERNUMBER}}),created:function(){this.formTraveler=this.GET_TRAVELER,this.travelerNumber=this.GET_TRAVELERNUMBER},methods:{showTravelerForm:function(e){void 0===e?(this.form={},this.index=null):(this.form={},this.form.lastTName=this.GET_TRAVELER[e].lastTName,this.form.firstTName=this.GET_TRAVELER[e].firstTName,this.form.birthday=this.GET_TRAVELER[e].birthday,this.index=e),this.$bvModal.show("travelerForm")},handleForm:function(e){if(void 0===this.form.lastTName||""==this.form.lastTName)e.preventDefault(),alert("cannot empty");else{var t={index:this.index,form:this.form};this.$store.commit("form/SET_TRAVELER",t)}},copyData:function(){this.form={},this.form.lastTName=this.GET_FORM.regLastname,this.form.firstTName=this.GET_FORM.regFirstname}}},m=(r(279),r(39)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"traveler-form"},[r("b-modal",{attrs:{id:"travelerForm","no-close-on-backdrop":"","hide-header-close":"",size:"lg"},on:{ok:e.handleForm},scopedSlots:e._u([{key:"modal-header",fn:function(){return[r("div",{staticClass:"modalHeader w-100 text-center"},[r("span",{staticClass:"text-capitalize modalTitle"},[e._v("traveler")]),e._v(" "),e.travelerCount?e._e():r("b-button",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:e.copyData}},[e._v("與訂購人相同")])],1)]},proxy:!0}])},[e._v(" "),r("b-form",[r("b-form-row",{staticClass:"mb-2"},[r("b-col",[r("b-form-input",{attrs:{placeholder:"Enter Last Name / 姓氏"},model:{value:e.form.lastTName,callback:function(t){e.$set(e.form,"lastTName",t)},expression:"form.lastTName"}})],1),e._v(" "),r("b-col",[r("b-form-input",{attrs:{placeholder:"Enter First Name / 名字"},model:{value:e.form.firstTName,callback:function(t){e.$set(e.form,"firstTName",t)},expression:"form.firstTName"}})],1),e._v(" "),r("b-col",{attrs:{md:"auto"}},[r("b-form-datepicker",{attrs:{id:"datepicker-placeholder",placeholder:"Birthday",locale:"en",max:e.disableFutureDate},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1)],1)],1)],1)],1)}),[],!1,null,"05a80cd8",null);t.default=component.exports},279:function(e,t,r){"use strict";r(277)},280:function(e,t,r){var n=r(55)(!1);n.push([e.i,".modalTitle[data-v-05a80cd8]{font-size:1.2rem;font-weight:600}",""]),e.exports=n},281:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),o=r(66);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{Travelerform:r(278).default},data:function(){return{traveler:[],travelerNumber:0,maxTravelerNumber:7,fields:[{key:"lastTName",label:"First Name"},{key:"firstTName",label:"Last Name"},"birthday",{key:"actions"}]}},computed:c(c(c(c({},Object(o.b)("form",["GET_TRAVELER"])),Object(o.b)("form",["GET_TRAVELERNUMBER"])),Object(o.c)("form",["DELETE_TRAVELER"])),{},{travelerCount:function(){return this.GET_TRAVELERNUMBER},disabled:function(){return this.travelerCount>=this.maxTravelerNumber}}),methods:{showTravelerFormModal:function(){this.$refs.childTravelform.showTravelerForm()},editTraveler:function(data){this.$refs.childTravelform.showTravelerForm(data.index)},delTraveler:function(data){this.$store.commit("form/DELETE_TRAVELER",data.index)}},created:function(){this.traveler=this.GET_TRAVELER}},m=r(39),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5"},[r("h3",[e._v("Travelers "),r("b-badge",[e._v(e._s(e.travelerCount)+" / "+e._s(e.maxTravelerNumber))]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"primary",disabled:e.disabled},on:{click:e.showTravelerFormModal}},[e._v("Add Traveler")])],1),e._v(" "),r("div",[r("b-table",{attrs:{hover:"","head-variant":"light",small:"",items:e.traveler,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(data){return[r("b-button",{attrs:{size:"sm",variant:"info"},on:{click:function(t){return e.editTraveler(data)}}},[e._v("修改")]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.delTraveler(data)}}},[e._v("刪除")])]}}])})],1),e._v(" "),r("Travelerform",{ref:"childTravelform"})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Travelerform:r(278).default})},282:function(e,t,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("35ed3d7f",content,!0,{sourceMap:!1})},283:function(e,t,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("4230f0ad",content,!0,{sourceMap:!1})},285:function(e,t,r){"use strict";r(282)},286:function(e,t,r){var n=r(55)(!1);n.push([e.i,".top[data-v-31a2d670]{padding:0;font-weight:600}.avSeat[data-v-31a2d670]{text-align:right}.avFontSize[data-v-31a2d670]{font-weight:700}",""]),e.exports=n},287:function(e,t,r){"use strict";r(283)},288:function(e,t,r){var n=r(55)(!1);n.push([e.i,".register[data-v-465c764a]{border-radius:3px}.showAgreement[data-v-465c764a]:hover{cursor:pointer;color:#fff}.form-row[data-v-465c764a]{margin-left:0;margin-right:0}.col[data-v-465c764a]{padding-right:0;padding-left:0}.setFieldBorder[data-v-465c764a]{border:1px solid #ced4da}",""]),e.exports=n},289:function(e,t,r){"use strict";r.r(t);var n={name:"Top",props:["tourPackage"],data:function(){return{available_seat:"0"}},computed:{variant:function(){switch(this.available_seat=this.tourPackage.seat_available?this.tourPackage.seat_available:"0",!0){case this.available_seat>10:return"primary";case this.available_seat<10&&this.available_seat>0:return"warning";default:return"danger"}}}},o=(r(285),r(39)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"top"},[r("b-alert",{attrs:{show:"",variant:"success"}},[r("b-row",[r("b-col",{attrs:{cols:"8"}},[r("p",[e._v("團名: "+e._s(e.tourPackage.tourSubject))]),e._v(" "),r("p",[e._v("出發日期: "+e._s(e.tourPackage.departureDate))])]),e._v(" "),r("b-col",{staticClass:"avSeat",attrs:{cols:"4"}},[r("p",[e._v("\n          Available Seats:\n          "),r("span",[r("b-avatar",{staticClass:"avFontSize",attrs:{variant:e.variant,text:String(e.available_seat)}})],1)])])],1)],1)],1)}),[],!1,null,"31a2d670",null);t.default=component.exports},290:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),o=r(66),l=r(284),c=r(281);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{Agreement:l.default,Traveler:c.default},computed:m(m(m(m({},Object(o.c)("form",["SET_REGFORM"])),Object(o.b)("country",["GET_COUNTRY","GET_PHONECODE"])),Object(o.b)("form",["GET_FORM","GET_TRAVELERNUMBER"])),{},{travelerCount:function(){return this.GET_TRAVELERNUMBER},valRegLNState:function(){return this.GET_FORM.regLastname.length>=1},valRegFNState:function(){return this.GET_FORM.regFirstname.length>=1},valRegEmailState:function(){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.GET_FORM.regEmail.toLowerCase())},valRegPhoneNumberState:function(){return this.GET_FORM.regPhoneNumber.length>=5},valRegAddressState:function(){return this.GET_FORM.regAddress.length>=10},regLastname:{get:function(){return this.GET_FORM.regLastname},set:function(e){var t={field:"regLastname",value:e};this.$store.commit("form/SET_REGFORM",t)}},regFirstname:{get:function(){return this.GET_FORM.regFirstname},set:function(e){var t={field:"regFirstname",value:e};this.$store.commit("form/SET_REGFORM",t)}},regEmail:{get:function(){return this.GET_FORM.regEmail},set:function(e){var t={field:"regEmail",value:e};this.$store.commit("form/SET_REGFORM",t)}},regPhoneCode:{get:function(){return this.GET_FORM.regPhoneCode},set:function(e){var t={field:"regPhoneCode",value:e};this.$store.commit("form/SET_REGFORM",t)}},regPhoneNumber:{get:function(){return this.GET_FORM.regPhoneNumber},set:function(e){var t={field:"regPhoneNumber",value:e};this.$store.commit("form/SET_REGFORM",t)}},regCountry:{get:function(){return this.GET_FORM.regCountry},set:function(e){var t={field:"regCountry",value:e};this.$store.commit("form/SET_REGFORM",t)}},regAddress:{get:function(){return this.GET_FORM.regAddress},set:function(e){var t={field:"regAddress",value:e};this.$store.commit("form/SET_REGFORM",t)}}}),data:function(){return{setFieldBorder:"setFieldBorder",country:[],phoneCode:[]}},methods:{onSubmit:function(e){e.preventDefault(),this.formValidation()&&alert("can be submited")},showAgreementModal:function(){this.$refs.childAgreement.showAgreement()},onstart:function(){this.onStart="setField"},formValidation:function(){return this.valRegLNState?this.valRegFNState?this.valRegEmailState?this.valRegPhoneNumberState?this.valRegAddressState?0!=this.travelerCount||(alert("Traveler has not been set!"),!1):(this.$refs.address.$el.focus(),!1):(this.$refs.phone.$el.focus(),!1):(this.$refs.email.$el.focus(),!1):(this.$refs.fn.$el.focus(),!1):(this.$refs.ln.$el.focus(),!1)}},mounted:function(){},created:function(){this.form=this.GET_FORM,this.country=this.GET_COUNTRY,this.phoneCode=this.GET_PHONECODE}},v=(r(287),r(39)),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register p-2 mb-2"},[e._m(0),e._v(" "),r("b-form",{on:{submit:e.onSubmit}},[r("b-form-row",{staticClass:"mb-2"},[r("b-col",{staticClass:"mr-2"},[r("b-form-input",{ref:"ln",class:e.setFieldBorder,attrs:{state:e.valRegLNState,placeholder:"Enter your Last name / 姓氏",required:""},model:{value:e.regLastname,callback:function(t){e.regLastname=t},expression:"regLastname"}})],1),e._v(" "),r("b-col",{staticClass:"ml-2"},[r("b-form-input",{ref:"fn",class:e.setFieldBorder,attrs:{state:e.valRegFNState,placeholder:"Enter your first name / 名字",required:""},model:{value:e.regFirstname,callback:function(t){e.regFirstname=t},expression:"regFirstname"}})],1)],1),e._v(" "),r("b-col",{staticClass:"mb-2"},[r("b-form-input",{ref:"email",class:e.setFieldBorder,attrs:{state:e.valRegEmailState,type:"email",placeholder:"Email",required:""},model:{value:e.regEmail,callback:function(t){e.regEmail=t},expression:"regEmail"}})],1),e._v(" "),r("b-form-row",{staticClass:"mb-2"},[r("b-col",{staticClass:"mr-2"},[r("b-form-select",{attrs:{options:e.phoneCode},model:{value:e.regPhoneCode,callback:function(t){e.regPhoneCode=t},expression:"regPhoneCode"}})],1),e._v(" "),r("b-col",{staticClass:"ml-2"},[r("b-form-input",{ref:"phone",class:e.setFieldBorder,attrs:{type:"number",state:e.valRegPhoneNumberState,placeholder:"Phone Number 聯絡電話",required:""},model:{value:e.regPhoneNumber,callback:function(t){e.regPhoneNumber=t},expression:"regPhoneNumber"}})],1)],1),e._v(" "),r("b-col",{staticClass:"mt-2"},[r("b-form-select",{attrs:{options:e.country},model:{value:e.regCountry,callback:function(t){e.regCountry=t},expression:"regCountry"}})],1),e._v(" "),r("b-col",{staticClass:"mt-2"},[r("b-form-input",{ref:"address",class:e.setFieldBorder,attrs:{placeholder:"Enter Address 地址",state:e.valRegAddressState,required:""},model:{value:e.regAddress,callback:function(t){e.regAddress=t},expression:"regAddress"}})],1),e._v(" "),r("div",{staticClass:"mt-2 text-right"},[r("h6",[r("b-badge",{staticClass:"showAgreement",attrs:{variant:"danger"},on:{click:e.showAgreementModal}},[e._v("Show Agreement")])],1)]),e._v(" "),r("Traveler")],1),e._v(" "),r("div",[e._v("\n    "+e._s(this.GET_FORM)+"\n  ")]),e._v(" "),r("div",{staticClass:"submit"},[r("div",{staticClass:"text-right mt-2"},[r("b-button",{attrs:{variant:"warning"},on:{click:e.onSubmit}},[r("h6",[e._v("Submit")])])],1)]),e._v(" "),r("Agreement",{ref:"childAgreement"})],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mb-3 text-center"},[r("h4",[e._v("訂購人")])])}],!1,null,"465c764a",null);t.default=component.exports;installComponents(component,{Traveler:r(281).default,Agreement:r(284).default})},292:function(e,t,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("1b7833da",content,!0,{sourceMap:!1})},296:function(e,t,r){"use strict";r(292)},297:function(e,t,r){var n=r(55)(!1);n.push([e.i,".container{padding:0;color:#434852;font-weight:500}",""]),e.exports=n},300:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(25),o=r(0),l=(r(67),r(31),r(11),r(66)),c=r(289),f=r(290);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{Information:c.default,Register:f.default},head:function(){return{title:"Siloah Booking",meta:[{name:"Siloah",content:"Siloah Travel Booking System"}]}},data:function(){return{country:[],tourPackageData:""}},computed:d(d({},Object(l.b)("country",["GET_COUNTRY"])),Object(l.b)(["GET_TOKEN","GET_USERNAME","GET_PASSWORD"])),mounted:function(){var e=this;this.getToken(),setInterval((function(){e.getToken()}),9e5),this.country=this.GET_COUNTRY},methods:{getToken:function(){var e=this,t={method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/sessions",headers:{Authorization:"Basic "+btoa("".concat(this.GET_USERNAME,":").concat(this.GET_PASSWORD)),"Content-Type":"application/json"},data:{}};(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios(t);case 2:return n=r.sent,r.next=5,n.data.response;case 5:data=r.sent,e.$store.commit("SET_TOKEN",data.token),e.getTourPackage();case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}})()()},getTourPackage:function(){var e=this,t=JSON.stringify({query:[{groupNumber:this.$route.query.selectedGroupNumber}]}),r={method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/layouts/DATA_API_TOURPACKAGE/_find",headers:{Authorization:"Bearer ".concat(this.GET_TOKEN),"Content-Type":"application/json"},data:t};(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios(r);case 2:return n=t.sent,t.next=5,n.data.response.data[0].fieldData;case 5:data=t.sent,e.tourPackageData=data;case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}}},h=(r(296),r(39)),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("Information",{attrs:{tourPackage:this.tourPackageData}}),e._v(" "),r("Register")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Information:r(289).default,Register:r(290).default})}}]);