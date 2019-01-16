import Vue, { VNode } from 'vue';
import _ from 'lodash';
import VueCookies from 'vue-cookies';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface Vue {
    $_: _.LoDashStatic,
    $cookies: VueCookies.VueCookies,
  }
}
