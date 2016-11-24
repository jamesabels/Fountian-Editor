<template>
  <div>
    <div id="preview-wrap" v-if="this.publicState.editor.editor_status === 'preview'">
      <preview></preview>
    </div>
    <div id="index-wrap" v-if="this.publicState.editor.editor_status === 'index-cards'">
      <IndexCards/>
    </div>
    <div id="editor-wrap" v-if="this.publicState.editor.editor_status === 'editor'">
        <editorInput :activeScene='this.publicState.scenes.active_scene'></editorInput>
    </div>
    <div id="welcome-wrap" v-if="this.publicState.editor.editor_status === 'welcome'">
        <Welcome></Welcome>
    </div>
  </div>
</template>


<script lang="babel">
import Store from '../store/store.js'

import Preview from './preview.vue'
import editorInput from './editor-input.vue'
import IndexCards from './index-cards.vue'
import pdfPreview from './pdf-preview.vue'
import Welcome from './welcome.vue'

export default {
  name: 'editor',
  data () {
    return {
      privateState: {},
      publicState: Store.state,
      editor_staus: Store.state.editor.editor_status
    }
  },
  components: {
    pdfPreview,
    Preview,
    editorInput,
    IndexCards,
    Welcome
  }
}

</script>

<style scoped>

#preview-wrap {
  width: 100%;
  height: 100%;
}

</style>
