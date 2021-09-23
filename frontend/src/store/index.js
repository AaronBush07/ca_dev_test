import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: [],
    localLoading: false,
    loadingMessage: "Loading... Please wait",
  },
  mutations: {
    updateSearchResults(state, payload) {
      state.results = payload;
    },
    updateLoading(state, payload) {
      state.localLoading = payload;
      state.loadingMessage = "Loading... Please wait";
    },
  },
  actions: {
    async fetchSearchResults({ commit }, search) {
      commit("updateLoading", true);
      axios
        .request({
          url: `http://localhost:3000/items/`,
          method: "get",
          params: { search },
        })
        .then((response) => {
          commit("updateSearchResults", response.data);
          commit("updateLoading", false);
        })
        .catch(() => {
          console.log("Server error");
          commit("updateLoading", false);
        });
    },
  },
});
