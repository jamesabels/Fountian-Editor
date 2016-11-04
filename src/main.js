import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuikit from 'vuikit'

// Import components
import App from './App'
import Error from './components/404'

Vue.use(VueRouter)
Vue.use(Vuikit)

const routes = [
  {path: '/', component: App},
  {path: '/404', component: Error}
]

const router = new VueRouter({routes})

new Vue({
  router
}).$mount('#app')
