<template>
  <div id="app">
    <div id="header-wrap" class="row">
      <div id="header" class="col-xs-12">
        <appHeader></appHeader>
      </div>
    </div>
    <div id="main" class="row">
      <div id="sidebar" class="col-xs-4 col-md-2">
        <sidebar></sidebar>
      </div>
      <div id="editor" class="col-xs-8 col-md-10">
          <editor></editor>
      </div>
    </div>
    <div id="footer" class="row">
      <statusFooter></statusFooter>
    </div>
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

<style lang="scss" scoped>
  
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
    z-index: 1;
    height: calc(100% - 35px - 35px);
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
    height: 35px;
  }

</style>
