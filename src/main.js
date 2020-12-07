import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$CELL_SIZE = 32

Vue.prototype.$DIRECTION_UP_LEFT = 1
Vue.prototype.$DIRECTION_UP = 2
Vue.prototype.$DIRECTION_UP_RIGHT = 3
Vue.prototype.$DIRECTION_RIGHT = 4
Vue.prototype.$DIRECTION_DOWN_RIGHT = 5
Vue.prototype.$DIRECTION_DOWN = 6
Vue.prototype.$DIRECTION_DOWN_LEFT = 7
Vue.prototype.$DIRECTION_LEFT = 8

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
