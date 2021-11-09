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
