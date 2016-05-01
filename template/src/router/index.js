import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello';
import Bye from '../components/Bye';

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
  '/hello': {
    component: Hello
  },
  '/bye': {
    component: Bye
  }
});

export default router;
