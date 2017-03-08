/**
 * Created by songjd on 2017/3/7.
 */

const ARTICLE = [
  {
    path: 'article/details/:articleId',
    name: 'articleDetails',
    component: (reslove) => {
      require(['@views/home/article/details.vue'], reslove)
    }
  }
]

export default ARTICLE
