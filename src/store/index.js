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
    currentCategories: null,
    allProducts: null,
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
  },
  
  updateallProducts({commit}, products) {
    commit('UPDATE_ALL_PRODUCTS', products);
    console.log(products)
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
    },
    UPDATE_ALL_PRODUCTS(state, products) {
      state.allProducts = products;
    }

  },
  getters: {
    getACategory: (state) => state.selectedCategory,
    getDetails: (state) => state.moreDetails,
    getCurrent: (state) => state.currentCategories,
    getEdit: (state) => state.editCat,
    getProducts: (state) => state.allProducts
  },
  modules: {},
});
