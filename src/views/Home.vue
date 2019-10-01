<template>
  <HomePublic v-if="!authenticated" />
  <Endpoints v-else />
</template>

<script>
import HomePublic from "@/components/HomePublic.vue";
import Endpoints from "@/components/Endpoints.vue";

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