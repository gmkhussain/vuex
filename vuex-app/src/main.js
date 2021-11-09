import { createApp } from 'vue'
import App from "./App.vue";
// import router from "./router";
import store from "./store";

// import cartModule from "./modules/cart";
// import productsModule from "./modules/products";

import { registerModules } from "./register-modules";

registerModules({
//   products: productsModule,
//   cart: cartModule
});

createApp(App).use(store).mount('#app')