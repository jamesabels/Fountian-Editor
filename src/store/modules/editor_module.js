const EditorModule = {
  state: {
    current_value: '',
    preview_status: false,
    index_status: false
  },
  mutations: {
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
    INIT_EDITOR ({state}, payload) {
      document.querySelector(payload.el).value = ''
      document.querySelector(payload.el).value = payload.value
    },
    UPDATE_PREVIEW ({commit, state}, payload) {
        console.log(payload.el)
        let Editor = document.querySelector(payload.el)
        Editor.innerHTML = ''
        Editor.innerHTML = payload.value
    },
    UPDATE_PREVIEW_STATE (context, payload) {
      context.commit('PREVIEW_STATE', payload)
    }
  }
}

export default EditorModule
