(window.webpackJsonp=window.webpackJsonp||[]).push([[64,8,11],{440:function(t,r,e){t.exports=e.p+"img/post2.7f0bc74.png"},441:function(t,r,e){t.exports=e.p+"img/post3.7f0bc74.png"},442:function(t,r,e){t.exports=e.p+"img/post4.7f0bc74.png"},443:function(t,r,e){t.exports=e.p+"img/post5.7f0bc74.png"},444:function(t,r,e){t.exports=e.p+"img/post6.7f0bc74.png"},445:function(t,r,e){t.exports=e.p+"img/post7.7f0bc74.png"},446:function(t,r,e){t.exports=e.p+"img/post8.7f0bc74.png"},447:function(t,r,e){t.exports=e.p+"img/post9.7f0bc74.png"},448:function(t,r,e){t.exports=e.p+"img/post10.7f0bc74.png"},449:function(t,r,e){t.exports=e.p+"img/post11.7f0bc74.png"},450:function(t,r,e){t.exports=e.p+"img/post12.7f0bc74.png"},451:function(t,r,e){"use strict";e.r(r);var o={name:"instagram-area",data:function(){return{swiperOptionInstagram:{slidesPerView:5,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoplay:{autoplay:!0,delay:2500,disableOnInteraction:!0},breakpoints:{992:{slidesPerView:5},991:{slidesPerView:3},768:{slidesPerView:3},767:{slidesPerView:3},766:{slidesPerView:3},575:{slidesPerView:2},400:{slidesPerView:2},0:{slidesPerView:1}}},instagramItems:[{id:1,instagramImg:e(440)},{id:2,instagramImg:e(441)},{id:3,instagramImg:e(442)},{id:4,instagramImg:e(443)},{id:5,instagramImg:e(444)},{id:6,instagramImg:e(445)},{id:7,instagramImg:e(446)},{id:8,instagramImg:e(447)},{id:9,instagramImg:e(448)},{id:10,instagramImg:e(449)},{id:11,instagramImg:e(450)}]}}},l=e(44),component=Object(l.a)(o,(function(){var t=this,r=t._self._c;return r("section",{attrs:{id:"instagram_area_one"}},[r("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("swiper",{staticClass:"swiper",attrs:{options:t.swiperOptionInstagram}},t._l(t.instagramItems,(function(t){return r("swiper-slide",{key:t.id},[r("InstagramSliderItem",{attrs:{instagramImg:t.instagramImg}})],1)})),1)],1)])])])}),[function(){var t=this,r=t._self._c;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"center_heading"},[r("h2",[t._v("Follow Us Instagram")]),t._v(" "),r("p",[t._v("Mauris luctus nisi sapien tristique dignissim ornare")])])])])}],!1,null,null,null);r.default=component.exports;installComponents(component,{InstagramSliderItem:e(452).default})},452:function(t,r,e){"use strict";e.r(r);var o={name:"instagram-slider-item",props:{instagramImg:String}},l=e(44),component=Object(l.a)(o,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"instgram_post"},[r("a",{attrs:{href:"#!"}},[r("i",{staticClass:"fab fa-instagram"}),t._v(" "),r("img",{attrs:{src:t.instagramImg,alt:"img"}})])])}),[],!1,null,null,null);r.default=component.exports},630:function(t,r,e){"use strict";e.r(r);var o={name:"AddProduct",components:{InstagramArea:e(451).default},data:function(){return{title:"Add Product",breadcrumbItems:[{text:"Home",to:"/"},{text:"Add Product"}]}},mounted:function(){window.scrollTo(0,0)},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Add Product Vendor Dashboard - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},l=e(44),component=Object(l.a)(o,(function(){var t=this,r=t._self._c;return r("div",[r("section",{attrs:{id:"common_banner_one"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"common_banner_text"},[r("h2",[t._v(t._s(this.title))]),t._v(" "),r("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:t.breadcrumbItems}})],1)])])])]),t._v(" "),r("section",{staticClass:"pt-100",attrs:{id:"add_product_area"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 offset-lg-2"},[r("div",{staticClass:"add_product_wrapper"},[r("div",{staticClass:"back_to_area"},[r("nuxt-link",{attrs:{to:"/vendor-dashboard/"}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" Back To Dashboard")])],1),t._v(" "),r("h3",[t._v("Add Product")]),t._v(" "),r("form",{staticClass:"add_product_form"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"image-input"},[r("img",{staticClass:"image-preview",attrs:{src:e(258),alt:"img"}}),t._v(" "),r("input",{attrs:{type:"file",accept:"image/*",id:"imageInput"}}),t._v(" "),t._m(0)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)])])])])])])]),t._v(" "),r("InstagramArea",{staticClass:"pt-100"})],1)}),[function(){var t=this._self._c;return t("label",{staticClass:"image-button",attrs:{for:"imageInput"}},[t("i",{staticClass:"far fa-image"}),this._v("Choose image")])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"fotm-group"},[r("label",{attrs:{for:"product_name"}},[t._v("Product Name*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"product_name",placeholder:"T-Shirt Form Girls"}})])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"fotm-group"},[r("label",{attrs:{for:"product_price"}},[t._v("Product Price*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"number",id:"product_price",placeholder:"2"}})])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"fotm-group"},[r("label",{attrs:{for:"product_unit"}},[t._v("Product Unit*")]),t._v(" "),r("select",{attrs:{name:"product",id:"product_unit"}},[r("option",{attrs:{value:"Filter"}},[t._v("Filter")]),t._v(" "),r("option",{attrs:{value:"volvo"}},[t._v("Most Popular")]),t._v(" "),r("option",{attrs:{value:"saab"}},[t._v("Best Seller")]),t._v(" "),r("option",{attrs:{value:"mercedes"}},[t._v("Tranding")]),t._v(" "),r("option",{attrs:{value:"audi"}},[t._v("Featured")])])])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"fotm-group"},[r("label",{attrs:{for:"product_available"}},[t._v("Product Available From*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"date",id:"product_available"}})])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"fotm-group"},[r("label",{attrs:{for:"estimate_available"}},[t._v("Estimate Available For Days*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"number",id:"estimate_available",placeholder:"12"}})])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"fotm-group"},[r("label",{attrs:{for:"available_stock"}},[t._v("Available Stock (Quantity)*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"number",id:"available_stock",placeholder:"45"}})])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"fotm-group"},[r("label",{attrs:{for:"whole_sale"}},[t._v("Whole Sale Support*")]),t._v(" "),r("select",{attrs:{name:"product",id:"whole_sale"}},[r("option",{attrs:{value:"yes",selected:""}},[t._v("Yes")]),t._v(" "),r("option",{attrs:{value:"no"}},[t._v("No")])])])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"fotm-group"},[r("label",{attrs:{for:"flash_sale"}},[t._v("Flash Sale Support*")]),t._v(" "),r("select",{attrs:{name:"product",id:"flash_sale"}},[r("option",{attrs:{value:"yes",selected:""}},[t._v("Yes")]),t._v(" "),r("option",{attrs:{value:"no"}},[t._v("No")])])])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"fotm-group"},[r("label",{attrs:{for:"frequency_support"}},[t._v("Frequency Support*")]),t._v(" "),r("select",{attrs:{name:"product",id:"frequency_support"}},[r("option",{attrs:{value:"yes",selected:""}},[t._v("Yes")]),t._v(" "),r("option",{attrs:{value:"no"}},[t._v("No")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"btn_right_table"},[t("button",{staticClass:"theme-btn-one bg-black btn_sm"},[this._v("Add Product")])])])}],!1,null,null,null);r.default=component.exports;installComponents(component,{InstagramArea:e(451).default})}}]);