<template>
  <div class="editor-wrap">
    <textarea name="editorInput" id="editorInput" cols="30" rows="50" @input="getValue">
    </textarea>
  </div>
</template>


<script lang="babel">
import Store from '../store/store.js'

export default {
  name: 'editorInput',
  data () {
    return {
      privateState: {
        active_scene: this.activeScene,
        editor_content: this.content
      },
      publicState: Store.state
    }
  },
  props: ['activeScene', 'content'],
  mounted: function () {
    this.updateContent()
    console.log('MOUNTED ACTIVE SCENE ', this.activeScene)
  },
  updated: function () {
  },
  watch: {
    activeScene: function (val, oldVal) {
      console.log('EDITOR AWARE ACTIVE SCENE ', this.activeScene)
      Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: this.publicState.editor.scenes[this.publicState.editor.active_scene - 1].scene})
    }
  },
  methods: {
    getValue: function (e) {
      let scriptHtml = this.publicState.script.html.script
      let Editor = document.querySelector('#editorInput')

      Store.dispatch('GET_EDITOR_VALUE', {value: Editor.value})
      Store.dispatch('UPDATE_SCENE', {
        scene_number: this.publicState.editor.active_scene,    
        scene_index: this.publicState.editor.active_scene - 1,
        scene: this.publicState.editor.current_value
      })
      Store.dispatch('PARSE_FOUNTAIN', {value: this.publicState.editor.scenes[this.publicState.editor.active_scene - 1].scene})

      console.log('NEW STATE ', this.publicState.script.html.script)
      console.log('FRONT END HTML ', scriptHtml)
    },
    updateContent: function () {
      console.log('MOUNTED!!!')

      let Editor = document.querySelector('#editorInput')
      
      Editor.innerText = this.publicState.editor.scenes[this.publicState.editor.active_scene - 1].scene
      Store.dispatch('INIT_EDITOR', {el: '#editorInput', value: this.publicState.editor.scenes[this.publicState.editor.active_scene - 1].scene})
      Store.dispatch('PARSE_FOUNTAIN', {value: this.publicState.editor.scenes[this.publicState.editor.active_scene - 1].scene})
      console.log('Getting Tokens!', this.publicState.script.tokens)
    },
  }
}

</script>

<style lang="scss" scoped>
    
    .editor-wrap {
        z-index: 0;
        margin: 0 auto;
        width: 80%;
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
        white-space: pre;
        box-shadow: 9px 20px 35px -1px rgba(0,0,0,0.5);
        resize: none;
        overflow: hidden;
    }

    #editorInput:focus {
      outline: none;
      height: 100%;
    }

</style>
