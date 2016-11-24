import Store from '../store.js'
import vex from 'vex-js'
import dialog from 'vex-dialog'
import open from 'open'

const ModalModule = {
  state: {},
  mutations: {},
  actions: {
    INIT_MODALS () {
      vex.registerPlugin(dialog)
      vex.defaultOptions.className = 'vex-theme-os'
    },
    TEST_MODAL () {
        console.log('TESTING MODAL')
        vex.dialog.confirm({
        message: 'Are you absolutely sure you want to destroy the alien planet?',
        callback: function (value) {
            if (value) {
                console.log('Successfully destroyed the planet.')
            } else {
                console.log('Chicken.')
            }
        }
        })
    },
    ADD_SCENE_MODAL ({commit, state}) {
        let input1 =
        `<div class="vex-custom-field-wrapper">
            <div class="vex-custom-input-wrapper">
                <input name="scene-name" type="text" placeholder="Scene Name" value="Brick's Pool" />
            </div>
        </div>`
        let input2 =
        `<div class="vex-custom-field-wrapper">
            <div class="vex-custom-input-wrapper">
                <input name="scene-name" type="text" placeholder="Scene Description" value="Brick is in his pool, enjoying the evening"/>
            </div>
        </div>`

        console.log('TESTING MODAL')
        console.log(Store.state.editor)
        vex.dialog.prompt({
            message: 'Create new scene',
            input: [input1, input2].join(''),
            callback: function (value) {
                if (value) {
                    console.log(value)
                    console.log(value[0])
                    console.log(value[1])
                    Store.dispatch('ADD_SCENE', {scene_name: value[0], scene_desc: value[1], scene: ''})
                    Store.dispatch('SET_ACTIVE_SCENE', {el: '#editorInput', value: Store.state.scenes.scenes.length})
                    Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: Store.state.scenes.scenes[Store.state.scenes.active_scene - 1].scene})
                } else {
                    console.log('Modal Closed')
                }
            }
        })
    },
    OPEN_EXTERNAL_LINK (context, payload) {
        open(payload.value)
    }
  }
}

export default ModalModule
