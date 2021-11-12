import { createApp } from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import homeModule from "./modules/home";
import productsModule from "./modules/products";
import cartModule from "./modules/cart";
import postsModule from "./modules/posts";


import { registerModules } from "./register-modules";

registerModules({
     home: homeModule,
     products: productsModule,
     cart: cartModule,
     posts: postsModule
});

const app = createApp(App);
      app.use(router);
      app.use(store);
      app.mount("#app");