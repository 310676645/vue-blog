/**
 * Created by songjd on 17/3/1.
 */

import article from './article'
const HOME = [
  {
    path: '/home',
    name: 'home',
    component: (reslove) => {
      require(['@views/home/base.vue'], reslove)
    },
    children: [
      {
        path: '/',
        component: (reslove) => {
          require(['@views/home/index/index.vue'], reslove)
        }
      },
      ...article
    ]
  }
]
export default HOME
