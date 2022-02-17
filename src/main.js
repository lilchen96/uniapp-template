import Vue from 'vue'
import App from './App'
import store from './store'
import api from './api'
import message from './components/message'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$api = api;
Vue.prototype.$message = message;

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()