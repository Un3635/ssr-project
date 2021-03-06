import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/h',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/about',
      name: 'About',
      component: resolve => require(['@/components/about'], resolve)
    }
  ]
})
