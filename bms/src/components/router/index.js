import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
// import headNav from '../headNav/headNav.vue'
import mainAreas from '../mainAreas/main-areas.vue'
import home from '../home/home.vue'
const routes = [
    {
      path: '/',
      component: mainAreas,
      name:'首页',
      children:[
        {
          path:'',
          component:home
        }

      ]
    },
  ]
  
  const router = new vueRouter ({
    mode:'history',
    routes
  })
  
  export default router