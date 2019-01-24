
/**
 * 简单字典
 */
let boolType = [
  {
    key: 'Y',
    value: '是'
  },
  {
    key: 'N',
    value: '否'
  }
]

let dict = {
  boolType
}

/**
 *根据code查询
 返回所有的字段
 * @param {*} code
 */
export function getListByCode (code) {
  return new Promise(function (resolve, reject) {
    if (!localStorage.getItem(code)) {
      window.ajax({
        method: 'post',
        url: '/dictionary/queryChildrenByParentCode',
        data: {
          code: code
        }
      }).then(result => {
        localStorage.setItem(code, JSON.stringify(result.data))
        resolve(result.data)
      }).catch(error => {
        reject(error)
      })
    } else {
      resolve(JSON.parse(localStorage.getItem(code)))
    }
  })
}
/**
 * 简单版只返回name和code
 */
export function getLIstByCodeSimple (code) {
  return new Promise(function (resolve, reject) {
    getListByCode(code).then(data => {
      let array = data.map(t => {
        return {
          name: t.name,
          code: t.code
        }
      })
      resolve(array)
    })
  })
}

export function getValueByName (dic, key) {
  if (dict[dic]) {
    let data = dict[dic].filter((t) => {
      return t.key === key
    })
    if (data.length === 0) {
      console.error('不存在key:' + key)
    } else {
      return data[0].value
    }
  } else {
    console.error('不存在dic:' + dic)
  }
}
export function getNameByValue (dic, value) {
  if (dict[dic]) {
    let data = dict[dic].filter((t) => {
      return t.value === value
    })
    if (data.length === 0) {
      console.error('不存在value:' + value)
    } else {
      return data[0].key
    }
  } else {
    console.error('不存在dic:' + dic)
  }
}

export function getStatusList (dic) {
  if (dict[dic]) {
    return dict[dic]
  } else {
    console.error('不存在dic:' + dic)
  }
}
