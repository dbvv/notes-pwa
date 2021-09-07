import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
  theme: {
    dark: localStorage.getItem('setting.theme') === 'dark' ? true : false,
    light: localStorage.getItem('setting.theme') === 'light' ? true : false,
  }
};

export default new Vuetify(opts)
