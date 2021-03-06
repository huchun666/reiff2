import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex: -1,
    currentChildIndex: -1,
    currentIndexFooter: -1,
  },
  mutations: {
    setCurrentIndex(state, payload) {
      state.currentIndex = payload
    },
    setCurrentChildIndex(state, payload) {
      state.currentChildIndex = payload
    },
    setCurrentIndexFooter(state, payload) {
      state.currentIndexFooter = payload
    },
  },
  actions: {
  },
  modules: {
  },
});
