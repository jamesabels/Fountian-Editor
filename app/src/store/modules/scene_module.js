const SceneModule = {
    state: {
        scenes: [],
        active_scene: 1,
        active_toggle: false,
        script: ''
    },
    mutations: {
        // ADD_SCENE (state, payload) {
        //     state.scenes.push(payload)
        // },
        // UPDATE_SCENE (state, payload) {
        //     console.log('UPDATING EDITOR PAYLOAD ', payload)
        //     state.scenes[payload.scene_index].scene = payload.scene
        // },
        // // SET_ACTIVE_SCENE (state, payload) {
        // //     state.active_scene = payload.value
        // // },
        // SET_COMBINED_SCRIPT (state, payload) {
        //     state.script = payload.value
        // }
    },
    actions: {
        // ADD_SCENE ({commit, state}, payload) {
        //     let scene = {
        //         scene_number: null,
        //         scene_index: null,
        //         scene_name: '',
        //         scene_desc: '',
        //         scene: ''
        //     }

        //     scene.scene_number = state.scenes.length + 1
        //     scene.scene_index = state.scenes.length
        //     scene.scene_name = payload.scene_name
        //     scene.scene_desc = payload.scene_desc
        //     scene.scene = payload.scene

        //     commit('ADD_SCENE', scene)
        // },
        // UPDATE_SCENE ({commit, state}, payload) {
        //     let scene = {
        //         scene_number: null,
        //         scene_index: 0,
        //         scene_name: '',
        //         scene_desc: '',
        //         scene: ''
        //     }

        //     scene.scene_number = payload.scene_index + 1
        //     scene.scene_index = payload.scene_index
        //     scene.scene_name = payload.scene_name
        //     scene.scene_desc = payload.scene_desc
        //     scene.scene = payload.scene

        //     commit('UPDATE_SCENE', scene)
        // },
        // // SET_ACTIVE_SCENE (context, payload) {
        // //     context.commit('SET_ACTIVE_SCENE', payload)
        // // },
        // HIGHLIGHT_ACTIVE_SCENE ({commit, state}, payload) {
        //     switch (state.active_toggle) {
        //         case true:
        //             var x = document.querySelectorAll('.scene-list-item');
        //             for (let i = 0; i < x.length; i++) {
        //                 x[i].classList.remove('scene-active')
        //             }
        //             state.active_toggle = false
        //         case false:
        //             document.getElementById(payload.value).classList.add('scene-active')
        //             state.active_toggle = true
        //     }
        // },
        // COMBINE_SCENES ({commit, state}) {
        //      console.log('SCRIPTS', state.scenes)

        //      let script = []

        //      state.scenes.forEach(function (scene, index) {
        //         script.push(scene.scene)
        //      })

        //      console.log('SCRIPT ARRAY', script)

        //      commit('SET_COMBINED_SCRIPT', {value: script.join('')})
        // }
    }
}

export default SceneModule
