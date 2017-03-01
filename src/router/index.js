import Vue from 'vue'
import Router from 'vue-router'
import admin from './modules/admin'

Vue.use(Router)

export default new Router({
  routes: [
    ...admin
  ]
})
