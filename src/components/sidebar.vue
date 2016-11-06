<template>
    <nav class="nav-group col-xs-12">
      <h5 class="nav-group-title">Favorites</h5>
      <a class="nav-group-item">
        <span class="icon icon-home"></span> James
      </a>
      <span class="nav-group-item">
            <span class="icon icon-download"></span> Downloads
      </span>
      <span class="nav-group-item">
            <span class="icon icon-folder"></span> Documents
      </span>
      <span class="nav-group-item">
            <span class="icon icon-signal"></span> AirPlay
      </span>
      <span class="nav-group-item">
            <span class="icon icon-print"></span> Applications
      </span>
      <span class="nav-group-item">
            <span class="icon icon-cloud"></span> Desktop
      </span>
    </nav>
</template>


<script lang="babel">
import Store from '../store/store.js'

export default {
  name: 'sidebar',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: () => {}
}

</script>
