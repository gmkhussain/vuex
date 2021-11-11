<template>
    <div>
        <h4>Products</h4>
        <button @click="addQtyFunc">+Add </button>
        <button @click="getReviewsFunc">View Reviews</button>
        
    </div>
</template>

<script>
export default {
    name: 'Products',
    methods: {
        addQtyFunc() {
            console.log("addQty() called")
            this.$store.commit('addQty')
        },
        getReviewsFunc() {
            this.$store.dispatch('getReviewsApiData')
        }
    }
}
</script>
