(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{453:function(t,e,r){"use strict";r.r(e);r(4),r(72),r(6),r(3),r(7);var c=r(0),o=(r(5),r(2),r(1),r(48));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ProductBox1",props:["product","index"],data:function(){var t;return t={quantity:1,imageSrc:"",cartProduct:{},compareProduct:{},dismissSecs:3,dismissCountDown:0},Object(c.a)(t,"quantity",1),Object(c.a)(t,"activeColor",""),Object(c.a)(t,"selectedSize",""),Object(c.a)(t,"qty",""),Object(c.a)(t,"size",[]),Object(c.a)(t,"swiperOption",{slidesPerView:1,spaceBetween:20,freeMode:!0}),t},computed:l(l({},Object(o.c)({productslist:function(t){return t.products.productslist}})),{},{swiper:function(){return this.$refs.mySwiper.swiper}}),mounted:function(){this.uniqColor=this.product.variants[0].color,this.sizeVariant(this.product.variants[0].image_id),this.activeColor=this.uniqColor,this.changeSizeVariant(this.product.variants[0].size)},methods:{toggleModal:function(){this.$refs["product-details-popup"].toggle("#toggle-btn")},getImageUrl:function(path){return r(256)("./"+path)},addToCart:function(t){this.dismissCountDown=this.dismissSecs,this.cartProduct=t,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("cart/addToCart",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},addToCompare:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToCompare",t)},Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},changeSizeVariant:function(t){this.selectedSize=t},slideTo:function(t){this.swiper.slideTo(t,1e3,!1)},sizeVariant:function(t,e,r){var c=this;this.size=[],this.activeColor=r,this.product.variants.filter((function(e){t===e.image_id&&c.size.push(e.size)}))}}},v=r(44),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"product_wrappers_one"},[e("div",{staticClass:"thumb"},[e("nuxt-link",{staticClass:"image",attrs:{to:{path:"/product/"+t.product.id}}},[e("img",{attrs:{src:t.getImageUrl(t.imageSrc?t.imageSrc:t.product.images[0].src),alt:t.product.title}}),t._v(" "),e("img",{staticClass:"hover-image",attrs:{src:t.getImageUrl(t.imageSrc?t.imageSrc:t.product.images[1].src),alt:t.product.title}})]),t._v(" "),e("span",{staticClass:"badges"},[t.product.new?e("span",{staticClass:"new"},[t._v("new")]):t.product.hot?e("span",{staticClass:"hot"},[t._v("hot")]):e("span",{})]),t._v(" "),e("div",{staticClass:"actions"},[e("button",{staticClass:"action wishlist",attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"far fa-heart"})]),t._v(" "),e("button",{staticClass:"action quickview",attrs:{id:"toggle-btn",title:"Quick view"},on:{click:t.toggleModal}},[e("i",{staticClass:"fas fa-expand"})]),t._v(" "),e("button",{staticClass:"action compare",attrs:{title:"Compare"},on:{click:function(e){return t.addToCompare(t.product)}}},[e("i",{staticClass:"fas fa-exchange-alt"})])]),t._v(" "),e("button",{staticClass:"add-to-cart offcanvas-toggle",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n        Add To Cart\n      ")])],1),t._v(" "),e("div",{staticClass:"content"},[e("h5",{staticClass:"title text-capitalize"},[e("nuxt-link",{attrs:{to:{path:"/product/"+t.product.id}}},[t._v(t._s(t.product.title))])],1),t._v(" "),e("span",{staticClass:"price"},[t.product.discount?e("span",{staticClass:"new"},[t._v("$"+t._s(t.discountedPrice(t.product)))]):e("span",{staticClass:"new"},[t._v("$"+t._s(t.product.price))])])]),t._v(" "),e("div",[e("b-modal",{ref:"product-details-popup",staticClass:"product_one_modal_top",attrs:{centered:"","hide-footer":"",title:"Using Component Methods",id:"product_slider_one"},scopedSlots:t._u([{key:"modal-header",fn:function(t){var r=t.close;return[e("button",{staticClass:"close close_modal_icon",attrs:{type:"button"},on:{click:function(t){return r()}}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])]}}])},[t._v(" "),e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"products_modal_sliders"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.product.images,(function(r,c){return e("div",{key:c,staticClass:"swiper-slide"},[e("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImageUrl(r.src),id:r.image_id,alt:"imag.alt"}})])})),0)])])]),t._v(" "),e("div",{staticClass:"col-lg-7 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"modal_product_content_one"},[e("h3",{staticClass:"text-capitalize"},[t._v(t._s(t.product.title))]),t._v(" "),5==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("span",[t._v("(5 Customer Review)")])]):4==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(4 Customer Review)")])]):3==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(3 Customer Review)")])]):2==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(2 Customer Review)")])]):1==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(1 Customer Review)")])]):e("div",{staticClass:"product-review"},[e("span",[t._v("No Rating")])]),t._v(" "),t.product.discount?e("h4",[t._v("\n                  $"+t._s(t.discountedPrice(t.product))+"\n                  "),e("del",[t._v("$"+t._s(t.product.price))])]):e("h4",[t._v("$"+t._s(t.product.price))]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),e("div",{staticClass:"variable-single-item"},[e("span",[t._v("Color")]),t._v(" "),e("ul",{staticClass:"color-variant d-flex"},t._l(t.Color(t.product.variants),(function(r,c){return e("li",{key:c,class:{active:t.activeColor==r}},[e("a",{class:[r],style:{"background-color":r},on:{click:function(e){return t.sizeVariant(t.product.variants[c].image_id,c,r)}}})])})),0)]),t._v(" "),e("form",{attrs:{id:"product_count_form_one"}},[e("div",{staticClass:"product_count_one"},[e("b-form-spinbutton",{staticClass:"border-0",attrs:{id:"sb-inline",min:"1",max:"100",inline:""},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),t._v(" "),e("a",{staticClass:"theme-btn-one btn-black-overlay btn_sm",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])],1)]),t._v(" "),e("div",{staticClass:"modal_share_icons_one"},[e("h4",[t._v("SHARE THIS PRODUCT")]),t._v(" "),e("div",{staticClass:"posted_icons_one"},[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-linkedin-in"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-google-plus-g"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-pinterest-p"})])])])])])])])])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);