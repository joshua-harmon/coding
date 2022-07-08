import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: () =>
          import(/* webpackChunkName: "About" */ "./views/About"),
    },
    {
      path: "/html5",
      name: "Html5",
      component: () =>
          import(/* webpackChunkName: "Html5" */ "./views/Html5"),
    },
    {
      path: "/javascript",
      name: "Javascript",
      component: () =>
          import(/* webpackChunkName: "Javascript" */ "./views/Javascript"),
    },
    {
      path: "/staticPages",
      name: "StaticPages",
      component: () =>
          import(/* webpackChunkName: "StaticPages" */ "./views/StaticPages"),
    },
    {
      path: "/java",
      name: "Java",
      component: () =>
          import(/* webpackChunkName: "Java" */ "./views/Java"),
    },
    {
      path: "/python",
      name: "Python",
      component: () =>
          import(/* webpackChunkName: "Python" */ "./views/Python"),
    }, 
    {
      path: "/mrePython",
      name: "MrePython",
      component: () =>
          import(/* webpackChunkName: "MrePython" */ "./views/MrePython"),
    },
    {
      path: "/verilog",
      name: "Verilog",
      component: () =>
          import(/* webpackChunkName: "Verilog" */ "./views/Verilog"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () =>
          import(/* webpackChunkName: "Contact" */ "./views/Contact"),
    },
    {
      path: "/success",
      name: "Success",
      component: () =>
          import(/* webpackChunkName: "Success" */ "./views/Success"),
    },
    {
      path: "/404",
      alias: "*",
      name: "NotFound",
      component: () =>
          import(/* webpackChunkName: "NotFound" */ "./views/NotFound"),
    }
  ]
});

export default router;
