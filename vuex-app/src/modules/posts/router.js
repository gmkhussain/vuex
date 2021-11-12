const Module = () => import("./Module.vue");
const Posts = () => import("./views/Posts.vue");

const moduleRoute = {
    path: '/posts',
    component: Module,
    children: [
        {
            path: '/posts',
            component: Posts
        }
    ]
};

export default( router ) => {
    router.addRoute(moduleRoute);
};
