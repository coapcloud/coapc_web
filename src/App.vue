<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <router-link to="/">
          <img src="./assets/logo.svg" alt="CoAP.cloud logo">
        </router-link>
        <span class="logo-label">CoAP.cloud</span>
      </div>
      <Navigation/>
      <!-- <nav class="nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/login" v-if="!authenticated">Login</router-link>
            <router-link to="/logout" v-else>Logout</router-link>
          </li>
        </ul>
      </nav>-->
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <span>made with ❤ & udp</span>
    </footer>
  </div>
</template>
<script>
import "modern-normalize/modern-normalize.css";
import Navigation from "@/views/Navigation.vue";

export default {
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #dddddd;
}

.logo {
  margin: 15px 0 15px 10px;
  display: flex;
  align-items: center;
}

.logo img {
  display: block;
  width: 35px;
  margin-right: 10px;
}

.main {
  flex-grow: 1;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer span {
  margin: 15px 0 15px 0;
}
</style>