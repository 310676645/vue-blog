/**
 * Created by songjd on 17/2/28.
 */

import Utils from './utils'
class Login {
  static isLogin () {
    return Utils.getStorage('token')
  }
  static success (token) {
    token && Utils.setStorage('token', token)
  }
  static outLogin () {
    Utils.removeStorage('token')
  }
}

export default Login
