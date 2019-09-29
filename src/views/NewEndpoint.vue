<template>
  <v-container fluid fill-height v-if="authenticated">
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-card min-width="480px">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Add new endpoint</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="subdomain" label="Subdomain" required></v-text-field>
                <v-text-field v-model="func" label="Function" required></v-text-field>
                <v-text-field v-model="path" label="Path" required></v-text-field>
                <v-textarea v-model="source" label="Source Code" required></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="addNewEndpoint" color="primary">submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { db } from "@/plugins/firebase/db";
import router from "@/router.js";

export default {
  data: function() {
    return {
      subdomain: "",
      func: "",
      path: ""
    };
  },
  methods: {
    addNewEndpoint: function() {
      db.collection("endpoints").add({
        subdomain: this.subdomain,
        function: this.func,
        path: this.path,
        owner: localStorage.uid,
        source: this.source
      });
      router.push("/");
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>