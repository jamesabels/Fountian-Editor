<template>
  <div class="pane-group">
    <div class="sidebar col-xs-2">
      <header class="toolbar toolbar-header">
        <h1 class="title">Project Structure</h1>
      </header>
      <div id="fileTree" v-on:click="getScene"></div>
    </div>
    <div id="sceneList" class="pane col-xs-2">
      <ul id="sortableSceneList" class="list-group" v-dnd-list :dnd-list="this.publicState.scenes.scenes" :dnd-horizontal-list="false">
        <li class="list-group-header" v-show="this.publicState.scenes.scenes.length > 0">
          <input id="sceneSearch" class="form-control" type="text" placeholder="Search Scenes">
        </li>
        <li 
          v-dnd-draggable
          v-for='(scene, index) in publicState.scenes.scenes' 
          :dnd-draggable="scene"
          :dnd-index="$index"
          :dnd-data='list'
          :key="scene.scene_number" 
          :id="scene.scene_number"
          v-bind:class="{'selected': selected === scene}"
          dnd-selected="selectedEvent"
          dnd-effect-allowed="move"
          dnd-dragstart="handleDragstart"
          dnd-dragend="handleDragend"
          dnd-canceled="handleCanceled"
          class="list-group-item"
          track-by="scene_number"  
          v-on:click="getScene">
          <div class="media-body">
            <strong>{{index + 1}}. {{scene.scene_name}}</strong>
            <p>{{scene.scene_desc}}</p>
          </div>
        </li>
        <li class="dndPlaceholder red">Custom placeholder</li>
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
import _ from 'lodash'

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
    Store.dispatch('INIT_SORTABLE')
  },
  components: {
    Editor
  },
  methods: {
    getScene (event) {
      console.log(event.currentTarget.id)
      Store.dispatch('SET_ACTIVE_SCENE', {el: '#editorInput', value: event.currentTarget.id})
      Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: this.publicState.scenes.scenes[this.publicState.scenes.active_scene - 1].scene})
      console.log('ACTIVE SCENE ', this.publicState.scenes.active_scene)

      console.log(this.publicState.scenes.scenes[this.publicState.scenes.active_scene - 1])

      // Store.dispatch('GET_SCENE_INDEX', {id: this.publicState.scenes.scenes[this.publicState.scenes.active_scene - 1].scene_name, value: this.publicState.scenes.scenes})
    },
  }
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