import Vue from 'vue'
import App from './App.vue'
import vuetify from '../../plugins/vuetify';

import VueRouter from 'vue-router'
Vue.use(VueRouter)



import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
