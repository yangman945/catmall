import Vue from 'vue'
import Vuex from 'vuex'
import cart from './module/cart.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart //购物车模块
  },
});