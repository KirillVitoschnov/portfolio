import Vue from 'vue'
//import i18n from "./i18n"
import App from './App.vue'
import router from "@/router/router";
import vuetify from '@/plugins/vuetify' // path to vuetify export
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
