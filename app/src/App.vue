<template>
<div id="app" class="window">
  <header id="header" class="toolbar toolbar-header row">
    <appHeader></appheader>
  </header>
  <div  id="main" class="window-content row">
    <div class="pane-group col-xs-12">
      <sidebar></sidebar>
    </div>
  </div>
  <footer id="footer" class="toolbar toolbar-footer row">
    <statusFooter></statusfooter>
  </footer>
</div>
  
</template>

<script>
import Store from './store/store'

import appHeader from './components/header.vue'
import Sidebar from './components/sidebar.vue'
import statusFooter from './components/footer.vue'
import Page from './components/page.vue'
import Editor from './components/editor.vue'
import Preview from './components/preview.vue'

export default {
  name: 'app',
  template: '<app/>',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      this.publicState.editor.currentValue = ''

      if (this.publicState.debug === true) {
        Store.dispatch('LOAD_DEBUG_SCRIPT', './app/src/store/modules/test.fountain')
      }
    }
  },
  components: {
    appHeader,
    Sidebar,
    statusFooter,
    Page,
    Editor,
    Preview
  }
}
</script>

<style scoped>
  
  html, body {
    height: 100vh;
  }

  #app {
    height: 100vh;
  }

  #header {
    z-index: 9999;
    height: 35px;
    /*box-shadow: 0px 2px 45px -1px rgba(0,0,0,0.2);*/
  }

  #main {
    background-color: #999 !important;
    z-index: 1;
    height: calc(100% - 20px - 35px);
  }

  #sidebar {
    height: 100%;
    background-color: #D2D0D2;
  }

  #editor {
    height: 100%;
    background-color: #888;
  }

  #footer {
    z-index: 999;
    height: 20px;
  }

  ul[dnd-list], ul[dnd-list] > li {
    position: relative;
  }

</style>
