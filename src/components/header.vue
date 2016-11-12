<template>
  <header id="header" class="toolbar toolbar-header col-xs-12">
    <div class="toolbar-actions">
      <div class="btn-group">
        <button class="btn btn-default" v-on:click="testModal">
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
          <span class="icon icon-shuffle" v-on:click="testClick"></span>
        </button>
        </div>
        <button class="btn btn-default"  v-on:click="previewFountain">
        <span class="icon icon-eye"></span>
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
import vex from 'vex-js'
import dialog from 'vex-dialog'

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
      Store.dispatch('SET_ACTIVE_SCENE', {value: this.publicState.editor.scenes.length})
      Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: this.publicState.editor.scenes[this.publicState.editor.active_scene - 1].scene})
    },
    initModal : function () {
      vex.registerPlugin(dialog)
      vex.defaultOptions.className = 'vex-theme-os'
    },
    testModal: function () {
      console.log('TESTING MODAL')
      vex.dialog.confirm({
        message: 'Are you absolutely sure you want to destroy the alien planet?',
        callback: function (value) {
            if (value) {
                console.log('Successfully destroyed the planet.')
            } else {
                console.log('Chicken.')
            }
        }
    })
    },
    testClick: function () {
      console.log('TESTING CLICK!!!')
    }
  },
  mounted () {
    this.initModal()
  }
}

</script>
