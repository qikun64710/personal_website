import Vue from 'vue'
import App from './App.vue'
import router from './components/router/index'
import ElementUI from 'element-ui';
import vueQuillEditor from 'vue-quill-editor' // 引入富文本工具
import 'element-ui/lib/theme-chalk/index.css'
import request from './components/request/http'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
Vue.prototype.$request = request

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueQuillEditor)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
