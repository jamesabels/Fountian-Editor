<template>
  <div class="pane-group">
    <div class="pane-sm sidebar col-xs-2">
      <nav class="nav-group col-xs-12">
        <h5 class="nav-group-title">Favorites</h5>
        <a class="nav-group-item">
          <span class="icon icon-home"></span>
          Home
        </a>
        <span class="nav-group-item">
          <span class="icon icon-download"></span>
          Downloads
        </span>
        <span class="nav-group-item">
          <span class="icon icon-folder"></span>
          Documents
        </span>
        <span class="nav-group-item">
          <span class="icon icon-signal"></span>
          AirPlay
        </span>
        <span class="nav-group-item">
          <span class="icon icon-print"></span>
          Applications
        </span>
        <span class="nav-group-item">
          <span class="icon icon-cloud"></span>
          Desktop
        </span>
      </nav>
    </div>
    <div class="pane col-xs-2">
      <ul class="list-group">
        <li class="list-group-header">
          <input id="sceneSearch" class="form-control" type="text" placeholder="Search Scenes">
        </li>
        <li :id="scene.scene_number" class="list-group-item" v-for='scene in publicState.editor.scenes' v-on:click="getScene">
          <div class="media-body">
            <strong>{{scene.scene_number}}. {{scene.scene_heading}}</strong>
            <p>{{scene.body}}</p>
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

export default {
  name: 'sidebar',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: () => {},
  components: {
    Editor
  },
  methods: {
    getScene (event) {
      // console.log(event.currentTarget.id)
      Store.dispatch('SET_ACTIVE_SCENE', {value: event.currentTarget.id})
      console.log('ACTIVE SCENE ', this.publicState.editor.active_scene)

      console.log(this.publicState.editor.scenes[this.publicState.editor.active_scene - 1])
    }
  }
}
</script>

<style lang='sass' scoped>
  #editor {
    background-color: #999;
  }
</style>