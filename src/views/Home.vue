<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field label="name" v-model="name"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="position" v-model="position"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="url" v-model="url"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn class="primary" @click="save()">Save</v-btn>
        </v-col>
        <v-col cols="12">
          <v-img :src="url"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const firebase = require("../firebaseConfig.js");

export default {
  name: "Home",
  data() {
    return {
      name: "",
      position: "",
      url: "",
      id: ""
    };
  },
  methods: {
    save() {
      firebase.firestore
        .collection("personal_information")
        .doc(this.id)
        .update({
          name: this.name,
          position: this.position,
          url: this.url
        });
    }
  },
  mounted() {
    firebase.firestore.collection("personal_information").onSnapshot(
      snapshot => {
        let listResults = [];
        snapshot.forEach(result => {
          (this.id = result.id), (this.name = result.data().name);
          this.position = result.data().position;
          this.url = result.data().url;
        });
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>
