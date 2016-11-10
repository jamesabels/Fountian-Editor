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
          <input class="form-control" type="text" placeholder="Search Scenes">
        </li>
        <li class="list-group-item">
          <div class="media-body">
            <strong>EXT. BRICK'S POOL - DAY</strong>
            <p>Steel, in the middle of a heated phone call:</p>
          </div>
        </li>
        <li class="list-group-item">
          <div class="media-body">
            <strong>.SNIPER SCOPE POV</strong>
            <p>From what seems like only INCHES AWAY.  _Steel's face FILLS the *Leupold Mark 4* scope_.</p>
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
  }
}
</script>

<style lang='sass' scoped>
  #editor {
    background-color: #999;
  }
</style>