import { getEnglishNumerals } from 'Plugins/util.js'

// 全局过滤器

// 每三个数字加一个逗号的过滤器
let changeToEnglishFormat = value => {
  return getEnglishNumerals(value)
}

export { changeToEnglishFormat }
