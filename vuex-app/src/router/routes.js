const routes = [
    {
        path: '/products_old',
        name: 'Product_Page',
        component: () => import('@/views/pages/Products.vue'),
    }
]; 

export default routes;