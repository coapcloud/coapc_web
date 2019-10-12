import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (!to.meta.protected) {
    //route is public, don't check for authentication
    next();
  } else {
    //route is protected, if authenticated, proceed. Else, login
    let unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next();
      } else {
        router.push("/login");
      }
    });
    unsubscribe();
  }
});
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
