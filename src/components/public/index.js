import Vue from 'vue'
import Notice from './myNotice/index.js'

// 所有项目的基础组件，脱离业务的通用组件
const publicComponents = ['frame/main.vue', 'commonLoad/main.vue', 'myNotice/main.vue']

const components = publicComponents.map((t) => {
  var str = require('./' + t)
  return str.default
})

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

// 特殊组件单独注册
Vue.prototype.$Notice = Notice

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default {
  version: '1.2.7',
  install,
  ...components
}
