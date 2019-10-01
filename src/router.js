import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import NewEndpoint from './views/NewEndpoint.vue'

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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/new',
      component: NewEndpoint,
      meta: {
        protected: true
      }
    },
  ]
});
