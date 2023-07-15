import api from '/api';
// import { createApp } from 'vue';

// const app = createApp({});

// app.component('Vue3EasyDataTable', Vue3EasyDataTable);

// // Mount the app to a specific element
// app.mount('#app');

const state ={
    orders:[],
    products:[],
    sales:[],
    searchedOrders:[],
}

const getters ={
    //get the orders
    getallOrders:(state) => {
        return state.orders
    }, 
    
    //get the  searched orders
    getSearchedOrders:(state) =>{
      return state.searchedOrders
    }
    //get the sales


    //get the products

}

const actions ={
    //get orders
    getOrders({ commit }) {
      state.orders = []
      console.log("In getOrders Action")
      api.getOrders(
        {
          headers: 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      )
        .then(response => {
          console.log("received response in actions:", response.data)
          
          commit('getOrders', response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    searchOrder:(context, payload)=>{
      context.commit('searchOrder', payload)
    },


}

const mutations ={
    getOrders: (state, payload) => {
        console.log("Mutation: orders received are:", payload)
        state.orders.push(payload)
        console.log("state orders:", state.orders)
      },

    searchOrder: (state, payload) => {
      payload = payload.toLowerCase()
      state.searchedOrders = []

      if (payload.length) {
          state.orders.filter((product) => {
              if (product.order_id.toLowerCase().includes(payload.toLowerCase())) {
                  state.searchedOrders.push(product)
                  console.log(state.searchedOrders)
              }
          })
          
      }
    },
  

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }