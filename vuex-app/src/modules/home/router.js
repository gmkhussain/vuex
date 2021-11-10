const Module = () => import("./Module.vue");
const Home = () => import("./views/Home.vue");

const moduleRoute = {
  path: "/",
  component: Module,
  children: [
    {
      path: "/home",
      component: Home
    },
    {
        path: "/about",
        component: () => import("./views/About.vue")
    }
  ]
};
console.log(moduleRoute)

export default (router) => {
    router.addRoute(moduleRoute);
};