(window.webpackJsonp=window.webpackJsonp||[]).push([[37,5,10,11,14,19],{452:function(t,e,r){"use strict";r.r(e);var o={name:"instagram-slider-item",props:{instagramImg:String}},n=r(44),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"instgram_post"},[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-instagram"}),t._v(" "),e("img",{attrs:{src:t.instagramImg,alt:"img"}})])])}),[],!1,null,null,null);e.default=component.exports},454:function(t,e,r){t.exports=r.p+"img/post3.726a257.png"},459:function(t,e,r){r(10)({target:"Math",stat:!0},{trunc:r(257)})},460:function(t,e,r){"use strict";r.r(e);r(37),r(459);var o={name:"Timer",mounted:function(){var t=this;window.setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},props:["date"],data:function(){return{timerdate:Math.trunc(new Date(this.date).getTime()/1e3),now:Math.trunc((new Date).getTime()/1e3)}},computed:{seconds:function(){return(this.timerdate-this.now)%60},minutes:function(){return Math.trunc((this.timerdate-this.now)/60)%60},hours:function(){return Math.trunc((this.timerdate-this.now)/60/60)%24},days:function(){return Math.trunc((this.timerdate-this.now)/60/60/24)}}},n=r(44),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"timer"},[e("ul",{attrs:{id:"demo"}},[e("li",[e("span",{staticClass:"timer-num"},[t._v(t._s(t.days))]),t._v("Days\n      ")]),t._v(" "),e("li",[e("span",{staticClass:"timer-num"},[t._v(t._s(t.hours))]),t._v("Hours\n      ")]),t._v(" "),e("li",[e("span",{staticClass:"timer-num"},[t._v(t._s(t.minutes))]),t._v("Minutes\n      ")]),t._v(" "),e("li",[e("span",{staticClass:"timer-num"},[t._v(t._s(t.seconds))]),t._v("Seconds\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,r){t.exports=r.p+"img/post4.726a257.png"},465:function(t,e,r){t.exports=r.p+"img/post5.726a257.png"},466:function(t,e,r){t.exports=r.p+"img/post6.726a257.png"},467:function(t,e,r){t.exports=r.p+"img/post7.726a257.png"},468:function(t,e,r){t.exports=r.p+"img/post8.726a257.png"},473:function(t,e,r){t.exports=r.p+"img/post9.726a257.png"},476:function(t,e,r){t.exports=r.p+"img/1.a12f553.jpg"},477:function(t,e,r){t.exports=r.p+"img/2.a12f553.jpg"},478:function(t,e,r){t.exports=r.p+"img/3.a12f553.jpg"},479:function(t,e,r){t.exports=r.p+"img/4.a12f553.jpg"},480:function(t,e,r){t.exports=r.p+"img/5.a12f553.jpg"},481:function(t,e,r){t.exports=r.p+"img/6.a12f553.jpg"},482:function(t,e,r){t.exports=r.p+"img/7.a12f553.jpg"},483:function(t,e,r){t.exports=r.p+"img/8.a12f553.jpg"},484:function(t,e,r){t.exports=r.p+"img/9.a12f553.jpg"},485:function(t,e,r){t.exports=r.p+"img/10.a12f553.jpg"},486:function(t,e,r){t.exports=r.p+"img/11.a12f553.jpg"},487:function(t,e,r){t.exports=r.p+"img/12.a12f553.jpg"},495:function(t,e,r){"use strict";r.r(e);r(4),r(72),r(6),r(3),r(7);var o=r(0),n=(r(5),r(2),r(1),r(48));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ProductBox3",props:["product","index"],data:function(){var t;return t={quantity:1,imageSrc:"",cartProduct:{},compareProduct:{},dismissSecs:3,dismissCountDown:0},Object(o.a)(t,"quantity",1),Object(o.a)(t,"activeColor",""),Object(o.a)(t,"selectedSize",""),Object(o.a)(t,"qty",""),Object(o.a)(t,"size",[]),Object(o.a)(t,"swiperOption",{slidesPerView:1,spaceBetween:20,freeMode:!0}),t},computed:l(l({},Object(n.c)({productslist:function(t){return t.products.productslist}})),{},{swiper:function(){return this.$refs.mySwiper.swiper}}),mounted:function(){this.uniqColor=this.product.variants[0].color,this.sizeVariant(this.product.variants[0].image_id),this.activeColor=this.uniqColor,this.changeSizeVariant(this.product.variants[0].size)},methods:{toggleModal:function(){this.$refs["product-details-popup"].toggle("#toggle-btn")},getImageUrl:function(path){return r(256)("./"+path)},addToCart:function(t){this.dismissCountDown=this.dismissSecs,this.cartProduct=t,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("cart/addToCart",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},addToCompare:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToCompare",t)},Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},changeSizeVariant:function(t){this.selectedSize=t},slideTo:function(t){this.swiper.slideTo(t,1e3,!1)},sizeVariant:function(t,e,r){var o=this;this.size=[],this.activeColor=r,this.product.variants.filter((function(e){t===e.image_id&&o.size.push(e.size)}))}}},v=r(44),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"product_box text-center"},[e("div",{staticClass:"product_img"},[e("nuxt-link",{attrs:{to:{path:"/product/"+t.product.id}}},[e("img",{attrs:{src:t.getImageUrl(t.imageSrc?t.imageSrc:t.product.images[0].src),alt:t.product.title}})]),t._v(" "),e("div",{staticClass:"product_action_box"},[e("ul",{staticClass:"list_none pr_action_btn"},[e("li",[e("button",{attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"far fa-heart"})])]),t._v(" "),e("li",[e("button",{staticClass:"action quickview",attrs:{id:"toggle-btn",title:"Quick view"},on:{click:t.toggleModal}},[e("i",{staticClass:"fas fa-expand"})])]),t._v(" "),e("li",[e("button",{attrs:{title:"Compare"},on:{click:function(e){return t.addToCompare(t.product)}}},[e("i",{staticClass:"fas fa-exchange-alt"})])])])])],1),t._v(" "),e("div",{staticClass:"product_info"},[e("h5",{staticClass:"product_title text-capitalize"},[e("nuxt-link",{attrs:{to:{path:"/product/"+t.product.id}}},[t._v(t._s(t.product.title))])],1),t._v(" "),e("div",{staticClass:"product_price"},[e("span",{staticClass:"price"},[t._v("$"+t._s(t.discountedPrice(t.product)))]),t._v(" "),e("del",[t._v("$"+t._s(t.product.price))])]),t._v(" "),e("div",{staticClass:"rating_wrap"},[e("div",{staticClass:"rating"},[5==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"})]):4==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"})]):3==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"})]):2==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"})]):1==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"})]):e("div",{staticClass:"product-review"},[e("span",[t._v("No Rating")])])]),t._v(" "),e("span",{staticClass:"rating_num"},[t._v("(21)")])]),t._v(" "),e("div",{staticClass:"add-to-cart"},[e("button",{staticClass:"theme-btn-one bg-black btn_sm offcanvas-toggle",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[e("i",{staticClass:"fas fa-cart-arrow-down"}),t._v(" Add To Cart\n          ")])])])]),t._v(" "),e("div",[e("b-modal",{ref:"product-details-popup",staticClass:"product_one_modal_top",attrs:{centered:"","hide-footer":"",title:"Using Component Methods",id:"product_slider_one"},scopedSlots:t._u([{key:"modal-header",fn:function(t){var r=t.close;return[e("button",{staticClass:"close close_modal_icon",attrs:{type:"button"},on:{click:function(t){return r()}}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])]}}])},[t._v(" "),e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"products_modal_sliders"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.product.images,(function(r,o){return e("div",{key:o,staticClass:"swiper-slide"},[e("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImageUrl(r.src),id:r.image_id,alt:"imag.alt"}})])})),0)])])]),t._v(" "),e("div",{staticClass:"col-lg-7 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"modal_product_content_one"},[e("h3",{staticClass:"text-capitalize"},[t._v(t._s(t.product.title))]),t._v(" "),5==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("span",[t._v("(5 Customer Review)")])]):4==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(4 Customer Review)")])]):3==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(3 Customer Review)")])]):2==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(2 Customer Review)")])]):1==t.product.rating?e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star active"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(1 Customer Review)")])]):e("div",{staticClass:"product-review"},[e("span",[t._v("No Rating")])]),t._v(" "),t.product.discount?e("h4",[t._v("$"+t._s(t.discountedPrice(t.product))+" "),e("del",[t._v("$"+t._s(t.product.price))])]):e("h4",[t._v("$"+t._s(t.product.price))]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),e("div",{staticClass:"variable-single-item"},[e("span",[t._v("Color")]),t._v(" "),e("ul",{staticClass:"color-variant d-flex"},t._l(t.Color(t.product.variants),(function(r,o){return e("li",{key:o,class:{active:t.activeColor==r}},[e("a",{class:[r],style:{"background-color":r},on:{click:function(e){return t.sizeVariant(t.product.variants[o].image_id,o,r)}}})])})),0)]),t._v(" "),e("form",{attrs:{id:"product_count_form_one"}},[e("div",{staticClass:"product_count_one"},[e("b-form-spinbutton",{staticClass:"border-0",attrs:{id:"sb-inline",min:"1",max:"100",inline:""},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),t._v(" "),e("a",{staticClass:"theme-btn-one btn-black-overlay btn_sm",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])],1)]),t._v(" "),e("div",{staticClass:"modal_share_icons_one"},[e("h4",[t._v("SHARE THIS PRODUCT")]),t._v(" "),e("div",{staticClass:"posted_icons_one"},[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-linkedin-in"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-google-plus-g"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-pinterest-p"})])])])])])])])])],1)])}),[],!1,null,null,null);e.default=component.exports},496:function(t,e,r){"use strict";r.r(e);var o={name:"instagram-area-furniture",data:function(){return{swiperOptionInstagram:{slidesPerView:5,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoplay:{autoplay:!0,delay:2500,disableOnInteraction:!0},breakpoints:{992:{slidesPerView:5},991:{slidesPerView:3},768:{slidesPerView:3},767:{slidesPerView:3},766:{slidesPerView:3},575:{slidesPerView:2},400:{slidesPerView:2},0:{slidesPerView:1}}},instagramItems:[{id:1,instagramImg:r(476)},{id:2,instagramImg:r(477)},{id:3,instagramImg:r(478)},{id:4,instagramImg:r(479)},{id:5,instagramImg:r(480)},{id:6,instagramImg:r(481)},{id:7,instagramImg:r(482)},{id:8,instagramImg:r(483)},{id:9,instagramImg:r(484)},{id:10,instagramImg:r(485)},{id:11,instagramImg:r(486)},{id:12,instagramImg:r(487)}]}}},n=r(44),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"instagram_area_one"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOptionInstagram}},t._l(t.instagramItems,(function(t){return e("swiper-slide",{key:t.id},[e("InstagramSliderItem",{attrs:{instagramImg:t.instagramImg}})],1)})),1)],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"center_heading_two"},[e("h2",[t._v("FOLLOW US INSTAGRAM")]),t._v(" "),e("span",{staticClass:"heading_border"})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{InstagramSliderItem:r(452).default})},497:function(t,e,r){"use strict";r.r(e);var o={name:"BlogItem3",props:{blogThumb:String,blogPublishDate:String,blogTitle:String,blogDescription:String}},n=r(44),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog_post_wrapper"},[e("div",{staticClass:"blog_post_img"},[e("nuxt-link",{attrs:{to:"/blog/"+t.blogTitle}},[e("img",{attrs:{src:t.blogThumb,alt:"img"}})]),t._v(" "),e("div",{staticClass:"blog_post_date"},[e("i",{staticClass:"far fa-calendar-alt"}),t._v(" "),e("span",[t._v(t._s(t.blogPublishDate))])])],1),t._v(" "),e("div",{staticClass:"right_block"},[e("div",{staticClass:"right_side_content"},[e("h5",[t._v(t._s(t.blogTitle))]),t._v(" "),e("p",[t._v(t._s(t.blogDescription))]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/"+t.blogTitle}},[t._v("Read More...")])],1)])])}),[],!1,null,null,null);e.default=component.exports},527:function(t,e,r){t.exports=r.p+"img/feature1.a66a685.png"},528:function(t,e,r){t.exports=r.p+"img/feature2.a7cd2a0.png"},529:function(t,e,r){t.exports=r.p+"img/feature3.a7cd2a0.png"},530:function(t,e,r){t.exports=r.p+"img/feature4.7679911.png"},531:function(t,e,r){t.exports=r.p+"img/offer-time.6ea2702.png"},532:function(t,e,r){t.exports=r.p+"img/black.526ba3b.png"},533:function(t,e,r){t.exports=r.p+"img/banner1.3a70711.png"},534:function(t,e,r){t.exports=r.p+"img/banner2.3a70711.png"},535:function(t,e,r){t.exports=r.p+"img/banner3.3a70711.png"},536:function(t,e,r){t.exports=r.p+"img/blog1.eb8c916.jpg"},537:function(t,e,r){t.exports=r.p+"img/blog2.eb8c916.jpg"},596:function(t,e,r){"use strict";r.r(e);r(4),r(72),r(19),r(5),r(6),r(3),r(7);var o=r(0),n=(r(15),r(2),r(1),r(91),r(48)),c=r(495),l=r(460),d=r(496),v=r(497),f=r(472),m=r.n(f);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={name:"Furniture",components:{ProductBox3:c.default,Timer:l.default,InstagramAreaFurniture:d.default,BlogItem3:v.default,carousel:m.a},data:function(){return{title:"Furniture Home",sliderItems:[{id:1,imagepath:r(533),title:"Sofa Collection",subTitle:"NEW TRANDING",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc."},{id:2,imagepath:r(534),title:"Wardrobe Collection",subTitle:"NEW TRANDING",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc."},{id:3,imagepath:r(535),title:"Table Collection",subTitle:"NEW TRANDING",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc."}],blogItems:[{id:1,blogThumb:r(536),blogTitle:"This Designer Bronzer Has Even The Drugstore-Beauty-Buyers Splurging!",blogDescription:"Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys I’ve been",blogPublishDate:"24 February 2021"},{id:2,blogThumb:r(537),blogTitle:"4 Fresh Ways To Style Leather Shorts For Spring",blogDescription:"We spent spring break this year in California with Cody’s family and it was such a fun getaway. Cody’s family always goes hard on vacation",blogPublishDate:"29 jan 2018"},{id:3,blogThumb:r(454),blogTitle:"Shopbop Spring Sale Selects All Under Around $100!",blogDescription:"STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s styles! They are all really flattering. but since these are wider leg I stuck with my usual size (25).",blogPublishDate:"24 February 2021"},{id:4,blogThumb:r(461),blogTitle:"This Made Me Splurge on The Apple Watch",blogDescription:"From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there.",blogPublishDate:"21 February 2019"},{id:5,blogThumb:r(465),blogTitle:"This Designer Bronzer Has Even Buyers Splurging!",blogDescription:"Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys",blogPublishDate:"24 February 2021"},{id:6,blogThumb:r(466),blogTitle:"4 Tips for A Colorful Easter Tablescape",blogDescription:"Spring is all about the colors! Especially after what feels like an endless winter, I catch myself craving more color than usual.",blogPublishDate:"24 February 2021"},{id:7,blogThumb:r(467),blogTitle:"Hawaii Couples Trip Guide and Spring Break Faves",blogDescription:"After every trip to Hawaii, I always have a few DMs asking where we stayed, our favorite beaches, etc. Especially with spring break around the corner.",blogPublishDate:"24 February 2021"},{id:8,blogThumb:r(468),blogTitle:"If You Struggle To Hit Your Goals, Try This Instead",blogDescription:"This year, instead of setting grand, lofty goals and New Years Resolutions, I realized that I respond better to smaller targets that I can cross",blogPublishDate:"24 February 2021"},{id:9,blogThumb:r(473),blogTitle:"The Luxury Winter Accessory That’s Trending Now",blogDescription:"No matter what you spend on your wardrobe, there are three pieces that can always elevate your look – shoes, handbags, and sunglasses.",blogPublishDate:"24 February 2021"}],products:[],category:[],cartproduct:{},compareproduct:{},dismissCountDown:0,swiperOption:{slidesPerView:4,slidesPerGroup:1,spaceBetween:30,loop:!1,mousewheel:!1,keyboard:{enabled:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},300:{slidesPerView:1,spaceBetween:10}},autoplay:!1}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({productslist:function(t){return t.products.productslist}})),mounted:function(){window.scrollTo(0,0),this.productsArray()},methods:{productsArray:function(){var t=this;this.productslist.map((function(e){"furniture"===e.type&&(t.products.push(e),e.collection.map((function(i){-1===t.category.indexOf(i)&&t.category.push(i)})))}))},getCategoryProduct:function(t){return this.products.filter((function(e){if(e.collection.find((function(i){return i===t})))return e}))},alert:function(t){this.dismissCountDown=t}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Furniture Home page - AndShop Ecommerce Vue js, Nuxt js Template "}]}}},C=h,w=r(44),component=Object(w.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page"},[e("section",{attrs:{id:"furniture_banner"}},[e("carousel",{staticClass:"furniture_slider_box",attrs:{autoplay:!0,loop:!0,nav:!1,dots:!0,smartSpeed:1e3,margin:30,responsive:{0:{items:1},600:{items:1},992:{items:1},1200:{items:1}}}},t._l(t.sliderItems,(function(r){return e("div",{key:r.id,staticClass:"furniture_slider background_bg",style:{"background-image":"url(".concat(r.imagepath,")")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-8 col-sm-12 col-12"},[e("div",{staticClass:"furniture_slider_content"},[e("h5",[t._v(t._s(r.subTitle))]),t._v(" "),e("h2",[t._v(t._s(r.title))]),t._v(" "),e("p",[t._v(t._s(r.description))]),t._v(" "),e("nuxt-link",{staticClass:"theme-btn-one bg-black btn_sm",attrs:{to:"/shop/shop-2"}},[t._v("Shop Now")])],1)])])])])})),0)],1),t._v(" "),e("section",{staticClass:"pt-100",attrs:{id:"furniture_banner_bottom"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"furniture_bottom_wrapper"},[e("nuxt-link",{staticClass:"hover_effect_furniture",attrs:{to:"/shop/shop-3"}},[e("img",{attrs:{src:r(527),alt:"img"}})]),t._v(" "),e("div",{staticClass:"furniture_bottom_content furniture-content-lg"},[e("h5",[t._v("Outdoor Furniture")]),t._v(" "),t._m(0),t._v(" "),e("nuxt-link",{attrs:{to:"/shop/shop-3"}},[t._v("Shop Now")])],1)],1)]),t._v(" "),e("div",{staticClass:"col-lg-3 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"furniture_bottom_wrapper mb-30"},[e("nuxt-link",{staticClass:"hover_effect_furniture",attrs:{to:"/shop/shop-3"}},[e("img",{attrs:{src:r(528),alt:"img"}})]),t._v(" "),e("div",{staticClass:"furniture_bottom_content furniture-content-md"},[e("h5",[t._v("Outdoor Furniture")]),t._v(" "),t._m(1),t._v(" "),e("nuxt-link",{attrs:{to:"/shop/shop-3"}},[t._v("Shop Now")])],1)],1),t._v(" "),e("div",{staticClass:"furniture_bottom_wrapper"},[e("nuxt-link",{staticClass:"hover_effect_furniture",attrs:{to:"/shop/shop-3"}},[e("img",{attrs:{src:r(529),alt:"img"}})]),t._v(" "),e("div",{staticClass:"furniture_bottom_content furniture-content-md"},[e("h5",[t._v("Outdoor Furniture")]),t._v(" "),t._m(2),t._v(" "),e("nuxt-link",{attrs:{to:"/shop/shop-3"}},[t._v("Shop Now")])],1)],1)]),t._v(" "),e("div",{staticClass:"col-lg-3 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"furniture_bottom_wrapper"},[e("nuxt-link",{staticClass:"hover_effect_furniture",attrs:{to:"/shop/shop-3"}},[e("img",{attrs:{src:r(530),alt:"img"}})]),t._v(" "),e("div",{staticClass:"furniture_bottom_content furniture-content-md"},[e("h5",[t._v("Outdoor Furniture")]),t._v(" "),t._m(3),t._v(" "),e("nuxt-link",{attrs:{to:"/shop/shop-3"}},[t._v("Shop Now")])],1)],1)])])])]),t._v(" "),e("section",{staticClass:"ptb-100",attrs:{id:"hot_Product_area"}},[e("div",{staticClass:"container"},[e("b-tabs",{staticClass:"hot-product-area-tabs"},t._l(t.category,(function(r,o){return e("b-tab",{key:o,staticClass:"row",attrs:{title:r}},t._l(t.getCategoryProduct(r),(function(r,o){return e("div",{key:o,staticClass:"col-lg-3 col-md-4 col-sm-6 col-12"},[e("ProductBox3",{attrs:{product:r,index:o},on:{showalert:t.alert,alertseconds:t.alert}})],1)})),0)})),1)],1)]),t._v(" "),e("section",{attrs:{id:"offer_timer_two"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"offer_time_img_two"},[e("img",{attrs:{src:r(531),alt:"img"}})])]),t._v(" "),e("div",{staticClass:"col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"offer_time_two_Content"},[e("img",{attrs:{src:r(532),alt:"img"}}),t._v(" "),e("div",{attrs:{id:"countdown_two"}},[e("ul",[e("Timer",{attrs:{date:"October 15, 2025"}})],1)])])])])])]),t._v(" "),e("section",{staticClass:"ptb-100",attrs:{id:"furniture_popular_product"}},[e("div",{staticClass:"container"},[t._m(4),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("swiper",{staticClass:"swiper todays_slider position-relative",attrs:{options:t.swiperOption}},[t._l(t.products,(function(r,o){return e("swiper-slide",{key:o},[e("ProductBox3",{attrs:{product:r,index:o},on:{showalert:t.alert,alertseconds:t.alert}})],1)})),t._v(" "),e("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)])])]),t._v(" "),e("section",{attrs:{id:"furniture_story"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 offset-lg-2"},[e("div",{staticClass:"our_story_content"},[e("h2",[t._v("Our Story")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem quaerat\n                           autem obcaecati nisi dolore reprehenderit fugiat accusamus repellat nihil possimus voluptas ipsa, \n                          asperiores maiores quisquam ipsum necessitatibus sit saepe.")]),t._v(" "),e("nuxt-link",{staticClass:"theme-btn-one bg-black btn_md",attrs:{to:"/about-us"}},[t._v("Read Full Story")])],1)])])])]),t._v(" "),e("section",{staticClass:"ptb-100",attrs:{id:"blog_area_two"}},[e("div",{staticClass:"container"},[t._m(5),t._v(" "),e("div",{staticClass:"row"},t._l(t.blogItems.slice(0,2),(function(t){return e("div",{key:t.id,staticClass:"col-lg-6 col-md-6 col-sm-12"},[e("BlogItem3",{attrs:{blogThumb:t.blogThumb,blogTitle:t.blogTitle,blogDescription:t.blogDescription,blogPublishDate:t.blogPublishDate}})],1)})),0)])]),t._v(" "),e("InstagramAreaFurniture"),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",{staticClass:"font-weight-normal"},[t._v("Successfully added to your list")])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",{staticClass:"font-weight-normal"},[t._v("Successfully added to your list")])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",{staticClass:"font-weight-normal"},[t._v("Successfully added to your list")])])],1)}),[function(){var t=this,e=t._self._c;return e("h2",[t._v("Outdoor Dining "),e("br"),t._v(" Furniture")])},function(){var t=this,e=t._self._c;return e("h2",[t._v("Outdoor Dining "),e("br"),t._v(" Furniture")])},function(){var t=this,e=t._self._c;return e("h2",[t._v("Outdoor Dining "),e("br"),t._v(" Furniture")])},function(){var t=this,e=t._self._c;return e("h2",[t._v("Outdoor Dining "),e("br"),t._v(" Furniture")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"center_heading_two"},[e("h2",[t._v("Popular Product")]),t._v(" "),e("span",{staticClass:"heading_border"})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"center_heading_two"},[e("h2",[t._v("Blog Post")]),t._v(" "),e("span",{staticClass:"heading_border"})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductBox3:r(495).default,BlogItem3:r(497).default,InstagramAreaFurniture:r(496).default})}}]);