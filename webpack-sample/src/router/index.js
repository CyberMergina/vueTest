import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/top',
      name: 'top',
      component: Top
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
