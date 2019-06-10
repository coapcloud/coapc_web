<template>
  <section v-if="!authenticated" class="home">
    <h1>CoAP.cloud</h1>
    <span>CoAP.cloud is a serverless solution for CoAP, the developer-friendly IoT protocol.</span>
  </section>
</template>

<script>
export default {
  name: "home-public",
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>

<style>
.home {
  margin: 0 25px 0 25px;
}
</style>