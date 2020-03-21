import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import {Icon} from 'element-ui'

Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)

})
