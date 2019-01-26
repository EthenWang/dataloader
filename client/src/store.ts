import Vue from 'vue';
import Vuex from 'vuex';
import * as _ from 'lodash';
import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { Screen, ScreenObjectModel, ScreenResponse, Translation, Message,
  ObjectProps, ScreenChildObjectModel, TranslationResponse, MessageResponse } from '@/models';
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
    translation: {
      metaData: new Array<Translation>(),
      selected: {} as Translation
    },
    messages: {
      metaData: new Array<Message>(),
      selected: {} as Message
    }
  },
  getters: {
    getState: state => (payload: ActionPayload) => {
      if (!payload) return null;
      const value = _.get(state, `${payload.module}.${payload.path}`);
      if (value) return value;
      switch (payload.type) {
        case 'checkbox': return false;
        default:
          switch (payload.format) {
            case 'string': return '';
            case 'number': return 0;
          }
      }
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
    get({ commit }, payload: ActionPayload) {
      switch (payload.module) {
        case 'translation': 
          {
            let p = {} as AxiosPromise<TranslationResponse>;
            switch (payload.cls) {
              case 'code':
                p = axios.get(`/api/translation/code/${payload.value}`);
                break;
              case 'text':
                p = axios.get(`/api/translation/text/${payload.value}`);
                break;
            }
            if (p) {
              p.then(({ data }: AxiosResponse<TranslationResponse>) => {
                if (!data) return;
                commit('setState', {
                  module: 'translation',
                  path: 'metaData',
                  value: data
                });
              });
            }
          }
          break;
        case 'messages':
          {
            let p = {} as AxiosPromise<MessageResponse>;
            switch (payload.cls) {
              case 'code':
                p = axios.get(`/api/messages/code/${payload.value}`);
                break;
              case 'text':
                p = axios.get(`/api/messages/text/${payload.value}`);
                break;
            }
            if (p) {
              p.then(({ data }: AxiosResponse<MessageResponse>) => {
                if (!data) return;
                commit('setState', {
                  module: 'messages',
                  path: 'metaData',
                  value: data
                });
              });
            }
          }
          break;
        case 'screen':
          if (payload.cls === 'screenname') {
            axios.get(`/api/screen/${payload.value}`)
            .then(({ data: { dsscreen } }: AxiosResponse<ScreenResponse>) => {
              if (!dsscreen) return;
              commit('setState', {
                module: 'screen',
                path: 'metaData',
                value: {
                  screeninfo: dsscreen.ttscreen[0],
                  screenobject: dsscreen.ttscreenobj.map(obj => {
                    const eventList = obj.objprocessresponse.toLowerCase();
                    obj.eventchoose = eventList.includes('choose');
                    obj.eventclick = eventList.includes('click');
                    obj.eventleave = eventList.includes('leave');
                    obj.evententry = eventList.includes('entry');
                    obj.eventdblclick = eventList.includes('dbl_click');
                    obj.eventvaluechange = eventList.includes('value_changed');
                    obj.eventplus = eventList.includes('plus');
                    obj.eventrowleave = eventList.includes('rowleave');
                    obj.eventupdown = eventList.includes('updown');
                    return obj;
                  }),
                  screenchildobject: dsscreen.ttscreenchildobj
                }
              });
            });
          }
          break;
      }
    }
  },
});
