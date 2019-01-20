import Vue from 'vue';
import Vuex from 'vuex';
import * as _ from 'lodash';
import axios, { AxiosResponse } from 'axios';
import { Screen, ScreenObjectModel, ScreenResponse, Translation, Message,
  ObjectProps, ScreenChildObjectModel } from '@/models';
import * as VueCookies from 'vue-cookies';

Vue.use(Vuex);

interface ActionPayload extends ObjectProps {
  value: any
}

export default new Vuex.Store({
  state: {
    screen: {
      metaData: {} as Screen,
      selectedObject: {} as ScreenObjectModel,
      selectedChildObject: {} as ScreenChildObjectModel
    },
    translation: new Array<Translation>(),
    message: new Array<Message>()
  },
  getters: {
    getState: state => (payload: ActionPayload) => {
      if (!payload) return null;
      return _.get(state, `${payload.module}.${payload.path}`);
    }
  },
  mutations: {
    setState(state, payload: ActionPayload) {
      if (payload.module && payload.path) {
        const newState = _.set({ ..._.get(state, payload.module) }, payload.path, payload.value);
        _.set(state, payload.module, newState);
      }
    }
  },
  actions: {
    search({ commit, state }, payload: ActionPayload) {
      if (!payload || payload.type !== 'search') return;
      switch (payload.cls) {
        case 'label':
          axios.get(`/api/translation/searchcode/${payload.value}`);
          break;
        case 'message':
          axios.get(`/api/messages/searchcode/${payload.value}`);
          break;
        case 'screenname':
          axios.get(`/api/screen/searchcode/${payload.value}`);
          break;
      }
    },
    get({ commit }, payload: ActionPayload) {
      switch (payload.cls) {
        case 'label':
          axios.get(`/api/translation/${payload.value}`);
          break;
        case 'message':
          axios.get(`/api/messages/${payload.value}`);
          break;
        case 'screenname':
          axios.get(`/api/screen/${payload.value}`)
            .then(({ data: { dsscreen } }: AxiosResponse<ScreenResponse>) => {
              if (!dsscreen) return;
              commit('setState', {
                module: 'screen',
                path: 'metaData',
                value: {
                  screeninfo: dsscreen.ttscreen[0],
                  screenobject: dsscreen.ttscreenobj,
                  screenchildobject: dsscreen.ttscreenchildobj
                }
              });
            })
            .catch(error => {
              console.log(error);
            });
          break;
      }
    }
  },
});
