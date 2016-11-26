<template>
    <draggable id="sortableIndexCards" class="dragArea list-group row" :list="this.publicState.scenes.scenes" :options="{group:'people'}">
    <div
    v-for='(scene, index) in publicState.scenes.scenes' 
    :id="index + 1"
    class="index-card list-group-item col-xs-auto"
    :key="index">
      <div class="index-header ">
        <strong>{{index + 1}}. {{scene.scene_name}}</strong>
      </div>
      <div class="index-card-wrap">
        <div class="index-card-body">
          <p>{{scene.scene_desc}}</p>
        </div>
      </div>
  </div>
  </draggable>
</template>


<script lang="babel">
import Store from '../store/store.js'
import draggable from 'vuedraggable'

export default {
  name: 'IndexCards',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  },
  mounted: function () {
  },
  methods: {
  },
  components: {
    draggable
  }
}
</script>

<style scoped>
    #sortableIndexCards {
      width: 90%;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 30px;
    }
    .index-card-wrap {
      width: 300px;
      background-color: white;
      padding: 20px;
      height: 100px;
    }

    .index-card-wrap:hover {
       border-bottom: solid 5px lightsalmon;
    }

    .index-card { 
      padding: 3px;
      margin-top: 5px;
    }

    .index-active {

    }
    
    .index-header {
      width: 300px;
      height: 40px;
      padding: 10px;
      font-size: 0.9em;
      font-family: Helvetica, Arial, sans-serif;
      font-weight: 200;
      letter-spacing: 0.033em;
      text-transform: uppercase;
      background-color: #111;
      color: white;
      border-left: solid 10px #888;
    }
    
    .index-card-body {
      height: 60px;
    }
</style>
