(window.webpackJsonp=window.webpackJsonp||[]).push([[62,8,11,12,18],{440:function(t,e,r){t.exports=r.p+"img/post2.7f0bc74.png"},441:function(t,e,r){t.exports=r.p+"img/post3.7f0bc74.png"},442:function(t,e,r){t.exports=r.p+"img/post4.7f0bc74.png"},443:function(t,e,r){t.exports=r.p+"img/post5.7f0bc74.png"},444:function(t,e,r){t.exports=r.p+"img/post6.7f0bc74.png"},445:function(t,e,r){t.exports=r.p+"img/post7.7f0bc74.png"},446:function(t,e,r){t.exports=r.p+"img/post8.7f0bc74.png"},447:function(t,e,r){t.exports=r.p+"img/post9.7f0bc74.png"},448:function(t,e,r){t.exports=r.p+"img/post10.7f0bc74.png"},449:function(t,e,r){t.exports=r.p+"img/post11.7f0bc74.png"},450:function(t,e,r){t.exports=r.p+"img/post12.7f0bc74.png"},451:function(t,e,r){"use strict";r.r(e);var o={name:"instagram-area",data:function(){return{swiperOptionInstagram:{slidesPerView:5,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoplay:{autoplay:!0,delay:2500,disableOnInteraction:!0},breakpoints:{992:{slidesPerView:5},991:{slidesPerView:3},768:{slidesPerView:3},767:{slidesPerView:3},766:{slidesPerView:3},575:{slidesPerView:2},400:{slidesPerView:2},0:{slidesPerView:1}}},instagramItems:[{id:1,instagramImg:r(440)},{id:2,instagramImg:r(441)},{id:3,instagramImg:r(442)},{id:4,instagramImg:r(443)},{id:5,instagramImg:r(444)},{id:6,instagramImg:r(445)},{id:7,instagramImg:r(446)},{id:8,instagramImg:r(447)},{id:9,instagramImg:r(448)},{id:10,instagramImg:r(449)},{id:11,instagramImg:r(450)}]}}},c=r(44),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"instagram_area_one"}},[e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOptionInstagram}},t._l(t.instagramItems,(function(t){return e("swiper-slide",{key:t.id},[e("InstagramSliderItem",{attrs:{instagramImg:t.instagramImg}})],1)})),1)],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"center_heading"},[e("h2",[t._v("Follow Us Instagram")]),t._v(" "),e("p",[t._v("Mauris luctus nisi sapien tristique dignissim ornare")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{InstagramSliderItem:r(452).default})},452:function(t,e,r){"use strict";r.r(e);var o={name:"instagram-slider-item",props:{instagramImg:String}},c=r(44),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"instgram_post"},[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-instagram"}),t._v(" "),e("img",{attrs:{src:t.instagramImg,alt:"img"}})])])}),[],!1,null,null,null);e.default=component.exports},453:function(t,e,r){"use strict";r.r(e);r(4),r(72),r(6),r(3),r(7);var o=r(0),c=(r(5),r(2),r(1),r(48));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ProductBox1",props:["product","index"],data:function(){var t;return t={quantity:1,imageSrc:"",cartProduct:{},compareProduct:{},dismissSecs:3,dismissCountDown:0},Object(o.a)(t,"quantity",1),Object(o.a)(t,"activeColor",""),Object(o.a)(t,"selectedSize",""),Object(o.a)(t,"qty",""),Object(o.a)(t,"size",[]),Object(o.a)(t,"swiperOption",{slidesPerView:1,spaceBetween:20,freeMode:!0}),t},computed:l(l({},Object(c.c)({productslist:function(t){return t.products.productslist}})),{},{swiper:function(){return this.$refs.mySwiper.swiper}}),mounted:function(){this.uniqColor=this.product.variants[0].color,this.sizeVariant(this.product.variants[0].image_id),this.activeColor=this.uniqColor,this.changeSizeVariant(this.product.variants[0].size)},methods:{toggleModal:function(){this.$refs["product-details-popup"].toggle("#toggle-btn")},getImageUrl:function(path){return r(256)("./"+path)},addToCart:function(t){this.dismissCountDown=this.dismissSecs,this.cartProduct=t,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("cart/addToCart",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},addToCompare:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToCompare",t)},Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},changeSizeVariant:function(t){this.selectedSize=t},slideTo:function(t){this.swiper.slideTo(t,1e3,!1)},sizeVariant:function(t,e,r){var o=this;this.size=[],this.activeColor=r,this.product.variants.filter((function(e){t===e.image_id&&o.size.push(e.size)}))}}},v=r(44),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"product_wrappers_one"},[e("div",{staticClass:"thumb"},[e("nuxt-link",{staticClass:"image",attrs:{to:{path:"/product/"+t.product.id}}},[e("img",{attrs:{src:t.getImageUrl(t.imageSrc?t.imageSrc:t.product.images[0].src),alt:t.product.title}}),t._v(" "),e("img",{staticClass:"hover-image",attrs:{src:t.getImageUrl(t.imageSrc?t.imageSrc:t.product.images[1].src),alt:t.product.title}})]),t._v(" "),e("span",{staticClass:"badges"},[t.product.new?e("span",{staticClass:"new"},[t._v("new")]):t.product.hot?e("span",{staticClass:"hot"},[t._v("hot")]):e("span",{})]),t._v(" "),e("div",{staticClass:"actions"},[e("button",{staticClass:"action wishlist",attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"far fa-heart"})]),t._v(" "),e("button",{staticClass:"action quickview",attrs:{id:"toggle-btn",title:"Quick view"},on:{click:t.toggleModal}},[e("i",{staticClass:"fas fa-expand"})]),t._v(" "),e("button",{staticClass:"action compare",attrs:{title:"Compare"},on:{click:function(e){return t.addToCompare(t.product)}}},[e("i",{staticClass:"fas fa-exchange-alt"})])]),t._v(" "),e("button",{staticClass:"add-to-cart offcanvas-toggle",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n        Add To Cart\n      ")])],1),t._v(" "),e("div",{staticClass:"content"},[e("h5",{staticClass:"title text-capitalize"},[e("nuxt-link",{attrs:{to:{path:"/product/"+t.product.id}}},[t._v(t._s(t.product.title))])],1),t._v(" "),e("span",{staticClass:"price"},[t.product.discount?e("span",{staticClass:"new"},[t._v("$"+t._s(t.discountedPrice(t.product)))]):e("span",{staticClass:"new"},[t._v("$"+t._s(t.product.price))])])]),t._v(" "),e("div",[e("b-modal",{ref:"product-details-popup",staticClass:"product_one_modal_top",attrs:{centered:"","hide-footer":"",title:"Using Component Methods",id:"product_slider_one"},scopedSlots:t._u([{key:"modal-header",fn:function(t){var r=t.close;return[e("button",{staticClass:"close close_modal_icon",attrs:{type:"button"},on:{click:function(t){return r()}}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])]}}])},[t._v(" "),e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"products_modal_sliders"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.product.images,(function(r,o){return e("div",{key:o,staticClass:"swiper-slide"},[e("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImageUrl(r.src),id:r.image_id,alt:"imag.alt"}})])})),0)])])]),t._v(" "),e("div",{staticClass:"col-lg-7 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"modal_product_content_one"},[e("h3",{staticClass:"text-capitalize"},[t._v(t._s(t.product.title))]),t._v(" "),5==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("span",[t._v("(5 Customer Review)")])]):4==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(4 Customer Review)")])]):3==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(3 Customer Review)")])]):2==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(2 Customer Review)")])]):1==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(1 Customer Review)")])]):e("div",{staticClass:"product-review"},[e("span",[t._v("No Rating")])]),t._v(" "),t.product.discount?e("h4",[t._v("\n                  $"+t._s(t.discountedPrice(t.product))+"\n                  "),e("del",[t._v("$"+t._s(t.product.price))])]):e("h4",[t._v("$"+t._s(t.product.price))]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),e("div",{staticClass:"variable-single-item"},[e("span",[t._v("Color")]),t._v(" "),e("ul",{staticClass:"color-variant d-flex"},t._l(t.Color(t.product.variants),(function(r,o){return e("li",{key:o,class:{active:t.activeColor==r}},[e("a",{class:[r],style:{"background-color":r},on:{click:function(e){return t.sizeVariant(t.product.variants[o].image_id,o,r)}}})])})),0)]),t._v(" "),e("form",{attrs:{id:"product_count_form_one"}},[e("div",{staticClass:"product_count_one"},[e("b-form-spinbutton",{staticClass:"border-0",attrs:{id:"sb-inline",min:"1",max:"100",inline:""},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),t._v(" "),e("a",{staticClass:"theme-btn-one btn-black-overlay btn_sm",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])],1)]),t._v(" "),e("div",{staticClass:"modal_share_icons_one"},[e("h4",[t._v("SHARE THIS PRODUCT")]),t._v(" "),e("div",{staticClass:"posted_icons_one"},[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-linkedin-in"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-google-plus-g"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-pinterest-p"})])])])])])])])])],1)])])}),[],!1,null,null,null);e.default=component.exports},475:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var o=r(0),c=(r(19),r(48));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"ShopSidebar",data:function(){return{value:[50,1e3]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({shuffleproducts:function(t){return t.products.shuffleproducts}})),methods:{getImageUrl:function(path){return r(256)("./"+path)},discountedPrice:function(t){return t.price-t.price*t.discount/100},randomProduct:function(){for(var t=this.shuffleproducts,i=t.length-1;i>0;i--){var e=Math.floor(Math.random()*(i+1)),r=t[i];t[i]=t[e],t[e]=r}this.$store.dispatch("products/shuffleProduct",t.slice(0,30))},getallProduct:function(){this.$store.dispatch("products/getallProduct")}}},d=l,v=r(44),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"shop_sidebar_wrapper"},[e("div",{staticClass:"shop_Search"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.randomProduct.apply(null,arguments)}}},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},on:{keyup:t.randomProduct}}),t._v(" "),e("button",{on:{click:t.randomProduct}},[e("img",{attrs:{src:r(183),alt:"img"}})])])]),t._v(" "),e("div",{staticClass:"shop_sidebar_boxed"},[e("h4",[t._v("Product Categories")]),t._v(" "),e("form",[e("label",{staticClass:"custom_boxed"},[t._v("T-shirts\n                    "),e("input",{attrs:{type:"radio",name:"radio",checked:""},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Fashion\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Bags\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Jackets\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Shoes\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Jeans\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})])])]),t._v(" "),e("div",{staticClass:"shop_sidebar_boxed"},[e("h4",[t._v("Price")]),t._v(" "),e("div",{staticClass:"price_filter"},[e("vue-slider",{ref:"slider",attrs:{min:0,max:5e3},on:{change:function(e){t.randomProduct(t.$refs.slider.getValue())}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),e("div",{staticClass:"price-slider-amount mt-3 text-capitalize"},[t._v("Price: $"+t._s(t.value[0])+" - $"+t._s(t.value[1]))])],1)]),t._v(" "),e("div",{staticClass:"shop_sidebar_boxed"},[e("h4",[t._v("Color")]),t._v(" "),e("div",{staticClass:"product-variable-color"},[e("label",{attrs:{for:"modal-product-color-red6"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-red6",type:"radio",checked:""},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"product-color-red"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-tomato1"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-tomato1",type:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"product-color-tomato"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-green2"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-green2",type:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"product-color-green"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-light-green3"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-light-green3",type:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"product-color-light-green"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-blue4"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-blue4",type:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"product-color-blue"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-light-blue5"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-light-blue5",type:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"product-color-light-blue"})])])]),t._v(" "),e("div",{staticClass:"shop_sidebar_boxed"},[e("h4",[t._v("Size")]),t._v(" "),e("form",{attrs:{id:"sizes_input"}},[e("label",{staticClass:"custom_boxed"},[t._v("XS\n                    "),e("input",{attrs:{type:"radio",checked:"checked",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("S\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("M\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("L\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("XL\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})])])]),t._v(" "),e("div",{staticClass:"shop_sidebar_boxed"},[e("h4",[t._v("Brand")]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Next\n                    "),e("input",{attrs:{type:"radio",checked:"checked",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Adidas\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Calvin Klein\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Nike\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("Geox\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("label",{staticClass:"custom_boxed"},[t._v("River Island\n                    "),e("input",{attrs:{type:"radio",name:"radio"},on:{change:t.randomProduct}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("div",{staticClass:"clear_button"},[e("button",{staticClass:"theme-btn-one btn_sm btn-black-overlay mt-1",on:{click:t.getallProduct}},[t._v("Clear Filter")])])])])])}),[],!1,null,null,null);e.default=component.exports},628:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var o=r(0),c=(r(19),r(48)),n=r(453),l=r(451),d=r(475);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"shop-left-sidebar",components:{ProductBox1:n.default,InstagramArea:l.default,ShopSidebar:d.default},data:function(){return{title:"Shop",dismissCountDown:0,breadcrumbItems:[{text:"Home",to:"/"},{text:"Shop",to:"/shop/shop-4"}],current:1,paginate:12,paginateRange:3,pages:[],paginates:"",compareproduct:{},cartproduct:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({shuffleproducts:function(t){return t.products.shuffleproducts}})),mounted:function(){this.getPaginate(),this.updatePaginate(1),window.scrollTo(0,0)},methods:{alert:function(t){this.dismissCountDown=t},getPaginate:function(){this.paginates=Math.round(this.shuffleproducts.length/this.paginate),this.page=[];for(var i=0;i<this.paginates;i++)this.pages.push(i+1)},setPaginate:function(i){return 1===this.current?i<this.paginate:i>=this.paginate*(this.current-1)&&i<this.current*this.paginate},updatePaginate:function(i){this.current=i;var t=0,e=0;this.current<this.paginateRange-1?e=(t=1)+this.paginateRange-1:(t=this.current-1,e=this.current+1),t<1&&(t=1),e>this.paginates&&(e=this.paginates),this.pages=[];for(var r=t;r<=e;r++)this.pages.push(r);return this.pages},randomProduct:function(){for(var t=this.shuffleproducts,i=t.length-1;i>0;i--){var e=Math.floor(Math.random()*(i+1)),r=t[i];t[i]=t[e],t[e]=r}this.$store.dispatch("products/shuffleProduct",t.slice(0,30))},getallProduct:function(){this.$store.dispatch("products/getallProduct")}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Shop page - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},_=m,f=r(44),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("section",{attrs:{id:"common_banner_one"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"common_banner_text"},[e("h2",[t._v(t._s(this.title))]),t._v(" "),e("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:t.breadcrumbItems}})],1)])])])]),t._v(" "),e("section",{staticClass:"ptb-100",attrs:{id:"shop_main_area"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-12"},[e("div",{staticClass:"product_filter"},[e("div",{staticClass:"customs_selects"},[e("select",{staticClass:"customs_sel_box",attrs:{name:"product"},on:{change:t.randomProduct}},[e("option",{attrs:{value:"Filter"}},[t._v("Filter")]),t._v(" "),e("option",{attrs:{value:"most_popular"}},[t._v("Most Popular")]),t._v(" "),e("option",{attrs:{value:"best_seller"}},[t._v("Best Seller")]),t._v(" "),e("option",{attrs:{value:"tranding"}},[t._v("Tranding")]),t._v(" "),e("option",{attrs:{value:"featured"}},[t._v("Featured")])])])])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-12"},[e("div",{staticClass:"product_shot"},[t._m(0),t._v(" "),e("div",{staticClass:"customs_selects"},[e("select",{staticClass:"customs_sel_box",attrs:{name:"product"},on:{change:t.randomProduct}},[e("option",{attrs:{value:"popularity"}},[t._v("Sort by Popularity")]),t._v(" "),e("option",{attrs:{value:"new"}},[t._v("Sort by new")]),t._v(" "),e("option",{attrs:{value:"low"}},[t._v("Price: low to high")]),t._v(" "),e("option",{attrs:{value:"high"}},[t._v("Price: high to low")])])]),t._v(" "),e("div",{staticClass:"product_shot_view"},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/shop/shop-3"}},[e("i",{staticClass:"fas fa-list"})])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/shop/shop-2"}},[e("i",{staticClass:"fas fa-th-large"})])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"active",attrs:{to:"/shop"}},[e("i",{staticClass:"fas fa-th"})])],1)])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("ShopSidebar"),t._v(" "),e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"row"},[t._l(t.shuffleproducts,(function(r,o){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.setPaginate(o),expression:"setPaginate(index)"}],key:o,staticClass:"col-lg-4 col-md-4 col-sm-6 col-12"},[e("ProductBox1",{attrs:{product:r,index:o},on:{showalert:t.alert,alertseconds:t.alert}})],1)})),t._v(" "),e("div",{staticClass:"col-lg-12"},[t.shuffleproducts.length>this.paginate?e("div",{staticClass:"product-pagination mb-0"},[e("nav",{attrs:{"aria-label":"Page navigation"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updatePaginate(t.current-1)}}},[t._m(1)])]),t._v(" "),t._l(this.pages,(function(r,o){return e("li",{key:o,staticClass:"page-item",class:{active:r==t.current}},[e("a",{staticClass:"page-link",attrs:{href:"javascrip:void(0)"},on:{click:function(e){return e.preventDefault(),t.updatePaginate(r)}}},[t._v(t._s(r))])])})),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updatePaginate(t.current+1)}}},[t._m(2)])])],2)])]):t._e()])],2)])],1)])]),t._v(" "),e("InstagramArea"),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",{staticClass:"font-weight-normal"},[t._v("Successfully added to your list")])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",{staticClass:"font-weight-normal"},[t._v("Successfully added to your list")])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",{staticClass:"font-weight-normal"},[t._v("Successfully added to your list")])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"product_shot_title"},[t("p",[this._v("Sort By:")])])},function(){var t=this._self._c;return t("span",{attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fa fa-chevron-left",staticStyle:{"font-size":"10px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("span",{attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fa fa-chevron-right",staticStyle:{"font-size":"10px"},attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductBox1:r(453).default,InstagramArea:r(451).default})}}]);