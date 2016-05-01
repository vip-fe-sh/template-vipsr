import Vue from 'vue';
import store from '../../vuex/store';

export default Vue.extend({
  store,
  template: require('./index.html'),
  replace: false,
  vuex: {
    getters: {
      path: state => state.route.path
    }
  }
});
