import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {

  },
  strict: true,
  plugins: [createLogger()]
})
