<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <img src="./assets/logo.svg" alt="CoAP.cloud logo">
      </div>
      <nav class="nav">
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
      </nav>
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

export default {
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
}

.logo {
  margin: 15px 0 15px 10px;
  width: 35px;
}

.logo img {
  display: block;
}

/* Navigation */
.nav {
  margin: 15px 10px 15px 0;
  align-self: center;
}

.nav ul {
  padding: 0;
  margin: 0;
}

.nav ul li {
  display: inline;
  margin: 0;
  padding: 0;
  margin-right: 10px;
}

.nav ul li a {
  font-weight: bold;
  color: #2c3e50;
}

.nav ul li a.router-link-exact-active {
  color: #654ff0;
}

.nav li:last-child {
  margin: 0;
}

/* end Navigation */

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