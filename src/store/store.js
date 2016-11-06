import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import HelloModule from './modules/hello_module'
import EditorModule from './modules/editor_module'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    message: ''
  },
  modules: {
    hello: HelloModule,
    editor: EditorModule
  }
})

export default Store
