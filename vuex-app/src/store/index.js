import { createStore } from 'vuex'
import axios from 'axios'
// import products from './modules/products'

export default createStore({
    state() {
      return {
        count: 1,
        reviews: {}
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
      },

      updateReviews( state, payload) {
        state.reviews = payload;
      }

    },
    actions: {
      /*
       @ API calls
       @ dispatch use for actions.
      */
      async getReviewsApiData({commit}) {
        let resp = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
          console.log(resp)
          commit('updateReviews', resp.data )
      }
    },
    getters: {
      // Get Data
    },
    // products
    modules: { }
})





