import Vue from 'vue'
import Router from 'vue-router'
import monitor from 'Views/monitor.vue'
import traffic from 'Views/traffic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/realtime',
      name: 'REALTIME',
      component: monitor
    }, {
      path: '/traffic',
      name: 'TRAFFIC',
      component: traffic
    }
  ]
})
