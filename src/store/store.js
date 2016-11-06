import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import HelloModule from './modules/hello_module.js'
import EditorModule from './modules/editor_module.js'
import PDFModule from './modules/pdf_engine_module.js'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    message: ''
  },
  modules: {
    hello: HelloModule,
    editor: EditorModule,
    pdf: PDFModule
  }
})

export default Store
