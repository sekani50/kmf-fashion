/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    selectedCategory: null,
  },

  actions: {
    updateCategory({ commit }, cat) {
      commit("UPDATE_CATEGORY", cat);
      console.log(cat)
    },
  },
  mutations: {
    UPDATE_CATEGORY(state, cat) {
      state.selectedCategory = cat;
    },
  },
  getters: {
    getACategory: (state) => state.selectedCategory,
  },
  modules: {},
});
