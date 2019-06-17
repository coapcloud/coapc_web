<template>
  <HomePublic v-if="!authenticated"/>
  <div v-else>
    <h1>Logged in</h1>
    <transition-group tag="ul">
      <li v-for="doc in documents" v-bind:key="doc.id">
        <span>{{doc.foo}}</span>
      </li>
    </transition-group>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePublic from "@/views/HomePublic.vue";

import { db } from "@/db";

export default {
  name: "home",
  components: {
    HomePublic
  },
  data: function() {
    return {
      profileURL: "",
      documents: []
    };
  },
  firestore: {
    documents: db.collection("sample")
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