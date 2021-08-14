import Vue from 'vue'
import i18n from "./i18n"
import App from './App.vue'
import router from "@/router/router";
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUi)

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount('#app')
