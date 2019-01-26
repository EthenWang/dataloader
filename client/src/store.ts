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
      switch (payload.cls) {
        case 'label':
          axios.get(`/api/translation/${payload.value}`);
          break;
        case 'message':
          axios.get(`/api/messages/${payload.value}`);
          break;
        case 'screen':
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
            })
            .catch(error => {
              console.log(error);
            });
          break;
      }
    }
  },
});
