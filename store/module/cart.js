import products from '../../data/products'
import destinations from '../../data/destinations'

import axios from 'axios';
import api from '/api';

// const axios = require('axios');
//import destinations data

// const path ="http://127.0.0.1:5000"
const state = {
  products: products.data,
  destinations: destinations,
  cart: [],
  ordersMade:[],
  //create a destinations variable

}
// getters
const getters = {
  cartItems: (state) => {
    return state.cart
  },

  getProducts:(state) => {
    return state.products
  },

  getallOrders:(state) => {
    return state.ordersMade
  },       

  cartTotalAmount: (state) => {

    return state.cart.reduce( (total, product) => {
      return total + ( (product.price) * product.quantity)
      }, 0 )
  },

  //get the destinations data

}
// actions
const actions = {
  
  addToCart: (context, payload) => {
    context.commit('addToCart', payload)
    return "success"

  },
  updateCartQuantity: (context, payload) => {
    context.commit('updateCartQuantity', payload)
  },
  removeCartItem: (context, payload) => {
      context.commit('removeCartItem', payload)
  },
  checkout:(context, payload) => {
    context.commit('checkout', payload)
  },

  getOrders({ commit }) {
    console.log("In getOrders Action")
    api.getOrders(
      {
        headers: 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    )
      .then(response => {
        console.log("recieved response:", response.data)
        
        commit('getOrders', response.data);
      })
      .catch(error => {
        console.error(error);
      });
  },
}

// mutations
const mutations = {
  addToCart: (state, payload) => {
    console.log("In cart")
    console.log(payload)

    const product = state.products.find(item => item.id === payload.id)
    const stock = product.stock
    console.log("Current stock", product.stock)
    const cartItems = state.cart.find(item => item.id === payload.id)
    const qty = payload.quantity ? payload.quantity : 1
    
    if (cartItems) {
      if (cartItems.quantity + qty > stock){
        let message = "Items available are "+stock
        console.log(message)

      }else{
        cartItems.quantity = cartItems.quantity + qty
      }
    } else {
      state.cart.push({
        ...product,
        quantity: qty
      })
      payload.status = "Successfully added to cart"
      console.log(payload.status)
    }
    // product.stock--

  },

  updateCartQuantity: (state, payload) => {
    // Calculate Product Stock Counts
    function calculateStockCounts(product, quantity) {
      const qty = product.quantity + quantity
      const stock = product.stock
      if (stock < qty) {

        return false
      }
      return true
    }
    state.cart.find((items, index) => {
      if (items.id === payload.product.id) {
        const qty = state.cart[index].quantity + payload.qty
        const stock = calculateStockCounts(state.cart[index], payload.qty)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        } else {

        }
        return true
      }
    })
  },
  
  removeCartItem: (state, payload) => {
    console.log("Payload", payload)
      const index = state.cart.indexOf(payload)
      state.cart.splice(index, 1)
  },

  checkout: (state, payload) => {
    console.log("Payload", payload)
    state.cart = []
    console.log("Cart is empty")

  },

  getOrders: (state, payload) => {
    console.log("Orders Received are:", payload)
    state.ordersMade.push(payload)
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
