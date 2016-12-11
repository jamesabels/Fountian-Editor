<template>
    <div v-show="this.publicState.editor.editor_status === 'editor'">
        <div class="sceneListToolbar list-group-header row" v-show="this.publicState.scenes.scenes.length > 0">
            <div class="sceneToolbar col-xs-6">
                <div class="toolbarWrap">
                    <div class="btn-group">

                        <button class="btn-scene-toolbar" v-on:click="addScene">
                        <span class="icon ion-android-add"></span>
                        </button>

                    </div>
                </div>
            </div>
            <div class="sceneSearchWrap col-xs-6">
                <input id="sceneSearch" class="form-control" type="text" placeholder="Search Scenes">
            </div>
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
    name: 'header',
    data () {
      return {
        privateState: {},
        publicState: Store.state
      }
    },
    mounted: function () {
    },
    components: {
    },
    methods: {
      addScene () {
        Store.dispatch('ADD_SCENE_MODAL')
      }
    }
  }
</script>

<style scoped>
  .sceneListToolbar {
     float: left;
     padding: 10px;
     width: 100%;
     height: 50px;
     background-color: #e6e6e6;
  }

  .sceneToolbar {
    /*background-color: #999;*/
    border: solid 1px #e6e6e6;
  }

  .toolbarWrap {
    /*background-color: #111;*/
    margin: 0 0 10px 0;
  }

  .btn-scene-toolbar {
    width: 30px;
    height: 30px;
    font-size: 1.3em;
    background-color: #111;
    color: white;
    border: none;
  }

  .btn-scene-toolbar:hover {
      background-color: teal;
  }

  #sceneSearch {
    border-radius: 0;
  }

</style>