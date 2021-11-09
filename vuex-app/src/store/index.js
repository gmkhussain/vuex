import { createStore } from 'vuex'
// import products from './modules/products'

export default createStore({
    state() {
      return {
        count: 1
      }
    },
    mutations: {
      /*
       @ Alter Data
       @ commit use for mutations
      */
      addQty(state) {
        state.count++
      },
      removeQty(state) {
        if(state.count > 0) {
          state.count--
        }
      }
    },
    actions: {
      /*
       @ API calls
       @ dispatch use for actions.
      */ 
    },
    getters: {
      // Get Data
    },
    // products
    modules: { }
})





