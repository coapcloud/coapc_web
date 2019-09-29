<template>
  <v-container fluid fill-height v-if="authenticated">
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-list min-width="480px">
            <v-subheader>My Endpoints</v-subheader>
            <v-list-item-group v-model="item">
              <v-list-item three-line v-for="endpoint in endpoints" v-bind:key="endpoint.id">
                <v-list-item-content>
                  <v-list-item-title>{{endpoint.path}}</v-list-item-title>
                  <v-list-item-subtitle>{{endpoint.subdomain}}.coap.cloud</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="endpoint.source">
                    <code>{{endpoint.source}}</code>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
      </v-col>
    </v-row>
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
