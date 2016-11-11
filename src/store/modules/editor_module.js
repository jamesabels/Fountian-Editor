const EditorModule = {
  state: {
    current_value: '',
    preview_status: false,
    scenes: [
      {scene_number: 1, scene_heading: 'EXT. BRICKS POOL - DAY', body: 'Steel, in the middle of a heated phone call:'},
      {scene_number: 2, scene_heading: 'EXT. BRICKS POOL - NIGHT', body: 'STEEL Theyre coming out of the woodwork!'}
    ],
    active_scene: 0
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
    SET_ACTIVE_SCENE (state, payload) {
      state.active_scene = payload.value
    }
  },
  actions: {
    GET_EDITOR_VALUE (context, payload) {
        context.commit('CURRENT_VALUE', payload)
    },
    UPDATE_EDITOR (context, payload) {
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
        scene_heading: '',
        body: ''
      }

      scene.scene_number = state.scenes.length + 1
      scene.scene_heading = payload.scene_heading
      scene.body = payload.body

      commit('ADD_SCENE', scene)
    },
    SET_ACTIVE_SCENE (context, payload) {
      context.commit('SET_ACTIVE_SCENE', payload)
    }
  }

}

export default EditorModule
