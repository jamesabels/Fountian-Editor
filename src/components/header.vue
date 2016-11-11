<template>
  <header id="header" class="toolbar toolbar-header col-xs-12">
    <div class="toolbar-actions">
      <div class="btn-group">
        <button class="btn btn-default">
        <span class="icon icon-home"></span>
      </button>
        <button class="btn btn-default">
        <span class="icon icon-folder"></span>
      </button>
        <button class="btn btn-default active">
        <span class="icon icon-cloud"></span>
      </button>
        <button class="btn btn-default">
        <span class="icon icon-popup"></span>
      </button>
        <button class="btn btn-default">
        <span class="icon icon-shuffle"></span>
      </button>
      </div>
      <button class="btn btn-default">
      <span class="icon icon-eye" v-on:click="previewFountain"></span>
    </button>
      <button class="btn btn-default btn-dropdown pull-right">
      <span class="icon icon-megaphone"></span>
    </button>
    <div class="btn-group">
      <button class="btn btn-default" v-on:click="addScene">
        <span class="icon icon-plus"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-search"></span>
      </button>
    </div>
    </div>
  </header>
</template>

<script lang="babel">
import Store from '../store/store.js'

export default {
  name: 'appHeader',
  data () {
    return {
      privateState: {
        preview: false
      },
      publicState: Store.state
    }
  },
  methods: {
    previewFountain: function () {
      switch (this.publicState.editor.preview_status) {
        case false:
          this.publicState.editor.preview_status = true
          break
        case true:
          this.publicState.editor.preview_status = false
          break
      }
    },
    addScene: function () {
      Store.dispatch('ADD_SCENE', {scene_heading: 'EXT Bricks cock - NIGHT', body: '', scene: ''})
    }
  },
  mounted: () => {}
}

</script>
