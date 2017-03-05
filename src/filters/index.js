/**
 * Created by songjd on 2017/3/5.
 */
let filters = {}
import utils from '@libs/utils'
filters.install = (Vue) => {
  Vue.filter('dateFormat', utils.dateFormat)
}
export default filters
