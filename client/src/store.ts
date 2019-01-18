import Vue from 'vue';
import Vuex from 'vuex';
import { Screen, Translation, Message } from '@/models';
import * as _ from 'lodash';
import axios from 'axios';
import { ObjectProps } from '@/models';
import * as VueCookies from 'vue-cookies';

Vue.use(Vuex);

interface ActionPayload extends ObjectProps {
  value: string
}

export default new Vuex.Store({
  state: {
    serverUrl: 'localhost:5050',
    screen: {} as Screen,
    translations: new Array<Translation>(),
    messages: new Array<Message>()
  },
  mutations: {
    setScreenModel(state, payload: ActionPayload) {
      state.screen = _.set({ ...state.screen }, payload.model, payload.value);
    }
  },
  actions: {
    search({ commit, state }, payload: ActionPayload) {
      if (!payload) return;
      /*switch (payload.type) {
        case 'label':
          axios.post(`${state.serverUrl}/screen/${payload.value}`);
          break;
      }*/
      debugger;
      axios.post(`${state.serverUrl}/screen/${payload.value}`);
    }
  },
});
