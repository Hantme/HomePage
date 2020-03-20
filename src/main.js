import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import {Icon} from 'element-ui'

var vueResource = require('vue-resource')
Vue.use(vueResource)
Vue.use(Icon)
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)

})
