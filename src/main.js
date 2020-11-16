import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import Cookies from 'js-cookie'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import './styles/element-variables.scss'
// import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import store from './store'
import router from './router'

import './permission' // permission control

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})

Vue.config.productionTip = false
// Vue.prototype.$axios = axios
// Vue.prototype.HOST = '/api' //当跨域请求HOST时，会请求'/api'所指向的域名


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
