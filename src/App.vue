<template>
  <v-app>
    <Navigation />

    <v-content>
      <router-view />
    </v-content>

    <v-footer>
      <v-flex text-center xs12>
        &copy; {{ new Date().getFullYear() }} —
        <strong>made with ❤ & udp</strong>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>
