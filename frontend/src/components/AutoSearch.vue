<template>
  <v-container fill-height>
    <v-row align="center">
      <v-col cols="12">
        <v-text-field
        solo
          append-icon="fa-search"
          @keyup="fetchResults"
          v-model="search"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="result in results" :key="result.id" cols="3">
        <div class="box">
          <span class="picture"><img :src="randomPicture(result.item)" alt="Test"></span>
          <span>{{formatText(result.item)}}</span>
        
        </div>
      </v-col>
    </v-row>
    <v-row align="center"
      ><v-col cols="12">{{ resultsCount }} result</v-col></v-row
    >
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AutoSearch",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState({
      results: "results",
      localLoading: "localLoading",
      loadingMessage: "loadingMessage",
    }),
    resultsCount() {
      return this.results.length;
    },
  },
  methods: {
    fetchResults() {
      if (String(this.search).trim() !== "") {
        this.$store.dispatch("fetchSearchResults", this.search);
      } else
      {
        this.$store.dispatch("clearSearch")
      }
    },
    formatText(text) {
      if (text.length > 10)
        return text.substr(0,7).padEnd(10, '...')
      else return text
    },
    randomPicture(text) {
      let seed = text.trim()
      return `https://picsum.photos/seed/${seed}/100/100`
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.picture {
  height:"100";
  border: "solid black 1";
  width:"100";

}

</style>
