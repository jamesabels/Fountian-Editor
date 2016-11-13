import Vue from 'vue'
import VueRouter from 'vue-router'
import VueDragAndDropList from 'vue-drag-and-drop-list'

// Import components
import App from './App.vue'
import Error from './components/404.vue'

Vue.use(VueRouter)
Vue.use(VueDragAndDropList)

const routes = [
  {path: '/', component: App},
  {path: '/404', component: Error}
]

const router = new VueRouter({routes})

new Vue({
  router
}).$mount('#app')
