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
  },
  {
    path: 'category/add',
    name: 'categoryAdd',
    component: (reslove) => {
      require(['@views/admin/category/add.vue'], reslove)
    }
  },
  {
    path: 'category/edit/:categoryId',
    name: 'categoryEdit',
    component: (reslove) => {
      require(['@views/admin/category/edit.vue'], reslove)
    }
  }
]

export default CATEGORY
