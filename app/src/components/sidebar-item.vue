<template>
    <div v-bind:class="{sceneActive: active_scene}" class="scene-list-item list-group-item" v-on:click="getScene">
        <div class="scene-title">
        <strong>{{index + 1}}. {{scene.scene_name}}</strong>
        </div>
        <div class="scene-body">
        <p>{{scene.scene_desc}}</p>
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
    name: 'sideMenuItem',
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
      setActive (event) {
        switch(this.active_scene) {
            case true: 
                this.active_scene = false;
            case false:
                this.active_scene = true;
        }
        if (this.publicState.editor.editor_status === 'editor') {
          Store.dispatch('SET_ACTIVE_SCENE', {el: '#editorInput', value: event.currentTarget.id})
          Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: this.publicState.scenes.scenes[this.publicState.scenes.active_scene - 1].scene})
        }
      },
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
    width: 100%;
  }
  
  .scene-list-item {
    background-color: #f3f3f3;
    border: none;
    margin-bottom: 10px;
  }

  .scene-list-item:hover {
    border-right: solid 5px #111;
  }

  .sceneActive {
    border-right: solid 5px teal;
  }

  .scene-title {
    padding: 3px;
    border-bottom: 1px solid #e6e6e6;
  }

  #sceneList {
    background-color: white;
  }

  #sceneList::-webkit-scrollbar-track
  {
    background-color: #eaeaea;
  }

  #sceneList::-webkit-scrollbar
  {
    width: 2px;
    background-color: #eaeaea;
  }

  #sceneList::-webkit-scrollbar-thumb
  {
    background-color: #111;
  }
</style>