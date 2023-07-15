import Vue from 'vue'
import Vuex from 'vuex'
import { createApp } from 'vue';
import products from './module/products'
import cart from './module/cart'
import vendor from './module/vendor'
import cors from "cors";

import VueGoodTable from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

Vue.use(Vuex)

Vue.use(VueGoodTable);


const createStore = () => {
  return new Vuex.Store({
    modules: {
      products: products,
      cart: cart,
      vendor: vendor,
    }
  })
  
}


// Register the component globally


// Mount the app to a specific element


export default createStore