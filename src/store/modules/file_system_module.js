import InspireTree from 'inspire-tree'

const FSModule = {
  state: {
      fileTree: [
        {
        text: 'Script',
        children: [
            {
                text: 'Scene One',
                scene_number: 1,
                scene_index: 0,
                scene_name: 'New Scene',
                body: 'This is a default scene',
                scene: ''
            }
        ]
        }
      ]
  },
  mutations: {},
  actions: {
    INIT_FILE_TREE ({state}) {
        console.log('initizlizing file tree')
        new InspireTree({
            target: '#fileTree',
            data: state.fileTree
        })
    }
  }
}

export default FSModule
