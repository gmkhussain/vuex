# vuex

## Install Vue CLI
- ```npm install -g @vue/cli```


## Create Vue App
- ```vue create vuex-app```
- Select ```Default```
- cd ```vuex-app```
- run ```npm run serve```









## Add VueX
- ```vue add vuex```
- check ```src/store```

// main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store' //<--- Here

createApp(App).use(store).mount('#app')
```



// store/index.js
```js
import { createStore } from 'vuex'

export default createStore({
    state() {
      return {
        count: 1 // <-- Here
      }
    },
})
```



// views/pages/Products.vue
```js
<template>
    <div>
        <h4>Products</h4>
        Value from store: {{ $store.state.count }} // <--- Here
    </div>
</template>

<script>
export default {
    name: 'Products'
}
</script>
```




// App.vue
```js
<template> 
  <Products /> // <--
</template>

<script>
import Products from './views/pages/Products.vue' // <-- Here

export default {
  name: 'App',
  components: {
    Products // <-- Here
  }
}
</script>
```






 




 
 


 ## Updating store data

// store/index.js
```js
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
```



// views/pages/Prodcuts.vue
```js
<template>
    <div>
        <h4>Products</h4>
        <button @click="addQtyFunc">+Add </button>
    </div>
</template>

<script>
export default {
    name: 'Products',
    methods: {
        addQtyFunc() {
            console.log("addQty() called")
            this.$store.commit('addQty')
        }
    }
}
</script>
```





// views/pages/CartMini.vue
```js
<template>
    <div>
        <h4>Cart Mini</h4>
        <p>Counts(store): {{ $store.state.count }} </p>
        
        <div v-if="$store.state.count>0">
            <button @click="removeQtyFunc">- Remove</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartMini',
    methods: {
        removeQtyFunc() {
            this.$store.commit('removeQty')
        }
    }
}
</script>
```





// App.vue
```js
<template> 
  <div>
    <CartMini />
    <Products />
  </div>
</template>

<script>
import Products from './views/pages/Products.vue'
import CartMini from '@/views/pages/CartMini.vue'

export default {
  name: 'App',
  components: {
    Products,
    CartMini
  }
}
</script>
```