<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/login" v-if="!authenticated">Login</router-link>
        <router-link to="/logout" v-else>Logout</router-link>
      </li>
      <li>
        <img :src="profileURL" v-if="profileURL" class="profilePic">
      </li>
    </ul>
  </nav>
</template>
<script>
import "modern-normalize/modern-normalize.css";

export default {
  name: "Navigation",
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

.profilePic {
  width: 32px;
  border-radius: 100%;
}
</style>