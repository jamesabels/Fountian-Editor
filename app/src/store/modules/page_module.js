const PageModule = {
    state: {
        pages: [],
        active_page: 1,
        active_scene: 1,
        active_toggle: false,
        parsed_page: ''
    },
    mutations: {
        ADD_PAGE (state, payload) {
            state.pages.push(payload)
        },
        ADD_PAGE_SCENE (state, payload) {
            state.pages.push(payload)
        },
        UPDATE_PAGE (state, payload) {
            console.log('UPDATING EDITOR PAYLOAD ', payload)
            state.pages[payload.scene_index].scene = payload.scene
        },
        SET_ACTIVE_PAGE (state, payload) {
            state.active_page = payload.value
        },
        SET_ACTIVE_SCENE (state, payload) {
            state.active_scene = payload.value
        },
        COMBINE_PAGE (state, payload) {
            state.parsed_page = payload.value
        }
    },
    actions: {
        ADD_PAGE ({commit, state}, payload) {
            let page = {
                page_number: null,
                page_index: null,
                page_name: '',
                page_desc: '',
                scenes: [],
                script: ''
            }

            page.page_number = state.pages.length + 1
            page.page_index = state.pages.length
            page.page_name = payload.page_name
            page.page_desc = payload.page_desc
            page.scene = payload.scene

            commit('ADD_PAGE', scene)
        },
        UPDATE_PAGE ({commit, state}, payload) {
            let scene = {
                scene_number: null,
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

            commit('UPDATE_PAGE', scene)
        },
        SET_ACTIVE_PAGE (context, payload) {
            context.commit('SET_ACTIVE_PAGE', payload)
        },
        SET_ACTIVE_SCENE (context, payload) {
            context.commit('SET_ACTIVE_SCENE', payload)
        },
        HIGHLIGHT_ACTIVE_PAGE ({commit, state}, payload) {
            switch (state.active_toggle) {
                case true:
                    var x = document.querySelectorAll('.scene-list-item');
                    for (let i = 0; i < x.length; i++) {
                        x[i].classList.remove('scene-active')
                    }
                    state.active_toggle = false
                case false:
                    document.getElementById(payload.value).classList.add('scene-active')
                    state.active_toggle = true
            }
        },
        HIGHLIGHT_ACTIVE_SCENE ({commit, state}, payload) {
            switch (state.active_toggle) {
                case true:
                    var x = document.querySelectorAll('.scene-list-item');
                    for (let i = 0; i < x.length; i++) {
                        x[i].classList.remove('scene-active')
                    }
                    state.active_toggle = false
                case false:
                    document.getElementById(payload.value).classList.add('scene-active')
                    state.active_toggle = true
            }
        },
        COMBINE_PAGE ({commit, state}) {
             console.log('SCRIPTS', state.pages)

             let page = []

             state.pages.forEach(function (line, index) {
                page.push(line.scene)
             })

             console.log('SCRIPT ARRAY', page)

             commit('COMBINE_PAGE', {value: page.join('')})
        }
    }
}

export default PageModule
