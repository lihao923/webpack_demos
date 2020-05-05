import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// const root = document.createElement('div');
// document.body.appendChild(root);
//
// new Vue({
//   render : (h) => h(App)
// }).$mount(root);
