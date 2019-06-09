import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from "firebase";
import { firebaseConfig } from "./firebase";

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (!to.meta.protected) { //route is public, don't check for authentication
    next()
  } else {  //route is protected, if authenticated, proceed. Else, login
    let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next()
      } else {
        router.push('/login')
      }
    })
    unsubscribe()
  }
})
new Vue({
  router,
  created() {
    firebase.initializeApp(firebaseConfig)
  },
  render: h => h(App)
}).$mount('#app')