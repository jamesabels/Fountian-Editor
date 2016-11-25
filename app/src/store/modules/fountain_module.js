// Import libs
import fountain from '../../static/js/fountain-js.min.js'
// import fountain from '../../../static/js/fountain.js'
import fountainActions from '../actions/fountian_actions.js'
const fs = require('fs')

const FountainModule = {
    state: {
        title: '',
        html: {
            script: '',
            title_page: ''
        },
        tokens: [],
        characters: [],
        scene_headings: [],
        action: [],
        dialogue_begin: [],
        dialogue_end: [],
        dialogue: [],
        parens: [],
        notes: [],
        centered: [],
        page_break: [],
        transition: [],
        synopsis: [],
		section: [],
        preview_status: false
    },
    mutations: {
        // STORE SCRIPT DATA IN STATE
        PARSE_SCRIPT (state, payload) {
            // console.log('MUTATOR PAYLOAD ', payload)
            state.title = payload.value.title
            state.html.script = payload.value.html.script
            state.html.title_page = payload.value.html.title_page
            state.tokens = payload.value.tokens
            state.characters = payload.value.characters
            state.scene_headings = payload.value.scene_headings
            state.action = payload.value.action
            state.dialogue_begin = payload.value.dialogue_begin
            state.dialogue_end = payload.value.dialogue_end
            state.dialogue = payload.value.dialogue
            state.parens = payload.value.parens
            state.notes = payload.value.notes
            state.centered = payload.value.centered
            state.page_break = payload.value.page_break
            state.transition = payload.value.transition
            state.synopsis = payload.value.synopsis
            state.section = payload.value.section
        }
    },
    actions: {
        LOAD_DEBUG_SCRIPT (context, script) {
            context.dispatch('PARSE_SCENES_FROM_FILE', {value: script})
            context.dispatch('PARSE_FOUNTAIN', {value: script})
        },
        LOAD_FOUNTAIN_FILE (context, payload) {
            console.log(payload.value)
            context.dispatch('PARSE_SCENES_FROM_FILE', {value: payload.value})
            context.dispatch('PARSE_FOUNTAIN', {value: payload.value})
        },
        // PARSE FOUNTAIN FROM STRING
        PARSE_FOUNTAIN (context, payload) {
            // Store fountain data to state
            fountain.parse(payload.value, true, function (output) {
                // console.log(output)
                context.commit('PARSE_SCRIPT', {
                    value: fountainActions.parseFountain(output)
                })
            })
        },
        PARSE_SCENES_FROM_FILE (context, payload) {
            let file = fs.readFileSync(payload.value, 'utf8')
            
            fountain.parseJSON(file, true, function (output) {
                var scenes = fountainActions.parseScenes(output)
                scenes.forEach(function(element, index) {
                    context.commit('ADD_SCENE', element)
                })
            })
        }
    }
}

export default FountainModule
