import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import EditorModule from './modules/editor_module.js'
import PDFModule from './modules/pdf_engine_module.js'
import FountainModule from './modules/fountain_module.js'
import FSModule from './modules/file_system_module.js'
import ModalModule from './modules/modal_module.js'
import SceneModule from './modules/scene_module.js'
import PageModule from './modules/page_module.js'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    debug: true
  },
  modules: {
    files: FSModule,
    pdf: PDFModule,
    script: FountainModule,
    modals: ModalModule,
    scenes: SceneModule,
    pages: PageModule,
    editor: EditorModule
  }
})

export default Store
