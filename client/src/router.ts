import Vue from 'vue';
import Router from 'vue-router';
import DataControl from '@/components/DataControl.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'default',
      component: DataControl,
      props: {
        module: 'screen'
      }
    },
    {
      path: '/screen',
      name: 'screen',
      component: DataControl,
      props: {
        module: 'screen'
      }
    },
    {
      path: '/translation',
      name: 'translation',
      component: DataControl,
      props: {
        module: 'translation'
      }
    },
    {
      path: '/messages',
      name: 'messages',
      component: DataControl,
      props: {
        module: 'messages'
      }
    },
  ],
});
