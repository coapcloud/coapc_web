<template>
  <div v-if="authenticated">
    <h1>My Endpoints</h1>
    <ul>
      <li v-for="endpoint in endpoints" v-bind:key="endpoint.id">
        <div>Subdomain: {{endpoint.subdomain}}, Function: {{endpoint.function}}, Path: {{endpoint.path}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { db } from "@/db";

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
