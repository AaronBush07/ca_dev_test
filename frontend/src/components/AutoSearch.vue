<template>
  <v-container fill-height>
    <v-row align="center">
      <v-col cols="12">
        <v-text-field
          append-icon="fa-search"
          @keyup="fetchResults"
          v-model="search"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row></v-row>
    <v-row align="center"><v-col cols="12">{{resultsCount}} result</v-col></v-row>
  </v-container>
</template>

<script>
import {  mapState } from "vuex";
export default {
  name: "AutoSearch",
  data() {
    return {
      search: ""
    }
  },
  computed: {
    ...mapState({
      results: "results",
      localLoading: "localLoading",
      loadingMessage: "loadingMessage",
    }),
    resultsCount () {
      return this.results.length;
    },
  },
  methods: {
    fetchResults() {
     if(String(this.search).trim()!== ""){
      this.$store.dispatch("fetchSearchResults", this.search);
     }
   },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
