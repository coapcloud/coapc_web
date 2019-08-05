<template>
  <HomePublic v-if="!authenticated" />
  <Endpoints v-else />
</template>

<script>
import HomePublic from "@/views/HomePublic.vue";
import Endpoints from "@/views/Endpoints.vue";

import { db } from "@/plugins/firebase/db";

export default {
  name: "home",
  components: {
    HomePublic,
    Endpoints
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