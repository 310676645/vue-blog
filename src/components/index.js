/**
 * Created by songjd on 2017/3/9.
 */

import placeholderText from './placeholder-text.vue'
const components = {}
components.install = (Vue) => {
  Vue.component('placeholder-text', placeholderText)
}
export default components
