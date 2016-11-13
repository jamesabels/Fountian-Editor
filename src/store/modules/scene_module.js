// import Sortable from 'sortablejs'

const SceneModule = {
    state: {
        scenes: [],
        active_scene: 1
    },
    mutations: {
        REORDER_SCENES ({context, state}, payload) {
            state.scenes = payload.value
        },
        UPDATE_SCENE_NUMBER (state, payload) {
            state.scenes[payload.index].scene_number = payload.number
            console.log(state.scenes)
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
        INIT_SORTABLE (context) {
        //     let el = document.querySelector('#sortableSceneList')
        //     Sortable.create(el, {
        //         group: 'scene-list',
        //         sort: true,
        //         draggable: '.list-group-item',
        //         handle: '.list-group-item',
        //         dragClass: 'list-group-item',
        //         onUpdate: function (event) {
        //             context.dispatch('SORT_SCENES', {value: event})
        //         }
        //     })
        },
        // SORT_SCENES ({commit, state}, payload) {
        //     let array = state.scenes
        //     let newArray = []

        //     console.log(payload.value)
        //     console.log('OLD INDEX ', payload.value.oldIndex)

        //     // if (array[payload.value.oldIndex] === undefined) {
        //     //     console.log('GETTING REDICED INDEX', payload.value.oldIndex)
        //     //     tmp = array[payload.value.oldIndex - 1]
        //     // } else {
        //     //     console.log('GETTING ACTUAL INDEX', payload.value.oldIndex)
        //         // tmp = array[payload.value.oldIndex]
        //     // }
        //     // console.log('FIRST TEMP', tmp)
        //     let tmp = array.splice(payload.value.oldIndex, 1)

        //     newArray.splice(0, 0, tmp).join('')
        //     console.log('NEW ARRAY ', newArray)
        //     array.splice(payload.value.newIndex, 0, newArray[0]).join('')

        //     array = array.filter(function (element) {
        //         return element !== undefined
        //     })
        //     console.log(array)
        // },
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

            commit('UPDATE_SCENE', scene)
        },
        SET_ACTIVE_SCENE (context, payload) {
            document.querySelector(payload.el).focus()
            context.commit('SET_ACTIVE_SCENE', payload)
        }
    },
    computed: {
        sortedItems: function () {
        if (!this.order) {
            return this.items
        }
        return this.order.map((i) => this.items[i])
        }
     }
}

export default SceneModule
