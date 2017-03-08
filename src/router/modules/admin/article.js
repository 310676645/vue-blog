/**
 * Created by songjd on 17/3/3.
 */

const ARTICLE = [
  {
    path: '/',
    redirect: {
      name: 'article'
    }
  },
  {
    path: 'article',
    name: 'article',
    component: (reslove) => {
      require(['@views/admin/article/index.vue'], reslove)
    }
  },
  {
    path: 'article/add',
    name: 'articleAdd',
    component: (reslove) => {
      require(['@views/admin/article/add.vue'], reslove)
    }
  },
  {
    path: 'article/edit/:articleId',
    name: 'articleEdit',
    component: (reslove) => {
      require(['@views/admin/article/edit.vue'], reslove)
    }
  }
]

export default ARTICLE
