import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import Add from '@/views/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home
    },
    {
      path: '/users',
      // name: 'users',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Users // () => import(/* webpackChunkName: "users" */ './views/Users.vue')
    },
    {
      path: '/add',
      component: Add
    }
  ]
})
