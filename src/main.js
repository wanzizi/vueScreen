import Vue from 'vue'
import App from './App.vue'
import router from './router'

import inject from 'Plugins/inject.js'
import Ajax from 'Plugins/axios.js'
import GlobalComponets from 'Components/public/index'

Vue.use(inject)
Vue.use(GlobalComponets)

Vue.config.productionTip = false

// 大屏配置注册
Ajax({
  method: 'get',
  url: '/api/management/project/getScreenByProjectId',
  params: {
    projectId: '1100570651998461953' // 如果有项目id的填写项目id
  }
}).then(result => {
  Vue.prototype.$base.generalConfig = result.data || {}

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})
