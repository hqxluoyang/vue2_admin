// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './routers'
import store from './vuex/store'
import FastClick from 'fastclick'
import localforage from 'localforage'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
console.log('Strings must use singlequote:', localforage)
window.addEventListener('load', () => {
  FastClick.attach(document.body)
})

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({routes: routerConfig})

console.log('router bb:', router.go)
//router.go(1)
router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

console.log(router)
//router.go(1)
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})

