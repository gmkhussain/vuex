<template>
  <div>
    <h4>Cart.vue</h4>
    Qty: {{$store.state.products.count}}
  </div>
</template>

<script>
export default {
    name: 'Cart'
}
</script>