import { remote } from 'electron';

const FSModule = {
  state: {},
  mutations: {},
  actions: {
    OPEN_FILE (context) {
        remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
            properties: ['openFile']
        }, function(data) {
            console.log(data)
            let script = data[0]
            context.dispatch('LOAD_FOUNTAIN_FILE', {value: script})
            context.dispatch('CHANGE_EDITOR_STATE', {value: 'editor'})
        })
    },
    
  }
}

export default FSModule
