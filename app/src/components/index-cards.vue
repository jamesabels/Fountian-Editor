<template>
    <draggable id="sortableIndexCards" class="dragArea row" :list="this.publicState.scenes.scenes" :options="{group:'people'}">
    <div
    v-for='(scene, index) in publicState.scenes.scenes' 
    :id="index + 1"
    class="index-card col-xs-4"
    :key="index">
      <div class="index-card-wrap">
        <div class="index-header">
          <strong>{{index + 1}}. {{scene.scene_name}}</strong>
        </div>
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
      padding: 5px 5px 10px 5px;
    }
    .index-card-wrap {
      width: 100%;
      background-color: white;
      padding: 20px;
    }
    .index-card { 
      padding: 3px;
      width: 100%
    }
    .index-header {
      background-color: #999;
    }
</style>
