<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field solo @keyup="fetchResults" v-model="search">
          <template v-slot:append>
            <v-icon>fa-search</v-icon>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-card>
      <v-row>
        <v-col v-for="result in results" :key="result.id" cols="3">
          <v-row>
            <v-col cols="12" align="center">
              <span>
                <v-img
                  lazy-src="../assets/logo.png"
                  width="100%"
                  class="rounded-lg"
                  max-width="300px"
                  :src="randomPicture(result.item)"
                />
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="itemText"
              ><span class="result">{{ result.item }}</span></v-col
            >
          </v-row>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row align="center">
        <v-col cols="12"
          ><span class="resultCount">{{ resultsCount }} result</span></v-col
        >
      </v-row>
    </v-card>
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

.result {
  font-weight: bold;
}

.resultCount {
  font-weight: bold;
}

.v-text-field {
  text-align: center;
  font-weight: bold;
}
</style>
