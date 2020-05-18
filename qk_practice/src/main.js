import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/indexImg'
import axios from 'axios'
import VueAxios from 'vue-axios'
import request from './request/http'
Vue.use(VueAxios,axios);
Vue.prototype.$request = request
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
