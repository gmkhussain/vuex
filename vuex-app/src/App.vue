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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
