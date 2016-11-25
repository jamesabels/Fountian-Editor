<template>
    <div id="welcome" class="row">
        <div class="side-panel col-xs-6">
            <div class="title">Feature Length<span class="underscore">_</span></div>
        </div>
        <div class="action-panel col-xs-6">
            <div class="welcome-button-group row">

                <div class="open-file-button welcome-action-button row" v-on:click="openFile">
                    <div class="button-icon-wrap col-xs-4">
                        <i class="icon ion-ios-folder-outline welcome-button-icon"></i>
                    </div>
                    <div class="button-text-wrap col-xs-8">
                        <p class="button-text">Open File</p>
                    </div>
                </div>

                <div class="new-file-button welcome-action-button row" v-on:click="newFile">
                    <div class="button-icon-wrap col-xs-4">
                        <i class="icon ion-ios-paper-outline welcome-button-icon"></i>
                    </div>
                    <div class="button-text-wrap col-xs-8">
                        <p class="button-text">New File</p>
                    </div>
                </div>

                <div class="parse-file-button welcome-action-button row">
                    <div class="button-icon-wrap col-xs-4">
                        <i class="icon ion-ios-printer-outline welcome-button-icon"></i>
                    </div>
                    <div class="button-text-wrap  col-xs-8">
                        <p class="button-text">Parse Script</p>
                    </div>
                </div>

                 <div class="feedback-button welcome-action-button row">
                    <div class="button-icon-wrap  col-xs-4">
                        <i class="icon ion-ios-chatboxes-outline welcome-button-icon"></i>
                    </div>
                    <div class="button-text-wrap  col-xs-8">
                        <p class="button-text">Feedback</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script lang="babel">
import Store from '../store/store.js'

export default {
  name: 'welcome',
  data () {
    return {
      privateState: {},
      publicState: Store.state,
    }
  },
  mounted: () => {

  },
  methods: {
      openFile: function (event) {
        Store.dispatch('OPEN_FILE')

      },
      newFile: function (event) {
          Store.dispatch('NEW_FILE')
          Store.dispatch('ADD_SCENE', {scene_name: 'Scene One', scene_desc: 'Please add a short description', scene: ''})
      }
  }
}

</script>

<style>
    
#welcome {
    /*width: 100%;*/
    height: calc(100vh - 20px);
    background-image: url('../static/img/welcome-bg.jpg');
    background-size: cover;
    background-color: #111;
    margin: 0;
    padding: 0;
}

.side-panel {
    background-color: rgba(0,0,0,0.5);
    color: white;
    /*width: 50%;*/
    /*height: calc(100vh - 20px);*/
    float: left;
}

.title {
    z-index: 999;
    color: white;
    font-size: 3em;
    letter-spacing: 0.1em;
    margin-top: 20vh;
}

.underscore {
    color: turquoise;
}

.action-panel {
    background-color: rgba(0,0,0,0.8);
    color: white;
    /*width: 50%;*/
    /*height: calc(100vh - 20px);*/
    float: right;
}

.welcome-button-group {
    position: absolute;
    margin: 0 auto;
    margin-top: 5vh;
}

.welcome-action-button {
    font-size: 0.9em;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    letter-spacing: 0.09em;
    font-size: 2.2em;
    text-align: center;
    width: 80%;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 5vh;
}

.welcome-action-button:hover {
    border-left: solid 5px turquoise;
}

.button-icon-wrap {
    background-color: #222;
    padding: 0;
    height: 100px;
    /*width: 30%;*/
    float: left;
    padding: 5px 30px 30px 30px;
}

.welcome-button-icon {
    font-size: 2em !important;
}

.button-text-wrap {
    font-size: 0.7em;
    background-color: #444;
    float: left;
    /*width: 70%;*/
    height: 100px;
    padding: 15px;
}

</style>
