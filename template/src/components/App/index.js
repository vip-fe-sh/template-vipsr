import Vue from 'vue';
import store from '../../vuex/store';

export default Vue.extend({
  store,
  template: require('./index.html'),
  vuex: {
    getters: {
      title: state => state.title,
      path: state => state.route.path
    }
  }
});
