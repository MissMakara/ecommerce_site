(window.webpackJsonp=window.webpackJsonp||[]).push([[55,8,11,12,17],{440:function(t,e,r){t.exports=r.p+"img/post2.7f0bc74.png"},441:function(t,e,r){t.exports=r.p+"img/post3.7f0bc74.png"},442:function(t,e,r){t.exports=r.p+"img/post4.7f0bc74.png"},443:function(t,e,r){t.exports=r.p+"img/post5.7f0bc74.png"},444:function(t,e,r){t.exports=r.p+"img/post6.7f0bc74.png"},445:function(t,e,r){t.exports=r.p+"img/post7.7f0bc74.png"},446:function(t,e,r){t.exports=r.p+"img/post8.7f0bc74.png"},447:function(t,e,r){t.exports=r.p+"img/post9.7f0bc74.png"},448:function(t,e,r){t.exports=r.p+"img/post10.7f0bc74.png"},449:function(t,e,r){t.exports=r.p+"img/post11.7f0bc74.png"},450:function(t,e,r){t.exports=r.p+"img/post12.7f0bc74.png"},451:function(t,e,r){"use strict";r.r(e);var n={name:"instagram-area",data:function(){return{swiperOptionInstagram:{slidesPerView:5,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoplay:{autoplay:!0,delay:2500,disableOnInteraction:!0},breakpoints:{992:{slidesPerView:5},991:{slidesPerView:3},768:{slidesPerView:3},767:{slidesPerView:3},766:{slidesPerView:3},575:{slidesPerView:2},400:{slidesPerView:2},0:{slidesPerView:1}}},instagramItems:[{id:1,instagramImg:r(440)},{id:2,instagramImg:r(441)},{id:3,instagramImg:r(442)},{id:4,instagramImg:r(443)},{id:5,instagramImg:r(444)},{id:6,instagramImg:r(445)},{id:7,instagramImg:r(446)},{id:8,instagramImg:r(447)},{id:9,instagramImg:r(448)},{id:10,instagramImg:r(449)},{id:11,instagramImg:r(450)}]}}},c=r(44),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"instagram_area_one"}},[e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOptionInstagram}},t._l(t.instagramItems,(function(t){return e("swiper-slide",{key:t.id},[e("InstagramSliderItem",{attrs:{instagramImg:t.instagramImg}})],1)})),1)],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"center_heading"},[e("h2",[t._v("Follow Us Instagram")]),t._v(" "),e("p",[t._v("Mauris luctus nisi sapien tristique dignissim ornare")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{InstagramSliderItem:r(452).default})},452:function(t,e,r){"use strict";r.r(e);var n={name:"instagram-slider-item",props:{instagramImg:String}},c=r(44),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"instgram_post"},[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-instagram"}),t._v(" "),e("img",{attrs:{src:t.instagramImg,alt:"img"}})])])}),[],!1,null,null,null);e.default=component.exports},453:function(t,e,r){"use strict";r.r(e);r(4),r(72),r(6),r(3),r(7);var n=r(0),c=(r(5),r(2),r(1),r(48));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ProductBox1",props:["product","index"],data:function(){var t;return t={quantity:1,imageSrc:"",cartProduct:{},compareProduct:{},dismissSecs:3,dismissCountDown:0},Object(n.a)(t,"quantity",1),Object(n.a)(t,"activeColor",""),Object(n.a)(t,"selectedSize",""),Object(n.a)(t,"qty",""),Object(n.a)(t,"size",[]),Object(n.a)(t,"swiperOption",{slidesPerView:1,spaceBetween:20,freeMode:!0}),t},computed:l(l({},Object(c.c)({productslist:function(t){return t.products.productslist}})),{},{swiper:function(){return this.$refs.mySwiper.swiper}}),mounted:function(){this.uniqColor=this.product.variants[0].color,this.sizeVariant(this.product.variants[0].image_id),this.activeColor=this.uniqColor,this.changeSizeVariant(this.product.variants[0].size)},methods:{toggleModal:function(){this.$refs["product-details-popup"].toggle("#toggle-btn")},getImageUrl:function(path){return r(256)("./"+path)},addToCart:function(t){this.dismissCountDown=this.dismissSecs,this.cartProduct=t,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("cart/addToCart",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},addToCompare:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToCompare",t)},Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},changeSizeVariant:function(t){this.selectedSize=t},slideTo:function(t){this.swiper.slideTo(t,1e3,!1)},sizeVariant:function(t,e,r){var n=this;this.size=[],this.activeColor=r,this.product.variants.filter((function(e){t===e.image_id&&n.size.push(e.size)}))}}},v=r(44),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"product_wrappers_one"},[e("div",{staticClass:"thumb"},[e("nuxt-link",{staticClass:"image",attrs:{to:{path:"/product/"+t.product.id}}},[e("img",{attrs:{src:t.getImageUrl(t.imageSrc?t.imageSrc:t.product.images[0].src),alt:t.product.title}}),t._v(" "),e("img",{staticClass:"hover-image",attrs:{src:t.getImageUrl(t.imageSrc?t.imageSrc:t.product.images[1].src),alt:t.product.title}})]),t._v(" "),e("span",{staticClass:"badges"},[t.product.new?e("span",{staticClass:"new"},[t._v("new")]):t.product.hot?e("span",{staticClass:"hot"},[t._v("hot")]):e("span",{})]),t._v(" "),e("div",{staticClass:"actions"},[e("button",{staticClass:"action wishlist",attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"far fa-heart"})]),t._v(" "),e("button",{staticClass:"action quickview",attrs:{id:"toggle-btn",title:"Quick view"},on:{click:t.toggleModal}},[e("i",{staticClass:"fas fa-expand"})]),t._v(" "),e("button",{staticClass:"action compare",attrs:{title:"Compare"},on:{click:function(e){return t.addToCompare(t.product)}}},[e("i",{staticClass:"fas fa-exchange-alt"})])]),t._v(" "),e("button",{staticClass:"add-to-cart offcanvas-toggle",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n        Add To Cart\n      ")])],1),t._v(" "),e("div",{staticClass:"content"},[e("h5",{staticClass:"title text-capitalize"},[e("nuxt-link",{attrs:{to:{path:"/product/"+t.product.id}}},[t._v(t._s(t.product.title))])],1),t._v(" "),e("span",{staticClass:"price"},[t.product.discount?e("span",{staticClass:"new"},[t._v("$"+t._s(t.discountedPrice(t.product)))]):e("span",{staticClass:"new"},[t._v("$"+t._s(t.product.price))])])]),t._v(" "),e("div",[e("b-modal",{ref:"product-details-popup",staticClass:"product_one_modal_top",attrs:{centered:"","hide-footer":"",title:"Using Component Methods",id:"product_slider_one"},scopedSlots:t._u([{key:"modal-header",fn:function(t){var r=t.close;return[e("button",{staticClass:"close close_modal_icon",attrs:{type:"button"},on:{click:function(t){return r()}}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])]}}])},[t._v(" "),e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"products_modal_sliders"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.product.images,(function(r,n){return e("div",{key:n,staticClass:"swiper-slide"},[e("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImageUrl(r.src),id:r.image_id,alt:"imag.alt"}})])})),0)])])]),t._v(" "),e("div",{staticClass:"col-lg-7 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"modal_product_content_one"},[e("h3",{staticClass:"text-capitalize"},[t._v(t._s(t.product.title))]),t._v(" "),5==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("span",[t._v("(5 Customer Review)")])]):4==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(4 Customer Review)")])]):3==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(3 Customer Review)")])]):2==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(2 Customer Review)")])]):1==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(1 Customer Review)")])]):e("div",{staticClass:"product-review"},[e("span",[t._v("No Rating")])]),t._v(" "),t.product.discount?e("h4",[t._v("\n                  $"+t._s(t.discountedPrice(t.product))+"\n                  "),e("del",[t._v("$"+t._s(t.product.price))])]):e("h4",[t._v("$"+t._s(t.product.price))]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),e("div",{staticClass:"variable-single-item"},[e("span",[t._v("Color")]),t._v(" "),e("ul",{staticClass:"color-variant d-flex"},t._l(t.Color(t.product.variants),(function(r,n){return e("li",{key:n,class:{active:t.activeColor==r}},[e("a",{class:[r],style:{"background-color":r},on:{click:function(e){return t.sizeVariant(t.product.variants[n].image_id,n,r)}}})])})),0)]),t._v(" "),e("form",{attrs:{id:"product_count_form_one"}},[e("div",{staticClass:"product_count_one"},[e("b-form-spinbutton",{staticClass:"border-0",attrs:{id:"sb-inline",min:"1",max:"100",inline:""},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),t._v(" "),e("a",{staticClass:"theme-btn-one btn-black-overlay btn_sm",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])],1)]),t._v(" "),e("div",{staticClass:"modal_share_icons_one"},[e("h4",[t._v("SHARE THIS PRODUCT")]),t._v(" "),e("div",{staticClass:"posted_icons_one"},[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-linkedin-in"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-google-plus-g"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-pinterest-p"})])])])])])])])])],1)])])}),[],!1,null,null,null);e.default=component.exports},462:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAADg0lEQVR4Xu2XsWoiURSGT7qAha1gYStiwAewE6uAL+ALaCE2EiwsLUTSiI0vkMJOBCuxsxUEQWwtBFsb0WqXe9mRiTtu5E/O5kD+aSKZOWf++b45c2cejsfjL+FmhsADhZhx4YNQiC0fFGLMB4VQiDUCxvJwDaEQYwSMxeGEUIgxAsbicEIoxBgBY3E4IRRijICxOJwQCjFGwFgcTgiFGCNgLA4nhEKMETAWhxNCIcYIGIvDCaEQYwSMxeGEUIgxAsbicEIoxBgBY3E4IRRijICxOJwQCjFGwFgcTgiFGCNgLA4nhEKMETAWhxNCIcYIGIvDCaEQYwSMxeGEUIgxAsbicEIoxBgBY3HUJ+RwOMjLy4us12tJJBLy+voqqVTqgmEwGMjb29tf+7bbrTQaDdnv91Iul6VSqcDoJpOJdDodX3/d61/nuZUNDnJHobqQIIO7uNls9k6IAzUej6Xb7cp8PpfFYuHlnc9n/7dUKkk+n/e/q9Wq5HK5Oy4p+pAAfKFQuMgNbpao89zK9vj4CGe4p/DbhJxOJy/CbQ74ZrORWq0m/X7f/y/4nU6n3x2HAokSslwuI89Tr9el1+tFZvvMTWFaSHB3JpPJd0KazabP7R4xTk4gZLfbeTHxeNzvD4ROp1MpFosSi8VkNBr5307wtbgoIcGj7Po8rVZL2u22RGV7fn6+hyt8zLdNyGeFhB+Fbg1yd3U2m/UCozYKuaJyvYZ8lZAA9NPTU+RkBDEo5AMhX7mGhB89t57xXEM+EOJ2f8VblluYV6uVf0tzW3idCUfgW9YfGuHvkACQW7iDxRH9Dgkv6m79GA6H/psl6lsn/B3iMmQymYu4H/sdAr92/LDC//aW9cO4wpdLITA6nUIK0eEKd6UQGJ1OIYXocIW7UgiMTqeQQnS4wl0pBEanU0ghOlzhrhQCo9MppBAdrnBXCoHR6RRSiA5XuCuFwOh0CilEhyvclUJgdDqFFKLDFe5KITA6nUIK0eEKd6UQGJ1OIYXocIW7UgiMTqeQQnS4wl0pBEanU0ghOlzhrhQCo9MppBAdrnBXCoHR6RRSiA5XuCuFwOh0CilEhyvclUJgdDqFFKLDFe5KITA6nUIK0eEKd6UQGJ1OIYXocIW7UgiMTqeQQnS4wl0pBEanU0ghOlzhrhQCo9MppBAdrnBXCoHR6RRSiA5XuCuFwOh0Cn8DB8+CdlLG8wMAAAAASUVORK5CYII="},463:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAADg0lEQVR4Xu2XsWoiURSGT7qAha1gYStiwAewE6uAL+ALaCE2EiwsLUTSiI0vkMJOBCuxsxUEQWwtBFsb0WqXe9mRiTtu5E/O5kD+aSKZOWf++b45c2cejsfjL+FmhsADhZhx4YNQiC0fFGLMB4VQiDUCxvJwDaEQYwSMxeGEUIgxAsbicEIoxBgBY3E4IRRijICxOJwQCjFGwFgcTgiFGCNgLA4nhEKMETAWhxNCIcYIGIvDCaEQYwSMxeGEUIgxAsbicEIoxBgBY3E4IRRijICxOJwQCjFGwFgcTgiFGCNgLA4nhEKMETAWhxNCIcYIGIvDCaEQYwSMxeGEUIgxAsbicEIoxBgBY3HUJ+RwOMjLy4us12tJJBLy+voqqVTqgmEwGMjb29tf+7bbrTQaDdnv91Iul6VSqcDoJpOJdDodX3/d61/nuZUNDnJHobqQIIO7uNls9k6IAzUej6Xb7cp8PpfFYuHlnc9n/7dUKkk+n/e/q9Wq5HK5Oy4p+pAAfKFQuMgNbpao89zK9vj4CGe4p/DbhJxOJy/CbQ74ZrORWq0m/X7f/y/4nU6n3x2HAokSslwuI89Tr9el1+tFZvvMTWFaSHB3JpPJd0KazabP7R4xTk4gZLfbeTHxeNzvD4ROp1MpFosSi8VkNBr5307wtbgoIcGj7Po8rVZL2u22RGV7fn6+hyt8zLdNyGeFhB+Fbg1yd3U2m/UCozYKuaJyvYZ8lZAA9NPTU+RkBDEo5AMhX7mGhB89t57xXEM+EOJ2f8VblluYV6uVf0tzW3idCUfgW9YfGuHvkACQW7iDxRH9Dgkv6m79GA6H/psl6lsn/B3iMmQymYu4H/sdAr92/LDC//aW9cO4wpdLITA6nUIK0eEKd6UQGJ1OIYXocIW7UgiMTqeQQnS4wl0pBEanU0ghOlzhrhQCo9MppBAdrnBXCoHR6RRSiA5XuCuFwOh0CilEhyvclUJgdDqFFKLDFe5KITA6nUIK0eEKd6UQGJ1OIYXocIW7UgiMTqeQQnS4wl0pBEanU0ghOlzhrhQCo9MppBAdrnBXCoHR6RRSiA5XuCuFwOh0CilEhyvclUJgdDqFFKLDFe5KITA6nUIK0eEKd6UQGJ1OIYXocIW7UgiMTqeQQnS4wl0pBEanU0ghOlzhrhQCo9MppBAdrnBXCoHR6RRSiA5XuCuFwOh0Cn8DB8+CdlLG8wMAAAAASUVORK5CYII="},464:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAADg0lEQVR4Xu2XsWoiURSGT7qAha1gYStiwAewE6uAL+ALaCE2EiwsLUTSiI0vkMJOBCuxsxUEQWwtBFsb0WqXe9mRiTtu5E/O5kD+aSKZOWf++b45c2cejsfjL+FmhsADhZhx4YNQiC0fFGLMB4VQiDUCxvJwDaEQYwSMxeGEUIgxAsbicEIoxBgBY3E4IRRijICxOJwQCjFGwFgcTgiFGCNgLA4nhEKMETAWhxNCIcYIGIvDCaEQYwSMxeGEUIgxAsbicEIoxBgBY3E4IRRijICxOJwQCjFGwFgcTgiFGCNgLA4nhEKMETAWhxNCIcYIGIvDCaEQYwSMxeGEUIgxAsbicEIoxBgBY3HUJ+RwOMjLy4us12tJJBLy+voqqVTqgmEwGMjb29tf+7bbrTQaDdnv91Iul6VSqcDoJpOJdDodX3/d61/nuZUNDnJHobqQIIO7uNls9k6IAzUej6Xb7cp8PpfFYuHlnc9n/7dUKkk+n/e/q9Wq5HK5Oy4p+pAAfKFQuMgNbpao89zK9vj4CGe4p/DbhJxOJy/CbQ74ZrORWq0m/X7f/y/4nU6n3x2HAokSslwuI89Tr9el1+tFZvvMTWFaSHB3JpPJd0KazabP7R4xTk4gZLfbeTHxeNzvD4ROp1MpFosSi8VkNBr5307wtbgoIcGj7Po8rVZL2u22RGV7fn6+hyt8zLdNyGeFhB+Fbg1yd3U2m/UCozYKuaJyvYZ8lZAA9NPTU+RkBDEo5AMhX7mGhB89t57xXEM+EOJ2f8VblluYV6uVf0tzW3idCUfgW9YfGuHvkACQW7iDxRH9Dgkv6m79GA6H/psl6lsn/B3iMmQymYu4H/sdAr92/LDC//aW9cO4wpdLITA6nUIK0eEKd6UQGJ1OIYXocIW7UgiMTqeQQnS4wl0pBEanU0ghOlzhrhQCo9MppBAdrnBXCoHR6RRSiA5XuCuFwOh0CilEhyvclUJgdDqFFKLDFe5KITA6nUIK0eEKd6UQGJ1OIYXocIW7UgiMTqeQQnS4wl0pBEanU0ghOlzhrhQCo9MppBAdrnBXCoHR6RRSiA5XuCuFwOh0CilEhyvclUJgdDqFFKLDFe5KITA6nUIK0eEKd6UQGJ1OIYXocIW7UgiMTqeQQnS4wl0pBEanU0ghOlzhrhQCo9MppBAdrnBXCoHR6RRSiA5XuCuFwOh0Cn8DB8+CdlLG8wMAAAAASUVORK5CYII="},471:function(t,e,r){"use strict";r.r(e);r(19),r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(0),c=(r(15),r(48));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"RelatedProducts",props:["productType","productId"],components:{ProductBox1:r(453).default},data:function(){return{products:[],compareproduct:{},cartproduct:{},dismissSecs:5,dismissCountDown:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({productslist:function(t){return t.products.productslist}})),mounted:function(){this.productsArray()},methods:{productsArray:function(){var t=this;this.productslist.map((function(e){e.type===t.productType&&e.id!==t.productId&&t.products.push(e)}))},alert:function(t){this.dismissCountDown=t}}},d=l,v=r(44),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"pb-100",attrs:{id:"related_product"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},t._l(t.productslist.slice(0,4),(function(r,n){return e("div",{key:n,staticClass:"col-lg-3 col-md-4 col-sm-6 col-12"},[e("ProductBox1",{attrs:{product:r,index:n},on:{showalert:t.alert,alertseconds:t.alert}})],1)})),0)])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",{staticClass:"font-weight-normal"},[t._v("Successfully added to your list")])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",{staticClass:"font-weight-normal"},[t._v("Successfully added to your list")])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",{staticClass:"font-weight-normal"},[t._v("Successfully added to your list")])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"center_heading"},[e("h2",[t._v("You Might Also Like")]),t._v(" "),e("p",[t._v("Mauris luctus nisi sapien tristique dignissim ornare")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductBox1:r(453).default})},636:function(t,e,r){"use strict";r.r(e);r(4),r(72),r(5),r(2),r(1);var n=r(453),c=r(451),o=r(471),l={name:"product-single",components:{ProductBox1:n.default,InstagramArea:c.default,RelatedProducts:o.default},data:function(){return{activeColor:"",selectedSize:"",qty:"",size:[],productType:"",productId:"",breadcrumbItems:[{text:"Home",to:"/"},{text:"Product Single",to:"/product"}],quantity:1,cartProduct:{},compareProduct:{},swiperOption:{slidesPerView:1,spaceBetween:20,freeMode:!0}}},computed:{getDetail:function(){return this.$store.getters["products/getProductById"](this.$route.params.id)},swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){this.uniqColor=this.getDetail.variants[0].color,this.sizeVariant(this.getDetail.variants[0].image_id),this.activeColor=this.uniqColor,this.changeSizeVariant(this.getDetail.variants[0].size),this.relatedProducts(),window.scrollTo(0,0)},methods:{getImageUrl:function(path){return r(256)("./"+path)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToCart:function(t,e){t.quantity=e||1,this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.$store.dispatch("products/addToWishlist",t)},addToCompare:function(t){this.$store.dispatch("products/addToCompare",t)},relatedProducts:function(){this.productType=this.getDetail.type,this.productId=this.getDetail.id},Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},changeSizeVariant:function(t){this.selectedSize=t},slideTo:function(t){this.swiper.slideTo(t,1e3,!1)},sizeVariant:function(t,e,r){var n=this;this.swiper.slideTo(e,1e3,!1),this.size=[],this.activeColor=r,this.getDetail.variants.filter((function(e){t===e.image_id&&n.size.push(e.size)}))}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Shop page - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},d=r(44),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("section",{attrs:{id:"common_banner_one"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"common_banner_text"},[e("h2",[t._v("Shop")]),t._v(" "),e("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:t.breadcrumbItems}})],1)])])])]),t._v(" "),e("section",{staticClass:"ptb-100",attrs:{id:"product_single_one"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row area_boxed"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"product_single_one_img"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.getDetail.images,(function(r,n){return e("div",{key:n,staticClass:"swiper-slide"},[e("inner-image-zoom",{attrs:{src:t.getImageUrl(r.src),id:r.image_id,zoomSrc:t.getImageUrl(r.src),moveType:"drag",className:"product-image-zoom"}})],1)})),0)])])]),t._v(" "),e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"product_details_right_one"},[e("div",{staticClass:"modal_product_content_one"},[e("h3",{staticClass:"text-capitalize"},[t._v(t._s(t.getDetail.title))]),t._v(" "),5==t.getDetail.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("span",[t._v("(5 Customer Review)")])]):4==t.getDetail.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(4 Customer Review)")])]):3==t.getDetail.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(3 Customer Review)")])]):2==t.getDetail.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(2 Customer Review)")])]):1==t.getDetail.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(1 Customer Review)")])]):e("div",{staticClass:"product-review"},[e("span",[t._v("No Rating")])]),t._v(" "),t.getDetail.discount?e("h4",[t._v("\n                $"+t._s(t.discountedPrice(t.getDetail))+"\n                "),e("del",[t._v("$"+t._s(t.getDetail.price))])]):e("h4",[t._v("$"+t._s(t.getDetail.price))]),t._v(" "),e("p",[t._v(t._s(t.getDetail.description))]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"variable-single-item"},[e("span",[t._v("Color")]),t._v(" "),e("ul",{staticClass:"color-variant d-flex"},t._l(t.Color(t.getDetail.variants),(function(r,n){return e("li",{key:n,class:{active:t.activeColor==r}},[e("a",{class:[r],style:{"background-color":r},on:{click:function(e){return t.sizeVariant(t.getDetail.variants[n].image_id,n,r)}}})])})),0)]),t._v(" "),e("form",{attrs:{id:"product_count_form_two"}},[e("div",{staticClass:"product_count_one"},[e("b-form-spinbutton",{staticClass:"border-0",attrs:{id:"sb-inline",min:"1",max:"100",inline:""},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1)]),t._v(" "),e("div",{staticClass:"links_Product_areas"},[e("ul",[e("li",[e("button",{staticClass:"action wishlist bg-transparent",attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.getDetail)}}},[e("i",{staticClass:"far fa-heart mr-1"}),t._v("Add To Wishlist\n                    ")])]),t._v(" "),e("li",[e("button",{staticClass:"action compare bg-transparent",attrs:{title:"Compare"},on:{click:function(e){return t.addToCompare(t.getDetail)}}},[e("i",{staticClass:"fas fa-exchange-alt mr-1"}),t._v("Add To Compare\n                    ")])])]),t._v(" "),e("button",{staticClass:"theme-btn-one btn-black-overlay btn_sm",on:{click:function(e){return t.addToCart(t.getDetail)}}},[t._v("\n                  Add To Cart\n                ")])])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"product_details_tabs"},[e("b-tabs",[e("b-tab",{attrs:{title:"Description",active:"",id:"description"}},[e("div",{staticClass:"product_description"},[e("p",[t._v("\n                    Curabitur arcu erat, accumsan id imperdiet et, porttitor\n                    at sem. Vestibulum ac diam sit amet quam vehicula\n                    elementum sed sit amet dui. Sed porttitor lectus nibh.\n                    Vivamus magna justo, lacinia eget consectetur sed,\n                    convallis at tellus. Sed porttitor lectus nibh. Donec\n                    sollicitudin molestie malesuada. Vivamus magna justo,\n                    lacinia eget consectetur sed, convallis at tellus.\n                    Curabitur arcu erat, accumsan id imperdiet et, porttitor\n                    at sem.\n                  ")]),t._v(" "),e("ul",[e("li",[t._v("Vivamus magna justo, lacinia eget consectetur sed")]),t._v(" "),e("li",[t._v("Curabitur aliquet quam id dui posuere blandit")]),t._v(" "),e("li",[t._v("\n                      Mauris blandit aliquet elit, eget tincidunt nibh\n                      pulvinar\n                    ")])]),t._v(" "),e("p",[t._v("\n                    Donec sollicitudin molestie malesuada. Cras ultricies\n                    ligula sed magna dictum porta. Mauris blandit aliquet\n                    elit, eget tincidunt nibh pulvinar a. Nulla porttitor\n                    accumsan tincidunt. Cras ultricies ligula sed magna dictum\n                    porta. Curabitur arcu erat, accumsan id imperdiet et,\n                    Pellentesque in ipsum id orci porta dapibus. Lorem ipsum\n                    dolor sit amet, consectetur adipiscing elit. porttitor at\n                    sem. Quisque velit nisi, pretium ut lacinia in, elementum\n                    id enim.\n                  ")])])]),t._v(" "),e("b-tab",{attrs:{title:"Additional Information",id:"additional"}},[e("div",{staticClass:"product_additional"},[e("ul",[e("li",[t._v("Weight: "),e("span",[t._v("400 g")])]),t._v(" "),e("li",[t._v("Dimensions: "),e("span",[t._v("10 x 10 x 15 cm")])]),t._v(" "),e("li",[t._v("\n                      Materials: "),e("span",[t._v(" 60% cotton, 40% polyester")])]),t._v(" "),e("li",[t._v("\n                      Other Info:\n                      "),e("span",[t._v("\n                        American heirloom jean shorts pug seitan\n                        letterpress")])])])])]),t._v(" "),e("b-tab",{attrs:{title:"Reviews",id:"review"}},[e("div",{staticClass:"product_reviews"},[e("ul",[e("li",{staticClass:"media"},[e("div",{staticClass:"media-img"},[e("img",{attrs:{src:r(463),alt:"img"}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("div",{staticClass:"media-header"},[e("div",{staticClass:"media-name"},[e("h4",[t._v("Sara Anela")]),t._v(" "),e("p",[t._v("5 days ago")])]),t._v(" "),e("div",{staticClass:"post-share"},[e("a",{staticClass:"replay",attrs:{href:"#!"}},[t._v("Replay")]),t._v(" "),e("a",{attrs:{href:"#!"}},[t._v("Report")])])]),t._v(" "),e("div",{staticClass:"media-pragraph"},[e("div",{staticClass:"product_review_strat"},[e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])])]),t._v(" "),e("p",[t._v("\n                            Cras sit amet nibh libero, in gravida nulla. Nulla\n                            vel metus scelerisque Praesent sapien massa,\n                            convallis a pellentesque nec, egestas non nisi.\n                            Cras ultricies ligula sed magna dictum porta.\n                            Vestibulum ac diam sit amet quam vehicula\n                            elementum sed sit amet dui. Vivamus magna justo.\n                          ")])])])]),t._v(" "),e("li",{staticClass:"media"},[e("div",{staticClass:"media-img"},[e("img",{attrs:{src:r(464),alt:"img"}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("div",{staticClass:"media-header"},[e("div",{staticClass:"media-name"},[e("h4",[t._v("Sara Anela")]),t._v(" "),e("p",[t._v("5 days ago")])]),t._v(" "),e("div",{staticClass:"post-share"},[e("a",{staticClass:"replay",attrs:{href:"#!"}},[t._v("Replay")]),t._v(" "),e("a",{attrs:{href:"#!"}},[t._v("Report")])])]),t._v(" "),e("div",{staticClass:"media-pragraph"},[e("div",{staticClass:"product_review_strat"},[e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])])]),t._v(" "),e("p",[t._v("\n                            Cras sit amet nibh libero, in gravida nulla. Nulla\n                            vel metus scelerisque Praesent sapien massa,\n                            convallis a pellentesque nec, egestas non nisi.\n                            Cras ultricies ligula sed magna dictum porta.\n                            Vestibulum ac diam sit amet quam vehicula\n                            elementum sed sit amet dui. Vivamus magna justo.\n                          ")])])])]),t._v(" "),e("li",{staticClass:"media"},[e("div",{staticClass:"media-img"},[e("img",{attrs:{src:r(462),alt:"img"}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("div",{staticClass:"media-header"},[e("div",{staticClass:"media-name"},[e("h4",[t._v("Sara Anela")]),t._v(" "),e("p",[t._v("5 days ago")])]),t._v(" "),e("div",{staticClass:"post-share"},[e("a",{staticClass:"replay",attrs:{href:"#!"}},[t._v("Replay")]),t._v(" "),e("a",{attrs:{href:"#!"}},[t._v("Report")])])]),t._v(" "),e("div",{staticClass:"media-pragraph"},[e("div",{staticClass:"product_review_strat"},[e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])]),t._v(" "),e("span",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fas fa-star"})])])]),t._v(" "),e("p",[t._v("\n                            Cras sit amet nibh libero, in gravida nulla. Nulla\n                            vel metus scelerisque Praesent sapien massa,\n                            convallis a pellentesque nec, egestas non nisi.\n                            Cras ultricies ligula sed magna dictum porta.\n                            Vestibulum ac diam sit amet quam vehicula\n                            elementum sed sit amet dui. Vivamus magna justo.\n                          ")])])])])])])])],1)],1)])])])]),t._v(" "),e("RelatedProducts",{attrs:{productType:t.productType,productId:t.productId}}),t._v(" "),e("InstagramArea")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"customs_selects"},[e("select",{staticClass:"customs_sel_box",attrs:{name:"product"}},[e("option",{attrs:{value:"size"}},[t._v("Size")]),t._v(" "),e("option",{attrs:{value:"xl"}},[t._v("XL")]),t._v(" "),e("option",{attrs:{value:"small"}},[t._v("S")]),t._v(" "),e("option",{attrs:{value:"medium"}},[t._v("M")]),t._v(" "),e("option",{attrs:{value:"large"}},[t._v("L")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{InstagramArea:r(451).default})}}]);