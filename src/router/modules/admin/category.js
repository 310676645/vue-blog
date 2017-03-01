/**
 * Created by songjd on 17/3/1.
 */

const CATEGORY = [
  {
    path: 'category',
    name: 'adminCategory',
    component: (reslove) => {
      require(['@views/admin/category/index.vue'], reslove)
    }
  }
]

export default CATEGORY
