import Vue from 'vue';
import Vuex from 'vuex';
import { Screen, ScreenInfo, ScreenObject, ScreenChildObject, Translation, Message } from '@/models';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screens: new Array<Screen>(),
    translations: new Array<Translation>(),
    messages: new Array<Message>()
  },
  mutations: {

  },
  actions: {

  },
});
