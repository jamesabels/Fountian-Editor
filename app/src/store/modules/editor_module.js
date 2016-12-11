const EditorModule = {
  state: {
    current_value: '',
    editor_status: 'index-cards',
    previous_status: 'preview'
  },
  mutations: {
    CURRENT_VALUE (state, payload) {
        state.current_value = payload.value
    },
    EDITOR_STATE (state, payload) {
      state.editor_status = payload.value
      state.previous_status = payload.previous
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
        console.log("PREVIEW, EL", payload.el)
        console.log('PAYLOAD VALUE ', payload.value)
        let Editor = document.querySelector(payload.el)
        Editor.innerHTML = ''
        Editor.innerHTML = payload.value
    },
    CHANGE_EDITOR_STATE (context, payload) {
      context.commit('EDITOR_STATE', payload)
    }
  }
}

export default EditorModule
