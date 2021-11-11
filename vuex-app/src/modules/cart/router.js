const Module = () => import("./Module.vue");
const CartPage = () => import("./views/Cart.vue")
const moduleRoute = {
    path: '/cart',
    component: Module,
    children: [
        {
            path: '/cart',
            component: CartPage
        }
    ]
};

export default( router ) => {
    router.addRoute(moduleRoute);
};
