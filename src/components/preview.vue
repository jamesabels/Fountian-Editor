<template>
  <div id="text-preview"></div>
</template>


<script lang="babel">
import Store from '../store/store'

export default {
  name: 'preview',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  }
}

</script>

<style>
    
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
