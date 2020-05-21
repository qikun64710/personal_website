import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
import headNav from '../headNav/headNav.vue'
const routes = [
    {
      path: '/',
      component: headNav
    },
  ]
  
  const router = new vueRouter ({
    mode:'history',
    routes
  })
  
  export default router