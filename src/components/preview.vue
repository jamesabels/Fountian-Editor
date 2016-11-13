<template>
  <div id="textPreview"></div>
</template>


<script lang="babel">
import Store from '../store/store.js'

export default {
  name: 'preview',
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
      Store.dispatch('PARSE_FOUNTAIN', {value: this.publicState.scenes.scenes[this.publicState.scenes.active_scene - 1].scene})
      Store.dispatch('UPDATE_PREVIEW', {el: '#textPreview', value: this.publicState.script.html.script})
    }
  }
}
</script>

<style>
    
    #textPreview {
        font-family: Courier New, Courier, monospace;
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

    #textPreview:focus {
      outline: none;
      height: 100%;
    }

    #textPreview>h3 {
      font-size: 14pt;
      font-weight: bold;
      text-transform: uppercase;     
      }

    #textPreview>p {
      font-size: 10pt;
      font-weight: 500;
    }

    #textPreview>div.dialogue{
      text-align: center
    }

    #textPreview>div.dialogue>h4{
      font-size: 14pt;
      font-weight: bold;
    }



</style>
