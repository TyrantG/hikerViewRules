import Vue from 'vue'
import store from './store'
// element ui
require('./components/element-ui')

Vue.config.productionTip = false

// Quill
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
/*import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'*/
Vue.use(VueQuillEditor)

// axios
import axios from 'axios'
Vue.prototype.$http = axios

import utils from './utils'
Vue.prototype.$util = utils

// Vue.prototype.$eventBus = new Vue()

// http拦截器
import httpInterceptor from './api/http.interceptor'
Vue.use(httpInterceptor)

// api列表
Vue.prototype.$api = {}
import api from './api/index'
Vue.use(api)

// Vue.component('form-builder', require('./components/FormBuilder').default);

// 定义实例
const app = new Vue({
    store
}).$mount('#app')
