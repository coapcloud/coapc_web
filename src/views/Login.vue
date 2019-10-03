<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div id="firebaseui-auth-container"></div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";
import { firebaseConfig } from "@/plugins/firebase/firebase";
import { db } from "@/plugins/firebase/db";
import router from "@/router.js";

import "@/../node_modules/firebaseui/dist/firebaseui.css";

export default {
  mounted() {
    let self = this;
    let uiConfig = {
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
        }
      ],
      callbacks: {
        signInSuccessWithAuthResult(authResult) {
          localStorage.setItem("displayName", authResult.user.displayName);
          localStorage.setItem("profileURL", authResult.user.photoURL);
          localStorage.setItem("uid", authResult.user.uid);
          localStorage.setItem("authenticated", true);

          const usersRef = db.collection("users").doc(authResult.user.uid);

          usersRef.get().then(docSnapshot => {
            if (!docSnapshot.exists) {
              router.push("/signup");
            } else {
              router.push("/");
            }
          });
        }
      }
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>