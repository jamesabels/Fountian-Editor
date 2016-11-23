<template>
    <div class="toolbar-actions col-xs-12">
    </div>
</template>

<script lang="babel">
import Store from '../store/store.js'

export default {
  name: 'statusFooter',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: () => {}
}

</script>
