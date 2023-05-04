<template>
  <div>
    <!-- Banner Area -->
    <!-- <section id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Cart-Area -->
   
    <div class="cart-banner">
      <h2>Cart </h2>
    </div>
  
    <section id="cart_area_one" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="table_desc border-bottom-0">
              <div class="table_page table-responsive">
                <table>
                  <!-- Start Cart Table Head -->
                  <thead>
                    <tr>
                      <th class="product_remove">Remove</th>
                      <th class="product_thumb">Image</th>
                      <th class="product_name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product_quantity">Quantity</th>
                      <th class="product_total">Total</th>
                    </tr>
                  </thead>
                  <!-- End Cart Table Head -->
                  <tbody v-if="cart.length">
                    <!-- Start Cart Single Item-->
                    <tr v-for="(item, index) in cart" :key="item.id">
                      <td class="product_remove">
                        <button
                          @click="removeCartItem(index)"
                          class="bg-transparent remove-btn"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                      <td class="product_thumb">
                        <nuxt-link :to="{ path: '/product/' + item.id }">
                          <img
                            :src="getImageUrl(item.images[0].src)"
                            alt="img"
                          />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <nuxt-link :to="{ path: '/product/' + item.id }">{{
                          item.title
                        }}</nuxt-link>
                      </td>
                      <td class="product-price">
                        ${{ item.price }}
                      </td>
                      <td class="product_quantity">
                        <label>Quantity</label>
                        <input
                          min="1"
                          :max="item.stock"
                          v-model="item.quantity"
                          type="number"
                          @change="checkQuantity(item, item.quantity);"                         
                          
                          />
                          {{ callbackText }}
                      </td>
                      <td class="product_total">
                        ${{item.price * item.quantity }}
                      </td>
                    </tr>
                   
                    <!-- End Cart Single Item-->
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td class="border-0">No item in cart</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div
              class="coupon_code left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <!-- <h3>Coupon</h3>
              <div class="coupon_inner">
                <p>Enter your coupon code if you have one.</p>
                <input class="mb-2" placeholder="Coupon code" type="text" />
                <button
                  type="submit"
                  class="theme-btn-one btn-black-overlay btn_sm"
                >
                  Apply coupon
                </button>
              </div> -->
            </div>
          </div>
          <div class="col-lg-6 col-md-6 right">
            <div
              class="coupon_code right"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3>Cart Total</h3>
              <div class="coupon_inner">
                <div class="cart_subtotal">
                  <p>Subtotal</p>
                  <p class="cart_amount">${{ cartTotal }}</p>
                </div>
                <div class="cart_subtotal">
                  <!-- <p>Shipping</p>
                  <p class="cart_amount"><span>Flat Rate:</span> $25.00</p> -->
                </div>
                <a href="#">Shipping calculated on checkout</a>

                <!-- <div class="cart_subtotal">
                  <p>Total</p>
                  <p class="cart_amount">${{ cartTotal + 25 }}</p>
                </div> -->
                <div v-if="cart.length" class="checkout_btn">
                  <nuxt-link
                    to="/shop/shop-4"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    >Back to Shopping</nuxt-link
                  >
                  <nuxt-link
                    to="/my-account/checkout-1"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    >Proceed to Checkout</nuxt-link
                  >
 

                </div>
                <div v-else class="checkout_btn">
                  <nuxt-link
                    to="/shop/shop-4"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    >Back to Shopping</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "cart",

  data() {
    return {
      title: "Cart",
      currentQtty:0,
      callbackText:"",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Cart",
          to: "/cart",
        },
      ],

      // Product Quanity Increment/ Decrement Data
      quantity: 1,
      
    };
  },

  computed: {
    ...mapGetters({
      cart: "cart/cartItems",
      cartTotal: "cart/cartTotalAmount",
    }),
  },
  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0);
    
    

  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/img/product-image/" + path);
    },
    // Discount Price
    // discountedPrice(product) {
    //   const price = product.price - (product.price * product.discount) / 100;
    //   return price;
    // },
    // For Delete/Remove Product Item
    removeCartItem: function (product) {
      this.$store.dispatch("cart/removeCartItem", product);
    },

    //get the cart item's stock
    checkQuantity: function(product, qtty){
      console.log(qtty,product.stock)
      if (product.stock <= qtty){
        this.callbackText = "Only "+ product.stock + " items are available"
        console.log(this.callbackText)
        // setTimeout(alert, 2000, this.callbackText)
        setTimeout(() => (this.callbackText=""),4000);
       
      }

    }

  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cart page - Purple Pearl Jewellery",
        },
      ],
    };
  },
};

</script>

