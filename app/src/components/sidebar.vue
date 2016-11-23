<template>
  <div class="pane-group">
    <div class="sidebar col-xs-1">
      <sideMenu></sideMenu>
    </div>
      <div id="sceneList" class="pane col-xs-3">
        <div class="list-group-header" v-show="this.publicState.scenes.scenes.length > 0">
          <input id="sceneSearch" class="form-control" type="text" placeholder="Search Scenes">
        </div>
        <draggable id="sortableSceneList" class="dragArea list-group" :list="this.publicState.scenes.scenes" :options="{group:'people'}">
          <div v-for='(scene, index) in publicState.scenes.scenes' :id="index + 1" class="list-group-item" v-on:click="getScene" :key="index">
            <div class="media-body">
              <strong>{{index + 1}}. {{scene.scene_name}}</strong>
              <p>{{scene.scene_desc}}</p>
            </div>
          </div>
        </draggable>
      </div>
    <div id="editor" class="pane col-xs-8">
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
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: function () {
    // Store.dispatch('INIT_FILE_TREE')
  },
  components: {
    Editor,
    draggable,
    sideMenu
  },
  methods: {
    getScene (event) {
      console.log(event.currentTarget.id)
      Store.dispatch('SET_ACTIVE_SCENE', {el: '#editorInput', value: event.currentTarget.id})
      Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: this.publicState.scenes.scenes[this.publicState.scenes.active_scene - 1].scene})
      console.log('ACTIVE SCENE ', this.publicState.scenes.active_scene)
      console.log(this.publicState.scenes.scenes[this.publicState.scenes.active_scene - 1])
    },
  }
}
</script>

<style scoped>
  .sidebar {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #sceneList {
    background-color: white;
  }
</style>