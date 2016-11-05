<template>
  <div id="app">
    <div id="header" class="row">
      <div id="header" class="col-xs-12">
        <appHeader></appHeader>
      </div>
    </div>
    <div id="main" class="row">
      <div id="sidebar" class="col-xs-4 col-lg-2">
        <sidebar></sidebar>
      </div>
      <div id="editor" class="col-xs-8 col-lg-10">
        <medium></medium>
      </div>
    </div>
    <div id="footer" class="row">
      <statusFooter></statusFooter>
    </div>
  </div>
</template>

<script>
import Store from './store/store'

import appHeader from './components/header'
import Sidebar from './components/sidebar'
import statusFooter from './components/footer'
import Page from './components/page'
import Medium from './components/medium'

export default {
  name: 'app',
  template: '<app/>',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  components: {
    appHeader,
    Sidebar,
    statusFooter,
    Page,
    Medium
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
    box-shadow: 0px 2px 45px -1px rgba(0,0,0,0.2);
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
