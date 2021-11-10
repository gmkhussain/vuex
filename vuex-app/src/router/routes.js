const routes = [
    {
        path: '/products',
        name: 'Product_Page',
        component: () => import('@/views/pages/Products.vue'),
    }
]; 

export default routes;