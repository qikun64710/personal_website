import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/index'
//第三方库
import _ from 'lodash' 
Vue.use( _ )
// //全局组件
import GL_Component from './utils/globalComponents'
Vue.use(GL_Component);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
