<template>
    <section id="product_single_three" class="ptb-100">
      <div class="container">
        <div class="row area_boxed">
          <div class="col-lg-4">
            <div class="product_single_one_img" >
              <swiper
                class="swiper product-single-2-slider"
                :options="swiperOption"
              >
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/1.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/2.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/3.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/4.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/5.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/6.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/7.png')"
                    alt="img"
                  />
                </swiper-slide>

                <div
                  class="swiper-button-prev swiper-button-white"
                  slot="button-prev"
                ></div>
                <div
                  class="swiper-button-next swiper-button-white"
                  slot="button-next"
                ></div>
              </swiper>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="product_details_right_one">
              <div class="modal_product_content_one">
                <h3 class="text-capitalize">{{ getDetail.title }}</h3>
                
                <h4 v-if="getDetail.discount">
                  ${{ discountedPrice(getDetail) }}
                  <del>${{ getDetail.price }}</del>
                </h4>
                <h4 v-else>${{ getDetail.price }}</h4>
                <p>
                  {{ getDetail.description }}
                </p>


                <form id="product_count_form_two">
                  <div class="product_count_one">
                    <b-form-spinbutton
                      id="sb-inline"
                      v-model="quantity"
                      inline
                      class="border-0"
                    ></b-form-spinbutton>
                  </div>
                </form>
                <div class="variable-single-item">
                  <div class="product-variable-color">
                    <span class="align_text_color">Color:</span>
                    
                    <label for="modal-product-color-red">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-red"
                        class="color-select"
                        type="radio"
                        checked=""
                      />
                      <span class="product-color-red"></span>
                    </label>
                    
                    <label for="modal-product-color-green">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-green"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-green"></span>
                    </label>

                    <label for="modal-product-color-blue">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-blue"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-blue"></span>
                    </label>
                  </div>
                </div>
                <div class="links_Product_areas area_custom_details">
                  <ul>
                    <li>
                      <a href="#!" class="action wishlist" title="Wishlist"
                        ><i class="far fa-heart"></i>Add To Wishlist</a
                      >
                    </li>
                    <li>
                      <a href="#!" class="action compare" title="Compare"
                        ><i class="fas fa-exchange-alt"></i>Add To Compare</a
                      >
                    </li>
                    <li>
                      <!-- <a
                        href="#!"
                        class="theme-btn-one btn-black-overlay btn_sm"
                        >Add To Cart</a
                      > -->
                      <button
                    @click="addToCart(getDetail)"
                    class="theme-btn-one btn-black-overlay btn_sm"
                  >
                    Add To Cart
                  </button>
                    </li>
                  </ul>
                </div>
                <div class="product_detail_socials d-flex align-items-center">
                  <h6>Share:</h6>
                  <ul class="d-flex align-items-center">
                    <li>
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-pinterest-p"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product_details_tabs">

            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
export default{

}

</script>