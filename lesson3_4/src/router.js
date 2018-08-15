import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/views/Home.vue'
// import Users from '@/views/Users.vue'
// import Add from '@/views/Add.vue'
// import Edit from '@/views/Edit.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      // name: 'home',
      component: () => import('@/views/Home.vue') // Home
    },
    {
      path: '/users',
      // name: 'users',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Users.vue'), // Users
      meta: { requiresAuth: true }
    },
    {
      path: '/edit/:id',
      component: () => import('@/views/Edit.vue'), // Edit
      meta: { requiresAuth: true }
    },
    {
      path: '/add',
      component: () => import('@/views/Add.vue'), // Add
      meta: { requiresAuth: true }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if ('123' !== test) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath } // return path
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // always use `next()` in the else clause
//   }
// })

export default router
