/**
 * Created by songjd on 17/2/28.
 */

import config from '@config/index'

class Utils {
  static setStorage (key, value) {
    if (!key || !value) return false
    window.localStorage.setItem(config.prefix + key, value)
    return true
  }

  static removeStorage (key) {
    if (!key) return false
    window.localStorage.removeItem(config.prefix + key)
    return true
  }

  static getStorage (key) {
    if (!key) return ''
    return window.localStorage.getItem(config.prefix + key)
  }

  static dateFormat (date, fmt = 'yyyy-MM-dd') {
    let dateTypeof = typeof date
    if (!date) return ''
    if (dateTypeof === 'number') {
      date = new Date(date * 1000)
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
  }
}
export default Utils
