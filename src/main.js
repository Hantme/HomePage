import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'

var vueResource = require('vue-resource')
Vue.use(vueResource)
Vue.component(Button.name, Button)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)

})
