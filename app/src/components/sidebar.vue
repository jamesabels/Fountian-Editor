<template>
  <div class="pane-group">
    <div class="sidebar">
      <sideMenu></sideMenu>
    </div>
      <div v-show="this.publicState.editor.editor_status === 'editor'" id="sceneList" class="pane col-xs-3">
        <div class="list-group-header" v-show="this.publicState.scenes.scenes.length > 0">
          <input id="sceneSearch" class="form-control" type="text" placeholder="Search Scenes">
        </div>
          <draggable id="sortableSceneList" class="dragArea list-group" :list="this.publicState.scenes.scenes" :options="{group:'people'}">
            <div v-for='(scene, index) in publicState.scenes.scenes' :key="index">            
              <div :id="index + 1" class="scene-list-item list-group-item" v-on:click="getScene">
                <div class="scene-title">
                  <strong>{{index + 1}}. {{scene.scene_name}}</strong>
                </div>
                <div class="scene-body">
                  <p>{{scene.scene_desc}}</p>
                </div>
              </div>
            </div>
          </draggable>
        </div>
    <div id="editor" class="pane col-xs-auto">
      <editor></editor>
    </div>
  </div>

</template>


<script lang="babel">
  import Store from '../store/store.js'
  import Editor from './editor.vue'
  import sideMenu from './sideMenu'
  import Sortable from 'sortablejs'
  import draggable from 'vuedraggable'
  import _ from 'lodash'

  export default {
    name: 'sidebar',
    data () {
      return {
        active_scene: false,
        privateState: {},
        publicState: Store.state
      }
    },
    mounted: function () {
    },
    components: {
      Editor,
      draggable,
      sideMenu
    },
    methods: {
      getScene (event) {
        // Highlight active scene
        Store.dispatch('HIGHLIGHT_ACTIVE_SCENE', {value: event.currentTarget.id})
        
        // Switch to active scene 
        if (this.publicState.editor.editor_status === 'editor') {
          Store.dispatch('SET_ACTIVE_SCENE', {el: '#editorInput', value: event.currentTarget.id})
          Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: this.publicState.scenes.scenes[this.publicState.scenes.active_scene - 1].scene})
        }
      }
    }
  }
</script>

<style scoped>

  #editor {
    border: none;
  }

  .sidebar {
    margin: 0;
    padding: 0;
    width: 70px;
  }
  
  .scene-list-item {
    background-color: #f3f3f3;
    border: none;
    padding: 0;
    margin-top: 20px;
    box-shadow: 9px 10px 29px 0px rgba(0,0,0,0.20);
  }

  .scene-list-item:hover {
    border-right: solid 5px lightsalmon;
  }

  .scene-active {
    border-right: solid 5px salmon;
  }

  .scene-title {
    color: white;
    font-size: 0.9em;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 300;
    letter-spacing: 0.033em;
    text-transform: uppercase;
    background-color: #111;
    padding: 5px;
    border-bottom: 1px solid #e6e6e6;
    border-left: 6px solid #888;
  }

  .scene-body {
    padding: 10px
  }

  #sceneList {
    background-color: white;
    box-shadow: 9px 10px 29px 0px rgba(0,0,0,0.42);
  }

  #sceneList::-webkit-scrollbar-track
  {
    background-color: #f3f3f3;
  }

  #sceneList::-webkit-scrollbar
  {
    width: 5px;
    background-color: #f3f3f3;
  }

  #sceneList::-webkit-scrollbar-thumb
  {
    background-color: #111;
  }
</style>