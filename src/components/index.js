/**
 * Created by songjd on 2017/3/9.
 */

import placeholderText from './placeholder-text.vue'
import header from './header.vue'
const components = {}
components.install = (Vue) => {
  Vue.component('md-placeholder-text', placeholderText)
  Vue.component('md-header', header)
}
export default components
