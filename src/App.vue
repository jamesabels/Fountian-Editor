<template>
  <div id="app">
    <div id="header" class="row">
          <Hello class="col-xs-12"></Hello>
    </div>
    <div id="main" class="row">
      <div id="sidebar" class="col-xs-4 col-lg-2">
        <div class="row">
          <nav class="nav-group col-xs-12">
            <h5 class="nav-group-title">Favorites</h5>
            <a class="nav-group-item">
              <span class="icon icon-home"></span>
              James
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
      </div>
      <div id="editor" class="col-xs-8 col-lg-10">
        <div id="page">

        </div>
      </div>
    </div>
    <div id="footer" class="row">
      <footer class="toolbar toolbar-footer col-xs-12">
        <div class="toolbar-actions">
          <button class="btn btn-default">
          Cancel
        </button>
          <button class="btn btn-primary pull-right">
          Save
        </button>
        </div>
      </footer>
    </div>
  </div>
</template>


<script>
import Hello from './components/Hello'
import Store from './store/store'

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
    Hello
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
    box-shadow: 0px 10px 45px -1px rgba(0,0,0,0.7);
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

  #page {
    background-color: white;
    margin: 0 auto;
    margin-top: 3%;
    width: 80%;
    height: 100%;
    box-shadow: 9px 20px 35px -1px rgba(0,0,0,0.5);
  }

  #footer {
    height: 35px;
  }

</style>
