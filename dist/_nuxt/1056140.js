(window.webpackJsonp=window.webpackJsonp||[]).push([[43,8,11],{440:function(e,t,r){e.exports=r.p+"img/post2.7f0bc74.png"},441:function(e,t,r){e.exports=r.p+"img/post3.7f0bc74.png"},442:function(e,t,r){e.exports=r.p+"img/post4.7f0bc74.png"},443:function(e,t,r){e.exports=r.p+"img/post5.7f0bc74.png"},444:function(e,t,r){e.exports=r.p+"img/post6.7f0bc74.png"},445:function(e,t,r){e.exports=r.p+"img/post7.7f0bc74.png"},446:function(e,t,r){e.exports=r.p+"img/post8.7f0bc74.png"},447:function(e,t,r){e.exports=r.p+"img/post9.7f0bc74.png"},448:function(e,t,r){e.exports=r.p+"img/post10.7f0bc74.png"},449:function(e,t,r){e.exports=r.p+"img/post11.7f0bc74.png"},450:function(e,t,r){e.exports=r.p+"img/post12.7f0bc74.png"},451:function(e,t,r){"use strict";r.r(t);var n={name:"instagram-area",data:function(){return{swiperOptionInstagram:{slidesPerView:5,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoplay:{autoplay:!0,delay:2500,disableOnInteraction:!0},breakpoints:{992:{slidesPerView:5},991:{slidesPerView:3},768:{slidesPerView:3},767:{slidesPerView:3},766:{slidesPerView:3},575:{slidesPerView:2},400:{slidesPerView:2},0:{slidesPerView:1}}},instagramItems:[{id:1,instagramImg:r(440)},{id:2,instagramImg:r(441)},{id:3,instagramImg:r(442)},{id:4,instagramImg:r(443)},{id:5,instagramImg:r(444)},{id:6,instagramImg:r(445)},{id:7,instagramImg:r(446)},{id:8,instagramImg:r(447)},{id:9,instagramImg:r(448)},{id:10,instagramImg:r(449)},{id:11,instagramImg:r(450)}]}}},o=r(44),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("section",{attrs:{id:"instagram_area_one"}},[t("div",{staticClass:"container-fluid"},[e._m(0),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("swiper",{staticClass:"swiper",attrs:{options:e.swiperOptionInstagram}},e._l(e.instagramItems,(function(e){return t("swiper-slide",{key:e.id},[t("InstagramSliderItem",{attrs:{instagramImg:e.instagramImg}})],1)})),1)],1)])])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"center_heading"},[t("h2",[e._v("Follow Us Instagram")]),e._v(" "),t("p",[e._v("Mauris luctus nisi sapien tristique dignissim ornare")])])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{InstagramSliderItem:r(452).default})},452:function(e,t,r){"use strict";r.r(t);var n={name:"instagram-slider-item",props:{instagramImg:String}},o=r(44),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"instgram_post"},[t("a",{attrs:{href:"#!"}},[t("i",{staticClass:"fab fa-instagram"}),e._v(" "),t("img",{attrs:{src:e.instagramImg,alt:"img"}})])])}),[],!1,null,null,null);t.default=component.exports},474:function(e,t,r){e.exports=r.p+"img/team1.0b7d91e.png"},615:function(e,t,r){"use strict";r.r(t);var n=r(142),o={name:"AccountInfoEdit",components:{InstagramArea:r(451).default},data:function(){return{title:"Account Info Edit",breadcrumbItems:[{text:"Home",to:"/"},{text:"Account info edit"}],user:{fname:"John",lname:"Doe",email:"demo@example.com",oldPassword:"",password:"",confirmPassword:""},submitted:!1}},validations:{user:{fname:{required:n.required},lname:{required:n.required},email:{required:n.required,email:n.email},oldPassword:{required:n.required,minLength:Object(n.minLength)(6)},password:{required:n.required,minLength:Object(n.minLength)(6)},confirmPassword:{required:n.required,sameAsPassword:Object(n.sameAs)("password")}}},mounted:function(){window.scrollTo(0,0)},methods:{handleSubmit:function(e){this.submitted=!0,this.$v.$touch(),this.$v.$invalid||this.$router.push("/my-account/addresses")}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Account info edit page - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},d=r(44),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("section",{attrs:{id:"common_banner_one"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"common_banner_text"},[t("h2",[e._v(e._s(this.title))]),e._v(" "),t("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:e.breadcrumbItems}})],1)])])])]),e._v(" "),t("section",{staticClass:"pt-100",attrs:{id:"account_edit"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-3"},[t("div",{staticClass:"account_thumd text-center"},[t("img",{staticClass:"rounded-circle",attrs:{src:r(474),alt:"img"}}),e._v(" "),t("h4",{staticClass:"mt-4 mb-2"},[e._v("Robert Downey JR.")]),e._v(" "),t("p",{staticClass:"mb-3"},[e._v("UX/UI Designer")])])]),e._v(" "),t("div",{staticClass:"col-lg-9"},[t("div",{staticClass:"account_setting"},[e._m(0),e._v(" "),t("form",{attrs:{id:"account_info_form"},on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"text"}},[e._v("Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.fname,expression:"user.fname"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.fname.$error},attrs:{type:"text",value:"Jhon"},domProps:{value:e.user.fname},on:{input:function(t){t.target.composing||e.$set(e.user,"fname",t.target.value)}}}),e._v(" "),e.submitted&&!e.$v.user.fname.required?t("div",{staticClass:"invalid-feedback"},[e._v("First Name is required")]):e._e(),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lname,expression:"user.lname"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.lname.$error},attrs:{type:"text",value:"Dhoe"},domProps:{value:e.user.lname},on:{input:function(t){t.target.composing||e.$set(e.user,"lname",t.target.value)}}}),e._v(" "),e.submitted&&!e.$v.user.lname.required?t("div",{staticClass:"invalid-feedback"},[e._v("Last Name is required")]):e._e()]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"text"}},[e._v("Email Address")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.email.$error},attrs:{type:"email",value:"example@demo.com"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),e.submitted&&e.$v.user.email.$error?t("div",{staticClass:"invalid-feedback"},[e.$v.user.email.required?e._e():t("span",[e._v("Email is required")]),e._v(" "),e.$v.user.email.email?e._e():t("span",[e._v("Email is invalid")])]):e._e()]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"text"}},[e._v("Current Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.oldPassword,expression:"user.oldPassword"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.oldPassword.$error},attrs:{type:"password",placeholder:"Enter your current password"},domProps:{value:e.user.oldPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"oldPassword",t.target.value)}}}),e._v(" "),e.submitted&&e.$v.user.oldPassword.$error?t("div",{staticClass:"invalid-feedback"},[e.$v.user.oldPassword.required?e._e():t("span",[e._v("Password is required")]),e._v(" "),e.$v.user.oldPassword.minLength?e._e():t("span",[e._v("Password must be at least 6 characters")])]):e._e(),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.password.$error},attrs:{type:"password",placeholder:"Enter your new password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),e.submitted&&e.$v.user.password.$error?t("div",{staticClass:"invalid-feedback"},[e.$v.user.password.required?e._e():t("span",[e._v("Password is required")]),e._v(" "),e.$v.user.password.minLength?e._e():t("span",[e._v("Password must be at least 6 characters")])]):e._e(),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.user.confirmPassword.$error},attrs:{type:"password",placeholder:"Re-type your new password"},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}),e._v(" "),e.submitted&&e.$v.user.confirmPassword.$error?t("div",{staticClass:"invalid-feedback"},[e.$v.user.confirmPassword.required?e.$v.user.confirmPassword.sameAsPassword?e._e():t("span",[e._v("Passwords must match")]):t("span",[e._v("Confirm Password is required")])]):e._e()]),e._v(" "),t("button",{staticClass:"theme-btn-one bg-black btn_sm"},[e._v("Update Information")])])])])])])]),e._v(" "),t("InstagramArea",{staticClass:"pt-100"})],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"account_setting_heading mb-3"},[t("h2",{staticClass:"pb-1"},[e._v("Account Details")]),e._v(" "),t("p",[e._v("Edit your account settings and change your password here.")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{InstagramArea:r(451).default})}}]);