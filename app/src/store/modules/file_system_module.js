import { remote } from 'electron';
const fs = require('fs')

const FSModule = {
  state: {
    filePath: null
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
    SAVE_FILE ({commit, state}, payload) {   
            if ( state.filePath === null) {
                remote.dialog.showSaveDialog(remote.getCurrentWindow(), {
                    title: 'save file'
                }, function(url) {

                    commit('SET_FILE_PATH', {value: url})

                    fs.writeFile(url, payload.value, function (err) {
                        if (err) {
                            console.log(err)
                        }
                    })

                    console.log('The file was saved!')
                })        
            }
            else {
                fs.writeFile(state.filePath, payload.value, function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
                console.log('The file was saved!')
            }
    },
    NEW_FILE (context, payload) {
        context.dispatch('CHANGE_EDITOR_STATE', {value: 'editor'})
    }
  }
}

export default FSModule
