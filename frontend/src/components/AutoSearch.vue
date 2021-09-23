<template>
  <v-container fill-height>
    <v-row align="center">
      <v-col cols="12">
        <v-text-field
        
        ></v-text-field>test
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AutoSearch",
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

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
