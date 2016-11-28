<template>
<div id="app" class="window">
  <div  id="main" class="window-content row">
    <div class="pane-group col-xs-12">
      <sidebar></sidebar>
    </div>
  </div>
  <div v-show="this.publicState.editor.editor_status !== 'welcome' || this.publicState.debug === true" class="footer-wrap">
    <statusFooter v-if="this.publicState.editor.editor_status !== 'welcome' || this.publicState.debug === true"></statusfooter>
  </div>
</div>
  
</template>

<script>
import Store from './store/store'

import Sidebar from './components/sidebar.vue'
import statusFooter from './components/footer.vue'
import Page from './components/page.vue'
import Editor from './components/editor.vue'
import Preview from './components/preview.vue'
import Header from './components/header.vue'

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
        Store.dispatch('LOAD_DEBUG_SCRIPT', {value: './app/src/static/scripts/bigfish.fountain'})
      }
    }
  },
  components: {
    Sidebar,
    statusFooter,
    Page,
    Editor,
    Preview,
    Header
  }
}
</script>

<style scoped>
  
  html, body {
    background-color: #111;
    height: 100vh;
    overflow: hidden;
  }

  #app {
    background-color: #333;
    height: 100vh;
  }

  #header {
    z-index: 9999;
    width: 100%;
  }

  #main {
    background-color: gainsboro !important;
    z-index: 1;
    height: 100%;
  }

  #sidebar {
    height: 100%;
    background-color: gainsboro;
  }

  #editor {
    height: 100%;
    background-color: #222;
  }

  ul[dnd-list], ul[dnd-list] > li {
    position: relative;
  }

  .header-wrap {
    background-color: hotpink;
    height: 100px;
  }

  .footer-wrap {
    background-color: #111;
  }

</style>
