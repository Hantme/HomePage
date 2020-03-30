import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'

Vue.use(Element)
Vue.component(Button.name, Button)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)

})
