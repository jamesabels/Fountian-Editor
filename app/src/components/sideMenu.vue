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
        <ul class="side-menu-list bottom-list-section">
             <li id="beerMe" class="bottom-side-menu-icon active-icon" v-on:click="fillBeer">
                <i v-if="this.privateState.beer === false" class="icon ion-ios-pint-outline"></i>
                <i v-else class="icon ion-ios-pint"></i>
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
                privateState: {
                    beer: false
                },
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
                if (this.publicState.editor.editor_status === 'editor') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: this.publicState.editor.previous_status, previous: 'editor'})
                }
                if (this.publicState.editor.previous_status === 'welcome') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: 'preview', previous: 'editor'})
                }
                else if (this.publicState.editor.editor_status != 'editor') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: 'editor', previous: this.publicState.editor.editor_status})
                }
            },
            previewFountain: function () {
                if (this.publicState.editor.editor_status === 'preview') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: this.publicState.editor.previous_status, previous: 'preview'})
                }
                if  (this.publicState.editor.previous_status === 'welcome') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: 'editor', previous: 'preview'})
                }
                else if (this.publicState.editor.editor_status != 'preview') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: 'preview', previous: this.publicState.editor.editor_status})
                }
            },
            toggleIndexCards: function () {
                if (this.publicState.editor.editor_status === 'index-cards') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: this.publicState.editor.previous_status, previous: 'index-cards'})
                }
                if(this.publicState.editor.previous_status === 'welcome') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: 'editor', previous: 'index-cards'})
                }
                else if (this.publicState.editor.editor_status != 'index-cards') {
                    Store.dispatch('CHANGE_EDITOR_STATE', {value: 'index-cards', previous: this.publicState.editor.editor_status})
                }
            },
            fillBeer: function () {
                Store.dispatch('OPEN_EXTERNAL_LINK', {value: 'www.cash.me/jamesabels'})
                this.privateState.beer = true
            }
        }
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  .side-menu {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #111;
  }

  .side-menu-list {
    z-index: 1;
    position: relative;
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
    font-size: 3em;
  }

  .side-menu-icon:hover {
    background-color: teal;
  }

  .bottom-list-section {
      position: absolute;
      z-index: 999;
      width: 70px;
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: center;
      bottom: 0;
  }

  .bottom-side-menu-icon {
    color: white;
    font-size: 3em;
    margin: 0 0 0 10px;
  }

  .bottom-side-menu-icon:hover {}
  
</style>