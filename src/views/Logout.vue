<template>
  <div>
    <span>Logging out . . .</span>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  mounted() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("authenticated");
        localStorage.removeItem("profileURL");
        localStorage.removeItem("displayName");
        localStorage.removeItem("uid");
        localStorage.removeItem("subdomain");
        window.location.href = "/";
      });
  }
};
</script>