const EditorModule = {
  state: {
    current_value: '',
    preview_status: false,
    scenes: [],
    active_scene: 1
  },
  mutations: {
    CURRENT_VALUE (state, payload) {
        state.current_value = payload.value
    },
    PREVIEW_STATE (state, payload) {
        state.preview_state = payload.value
    },
    ADD_SCENE (state, payload) {
      state.scenes.push(payload)
    },
    UPDATE_SCENE (state, payload) {
      console.log('UPDATING EDITOR PAYLOAD ', payload)
      state.scenes[payload.scene_index].scene = payload.scene
    },
    SET_ACTIVE_SCENE (state, payload) {
      state.active_scene = payload.value
    }
  },
  actions: {
    GET_EDITOR_VALUE (context, payload) {
        context.commit('CURRENT_VALUE', payload)
    },
    INIT_EDITOR ({state}, payload) {
      document.querySelector(payload.el).value = ''
      document.querySelector(payload.el).value = payload.value
      document.querySelector(payload.el).focus()
    },
    UPDATE_PREVIEW ({commit, state}, payload) {
        console.log(payload.el)
        let Editor = document.querySelector(payload.el)
        Editor.innerHTML = ''
        Editor.innerHTML = payload.value
    },
    UPDATE_PREVIEW_STATE (context, payload) {
      context.commit('PREVIEW_STATE', payload)
    },
    ADD_SCENE ({commit, state}, payload) {
      let scene = {
        scene_number: null,
        scene_index: null,
        scene_name: '',
        scene_desc: '',
        scene: ''
      }

      scene.scene_number = state.scenes.length + 1
      scene.scene_index = state.scenes.length
      scene.scene_name = payload.scene_name
      scene.scene_desc = payload.scene_desc
      scene.scene = payload.scene

      commit('ADD_SCENE', scene)
    },
    UPDATE_SCENE ({commit, state}, payload) {
      let scene = {
        scene_index: 0,
        scene_name: '',
        scene_desc: '',
        scene: ''
      }

      scene.scene_number = payload.scene_index + 1
      scene.scene_index = payload.scene_index
      scene.scene_name = payload.scene_name
      scene.scene_desc = payload.scene_desc
      scene.scene = payload.scene

      commit('UPDATE_SCENE', scene)
    },
    SET_ACTIVE_SCENE (context, payload) {
      document.querySelector(payload.el).focus()
      context.commit('SET_ACTIVE_SCENE', payload)
    }
  }

}

export default EditorModule
