// Import libs
import fountain from '../../../static/js/fountain.js'

const EditorModule = {
  state: {
    parsed_script: {
        title: '',
        html: {
            script: '',
            title_page: ''
        },
        tokens: []
    },
    current_value: '',
    preview_status: false
  },
  mutations: {
    PARSED_SCRIPT (state, payload) {
        console.log('MUTATOR PAYLOAD ', payload)
        state.parsed_script.title = payload.value.title
        state.parsed_script.html.script = payload.value.html.script
        state.parsed_script.html.title_page = payload.value.html.title_page
        state.parsed_script.tokens = payload.value.tokens
    },
    CURRENT_VALUE (state, payload) {
        state.current_value = payload.value
    },
    PREVIEW_STATE (state, payload) {
        state.preview_state = payload.value
    }
  },
  actions: {
    GET_EDITOR_VALUE (context, payload) {
        context.commit('CURRENT_VALUE', payload)
    },
    PARSE_FOUNTAIN (context, payload) {
        let tempState = {
            title: '',
            html: {
                script: '',
                title_page: ''
            },
            tokens: []
        }

        let str = payload.value

        console.log('STRING INPUT ', str)

        fountain.parse(str, true, function (output) {
            console.log('FOUNTAIN OUTPUT', output)
            tempState.title = output.title
            tempState.html.script = output.html.script
            tempState.html.title_page = output.html.title_page
            tempState.tokens = output.tokens
        })

        // let scriptOutput = {}

        console.log('PAYLOAD ', payload.value)
        console.log('PARSED SCRIPT OUTPUT', tempState)

        context.commit('PARSED_SCRIPT', {value: tempState})
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
