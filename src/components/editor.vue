<template>
  <div class="editor-wrap">
    <div id="preview-wrap" v-if="this.publicState.editor.preview_status">
        <preview></preview>
      </div>
      <div v-else>
          <editorInput :activeScene='this.publicState.editor.active_scene'></editorInput>
      </div>
  </div>
</template>


<script lang="babel">
import Store from '../store/store.js'
import Preview from './preview.vue'
import editorInput from './editor-input.vue'
import pdfPreview from './pdf-preview.vue'

export default {
  name: 'editor',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  components: {
    pdfPreview,
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
