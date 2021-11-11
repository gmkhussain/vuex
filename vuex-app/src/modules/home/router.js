// const Module = () => import("./Module.vue");
const Home = () => import("./views/Home.vue");

const moduleRoute = {
  path: "/",
  //component: Module,
  component: Home, //<-- Default View
  children: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("./views/Page404.vue"),
    }
  ]
};

console.log(moduleRoute)

export default (router) => {
    router.addRoute(moduleRoute);
};