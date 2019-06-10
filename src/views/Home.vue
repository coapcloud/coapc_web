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