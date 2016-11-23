<template>
    <div class="side-menu">
        <ul class="side-menu-list">
            <li class="side-menu-icon active-icon" v-on:click="toggleEditor">
            <i class="icon ion-ios-paper-outline"></i>
            </li>
            <li class="side-menu-icon" v-on:click="toggleIndexCards">
            <i class="icon ion-ios-photos-outline"></i>
            </li>
            <li class="side-menu-icon" v-on:click="previewFountain">
            <i class="icon ion-ios-film-outline"></i>
            </li>
        </ul>
    </div>
</template>

<script>
    import Store from '../store/store.js'

    export default {
        name: 'sideMenu',
        data () {
            return {
                privateState: {},
                publicState: Store.state
            }
        },
        mounted: function () {
            // Store.dispatch('INIT_FILE_TREE')
        },
        components: {
        },
        methods: {
            toggleEditor: function () {
                if (this.publicState.editor.preview_status) {
                    this.publicState.editor.preview_status = false 
                }
                else if (this.publicState.editor.index_status) {
                    this.publicState.editor.index_status = false
                }
            },
            previewFountain: function () {
                switch (this.publicState.editor.preview_status) {
                    case false:
                    this.publicState.editor.preview_status = true
                    break
                    case true:
                    this.publicState.editor.preview_status = false
                    break
                }
            },
            toggleIndexCards: function () {
                switch (this.publicState.editor.index_status) {
                    case false:
                    this.publicState.editor.index_status = true
                    break
                    case true:
                    this.publicState.editor.index_status = false
                    break
                }
            },
        }
    }
</script>

<style scoped>
  .side-menu {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #111;
  }

  .side-menu-list {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .side-menu-icon {
    padding: 0;
    margin: 0 0 10px 10px;
    /*background-color: #222;*/
    color: white;
    font-size: 3.5em;
  }

  .side-menu-icon:hover {
    background-color: teal;
  }
</style>