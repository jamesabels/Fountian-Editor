<template>
  <div  id="preview-wrap" v-if="this.publicState.editor.preview_status">
    <preview></preview>
  </div>
  <div v-else>
    <div id="input-wrap">
      <editorInput></editorInput>
    </div>
  </div>
</template>


<script lang="babel">
import Store from '../store/store'
import Preview from './preview'
import editorInput from './editor-input'

export default {
  name: 'editor',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  components: {
    Preview,
    editorInput
  }
}

</script>

<style lang="scss" scoped>

#preview-wrap {
  width: 100%;
  height: 100%;
}

#editor-wrap {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

</style>
