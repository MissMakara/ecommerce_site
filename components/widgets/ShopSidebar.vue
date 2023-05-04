<template>
    <div class="col-lg-3">
        <div class="shop_sidebar_wrapper">
            <div class="shop_Search">
                <form @submit.prevent="searchProduct">
                    <input @keyup="searchProduct" type="text" class="form-control" placeholder="Search..." v-model="searchItems" />
                    <button @click="searchProduct"><img :src="require('@/assets/img/svg/search.svg')" alt="img"></button>
                </form>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Product Categories</h4>
                <form>
                    <label class="custom_boxed">T-shirts
                        <input type="checkbox" value="antiseptic"@change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
  
                    <label class="custom_boxed">Bags
                        <input type="checkbox" value="bags" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Jackets
                        <input type="checkbox" value="jackets" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Shoes
                        <input type="checkbox" value="shoes" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Jeans
                        <input type="checkbox" value="jeans" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>

            <!-- <div class="shop_sidebar_boxed">
                <h4>Price</h4>
                <div class="price_filter">
                    <vue-slider
                        v-model="slidervalue"
                        :min="0"
                        :max="5000"
                        ref="slider"
                        @change="searchPrice($refs.slider.getValue())">
                    </vue-slider>
                    <div class="price-slider-amount mt-3 text-capitalize">Price: ${{slidervalue[0]}} - ${{slidervalue[1]}}</div>
                </div>
            </div> -->
            <div class="shop_sidebar_boxed">
                <h4>Price</h4>
                <form>
                    <label class="custom_boxed">0-100
                        <input type="checkbox" value="100"  @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">101-200
                        <input type="checkbox" value="200" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">201-300
                        <input type="checkbox" value="300" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">+300
                        <input type="checkbox" value="400" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>

            <div class="shop_sidebar_boxed">
                <h4>Color</h4>
                <div class="product-variable-color">
                    <label for="modal-product-color-red6">
                        <input name="modal-product-color" id="modal-product-color-red6" class="color-select"
                            type="checkbox" value="red" @change="filterProduct" v-model="categories">
                        <span class="product-color-red"></span>
                    </label>
                    <label for="modal-product-color-tomato1">
                        <input name="modal-product-color" id="modal-product-color-tomato1"
                            class="color-select" type="checkbox" value="tomato" @change="filterProduct" v-model="categories">
                        <span class="product-color-tomato"></span>
                    </label>
                    <label for="modal-product-color-green2">
                        <input name="modal-product-color" id="modal-product-color-green2"
                            class="color-select" type="checkbox" value="green" @change="filterProduct" v-model="categories">
                        <span class="product-color-green"></span>
                    </label>
                    <label for="modal-product-color-light-green3">
                        <input name="modal-product-color" id="modal-product-color-light-green3"
                            class="color-select" type="checkbox" value="lawngreen" @change="filterProduct" v-model="categories">
                        <span class="product-color-light-green"></span>
                    </label>
                    <label for="modal-product-color-blue4">
                        <input name="modal-product-color" id="modal-product-color-blue4" class="color-select"
                            type="checkbox" value="blue" @change="filterProduct" v-model="categories">
                        <span class="product-color-blue"></span>
                    </label>
                    <label for="modal-product-color-light-blue5">
                        <input name="modal-product-color" id="modal-product-color-light-blue5"
                            class="color-select" value="light_blue" type="checkbox" @change="filterProduct" v-model="categories">
                        <span class="product-color-light-blue"></span>
                    </label>
                </div>
            </div>

            <div class="shop_sidebar_boxed">
                <h4>Size</h4>
                <form id="sizes_input">
                    <label class="custom_boxed">XS
                        <input type="checkbox" value="XS" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">S
                        <input type="checkbox" value="S" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">M
                        <input type="checkbox" value="M" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">L
                        <input type="checkbox" value="L" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">XL
                        <input type="checkbox" value="XL" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>
            
            <div class="shop_sidebar_boxed">
                <h4>Brand</h4>
                    <label class="custom_boxed">Next
                        <input type="checkbox" value="Next" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Adidas
                        <input type="checkbox" value="adidas" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Calvin Klein
                        <input type="checkbox" value="calvin klein" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Nike
                        <input type="checkbox" value="nike" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Geox
                        <input type="checkbox" value="geox" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">River Island
                        <input type="checkbox" value="river island" @change="filterProduct" v-model="categories">
                        <span class="checkmark"></span>
                    </label>
                    
                    <div class="clear_button">
                        <button @click="getallProduct" class="theme-btn-one btn_sm btn-black-overlay mt-1">Clear Filter</button>
                    </div>
            </div> 

        </div>
    </div>
</template>

<script>
console.log("SHOP Sidebar page loaded]")
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    name: 'ShopSidebar',

    data() {
        return {
            // For Range Slider Value 
            slidervalue: [50, 1000],
            //for the categories
            categories:[],
            searchItems:[]
            
        }
    },
    computed: {
        ...mapState({
            shuffleproducts: state => state.products.shuffleproducts,
            productslist: state => state.products.productslist   

        }),
        resultQuery() {
            if (this.searchQuery) {
            return this.categories.filter(item => {
            return this.searchQuery
                .toLowerCase()
                .split(" ")
                .every(v => item.toLowerCase().includes(v));
            });
        } else {
            return this.resources;
        }
      }
    },
    methods: {
        getImageUrl(path) {
            return require('@/assets/img/product-image/' + path);
        },
        // Discount Price 
        discountedPrice(product) {
            const price = product.price - ( product.price * product.discount / 100)
            return price
        },
        // For Shop Left Shorting and Up Shorting 
        randomProduct(){
            let array = this.shuffleproducts;
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            this.$store.dispatch('products/shuffleProduct', array.slice(0, 30))
            
        },
        searchProduct(){
            console.log("calling search for", this.searchItems)
            this.$store.dispatch('products/searchProduct', this.searchItems)
        },
        
        // searchPrice(){
        //     console.log("The slider range is",this.slidervalue)
        //     this.$store.dispatch('products/searchPrice',this.slidervalue) 
        //     // this.$store.dispatch('products/searchProduct',this.slidervalue)  
        // },

        filterProduct(){
            console.log("The chosen category is",this.categories)
            this.$store.dispatch('products/filterProduct',this.categories)  
        },

        getallProduct(){
            this.categories=false
            this.$store.dispatch('products/getallProduct')  
            this.categories=[]
        }
    }
}
</script>