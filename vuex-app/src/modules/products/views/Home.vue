<template>
    <div>
        <h4>Product List</h4>
        {{$store.state.products.count}}
        <button @click="addQtyFunc">+Add </button>
        <button @click="getReviewsFunc">View Reviews</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
            addQtyFunc() {
              console.log("addQty() called")
              this.$store.commit("products/ADD_ITEM");
            },
        }
    }
</script>