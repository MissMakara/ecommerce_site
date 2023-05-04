import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a4bce9c2 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _61862e87 = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _7c9e820e = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _74e5efe8 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _7a92302e = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _285029d7 = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _78d16e44 = () => interopDefault(import('../pages/electronics.vue' /* webpackChunkName: "pages/electronics" */))
const _59922dfd = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _e74394ce = () => interopDefault(import('../pages/furniture.vue' /* webpackChunkName: "pages/furniture" */))
const _684398f4 = () => interopDefault(import('../pages/grocery.vue' /* webpackChunkName: "pages/grocery" */))
const _8e6ecde0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _741d529e = () => interopDefault(import('../pages/lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _25564438 = () => interopDefault(import('../pages/my-account/index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _02b2b3dc = () => interopDefault(import('../pages/pharmacy.vue' /* webpackChunkName: "pages/pharmacy" */))
const _46886f80 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _361d25cc = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _0351d73c = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _a2ab360a = () => interopDefault(import('../pages/vendor-dashboard/index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _bd873e8a = () => interopDefault(import('../pages/blog/blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _bd6b0f88 = () => interopDefault(import('../pages/blog/blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _bc0e1818 = () => interopDefault(import('../pages/blog/blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _1a68610a = () => interopDefault(import('../pages/cart/cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _1a4c3208 = () => interopDefault(import('../pages/cart/cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _1a300306 = () => interopDefault(import('../pages/cart/cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _aae6dc54 = () => interopDefault(import('../pages/cart/empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _2075b4db = () => interopDefault(import('../pages/contact-us/contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _0e3b2c88 = () => interopDefault(import('../pages/my-account/account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _4534930f = () => interopDefault(import('../pages/my-account/account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _37d41808 = () => interopDefault(import('../pages/my-account/addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _693ed5f4 = () => interopDefault(import('../pages/my-account/checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _694ced75 = () => interopDefault(import('../pages/my-account/checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _01ba496a = () => interopDefault(import('../pages/my-account/compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _484818d1 = () => interopDefault(import('../pages/my-account/downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _afb1e040 = () => interopDefault(import('../pages/my-account/order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _eca99a22 = () => interopDefault(import('../pages/my-account/orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _60f63d62 = () => interopDefault(import('../pages/my-account/wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _1e9f0cef = () => interopDefault(import('../pages/product/product_backup_id.vue' /* webpackChunkName: "pages/product/product_backup_id" */))
const _372765ac = () => interopDefault(import('../pages/product/product_detail.vue' /* webpackChunkName: "pages/product/product_detail" */))
const _2b98ad54 = () => interopDefault(import('../pages/product/product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _1a7cf53b = () => interopDefault(import('../pages/shop/shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _1a8b0cbc = () => interopDefault(import('../pages/shop/shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _1a99243d = () => interopDefault(import('../pages/shop/shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _1aa73bbe = () => interopDefault(import('../pages/shop/shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _4a0062ac = () => interopDefault(import('../pages/vendor-dashboard/add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _7115b512 = () => interopDefault(import('../pages/vendor-dashboard/order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _439d5258 = () => interopDefault(import('../pages/vendor-dashboard/product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _b1c5bbdc = () => interopDefault(import('../pages/vendor-dashboard/profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _d586098e = () => interopDefault(import('../pages/vendor-dashboard/setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _7ae7e0c6 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _5413e2fe = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _21be140e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _a4bce9c2,
    name: "404"
  }, {
    path: "/about-us",
    component: _61862e87,
    name: "about-us"
  }, {
    path: "/blog",
    component: _7c9e820e,
    name: "blog"
  }, {
    path: "/cart",
    component: _74e5efe8,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _7a92302e,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _285029d7,
    name: "contact-us"
  }, {
    path: "/electronics",
    component: _78d16e44,
    name: "electronics"
  }, {
    path: "/faq",
    component: _59922dfd,
    name: "faq"
  }, {
    path: "/furniture",
    component: _e74394ce,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _684398f4,
    name: "grocery"
  }, {
    path: "/login",
    component: _8e6ecde0,
    name: "login"
  }, {
    path: "/lookbook",
    component: _741d529e,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _25564438,
    name: "my-account"
  }, {
    path: "/pharmacy",
    component: _02b2b3dc,
    name: "pharmacy"
  }, {
    path: "/privacy-policy",
    component: _46886f80,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _361d25cc,
    name: "register"
  }, {
    path: "/shop",
    component: _0351d73c,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _a2ab360a,
    name: "vendor-dashboard"
  }, {
    path: "/blog/blog-2",
    component: _bd873e8a,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _bd6b0f88,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _bc0e1818,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _1a68610a,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _1a4c3208,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _1a300306,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _aae6dc54,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _2075b4db,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _0e3b2c88,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _4534930f,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _37d41808,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _693ed5f4,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _694ced75,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _01ba496a,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _484818d1,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _afb1e040,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _eca99a22,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _60f63d62,
    name: "my-account-wishlist"
  }, {
    path: "/product/product_backup_id",
    component: _1e9f0cef,
    name: "product-product_backup_id"
  }, {
    path: "/product/product_detail",
    component: _372765ac,
    name: "product-product_detail"
  }, {
    path: "/product/product-single-2",
    component: _2b98ad54,
    name: "product-product-single-2"
  }, {
    path: "/shop/shop-2",
    component: _1a7cf53b,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _1a8b0cbc,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _1a99243d,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _1aa73bbe,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _4a0062ac,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _7115b512,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _439d5258,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _b1c5bbdc,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _d586098e,
    name: "vendor-dashboard-setting"
  }, {
    path: "/blog/:slug",
    component: _7ae7e0c6,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _5413e2fe,
    name: "product-id"
  }, {
    path: "/",
    component: _21be140e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
