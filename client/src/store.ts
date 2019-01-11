import Vue from 'vue';
import Vuex from 'vuex';
import { Screen, Translation, Message } from '@/models';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screen: {},
    translations: new Array<Translation>(),
    messages: new Array<Message>()
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
});
