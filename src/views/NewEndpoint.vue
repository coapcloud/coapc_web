<template>
  <div class="new-endpoint">
    <form v-on:submit.prevent>
      <div>
        <label for="subdomain">Subdomain:</label>
        <input v-model="subdomain" placeholder="jberi" id="subdomain" name="subdomain">
      </div>
      <div>
        <label for="function">Function:</label>
        <input v-model="funct" placeholder="12345" id="function" name="function">
      </div>
      <div>
        <label for="path">Path:</label>
        <input v-model="path" placeholder="/foo" id="path" name="path">
      </div>
      <button @click="addNewEndpoint()">Add</button>
    </form>
  </div>
</template>
<script>
import { db } from "@/db";

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
  }
};
</script>