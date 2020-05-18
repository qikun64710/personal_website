import vue from 'vue'
import vueRouter  from 'vue-router'
vue.use(vueRouter )
import Home from '../view/home'
import blog from '../blog/index'
const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog/javascript',
      name:'jsDetaile',
      component: blog
    }
  ]
  
  const router = new vueRouter ({
    mode:'history',
    routes
  })
  
  export default router