<template>
  <HomePublic v-if="!authenticated"/>
  <span v-else>Logged in</span>
</template>

<script>
// @ is an alias to /src
import HomePublic from "@/views/HomePublic.vue";

export default {
  name: "home",
  components: {
    HomePublic
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