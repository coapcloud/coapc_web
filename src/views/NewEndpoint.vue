<template>
  <v-container fluid fill-height v-if="authenticated">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <form v-on:submit.prevent>
          <div>
            <label for="subdomain">Subdomain:</label>
            <input v-model="subdomain" placeholder="jberi" id="subdomain" name="subdomain" />
          </div>
          <div>
            <label for="function">Function:</label>
            <input v-model="funct" placeholder="12345" id="function" name="function" />
          </div>
          <div>
            <label for="path">Path:</label>
            <input v-model="path" placeholder="/foo" id="path" name="path" />
          </div>
          <button @click="addNewEndpoint()">Add</button>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { db } from "@/plugins/firebase/db";

export default {
  data: function() {
    return {
      subdomain: "",
      funct: "",
      path: ""
    };
  },
  methods: {
    addNewEndpoint: function() {
      db.collection("endpoints").add({
        subdomain: this.subdomain,
        function: this.funct,
        path: this.path,
        owner: localStorage.uid
      });
    }
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>