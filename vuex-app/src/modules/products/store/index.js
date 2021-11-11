//mutation-types
const ADD_ITEM = "ADD_ITEM";


export default {
    namespaced: true,
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
      [ADD_ITEM](state) {
        state.count++;
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
}
