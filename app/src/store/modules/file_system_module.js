import { remote } from 'electron';
const fs = require('fs')

const FSModule = {
  state: {
    filePath: ''
  },
  mutations: {
    SET_FILE_PATH (state, payload) {
        state.filePath = payload.value;
    }
  },
  actions: {
    OPEN_FILE (context) {
        remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
            properties: ['openFile']
        }, function(data) {
            let script = data[0]
            context.dispatch('LOAD_FOUNTAIN_FILE', {value: script})
            context.dispatch('CHANGE_EDITOR_STATE', {value: 'editor'})
        })
    },
    SAVE_FILE (context, payload) {
        remote.dialog.showSaveDialog(remote.getCurrentWindow(), {
            title: 'save file'
        }, function(url) {

            console.log('CONTENT', payload.value)

            console.log('SAVE FILE URL', url)

            context.commit('SET_FILE_PATH', {value: url})

            fs.writeFile(url, '', function (err) {
                if (err) {
                    console.log(err)
                }
            })

            console.log('The file was saved!')

            context.dispatch('CHANGE_EDITOR_STATE', {value: 'editor'})
        })
    },
    LOAD_FILE (context, payload) {
        console.log('LOADING FILE', payload.value)
        context.dispatch('LOAD_FOUNTAIN_FILE', {value: payload.value})
    }
  }
}

export default FSModule
