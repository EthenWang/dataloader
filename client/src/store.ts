import Vue from 'vue';
import Vuex from 'vuex';
import { Screen, Translation, Message } from '@/models';
import * as _ from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screen: {} as Screen,
    translations: new Array<Translation>(),
    messages: new Array<Message>()
  },
  mutations: {
    setScreenModel(state, payload: {
      path: string,
      type: string,
      value: string | boolean | number | null
    }) {
      state.screen = _.set( { ...state.screen }, payload.path, payload.value);
    }
  },
  actions: {

  },
});
