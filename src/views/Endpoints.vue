<template>
  <v-container fill-height v-if="authenticated">
    <v-list min-width="480px" class="mx-auto">
      <v-subheader>My Endpoints</v-subheader>
      <v-list-item-group>
        <v-list-item two-line v-for="endpoint in endpoints" v-bind:key="endpoint.id">
          <v-list-item-content>
            <v-list-item-title>
              <span class="font-weight-thin">{{endpoint.subdomain + ".coap.cloud"}}</span>
              {{endpoint.path}}
            </v-list-item-title>
            <v-list-item-subtitle v-if="endpoint.source">
              <code>{{endpoint.source}}</code>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
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
        .where("subdomain", "==", localStorage.subdomain)
    };
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>
