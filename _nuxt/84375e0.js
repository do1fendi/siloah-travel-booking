(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{277:function(t,e,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("08d0af14",content,!0,{sourceMap:!1})},278:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=r(66);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){var t=new Date;return{formTraveler:[],form:{lastTName:"",firstTName:"",birthday:""},index:null,disableFutureDate:new Date(t.getFullYear(),t.getMonth(),t.getDate())}},computed:c(c(c({},Object(n.b)("form",["GET_TRAVELER","GET_TRAVELERNUMBER","GET_FORM"])),Object(n.c)("form",["SET_TRAVELER"])),{},{travelerCount:function(){return this.GET_TRAVELERNUMBER}}),created:function(){this.formTraveler=this.GET_TRAVELER,this.travelerNumber=this.GET_TRAVELERNUMBER},methods:{showTravelerForm:function(t){void 0===t?(this.form={},this.index=null):(this.form={},this.form.lastTName=this.GET_TRAVELER[t].lastTName,this.form.firstTName=this.GET_TRAVELER[t].firstTName,this.form.birthday=this.GET_TRAVELER[t].birthday,this.index=t),this.$bvModal.show("travelerForm")},handleForm:function(t){if(void 0===this.form.lastTName||""==this.form.lastTName)t.preventDefault(),alert("cannot empty");else{var e={index:this.index,form:this.form};this.$store.commit("form/SET_TRAVELER",e)}},copyData:function(){this.form={},this.form.lastTName=this.GET_FORM.regLastname,this.form.firstTName=this.GET_FORM.regFirstname}}},f=(r(279),r(39)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"traveler-form"},[r("b-modal",{attrs:{id:"travelerForm","no-close-on-backdrop":"","hide-header-close":"",size:"lg"},on:{ok:t.handleForm},scopedSlots:t._u([{key:"modal-header",fn:function(){return[r("div",{staticClass:"modalHeader w-100 text-center"},[r("span",{staticClass:"text-capitalize modalTitle"},[t._v("traveler")]),t._v(" "),t.travelerCount?t._e():r("b-button",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:t.copyData}},[t._v("與訂購人相同")])],1)]},proxy:!0}])},[t._v(" "),r("b-form",[r("b-form-row",{staticClass:"mb-2"},[r("b-col",[r("b-form-input",{attrs:{placeholder:"Enter Last Name / 姓氏"},model:{value:t.form.lastTName,callback:function(e){t.$set(t.form,"lastTName",e)},expression:"form.lastTName"}})],1),t._v(" "),r("b-col",[r("b-form-input",{attrs:{placeholder:"Enter First Name / 名字"},model:{value:t.form.firstTName,callback:function(e){t.$set(t.form,"firstTName",e)},expression:"form.firstTName"}})],1),t._v(" "),r("b-col",{attrs:{md:"auto"}},[r("b-form-datepicker",{attrs:{id:"datepicker-placeholder",placeholder:"Birthday",locale:"en",max:t.disableFutureDate},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}})],1)],1)],1)],1)],1)}),[],!1,null,"05a80cd8",null);e.default=component.exports},279:function(t,e,r){"use strict";r(277)},280:function(t,e,r){var o=r(55)(!1);o.push([t.i,".modalTitle[data-v-05a80cd8]{font-size:1.2rem;font-weight:600}",""]),t.exports=o}}]);