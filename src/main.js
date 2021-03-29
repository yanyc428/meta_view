import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';

import router from './route.config'

Vue.use(ElementUI)
Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')