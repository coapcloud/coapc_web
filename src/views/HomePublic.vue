<template>
  <v-container fluid fill-height v-if="!authenticated">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <h1>CoAP.cloud</h1>
        <span>CoAP.cloud is a serverless solution for CoAP, the developer-friendly IoT protocol.</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "home-public",
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>

<style>
</style>