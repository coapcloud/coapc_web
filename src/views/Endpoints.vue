<template>
  <v-container fluid fill-height v-if="authenticated">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <h1>My Endpoints</h1>
        <ul>
          <li v-for="endpoint in endpoints" v-bind:key="endpoint.id">
            <div>Subdomain: {{endpoint.subdomain}}, Function: {{endpoint.function}}, Path: {{endpoint.path}}</div>
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { db } from "@/plugins/firebase/db";

export default {
  name: "endpoints",
  data: function() {
    return {
      endpoints: []
    };
  },
  firestore() {
    return {
      endpoints: db
        .collection("endpoints")
        .where("owner", "==", localStorage.uid)
    };
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>
