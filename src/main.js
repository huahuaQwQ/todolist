import Vue from 'vue'
import App from './App.vue'
//引入
import 'normalize.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
