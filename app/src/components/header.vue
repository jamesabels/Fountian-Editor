<template>
  <header id="header" class="toolbar toolbar-header">
      <div class="toolbar-actions">
        <div class="btn-group col-xs-6">
          <button class="btn btn-default" v-on:click="openDirectory">
            <span class="icon icon-folder"></span>
          </button>
          <button class="btn btn-default" v-on:click="addScene">
            <span class="icon icon-plus"></span>
          </button>
      </div>
      <div class="btn-group col-xs-6">
        <button class="btn btn-default btn-dropdown pull-right">
          <span class="icon icon-megaphone"></span>
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
      addScene: function () {
        Store.dispatch('ADD_SCENE_MODAL')
      },
      testModal: function () {
        Store.dispatch('TEST_MODAL')
      },
      testClick: function () {
        console.log('TESTING CLICK!!!')
      },
      testScenes: function () {
        for(let i=0; Store.state.scenes.scenes.length > i; i++) {
          console.log(Store.state.scenes.scenes[i].scene_name)
        }
      },
      openDirectory: function () {
        Store.dispatch('OPEN_FILE')
      }
    },
    mounted () {
      Store.dispatch('INIT_MODALS')
    }
  }
</script>

<style scoped>
  .toolbar-actions {
    width: 100%;
  }
</style>