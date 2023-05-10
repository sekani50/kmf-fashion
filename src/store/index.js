/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    selectedCategory: null,
    moreDetails:null
  },

  actions: {
    updateCategory({ commit }, cat) {
      commit("UPDATE_CATEGORY", cat);
      console.log(cat)
    },
    updateDetails({commit}, details) {
      commit("UPDATE_DETAILS", details);
  },
},
  mutations: {
    UPDATE_CATEGORY(state, cat) {
      state.selectedCategory = cat;
    },
    UPDATE_DETAILS(state, details) {
      state.moreDetails = details;
    }

  },
  getters: {
    getACategory: (state) => state.selectedCategory,
    getDetails: (state) => state.moreDetails
  },
  modules: {},
});
