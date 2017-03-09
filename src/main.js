import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'animate.css/animate.min.css'
import '@assets/sass/app.scss'
import axios from '@libs/axios'
import filters from '@/filters'
import components from '@/components'

Vue.use(ElementUI)
Vue.use(axios)
Vue.use(filters)
Vue.use(components)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
