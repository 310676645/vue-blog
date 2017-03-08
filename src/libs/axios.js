/**
 * Created by songjd on 17/2/28.
 */

import axios from 'axios'
import config from '@config/index'
import Utils from '@libs/utils'
import ElementUI from 'element-ui'
axios.install = (Vue) => {
  axios.defaults.baseURL = config.apiRoot
  let loadingInstance
  axios.interceptors.request.use(function (config) {
    let method = config.method
    if (config.module && config.module === 'admin') {
      if (method === 'get') {
        config.params || (config.params = {})
        config.params['user_token'] = Utils.getStorage('token')
      }
      if (config.method === 'post' || config.method === 'delete' || config.method === 'put') {
        config.data || (config.data = {})
        config.data['user_token'] = Utils.getStorage('token')
      }
    }
    loadingInstance = ElementUI.Loading.service({ fullscreen: true })
    return config
  }, function (error) {
    loadingInstance.close()
    return Promise.reject({
      code: 1,
      msg: error,
      data: {}
    })
  })
  axios.interceptors.response.use(function (response) {
    loadingInstance.close()
    let data = response.data
    if (data.code === 100001) {
      window.location.href = window.location.origin + '/#/admin/login'
      return Promise.reject(data)
    }
    if (data.code === 0) {
      return Promise.resolve(data)
    } else {
      return Promise.reject(data)
    }
  }, function (error) {
    loadingInstance.close()
    ElementUI.Message({
      showClose: true,
      message: error.toString(),
      type: 'error'
    })
    return Promise.reject({
      code: 1,
      msg: error,
      data: {}
    })
  })
  Vue.prototype.$axios = axios
}
export default axios
