<template>
  <HomePublic v-if="!authenticated"/>
  <Endpoints v-else/>
</template>

<script>
import HomePublic from "@/views/HomePublic.vue";
import Endpoints from "@/views/Endpoints.vue";

import { db } from "@/db";

export default {
  name: "home",
  components: {
    HomePublic,
    Endpoints
  },
  data: function() {
    return {
      profileURL: ""
    };
  },
  mounted() {
    if (localStorage.profileURL) {
      this.profileURL = localStorage.profileURL;
    }
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>

<style>
</style>