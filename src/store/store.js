import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import EditorModule from './modules/editor_module.js'
import PDFModule from './modules/pdf_engine_module.js'
import FountainModule from './modules/fountain_module.js'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {},
  modules: {
    editor: EditorModule,
    pdf: PDFModule,
    script: FountainModule
  }
})

export default Store
