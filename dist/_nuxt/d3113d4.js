(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{609:function(t,e,c){"use strict";c.r(e);c(5),c(4),c(2),c(1),c(6),c(3),c(7);var r=c(0),o=c(48);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}var l={name:"cart-2",data:function(){return{title:"Cart",breadcrumbItems:[{text:"Home",to:"/"},{text:"Cart",to:"/cart"}],quantity:1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({cart:"cart/cartItems",cartTotal:"cart/cartTotalAmount"})),mounted:function(){window.scrollTo(0,0)},methods:{getImageUrl:function(path){return c(256)("./"+path)},discountedPrice:function(t){return t.price-t.price*t.discount/100},removeCartItem:function(t){this.$store.dispatch("cart/removeCartItem",t)}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Cart page - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},_=l,d=c(44),component=Object(d.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("section",{attrs:{id:"common_banner_one"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"common_banner_text"},[e("h2",[t._v(t._s(this.title))]),t._v(" "),e("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:t.breadcrumbItems}})],1)])])])]),t._v(" "),e("section",{staticClass:"ptb-100",attrs:{id:"cart_area_two"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"table_desc border-bottom-0"},[e("div",{staticClass:"table_page table-responsive"},[e("table",[t._m(0),t._v(" "),t.cart.length?e("tbody",t._l(t.cart,(function(c,r){return e("tr",{key:r},[e("td",{staticClass:"product_thumb"},[e("nuxt-link",{attrs:{to:{path:"/product/"+c.id}}},[e("img",{attrs:{src:t.getImageUrl(c.images[0].src),alt:"img"}})])],1),t._v(" "),e("td",{staticClass:"product_name"},[e("nuxt-link",{attrs:{to:{path:"/product/"+c.id}}},[t._v(t._s(c.title))])],1),t._v(" "),e("td",{staticClass:"product-price"},[t._v("\n                      $"+t._s(t.discountedPrice(c))+"\n                    ")]),t._v(" "),e("td",{staticClass:"product_quantity"},[e("div",{staticClass:"product_count_one"},[e("b-form-spinbutton",{staticClass:"border-0",attrs:{id:"sb-inline",inline:""},model:{value:c.quantity,callback:function(e){t.$set(c,"quantity",e)},expression:"item.quantity"}})],1)]),t._v(" "),e("td",{staticClass:"product_total"},[t._v("\n                      $"+t._s(t.discountedPrice(c)*c.quantity)+"\n                    ")]),t._v(" "),e("td",{staticClass:"product_remove"},[e("button",{staticClass:"bg-transparent remove-btn",on:{click:function(e){return t.removeCartItem(r)}}},[e("i",{staticClass:"far fa-trash-alt"})])])])})),0):e("tbody",[t._m(1)])])])]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"coupon_code right",attrs:{"data-aos":"fade-up","data-aos-delay":"400"}},[e("h3",[t._v("Cart Total")]),t._v(" "),e("div",{staticClass:"coupon_inner"},[e("div",{staticClass:"cart_subtotal"},[e("p",[t._v("Subtotal")]),t._v(" "),e("p",{staticClass:"cart_amount"},[t._v("$"+t._s(t.cartTotal))])]),t._v(" "),t._m(3),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("Calculate shipping")]),t._v(" "),e("div",{staticClass:"cart_subtotal"},[e("p",[t._v("Total")]),t._v(" "),e("p",{staticClass:"cart_amount"},[t._v("$"+t._s(t.cartTotal+25))])]),t._v(" "),e("div",{staticClass:"checkout_btn"},[e("nuxt-link",{staticClass:"theme-btn-one btn-black-overlay btn_sm",attrs:{to:"/my-account/checkout-1"}},[t._v("Proceed to Checkout")])],1)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"product_thumb"},[t._v("Image")]),t._v(" "),e("th",{staticClass:"product_name"},[t._v("Product")]),t._v(" "),e("th",{staticClass:"product-price"},[t._v("Price")]),t._v(" "),e("th",{staticClass:"product_quantity"},[t._v("Quantity")]),t._v(" "),e("th",{staticClass:"product_total"},[t._v("Total")]),t._v(" "),e("th",{staticClass:"product_remove"},[t._v("Remove")])])])},function(){var t=this._self._c;return t("tr",[t("td",{staticClass:"border-0"},[this._v("No Item found!")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"coupon_inner_two"},[e("input",{staticClass:"mb-2",attrs:{placeholder:"Coupon code",type:"text"}}),t._v(" "),e("button",{staticClass:"theme-btn-one btn-black-overlay btn_sm",attrs:{type:"submit"}},[t._v("\n              Apply coupon\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart_subtotal"},[e("p",[t._v("Shipping")]),t._v(" "),e("p",{staticClass:"cart_amount"},[e("span",[t._v("Flat Rate:")]),t._v(" $25.00")])])}],!1,null,null,null);e.default=component.exports}}]);