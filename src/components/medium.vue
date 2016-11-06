<template>
  <div v-if="this.publicState.editor.preview_status">
    <div id="text-preview"></div>
  </div>
  <div v-else>
    <div id="medium-wrap">
      <textarea name="medium" id="medium" cols="30" rows="50" @input="getValue"></textarea>
    </div>
  </div>
</template>


<script lang="babel">
import Store from '../store/store'
import Preview from './preview'

export default {
  name: 'medium',
  data () {
    return {
      privateState: {
        parsedScript: ''
      },
      publicState: Store.state
    }
  },
  updated: function () {
    this.updateContent()
  },
  methods: {
    getValue: function (e) {
      let scriptHtml = this.publicState.editor.parsed_script.html
      let Editor = document.querySelector('#medium')

      Store.dispatch('GET_EDITOR_VALUE', {value: Editor.value})
      Store.dispatch('PARSE_FOUNTAIN', {value: this.publicState.editor.current_value})

      console.log('FOUNTIAN OUTPUT ', this.publicState.editor.parsed_script.html.script)
      console.log('FRONT END HTML ', scriptHtml)
    },
    updateContent: function () {
      if (!this.publicState.editor.preview_status) {
        Store.dispatch('UPDATE_EDITOR', {el: '#medium', value: this.publicState.editor.current_value})
      } else if (this.publicState.editor.preview_status) {
        if (this.publicState.editor.parsed_script !== {}) {
          Store.dispatch('UPDATE_EDITOR', {el: '#text-preview', value: this.publicState.editor.parsed_script.html.script})
        }
      }
    }
  },
  components: {
    Preview
  }
}

</script>

<style>
    
    #medium-wrap {
        z-index: 0;
        padding: 30px;
        background-color: white;
        margin: 0 auto;
        margin-top: 3%;
        width: 80%;
        height: 95%;
        white-space: pre-wrap;
        box-shadow: 9px 20px 35px -1px rgba(0,0,0,0.5);
    }

    #medium { 
      width: 100%;
      height: 100%;
      border: none;
    }

    #medium:focus {
      outline: none;
      height: 100%;
    }

    #text-preview {
        z-index: 0;
        padding: 30px;
        background-color: white;
        margin: 0 auto;
        margin-top: 3%;
        width: 80%;
        height: 95%;
        white-space: pre-wrap;
        box-shadow: 9px 20px 35px -1px rgba(0,0,0,0.5);
    }

    #text-preview:focus {
      outline: none;
      height: 100%;
    }

</style>
