import Vue from 'vue'
import Vuex from 'vuex'
import moduleSettings from './moduleSettings';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorized: false,
  },
  mutations: {
    authorize(state) {
      state.authorized = true;
    }
  },
  actions: {
    authorize(context) {
      context.commit('authorize');
    },
  },
  modules: {
    moduleSettings,
  }
})
