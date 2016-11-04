<template>
  <div id="hello">
<header class="toolbar toolbar-header">
  <div class="toolbar-actions">
    <div class="btn-group">
      <button class="btn btn-default">
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
        <span class="icon icon-shuffle"></span>
      </button>
    </div>

    <button class="btn btn-default">
      <span class="icon icon-home icon-text"></span>
      Filters
    </button>

    <button class="btn btn-default btn-dropdown pull-right">
      <span class="icon icon-megaphone"></span>
    </button>
  </div>
</header>
  </div>
</template>

<script lang="babel">
import Store from '../store/store'

export default {
  name: 'hello',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: () => {
    Store.dispatch('WELCOME_MESSAGE', {message: 'Welcome to vue-bp'})
  }
}

</script>
