import Vue from 'vue'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

import utils from './utils'
Vue.prototype.$util = utils

Vue.component('douyu-search-block', require('./components/douyu/search').default);

// 定义实例
const app = new Vue({
    store
}).$mount('#app')
