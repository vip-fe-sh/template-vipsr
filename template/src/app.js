import Vue from 'vue';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import router from './router/index';
import { addClass, parsePath } from './utils/filters';
import App from './components/App';

require('./styles/app.scss');

// open debug mode in dev mode
/* eslint-disable no-undef */
if (__DEV__) {
  Vue.config.debug = true;
}

// use vue-resource to request data
Vue.use(VueResource);

// add vue filter
Vue.filter('addClass', addClass);
Vue.filter('parsePath', parsePath);

sync(store, router);

router.start(App, '#app');
