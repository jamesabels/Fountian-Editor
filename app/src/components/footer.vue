<template>
  <div id="statusFooter" class="row">
    <div class="inside-footer-section col-xs-12">
          <i class="icon ion-ios-photos status-item"> 9 Scenes</i>
          <i class="icon ion-ios-eye status-item"> 200 Words</i>
          <i class="icon ion-ios-book status-item"> 10 Pages</i>
          <i class="icon ion-ios-chatboxes status-item"> Feedback</i>
    </div>
  </div>
</template>

<script lang="babel">
  import Store from '../store/store.js'

  export default {
    name: 'statusFooter',
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
  #statusFooter {
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 0.03em;
    font-weight: lighter;
    font-style: italic;
    background-color: darkturquoise;
    color: white;
    text-align: right;
    padding: 3.5px 0 0 0;
    margin: 0;
    height: 25px;
    width: 100%;
  }

  .status-item {
    padding: 3px;
    margin: 0 0 0 10px;
  }

  .status-item:hover {
    color: #111;
  }
  .stat-divider {
    color: #666;
  }

  .inside-footer-section {
    height: 20px;
  }
</style>