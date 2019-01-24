import Vue from 'vue'
import App from './App.vue'
import router from './router'

import inject from 'Plugins/inject.js'
import GlobalComponets from 'Components/public/index'

Vue.use(inject)
Vue.use(GlobalComponets)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
