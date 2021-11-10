const Module = () => import("./Module.vue");
const Home = () => import("./views/Home.vue");

const moduleRoute = {
  path: "/products",
  component: Module,
  children: [
    {
      path: "/",
      component: Home
    },

    {
      path: ":id",
      component: Home
    }
  ]
};

export default (router) => {
    router.addRoute(moduleRoute);
};

