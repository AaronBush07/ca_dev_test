<template>
  <v-container fill-height>
    <v-row align="center">
      <v-col cols="12">
        <v-text-field
          solo
          align="center"
          append-icon="fa-search"
          @keyup="fetchResults"
          v-model="search"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row align="left">
      <v-col v-for="result in results" :key="result.id" cols="3">
        <v-row>
          <v-col cols="12">
            <span class="picture"
              >
              <v-img
                lazy-src="../assets/logo.png"
                width="100%"
                :src="randomPicture(result.item)"
              />
              </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="itemText"
            ><span>{{ result.item }}</span></v-col>
        </v-row>
      </v-col>
      <v-spacer/>
    </v-row>
    <v-row align="center">
      <v-col cols="12">{{ resultsCount }} result</v-col>
    </v-row>
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
      } else {
        this.$store.dispatch("clearSearch");
      }
    },
    randomPicture(text) {
      let seed = text.trim();
      return `https://picsum.photos/seed/${seed}/200/200`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemText {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
