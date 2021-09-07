import Vue from 'vue'
import Vuex from 'vuex'

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
  }
})
