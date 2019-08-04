import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * @title 每个页面的 title
 * @requireAuth 是否登录后才能访问
 * @wechatCustom 是否自定义微信分享的内容
 */
const routes = [
  {
    path: '/:pageId',
    props: true,
    component: () => import('./view.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
