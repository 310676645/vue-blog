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
}
export default Utils
