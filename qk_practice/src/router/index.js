import vue from 'vue'
import vueRouter  from 'vue-router'
vue.use(vueRouter )
import Home from '../view/home'
const routes = [
    {
      path: '/',
      component: Home
    }
  ]
  
  const router = new vueRouter ({
    mode:'history',
    routes
  })
  
  export default router