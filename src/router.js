import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import NewEndpoint from "./views/NewEndpoint.vue";
import Endpoints from "@/views/Endpoints.vue";
import Signup from "@/views/Signup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/endpoints",
      component: Endpoints,
      meta: {
        protected: true
      }
    },
    {
      path: "/endpoints/new",
      component: NewEndpoint,
      meta: {
        protected: true
      }
    },
    {
      path: "/signup",
      component: Signup // why isn't protected working?
    }
  ]
});
