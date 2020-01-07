import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        url: 'https://eduardoorbeaterra.files.wordpress.com/2015/01/big_mac.png',
        title: 'Hamburger',
        price: 10,
        discount: false
      },
      {
        url: 'https://cdn130.picsart.com/303652795392211.png?r1024x1024',
        title: 'Donut',
        price: 12,
        discount: false
      },
      {
        url: 'https://cdn130.picsart.com/303652795392211.png?r1024x1024',
        title: 'Donut',
        price: 12,
        discount: false
      },
      {
        url: 'https://cdn.pixabay.com/photo/2016/12/05/10/07/dish-1883501_960_720.png',
        title: 'Salad',
        price: 12,
        discount: true
      },
      {
        url: 'https://cdn130.picsart.com/303652795392211.png?r1024x1024',
        title: 'Donut',
        price: 12,
        discount: false
      }
    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
