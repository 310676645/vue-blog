/**
 * Created by songjd on 17/3/1.
 */

const home = [
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
      }
    ]
  }
]
export default home
