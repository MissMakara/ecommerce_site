console.log("Products JS page loaded]")
import _ from 'lodash';
import products from '../../data/products'

const state = {
    productslist: products.data,
    products: products.data,
    shuffleproducts: products.data,
    wishlist: [],
    compare: [],
    searchedProduct: [],
    filteredProduct: [],
    sortedPriceItems: []
}

// getters 
const getters = {
    getcollectionProduct: (state) => {
        return collection = state.products.filter((product) => {
            return collection === product.collection
        })
    },
    getProductById: (state) => {
        return id => state.products.find((product) => {
            return product.id === +id
        })
    },
    wishlistItems: (state) => {
        return state.wishlist
    },
    compareItems: (state) => {
        return state.compare
    }
}

// mutations 
const mutations = {
    addToWishlist: (state, payload) => {
        const product = state.products.find( item => item.id === payload.id )
        const wishlistItems = state.wishlist.find( item => item.id === payload.id )
        if (wishlistItems) {

        } else {
            state.wishlist.push({
                ...product
            })
        }
    },
    removeWishlistItem: ( state, payload ) => {
        const index = state.wishlist.indexOf(payload)
        state.wishlist.splice(index, 1)
    },
    addToCompare: (state, payload) => {
        const product = state.products.find(item => item.id === payload.id)
        const compareItems = state.compare.find(item => item.id === payload.id)
        if (compareItems) {
        } else {
            state.compare.push({
                ...product
            })
        }
    },
    removeCompareItem: (state, payload) => {
        const index = state.compare.indexOf(payload)
        state.compare.splice(index, 1)
    },
    searchProduct: (state, payload) => {
        payload = payload.toLowerCase()
        state.searchedProduct = []

        if (payload.length) {
            state.orders.filter((product) => {
                if (product.id.toLowerCase().includes(payload.toLowerCase())) {
                    state.searchedProduct.push(product)
                    console.log(state.searchedProduct)
                }
            })
            state.productslist = state.searchedProduct
        }
    },

    filterProduct:(state, payload) => {
        // payload = payload.toLowerCase()
        state.productslist =products.data
        state.filteredProduct = []
    

        console.log("The received search params are:",payload)
        if (payload.length) {
            console.log("No. of filter categories",payload.length)
            console.log(payload)
            
            for(let index in payload){
                
                let searchItem = payload[index]
                
                if (searchItem == '100'){
                    state.products.filter((product)=>{
                        if (product.price >=0 && product.price <=100){
                            state.filteredProduct.push(product)  
            
                        }
                    })

                }
                else if(searchItem == '200'){
                    state.products.filter((product)=>{
                        if (product.price >100 && product.price <=200){
                            state.filteredProduct.push(product)  
            
                        }
                    })

                }
                else if(searchItem == '300'){
                    state.products.filter((product)=>{
                        if (product.price >200 && product.price <=300){
                            state.filteredProduct.push(product)  
            
                        }
                    })

                }
                else if(searchItem == '400'){
                    state.products.filter((product)=>{
                        if (product.price >300){
                            state.filteredProduct.push(product)  
            
                        }
                    })

                }
                else{
                    searchItem = searchItem.toLowerCase()
                    state.products.filter((product)=>{
                        if ( (product.tags.map(tag => tag.toLowerCase()).includes(searchItem))
                        ||(product.title.toLowerCase()).includes(searchItem)
                        ||(product.brand.toLowerCase()).includes(searchItem)
                        ||(product.type.toLowerCase()).includes(searchItem))
                        {
                            state.filteredProduct.push(product)
                        }
                    })

                }

                
            }
            console.log("filtered items are:",state.filteredProduct)
            state.productslist = state.filteredProduct
        
        }
        else {
            // state.searchProduct = state.productslist
            console.log("displaying all")
        }
    },

    sortPriceAsc:(state, payload) =>{
        state.sortedPriceItems = []
        // price = state.products.price
        state.productslist = _.sortBy(state.productslist, 'price')
        // state.productslist = 

    },
    sortPriceDesc:(state, payload) =>{
        state.sortedPriceItems = []
        // price = state.products.price
        state.productslist = _.sortBy(state.productslist, 'price').reverse()

    },
    // searchPrice:(state, payload) =>{
    //     // for (let index in payload){
    //     state.productslist =products.data
    //     let searchItem = payload
    //     console.log("min:", searchItem[0])
    //     console.log("max:", searchItem[1])
    //     state.productslist.filter((product)=>{
    //     if (product.price >=searchItem[0] && product.price <=searchItem[1]){
    //         state.searchProduct.push(product)
            

    //     }
    //     })
    //     // }
    //     state.productslist =state.searchProduct
    //     console.log(state.searchProduct)
    // },
    shuffleProduct: (state, payload) => {
        state.shuffleproducts = payload
    },
    getallProduct: (state, payload) => {
        console.log("clearing filters and displaying all")
        state.productslist = products.data
    }
}

// actions 
const actions = {
    addToWishlist: (context, payload) => {
        context.commit( 'addToWishlist', payload)
    },
    removeWishlistItem: ( context, payload ) => {
        context.commit( 'removeWishlistItem', payload )
    },
    addToCompare: (context, payload) => {
        context.commit('addToCompare', payload)
    },
    removeCompareItem: (context, payload) => {
        context.commit('removeCompareItem', payload)
    },
    filterProduct: (context, payload) => {
        context.commit('filterProduct', payload)
    },
    sortPriceDesc: (context, payload) => {
        context.commit('sortPriceDesc', payload)
    },
    sortPriceAsc: (context, payload) => {
        context.commit('sortPriceAsc', payload)
    },
    searchProduct:(context, payload)=>{
        context.commit('searchProduct', payload)
    },
    shuffleProduct: (context, payload) => {
        context.commit('shuffleProduct', payload)
    },
    getallProduct: (context) => {
        context.commit('getallProduct')
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}