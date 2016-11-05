<template>
    <div id="medium" v-on:initEditor="init"></div>
</template>


<script lang="babel">
import Store from '../store/store'
import MediumEditor from 'medium-editor'

export default {
  name: 'medium',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      let Editor = document.querySelector('#medium')
      console.log('Editor Initialized')
      new MediumEditor(Editor)
      this.$emit('initEditor')
    }
  }
}

// const initEditor = function () {
//   // let Editor = document.querySelector('#medium')
//   console.log('Editor Initialized')
//   // new MediumEditor(Editor, {
//   //   allowMultiParagraphSelection: true

//   // })
//   this.$emit('initEditor')
// }

</script>

<style>
    
    #medium {
        z-index: 0;
        padding: 30px;
        background-color: white;
        margin: 0 auto;
        margin-top: 3%;
        width: 80%;
        height: 95%;
        overflow: scroll;
        /*box-shadow: 9px 20px 35px -1px rgba(0,0,0,0.5);*/
    }

    #medium:focus {
      outline: none;
      height: 100%;
    }

</style>
