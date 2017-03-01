/**
 * Created by songjd on 17/3/1.
 */

import Login from '@libs/login'
import CATEGORY from './category'

const ADMIN = [
  {
    path: '/admin',
    name: 'admin',
    component: (reslove) => {
      require(['@views/admin/index.vue'], reslove)
    },
    beforeEnter: (to, from, next) => {
      if (Login.isLogin()) {
        next()
      } else {
        next({
          name: 'adminLogin'
        })
      }
    },
    children: [
      ...CATEGORY
    ]
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: (reslove) => {
      require(['@views/admin/login/index.vue'], reslove)
    },
    beforeEnter: (to, from, next) => {
      if (!Login.isLogin()) {
        next()
      } else {
        next({
          name: 'admin'
        })
      }
    }
  }
]
export default ADMIN
