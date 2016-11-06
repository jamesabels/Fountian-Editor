// Import libs
import MediumEditor from 'medium-editor'
import fountain from '../../../static/js/fountain.js'

const EditorModule = {
  state: {
    message: 'Hello',
    parsed_script: {
        html: {
            script: {}
        }
    },
    current_value: '',
    preview_status: false
  },
  mutations: {
    PARSED_SCRIPT (state, payload) {
        state.parsed_script = payload.value
    },
    CURRENT_VALUE (state, payload) {
        state.current_value = payload.value
    },
    PREVIEW_STATE (state, payload) {
        state.preview_state = payload.value
    }
  },
  actions: {
    INIT_EDITOR (context, editorOptions) {
      let Editor = document.querySelector('#medium')
      console.log('Editor Initialized')

      if (editorOptions !== undefined) {
          new MediumEditor(Editor, editorOptions)
      }
    },
    GET_EDITOR_VALUE (context, payload) {
        context.commit('CURRENT_VALUE', payload)
    },
    PARSE_FOUNTAIN (context, payload) {
        // let scriptOutput = {}

        // console.log('PAYLOAD TOKENS', payload.value)

        // fountain.parse(payload.value, true, function (output) {
        //     console.log('CALLBACK TOKENS', output.tokens)
        //     scriptOutput.html = output.html.script
        // })

        // console.log('PARSED SCRIPT OUTPUT', scriptOutput)

        context.commit('PARSED_SCRIPT', {value: fountain.parse(payload.value)})
    },
    UPDATE_EDITOR (context, payload) {
        console.log(payload.el)
        let Editor = document.querySelector(payload.el)
        Editor.innerHTML = ''
        Editor.innerHTML = payload.value
    }
  },
  UPDATE_PREVIEW_STATE: function (context, payload) {
      context.commit('PREVIEW_STATE', payload)
  }
}

export default EditorModule
