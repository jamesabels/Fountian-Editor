import InspireTree from 'inspire-tree'

const FSModule = {
  state: {
      fileTree: [
        {text: 'Script', children: [{text: 'Scene 1'}]}
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
