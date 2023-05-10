/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    selectedCategory: null,
    moreDetails:null,
    currentCategories: null
  },

  actions: {
    updateCategory({ commit }, cat) {
      commit("UPDATE_CATEGORY", cat);
      console.log(cat)
    },
    updateDetails({commit}, details) {
      commit("UPDATE_DETAILS", details);
  },
  updateCurrent({commit}, current) {
    commit("UPDATE_CURRENT", current);
    //console.log(current)
  },
  editCategory({commit}, category) {
      commit('EDIT_CATEGORY', category);
  }
},
  mutations: {
    UPDATE_CATEGORY(state, cat) {
      state.selectedCategory = cat;
    },
    UPDATE_DETAILS(state, details) {
      state.moreDetails = details;
    }
    ,
    UPDATE_CURRENT(state, current) {
      state.currentCategories = current;
    },
    EDIT_CATEGORY(state, category) {
      state.editCat = category
    }

  },
  getters: {
    getACategory: (state) => state.selectedCategory,
    getDetails: (state) => state.moreDetails,
    getCurrent: (state) => state.currentCategories,
    getEdit: (state) => state.editCat
  },
  modules: {},
});
