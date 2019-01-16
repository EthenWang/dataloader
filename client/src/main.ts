import '@babel/polyfill';
import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import VueCookies from 'vue-cookies';
import router from './router';
import store from './store';
import './registerServiceWorker';
import * as _ from 'lodash';

Vue.config.productionTip = false;
Vue.prototype.$_ = _;
Vue.use(Antd);
Vue.use(VueCookies);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
