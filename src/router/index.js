import Vue from 'vue'
import Router from 'vue-router'
import admin from './modules/admin/index'
import home from './modules/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    ...admin,
    ...home
  ]
})
