<template>
    <div id="page"></div>
</template>


<script lang="babel">
import Store from '../store/store.js'

export default {
  name: 'Page',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: () => {}
}

</script>

<style>
    
    #page {
        background-color: white;
        margin: 0 auto;
        margin-top: 3%;
        width: 80%;
        height: 100%;
        box-shadow: 9px 20px 35px -1px rgba(0,0,0,0.5);
    }

</style>
