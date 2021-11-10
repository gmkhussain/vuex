import { createApp } from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import homeModule from "./modules/home";
// import cartModule from "./modules/cart";
// import productsModule from "./modules/products";

import { registerModules } from "./register-modules";

registerModules({
     home: homeModule
//   products: productsModule,
//   cart: cartModule
});

createApp(App).use(router).use(store).mount('#app')