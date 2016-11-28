<template>
    <draggable id="sortableIndexCards" class="dragArea list-group sortable-card row" :list="this.publicState.pages.pages" :options="{group:'people'}">
    <div
    v-for='(page, index) in publicState.pages.pages' 
    :id="index + 1"
    class="index-card list-group-item col-xs-auto"
    v-on:click="getPage"
    :key="index">
      <div class="index-header ">
        <strong>{{index + 1}}. {{page.page_name}}</strong>
      </div>
      <div class="index-card-wrap">
        <div class="index-card-body">
          <p>{{page.page_desc}}</p>
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
     getPage (event) {
        // Highlight active scene
        Store.dispatch('SET_ACTIVE_PAGE', {value: event.currentTarget.id})
        Store.dispatch('HIGHLIGHT_ACTIVE_PAGE', {value: event.currentTarget.id})
        console.log(event.currentTarget.id)
      }
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
       border-bottom: solid 5px salmon;
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
