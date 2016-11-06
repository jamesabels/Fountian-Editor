<template>
  <div class="editor-wrap">
    <textarea name="editorInput" id="editorInput" cols="30" rows="50" @input="getValue"></textarea>
  </div>
</template>


<script lang="babel">
import Store from '../store/store.js'

export default {
  name: 'editorInput',
  data () {
    return {
      privateState: {
        parsedScript: ''
      },
      publicState: Store.state
    }
  },
  mounted: function () {
    this.updateContent()
  },
  methods: {
    getValue: function (e) {
      let scriptHtml = this.publicState.editor.parsed_script.html
      let Editor = document.querySelector('#editorInput')

      Store.dispatch('GET_EDITOR_VALUE', {value: Editor.value})
      Store.dispatch('PARSE_FOUNTAIN', {value: this.publicState.editor.current_value})

      console.log('FOUNTIAN OUTPUT ', this.publicState.editor.parsed_script.html.script)
      console.log('FRONT END HTML ', scriptHtml)
    },
    updateContent: function () {
      Store.dispatch('UPDATE_EDITOR', {el: '#editorInput', value: this.publicState.editor.current_value})
    }
  }
}

</script>

<style lang="scss" scoped>
    
    .editor-wrap {
        z-index: 0;
        margin: 0 auto;
        width: 60%;
        height: 95%;

    }

    #editorInput {
        z-index: 0;
        padding: 30px;
        background-color: white;
        margin: 0 auto;
        margin-top: 3%;
        width: 100%;
        height: 100%;
        border: none;
        white-space: pre-wrap;
        box-shadow: 9px 20px 35px -1px rgba(0,0,0,0.5);
    }

    #editorInput:focus {
      outline: none;
      height: 100%;
    }

</style>
