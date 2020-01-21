import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    fetchProductList({ commit }) {
      fetch('https://api.myjson.com/bins/ubt22', {
        method: "GET",
        headers: new Headers(),
        mode: "cors",
        cache: "default"
      }).then(res => {
        return res.json();
      }).then(data => {
        commit('setProductList', data.products);
      });
    }
  }
})
