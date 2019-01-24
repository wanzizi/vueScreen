import axios from './axios'
import base from './config'
import * as filters from './filters'

export default {
  install: (Vue, options) => {
    // ajax
    Vue.prototype.$ajax = axios
    // config
    Vue.prototype.$base = base

    // 全局过滤器，不是通用过滤器，即业务强关联的不要全局注册，哪里用到哪里注册
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}
