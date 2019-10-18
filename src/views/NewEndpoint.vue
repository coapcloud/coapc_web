<template>
  <v-container fluid fill-height v-if="authenticated">
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-card min-width="480px">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Add new endpoint</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form">
                <v-text-field v-model="func" label="Function" required></v-text-field>
                <v-text-field v-model="path" label="Path" required></v-text-field>
                <v-checkbox v-model="allMethods" label="All Methods" readonly></v-checkbox>
                <v-textarea v-model="source" label="Source Code" required v-if="allMethods"></v-textarea>
                <!-- <template v-for="method in methods" v-if="!allMethods">
                  <v-checkbox :label="method.name" v-bind:key="method.name"></v-checkbox>
                  <v-textarea
                    :label="method.name + ' Source Code'"
                    v-bind:key="method.name + '-src'"
                  ></v-textarea>
                </template>-->
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="createNewEndpoint" color="primary">submit</v-btn>
              <v-btn @click="reset">clear</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { db, storage } from "@/plugins/firebase/db";
import router from "@/router.js";

export default {
  data: function() {
    return {
      func: "",
      path: "",
      source: "",
      allMethods: true,
      methods: [
        { name: "GET" },
        { name: "POST" },
        { name: "PUT" },
        { name: "DELETE" }
      ]
    };
  },
  methods: {
    createNewEndpoint: function() {
      const query = db
        .collection("endpoints")
        .where("subdomain", "==", localStorage.subdomain)
        .where("path", "==", this.path);

      const subdomainRef = storage.ref(localStorage.subdomain);
      subdomainRef
        .child(this.path + "/all/source.go")
        .putString(this.source)
        .then(function(snapshot) {
          console.log("Uploaded a raw string!");
          console.log(snapshot);
        });

      // localStorage.setItem("source", this.source);

      query
        .get()
        .then(doc => {
          if (doc.empty) {
            console.log("unique path");
            db.collection("endpoints")
              .add({
                subdomain: localStorage.subdomain,
                function: this.func,
                path: this.path,
                owner: localStorage.uid,
                source: this.source
              })
              .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                router.push("/endpoints");
              })
              .catch(function(error) {
                console.error("Error adding document: ", error);
              });
          } else {
            console.log("path taken");
            this.reset();
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("authenticated"));
    }
  }
};
</script>