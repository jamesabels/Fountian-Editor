<template>
  <div>
    <div id="preview-wrap" v-if="this.publicState.editor.preview_status">
      <preview></preview>
    </div>
    <div id="index-wrap" v-if="this.publicState.editor.index_status">
      <IndexCards/>
    </div>
    <div id="editor-wrap" 
      v-if="!this.publicState.editor.preview_status && 
      !this.publicState.editor.index_status">
        <editorInput :activeScene='this.publicState.scenes.active_scene'></editorInput>
    </div>
  </div>
</template>


<script lang="babel">
import Store from '../store/store.js'

import Preview from './preview.vue'
import editorInput from './editor-input.vue'
import IndexCards from './index-cards.vue'
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
    editorInput,
    IndexCards
  }
}

</script>

<style scoped>

/*#editor-wrap {
  background-color: #999 !important;
}*/

#preview-wrap {
  width: 100%;
  height: 100%;
}

</style>
