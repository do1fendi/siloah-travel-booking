(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6,7],{277:function(e,t,r){var content=r(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("7af90e00",content,!0,{sourceMap:!1})},278:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),l=r(66);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){var e=new Date;return{phoneCode:[],formTraveler:{lastTName:"",firstTName:"",birthday:"",identityNumber:"",mobileCountryCode:"",mobile:"",email:""},index:null,disableFutureDate:new Date(e.getFullYear(),e.getMonth(),e.getDate()),setFieldBorder:"setFieldBorder"}},computed:c(c(c(c({},Object(l.b)("form",["GET_TRAVELER","GET_TRAVELERNUMBER","GET_FORM"])),Object(l.b)("country",["GET_PHONECODE"])),Object(l.c)("form",["SET_TRAVELER"])),{},{travelerCount:function(){return this.GET_TRAVELERNUMBER},valLNState:function(){return this.formTraveler.lastTName.length>=1},valFNState:function(){return this.formTraveler.firstTName.length>=1},valBirthdayState:function(){return this.formTraveler.birthday.length>=1},valIDState:function(){return this.formTraveler.identityNumber.length>=5},valMobileState:function(){return this.formTraveler.mobile.length>=5},valEmailState:function(){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.formTraveler.email.toLowerCase())}}),created:function(){this.travelerNumber=this.GET_TRAVELERNUMBER,this.phoneCode=this.GET_PHONECODE},methods:{showTravelerForm:function(e){this.formTraveler={lastTName:"",firstTName:"",birthday:"",identityNumber:"",mobileCountryCode:"",mobile:"",email:""},void 0===e?(this.index=null,this.phoneCode=this.GET_PHONECODE,this.formTraveler.mobileCountryCode="+886"):(this.formTraveler.lastTName=this.GET_TRAVELER[e].lastTName,this.formTraveler.firstTName=this.GET_TRAVELER[e].firstTName,this.formTraveler.birthday=this.GET_TRAVELER[e].birthday,this.formTraveler.identityNumber=this.GET_TRAVELER[e].identityNumber,this.formTraveler.mobileCountryCode=this.GET_TRAVELER[e].mobileCountryCode,this.formTraveler.mobile=this.GET_TRAVELER[e].mobile,this.formTraveler.email=this.GET_TRAVELER[e].email,this.index=e),this.$bvModal.show("travelerForm")},handleForm:function(e){if(this.validateFormTraveler()){var t={index:this.index,form:this.formTraveler};this.$store.commit("form/SET_TRAVELER",t)}else e.preventDefault()},copyData:function(){this.formTraveler.lastTName=this.GET_FORM.regLastname,this.formTraveler.firstTName=this.GET_FORM.regFirstname,this.formTraveler.mobileCountryCode=this.GET_FORM.regPhoneCode,this.formTraveler.mobile=this.GET_FORM.regPhoneNumber,this.formTraveler.email=this.GET_FORM.regEmail},validateFormTraveler:function(){return this.valLNState?this.valFNState?this.valBirthdayState?this.valIDState?!!this.valMobileState||(this.$refs.mb.$el.focus(),!1):(this.$refs.id.$el.focus(),!1):(this.$refs.birth.$el.focus(),!1):(this.$refs.fn.$el.focus(),!1):(this.$refs.ln.$el.focus(),!1)}}},f=(r(280),r(39)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"traveler-form"},[r("b-modal",{attrs:{id:"travelerForm","no-close-on-backdrop":"","hide-header-close":"",size:"lg"},on:{ok:e.handleForm},scopedSlots:e._u([{key:"modal-header",fn:function(){return[r("div",{staticClass:"modalHeader w-100 text-center"},[r("span",{staticClass:"text-capitalize modalTitle"},[e._v("traveler")]),e._v(" "),e.travelerCount?e._e():r("b-button",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:e.copyData}},[e._v("與訂購人相同")])],1)]},proxy:!0}])},[e._v(" "),r("b-form",[r("b-form-row",{staticClass:"mb-2"},[r("b-col",[r("b-form-input",{ref:"ln",class:e.setFieldBorder,attrs:{state:e.valLNState,placeholder:"Enter Last Name / 姓氏"},model:{value:e.formTraveler.lastTName,callback:function(t){e.$set(e.formTraveler,"lastTName",t)},expression:"formTraveler.lastTName"}})],1),e._v(" "),r("b-col",[r("b-form-input",{ref:"fn",class:e.setFieldBorder,attrs:{state:e.valFNState,placeholder:"Enter First Name / 名字"},model:{value:e.formTraveler.firstTName,callback:function(t){e.$set(e.formTraveler,"firstTName",t)},expression:"formTraveler.firstTName"}})],1),e._v(" "),r("b-col",{attrs:{md:"auto"}},[r("b-form-datepicker",{ref:"birth",class:e.setFieldBorder,attrs:{id:"datepicker-placeholder",state:e.valBirthdayState,placeholder:"Birthday",locale:"en",max:e.disableFutureDate},model:{value:e.formTraveler.birthday,callback:function(t){e.$set(e.formTraveler,"birthday",t)},expression:"formTraveler.birthday"}})],1)],1),e._v(" "),r("b-form-row",[r("b-col",[r("b-form-input",{ref:"id",class:e.setFieldBorder,attrs:{state:e.valIDState,placeholder:"Passport / 身分證字號"},model:{value:e.formTraveler.identityNumber,callback:function(t){e.$set(e.formTraveler,"identityNumber",t)},expression:"formTraveler.identityNumber"}})],1)],1),e._v(" "),r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("b-form-select",{attrs:{options:e.phoneCode},model:{value:e.formTraveler.mobileCountryCode,callback:function(t){e.$set(e.formTraveler,"mobileCountryCode",t)},expression:"formTraveler.mobileCountryCode"}})],1),e._v(" "),r("b-col",[r("b-form-input",{ref:"mb",class:e.setFieldBorder,attrs:{state:e.valMobileState,placeholder:"Mobile / 手機",type:"number"},model:{value:e.formTraveler.mobile,callback:function(t){e.$set(e.formTraveler,"mobile",t)},expression:"formTraveler.mobile"}})],1)],1),e._v(" "),r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("b-form-input",{ref:"em",class:e.setFieldBorder,attrs:{state:e.valEmailState,placeholder:"Email"},model:{value:e.formTraveler.email,callback:function(t){e.$set(e.formTraveler,"email",t)},expression:"formTraveler.email"}})],1)],1)],1)],1)],1)}),[],!1,null,"e2bd5698",null);t.default=component.exports},280:function(e,t,r){"use strict";r(277)},281:function(e,t,r){var o=r(55)(!1);o.push([e.i,".modalTitle[data-v-e2bd5698]{font-size:1.2rem;font-weight:600}.setFieldBorder[data-v-e2bd5698]{border:1px solid #ced4da}",""]),e.exports=o},285:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),l=r(66);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{Travelerform:r(278).default},data:function(){return{traveler:[],travelerNumber:0,maxTravelerNumber:7,fields:[{key:"lastTName",label:"First Name"},{key:"firstTName",label:"Last Name"},"birthday",{key:"actions"}]}},computed:c(c(c(c({},Object(l.b)("form",["GET_TRAVELER"])),Object(l.b)("form",["GET_TRAVELERNUMBER"])),Object(l.c)("form",["DELETE_TRAVELER"])),{},{travelerCount:function(){return this.GET_TRAVELERNUMBER},disabled:function(){return this.travelerCount>=this.maxTravelerNumber}}),methods:{showTravelerFormModal:function(){this.$refs.childTravelform.showTravelerForm()},editTraveler:function(data){this.$refs.childTravelform.showTravelerForm(data.index)},delTraveler:function(data){this.$store.commit("form/DELETE_TRAVELER",data.index)}},created:function(){this.traveler=this.GET_TRAVELER}},f=r(39),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5"},[r("h3",[e._v("Travelers "),r("b-badge",[e._v(e._s(e.travelerCount)+" / "+e._s(e.maxTravelerNumber))]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"primary",disabled:e.disabled},on:{click:e.showTravelerFormModal}},[e._v("Add Traveler")])],1),e._v(" "),r("div",[r("b-table",{attrs:{hover:"","head-variant":"light",small:"",items:e.traveler,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(data){return[r("b-button",{attrs:{size:"sm",variant:"info"},on:{click:function(t){return e.editTraveler(data)}}},[e._v("修改")]),e._v(" "),r("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.delTraveler(data)}}},[e._v("刪除")])]}}])})],1),e._v(" "),r("Travelerform",{ref:"childTravelform"})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Travelerform:r(278).default})},287:function(e,t,r){var content=r(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("14979bf2",content,!0,{sourceMap:!1})},290:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),l=r(66),n=r(291),c=r(285);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{Agreement:n.default,Traveler:c.default},computed:f(f(f(f({},Object(l.c)("form",["SET_REGFORM"])),Object(l.b)("country",["GET_COUNTRY","GET_PHONECODE"])),Object(l.b)("form",["GET_FORM","GET_TRAVELERNUMBER"])),{},{travelerCount:function(){return this.GET_TRAVELERNUMBER},valRegLNState:function(){return this.GET_FORM.regLastname.length>=1},valRegFNState:function(){return this.GET_FORM.regFirstname.length>=1},valRegEmailState:function(){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.GET_FORM.regEmail.toLowerCase())},valRegPhoneNumberState:function(){return this.GET_FORM.regPhoneNumber.length>=5},valRegAddressState:function(){return this.GET_FORM.regAddress.length>=10},regLastname:{get:function(){return this.GET_FORM.regLastname},set:function(e){var t={field:"regLastname",value:e};this.$store.commit("form/SET_REGFORM",t)}},regFirstname:{get:function(){return this.GET_FORM.regFirstname},set:function(e){var t={field:"regFirstname",value:e};this.$store.commit("form/SET_REGFORM",t)}},regEmail:{get:function(){return this.GET_FORM.regEmail},set:function(e){var t={field:"regEmail",value:e};this.$store.commit("form/SET_REGFORM",t)}},regPhoneCode:{get:function(){return this.GET_FORM.regPhoneCode},set:function(e){var t={field:"regPhoneCode",value:e};this.$store.commit("form/SET_REGFORM",t)}},regPhoneNumber:{get:function(){return this.GET_FORM.regPhoneNumber},set:function(e){var t={field:"regPhoneNumber",value:e};this.$store.commit("form/SET_REGFORM",t)}},regCountry:{get:function(){return this.GET_FORM.regCountry},set:function(e){var t={field:"regCountry",value:e};this.$store.commit("form/SET_REGFORM",t)}},regAddress:{get:function(){return this.GET_FORM.regAddress},set:function(e){var t={field:"regAddress",value:e};this.$store.commit("form/SET_REGFORM",t)}}}),data:function(){return{setFieldBorder:"setFieldBorder",country:[],phoneCode:[]}},methods:{onSubmit:function(e){e.preventDefault(),this.formValidation()&&alert("can be submited")},showAgreementModal:function(){this.$refs.childAgreement.showAgreement()},onstart:function(){this.onStart="setField"},formValidation:function(){return this.valRegLNState?this.valRegFNState?this.valRegEmailState?this.valRegPhoneNumberState?this.valRegAddressState?0!=this.travelerCount||(alert("Traveler has not been set!"),!1):(this.$refs.address.$el.focus(),!1):(this.$refs.phone.$el.focus(),!1):(this.$refs.email.$el.focus(),!1):(this.$refs.fn.$el.focus(),!1):(this.$refs.ln.$el.focus(),!1)}},mounted:function(){},created:function(){this.form=this.GET_FORM,this.country=this.GET_COUNTRY,this.phoneCode=this.GET_PHONECODE}},v=(r(294),r(39)),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register p-2 mb-2"},[e._m(0),e._v(" "),r("b-form",{staticClass:"form",on:{submit:e.onSubmit}},[r("b-col",{},[r("b-form-input",{ref:"ln",class:e.setFieldBorder,attrs:{state:e.valRegLNState,placeholder:"Enter your Last name / 姓氏",required:""},model:{value:e.regLastname,callback:function(t){e.regLastname=t},expression:"regLastname"}})],1),e._v(" "),r("b-col",{staticClass:"mt-2"},[r("b-form-input",{ref:"fn",class:e.setFieldBorder,attrs:{state:e.valRegFNState,placeholder:"Enter your first name / 名字",required:""},model:{value:e.regFirstname,callback:function(t){e.regFirstname=t},expression:"regFirstname"}})],1),e._v(" "),r("b-col",{staticClass:"mt-2"},[r("b-form-input",{ref:"email",class:e.setFieldBorder,attrs:{state:e.valRegEmailState,type:"email",placeholder:"Email",required:""},model:{value:e.regEmail,callback:function(t){e.regEmail=t},expression:"regEmail"}})],1),e._v(" "),r("b-col",{staticClass:"mt-2"},[r("b-form-select",{attrs:{options:e.phoneCode},model:{value:e.regPhoneCode,callback:function(t){e.regPhoneCode=t},expression:"regPhoneCode"}})],1),e._v(" "),r("b-col",{staticClass:"mt-2"},[r("b-form-input",{ref:"phone",class:e.setFieldBorder,attrs:{type:"number",state:e.valRegPhoneNumberState,placeholder:"Phone Number 聯絡電話",required:""},model:{value:e.regPhoneNumber,callback:function(t){e.regPhoneNumber=t},expression:"regPhoneNumber"}})],1),e._v(" "),r("b-col",{staticClass:"mt-2"},[r("b-form-select",{attrs:{options:e.country},model:{value:e.regCountry,callback:function(t){e.regCountry=t},expression:"regCountry"}})],1),e._v(" "),r("b-col",{staticClass:"mt-2"},[r("b-form-input",{ref:"address",class:e.setFieldBorder,attrs:{placeholder:"Enter Address 地址",state:e.valRegAddressState,required:""},model:{value:e.regAddress,callback:function(t){e.regAddress=t},expression:"regAddress"}})],1),e._v(" "),r("div",{staticClass:"mt-2 text-right"},[r("h6",[r("b-badge",{staticClass:"showAgreement",attrs:{variant:"danger"},on:{click:e.showAgreementModal}},[e._v("Show Agreement")])],1)])],1),e._v(" "),r("Traveler"),e._v(" "),r("div",[e._v("\n    "+e._s(this.GET_FORM)+"\n  ")]),e._v(" "),r("div",{staticClass:"submit"},[r("div",{staticClass:"text-center mt-2"},[r("b-button",{attrs:{variant:"warning"},on:{click:e.onSubmit}},[r("h6",[e._v("Submit")])])],1)]),e._v(" "),r("Agreement",{ref:"childAgreement"})],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mb-3 text-center"},[r("h4",[e._v("訂購人")])])}],!1,null,"6cd2b4d8",null);t.default=component.exports;installComponents(component,{Traveler:r(285).default,Agreement:r(291).default})},294:function(e,t,r){"use strict";r(287)},295:function(e,t,r){var o=r(55)(!1);o.push([e.i,".register[data-v-6cd2b4d8]{border-radius:3px}.showAgreement[data-v-6cd2b4d8]:hover{cursor:pointer;color:#fff}.form[data-v-6cd2b4d8]{margin:auto;width:50%}@media (max-width:600px){.form[data-v-6cd2b4d8]{width:100%}}.col[data-v-6cd2b4d8]{padding-right:0;padding-left:0}.setFieldBorder[data-v-6cd2b4d8]{border:1px solid #ced4da}",""]),e.exports=o}}]);