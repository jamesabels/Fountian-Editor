<template>
  <div class="pane-group">
    <div class="sidebar col-xs-2">
      <div id="fileTree"></div>
    </div>
    <div id="sceneList" class="pane col-xs-2">
      <ul class="list-group">
        <li class="list-group-header">
          <input id="sceneSearch" class="form-control" type="text" placeholder="Search Scenes">
        </li>
        <li :id="scene.scene_number" class="list-group-item" v-for='scene in publicState.editor.scenes' track-by="scene_number" v-on:click="getScene">
          <div class="media-body">
            <strong>{{scene.scene_number}}. {{scene.scene}}</strong>
            <p>{{scene.scene}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div id="editor" class="pane col-xs-8">
      <editor></editor>
    </div>
  </div>
</template>


<script lang="babel">
import Store from '../store/store.js'
import Editor from './editor.vue'
import InspireTree from 'inspire-tree'

export default {
  name: 'sidebar',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: function () {
    this.initFileTree()
  },
  components: {
    Editor
  },
  methods: {
    getScene (event) {
      // console.log(event.currentTarget.id)
      Store.dispatch('SET_ACTIVE_SCENE', {value: event.currentTarget.id})
      Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: this.publicState.editor.scenes[this.publicState.editor.active_scene - 1].scene})
      console.log('ACTIVE SCENE ', this.publicState.editor.active_scene)

      console.log(this.publicState.editor.scenes[this.publicState.editor.active_scene - 1])
    },
    initFileTree () {
      console.log('INIALIZE FILE TREE')
      var tree = new InspireTree({
        target: '#fileTree',
        data: [
          {text: ' Features', children: [{ text: 'Robust API'}]},
          {text: ' Features', children: [{ text: 'Robust API'}]},
          {text: ' Features', children: [{ text: 'Robust API'}]},
          {text: ' Features', children: [{ text: 'Robust API'}]},
        ]
      });
    }
  },
}
</script>

<style lang='sass' scoped>
  .sidebar {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  #fileTree {
    width: 90%;
    float: right;
    margin: 0 auto;
  }
  #sceneList {
    background-color: white;
  }
</style>