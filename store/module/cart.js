import products from '../../data/products'
import destinations from '../../data/destinations'

//import destinations data


const state = {
  products: products.data,
  destinations: destinations,
  cart: [],
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

  // cartTotalAmount: (state) => {
  //     return state.cart.reduce( (total, product) => {
  //         return total + (product.price * product.quantity)
  //       }, 0 )
  // },
//   getCartTotals:(state)=>{

            
//     for (let x in state.cart){
//         let qtty = state.cart[x].quantity
//         let price = state.cart[x].price
//         console.log(price, qtty)
//         return total += ((price) * (qtty))
//         console.log("total is", this.totalPrice)
//     }

//     return this.totalPrice
// },
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
  }
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
  }

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
