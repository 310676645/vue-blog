/**
 * Created by songjd on 17/3/1.
 */

const CATEGORY = [
  {
    path: '/',
    beforeEnter (to, form, next) {
      next({
        name: 'adminCategory'
      })
    }
  },
  {
    path: 'category',
    name: 'adminCategory',
    component: (reslove) => {
      require(['@views/admin/category/index.vue'], reslove)
    }
  }
]

export default CATEGORY
