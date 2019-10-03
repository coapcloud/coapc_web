<template>
  <v-container fill-height>
    <v-card min-width="480px" class="mx-auto">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Welcome! Pick your sub-domain</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="subdomain" label="Subdomain" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="addNewUser" color="primary">submit</v-btn>
        <v-btn @click="reset">clear</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import { db } from "@/plugins/firebase/db";
import router from "@/router.js";

export default {
  data: function() {
    return {
      subdomain: ""
    };
  },
  methods: {
    addNewUser: function() {
      db.collection("users")
        .doc(localStorage.getItem("uid"))
        .set({
          subdomain: this.subdomain
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
