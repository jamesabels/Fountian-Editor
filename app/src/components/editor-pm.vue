<template>
  <div class="editor-wrap">
    <div id="editorInput"></div>
    <h1 class="new-scene-message" v-show="this.publicState.pages.pages[publicState.pages.active_page - 1].scenes.length === 0">Please add a new scene</h1>
  </div>
</template>


<script lang="babel">
import Store from '../store/store.js'
var EditorState = require("prosemirror-state").EditorState
var EditorView = require("prosemirror-view").EditorView
const {schema: baseSchema} = require("prosemirror-schema-basic")
var history = require("prosemirror-history")
var keymap = require("prosemirror-keymap").keymap

export default {
  name: 'editorInputPM',
  data () {
    return {
      privateState: {
        active_scene: this.activeScene
      },
      publicState: Store.state
    }
  },
  props: ['activeScene'],
  ready: function () {

  },
  mounted: function () {
    console.log('PM EDITOR MOUNTED')
    this.initEditor()
  },
  methods: {
    initEditor () {
      let Editor = document.querySelector('#editorInput')
      
      var view = new EditorView(Editor, {
        state: EditorState.create({
          schema: baseSchema,
          plugins: [history.history(), keymap({
            "Mod-z": history.undo,
            "Mod-y": history.redo,
          })]
        }),
        onAction: function(action) {
          console.log('Detected Action', action)
          view.updateState(view.state.applyAction(action))
        }
      })

    }
  }
}

</script>

<style scoped>
    
    .editor-wrap {
        z-index: 0;
        margin: 0 auto;
        width: 80%;
        height: 95%;

    }

    .ProseMirror {
      background-color: salmon !important;
    }

    #editorInput {
        z-index: 0;
        padding: 0;
        background-color: white;
        margin: 0 auto;
        margin-top: 3%;
        width: 100%;
        border: none;
        box-shadow: 9px 20px 35px -1px rgba(0,0,0,0.5);
    }

    #editorInput:focus {
      outline: none;
      height: 100%;
    }
    
    .new-scene-message { 
      text-align: center;
      margin-top: 40vh;
      opacity: 0.5;
    }

</style>
