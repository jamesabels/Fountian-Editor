<template>
  <div class="pane-group">
    <div class="sidebar col-xs-2">
      <header class="toolbar toolbar-header">
        <h1 class="title">Project Structure</h1>
      </header>
      <div id="fileTree" v-on:click="getScene"></div>
    </div>
    <div id="sceneList" class="pane col-xs-2">
      <ul id="sortableSceneList" class="list-group">
        <li class="list-group-header" v-show="this.publicState.editor.scenes.length > 0">
          <input id="sceneSearch" class="form-control" type="text" placeholder="Search Scenes">
        </li>
        <li :id="scene.scene_number" class="list-group-item" v-for='scene in publicState.editor.scenes' track-by="scene_number"  v-on:click="getScene">
          <div class="media-body">
            <strong>{{scene.scene_number}}. {{scene.scene_name}}</strong>
            <p>{{scene.scene_desc}}</p>
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
import Sortable from 'sortablejs'

export default {
  name: 'sidebar',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: function () {
    Store.dispatch('INIT_FILE_TREE')
    this.initSortable()
  },
  components: {
    Editor
  },
  methods: {
    getScene (event) {
      console.log(event.currentTarget.id)
      Store.dispatch('SET_ACTIVE_SCENE', {el: '#editorInput', value: event.currentTarget.id})
      Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: this.publicState.editor.scenes[this.publicState.editor.active_scene - 1].scene})
      console.log('ACTIVE SCENE ', this.publicState.editor.active_scene)

      console.log(this.publicState.editor.scenes[this.publicState.editor.active_scene - 1])

      Store.dispatch('GET_SCENE_INDEX', {id: this.publicState.editor.scenes[this.publicState.editor.active_scene - 1].scene_name, value: this.publicState.editor.scenes})
    },
    initSortable () {
      let el = document.querySelector('#sortableSceneList')
      Sortable.create(el, {
        group: 'scene-list',
        sort: true,
        draggable: '.list-group-item',
        handle: ".list-group-item",
        dragClass: "list-group-item",
      })
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
    float: left;
    margin-left: 10%;
  }
  #sceneList {
    background-color: white;
  }
</style>