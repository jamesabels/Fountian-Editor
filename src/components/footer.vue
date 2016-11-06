<template>
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
