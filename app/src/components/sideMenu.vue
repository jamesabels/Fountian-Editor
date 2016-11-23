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
                console.log(this.publicState.editor.editor_status)
                console.log(this.publicState.editor.previous_status)
                
                if (this.publicState.editor.editor_status === 'editor') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: this.publicState.editor.previous_status, previous: 'editor'})
                }
                else if (this.publicState.editor.editor_status != 'editor') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: 'editor', previous: this.publicState.editor.editor_status})
                }

                // Store.dispatch('CHANGE_EDITOR_STATE', {value: 'editor', previous: this.publicState.editor.editor_status})
                // console.log(this.publicState.editor.editor_status)
            },
            previewFountain: function () {
                if (this.publicState.editor.editor_status === 'preview') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: this.publicState.editor.previous_status, previous: 'preview'})
                }
                else if (this.publicState.editor.editor_status != 'preview') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: 'preview', previous: this.publicState.editor.editor_status})
                }
            },
            toggleIndexCards: function () {
                if (this.publicState.editor.editor_status === 'index-cards') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: this.publicState.editor.previous_status, previous: 'index-cards'})
                }
                else if (this.publicState.editor.editor_status != 'index-cards') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: 'index-cards', previous: this.publicState.editor.editor_status})
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