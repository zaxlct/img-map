import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


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
