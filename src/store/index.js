import Vue from 'vue'
import Vuex from 'vuex'

import { Api } from '../api/api.js';

Vue.use(Vuex)

const api = new Api();

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProductList(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    fetchProductList() {
      api.getProductList().then(res => {
        this.commit('setProductList', res);
      })
    }
  }
})
