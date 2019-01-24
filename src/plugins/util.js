import Ajax from './axios'

// 英文数字格式
/**
 *
 * @param {number/string} num 数字字符串或者数字之外的类型返回0，其他转译为英文数字格式
 */
export function getEnglishNumerals (num) {
  if (isNaN(parseFloat(num))) {
    return 0
  } else {
    return parseFloat(num).toLocaleString()
  }
}

// 获取服务器时间
/**
 *
 * @param {boolean} isForceFresh 是否强制刷新，一般这个请求之后，除非重新加载页面不再继续请求，加了这个就重新请求接口
 */
export async function getSystemTime (isForceFresh) {
  let data = await Ajax({
    method: 'get',
    url: '/api/analysis/sysTime'
  })
  return data.data
}

/**
 *
 * @param {*} vm vue实例，用于挂载全局变量
 */
export function getLastMonth (vm) {
  return new Promise(function (resolve, reject) {
    if (vm.$base.lastMonth) {
      resolve(vm.$base.lastMonth)
    } else {
      getSystemTime().then(result => {
        let month = (new Date(result)).getMonth()
        let trueMonth = month === 0 ? 12 : month
        vm.$base.lastMonth = trueMonth
        resolve(trueMonth)
      })
    }
  })
}

/**
 *
 * @param {*} vm vue实例，用于挂载全局变量
 */
export function getLastYear (vm) {
  return new Promise(function (resolve, reject) {
    if (vm.$base.lastYear) {
      resolve(vm.$base.lastYear)
    } else {
      getSystemTime().then(result => {
        let lastYear = (new Date(result)).getFullYear() - 1
        vm.$base.lastYear = lastYear
        resolve(lastYear)
      })
    }
  })
}

// 创建uuid
let seed = 0
export function getUuid () {
  return `uuid_${new Date().getTime()}_${++seed}`
}
