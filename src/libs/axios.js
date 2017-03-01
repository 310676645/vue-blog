/**
 * Created by songjd on 17/2/28.
 */

import axios from 'axios'
import config from '@config/index'
import ElementUI from 'element-ui'
axios.install = (Vue) => {
  axios.defaults.baseURL = config.apiRoot
  let loadingInstance
  axios.interceptors.request.use(function (config) {
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
