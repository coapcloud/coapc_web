<template>
  <div>
    <span>Logging out . . .</span>
  </div>
</template>
<script>
import firebase from "firebase";
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
        window.location.href = "/";
      });
  }
};
</script>