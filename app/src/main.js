import Vue from 'vue'
import VueRouter from 'vue-router'

// Import CSS
import './static/css/photon/css/photon.min.css'
import './static/css/flexboxgrid.min.css'
import './static/css/vex/vex.css'
import './static/css/vex/vex-theme-os.css'
import './static/css/ionic/css/ionicons.min.css'

// Import components
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: App}
]

const router = new VueRouter({routes})

new Vue({
  router
}).$mount('#app')
