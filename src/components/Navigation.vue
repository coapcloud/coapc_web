<template>
  <v-app-bar app>
    <router-link to="/">
      <v-img src="@/assets/logo.svg" height="38" width="38" contain></v-img>
    </router-link>
    <v-toolbar-title class="text-uppercase">CoAP.cloud</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/new" v-if="authenticated" text rounded>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn to="/login" v-if="!authenticated" text rounded>Login</v-btn>
      <v-btn to="/logout" v-else text rounded>Logout</v-btn>
    </v-toolbar-items>
    <v-avatar color="indigo">
      <v-icon v-if="!authenticated" dark>mdi-account-circle</v-icon>
      <img :src="profileURL" v-else />
    </v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      authenticated: false,
      profileURL: ""
    };
  },
  created: function() {
    var self = this;
    self.authenticated = localStorage.getItem("authenticated");
    self.profileURL = localStorage.getItem("profileURL");
  }
};
</script>

<style>
.v-toolbar__title {
  margin-left: 0.5em;
  font-weight: 300;
  font-size: 21px;
  position: relative;
  top: 1px;
}
</style>
