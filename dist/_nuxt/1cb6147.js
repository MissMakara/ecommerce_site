(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{613:function(e,t,r){"use strict";r.r(t);var l=r(142),o={name:"contact-us-2",data:function(){return{title:"Contact Us",breadcrumbItems:[{text:"Home",to:"/"},{text:"Contact"}],user:{firstName:"",phone:"",email:"",subject:"",message:""},submitted:!1}},validations:{user:{firstName:{required:l.required},phone:{required:l.required},email:{required:l.required,email:l.email},subject:{required:l.required,minLength:Object(l.minLength)(6)},message:{required:l.required}}},mounted:function(){window.scrollTo(0,0)},methods:{handleSubmit:function(e){this.submitted=!0,this.$v.$touch(),this.$v.$invalid||alert("Form Submitted Successfully!")}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Contact Us page - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},c=r(44),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("section",{attrs:{id:"common_banner_one"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"common_banner_text"},[t("h2",[e._v(e._s(this.title))]),e._v(" "),t("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:e.breadcrumbItems}})],1)])])])]),e._v(" "),t("section",{staticClass:"ptb-100",attrs:{id:"contact_area"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("div",{staticClass:"contact_form_one"},[t("h3",[e._v("Get In Touch")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-12"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.firstName.$error},attrs:{type:"text",id:"firstName",name:"firstName",placeholder:"Name*"},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}}),e._v(" "),e.submitted&&!e.$v.user.firstName.required?t("div",{staticClass:"invalid-feedback"},[e._v("Name is required")]):e._e()])]),e._v(" "),t("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-12"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.email.$error},attrs:{type:"email",id:"email",name:"email",placeholder:"email*"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),e.submitted&&e.$v.user.email.$error?t("div",{staticClass:"invalid-feedback"},[e.$v.user.email.required?e._e():t("span",[e._v("Email is required")]),e._v(" "),e.$v.user.email.email?e._e():t("span",[e._v("Email is invalid")])]):e._e()])]),e._v(" "),t("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-12"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.phone.$error},attrs:{type:"text",id:"phone",name:"phone",placeholder:"Phone*"},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}}),e._v(" "),e.submitted&&!e.$v.user.phone.required?t("div",{staticClass:"invalid-feedback"},[e._v("Phone is required")]):e._e()])]),e._v(" "),t("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-12"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.subject,expression:"user.subject"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.subject.$error},attrs:{type:"text",id:"subject",name:"subject",placeholder:"Subject"},domProps:{value:e.user.subject},on:{input:function(t){t.target.composing||e.$set(e.user,"subject",t.target.value)}}}),e._v(" "),e.submitted&&e.$v.user.subject.$error?t("div",{staticClass:"invalid-feedback"},[e.$v.user.subject.required?e._e():t("span",[e._v("Subject is required")]),e._v(" "),e.$v.user.subject.minLength?e._e():t("span",[e._v("Subject must be at least 6 characters")])]):e._e()])]),e._v(" "),t("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-12"},[t("div",{staticClass:"form-group"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.message,expression:"user.message"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.message.$error},attrs:{rows:"7",id:"message",name:"message",placeholder:"Message*"},domProps:{value:e.user.message},on:{input:function(t){t.target.composing||e.$set(e.user,"message",t.target.value)}}}),e._v(" "),e.submitted&&!e.$v.user.message.required?t("div",{staticClass:"invalid-feedback"},[e._v("Message is required")]):e._e()]),e._v(" "),e._m(0)])])])])]),e._v(" "),e._m(1)])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"submit_bitton_contact_one"},[e("button",{staticClass:"theme-btn-one btn-black-overlay btn_md"},[this._v("Submit")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"left_side_contact"},[t("ul",[t("li",{staticClass:"address_location"},[t("i",{staticClass:"fas fa-map-marker-alt"}),e._v(" "),t("p",[e._v("32, Choto Mirzapur, Ahsan Ahmed Road Khulna 9100, Bangladesh")])]),e._v(" "),t("li",{staticClass:"address_location"},[t("i",{staticClass:"fas fa-phone-volume"}),e._v(" "),t("div",{staticClass:"contact_widget"},[t("a",{attrs:{href:"tel:2873077"}},[e._v("+1 (833) 287-3077")]),e._v(" "),t("a",{attrs:{href:"tel:2873077"}},[e._v("+1 (833) 528-8619")])])]),e._v(" "),t("li",{staticClass:"address_location"},[t("i",{staticClass:"far fa-envelope"}),e._v(" "),t("div",{staticClass:"contact_widget"},[t("a",{attrs:{href:"mailto:demo@gmail.com"}},[e._v("demo@gmail.com")]),e._v(" "),t("a",{attrs:{href:"mailto:demo@gmail.com"}},[e._v("demo@gmail.com")])])])])])])}],!1,null,null,null);t.default=component.exports}}]);