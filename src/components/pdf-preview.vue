<template>
  <div id="pdfPreview">
      <h1>Pdf Preview</h1>
  </div>
</template>


<script lang="babel">
import Store from '../store/store.js'

export default {
  name: 'pdfPreview',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: function () {
    this.updateContent()
  },
  methods: {
    updateContent: function () {
      Store.dispatch('INIT_PDF')
    }
  }
}

</script>

<style>
    
    #pdfPreview {
        font-family: Courier New, Courier, monospace;
        z-index: 0;
        padding: 30px;
        background-color: white;
        margin: 0 auto;
        margin-top: 3%;
        width: 60%;
        height: 95%;
        white-space: pre-wrap;
        box-shadow: 9px 20px 35px -1px rgba(0,0,0,0.5);
    }

</style>
