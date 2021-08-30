import Vue from 'vue'
import i18n from "./i18n"
import App from './App.vue'
import router from "@/router/router";

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

Vue.use(ElementUi)

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount('#app')
