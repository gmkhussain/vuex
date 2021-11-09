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


 