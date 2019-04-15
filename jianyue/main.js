import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.apiServer='http://localhost:8080/api'

import graceHeader from "./graceUI/components/graceHeader.vue";
Vue.component('graceHeader', graceHeader);

import screenTextScroll from './components/screenTextScroll.vue'  
Vue.component('textscroll',screenTextScroll)  

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
