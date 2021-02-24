import Vue from 'vue'
import App from './write_blog.vue'
import vuetify from '../../plugins/vuetify';

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')