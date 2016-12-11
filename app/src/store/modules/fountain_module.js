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
        script: '',
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
        LOAD_DEBUG_SCRIPT (context, payload) {
            context.dispatch('PARSE_SCENES_FROM_FILE', {value: payload.value})
            context.dispatch('PARSE_FOUNTAIN', {value: payload.value})
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
            console.log('JSON URL', payload.value)

            let file = fs.readFileSync(payload.value, 'utf8')
            
            fountain.parseJSON(file, true, function (output) {
                // var scenes = fountainActions.parseScenes(output)
                var pages = fountainActions.parsePages(output)
                // var script = fountainActions.parseLines(pages)

                // console.log(script)

                // console.log('FILE!!!!', file)
                
                console.log('PREPARE TO ADD PAGES', pages)

                pages.forEach(function (page, index) {
                    console.log('ADDING PAGE', {
                        page_name: page.page_name, 
                        page_desc: page.page_desc, 
                        tokens: page.tokens, 
                        text: page.text, 
                        scenes: fountain.parseJSON(page.text, true, function (output) {
                            console.log('OUTPUT!', output)
                            console.log('SCENES!!', output.script.scenes)
                            return fountainActions.parseScenes(output.script.scenes)
                        }),
                        html: page.html
                    })
                    context.commit('ADD_PAGE', {
                        page_name: page.page_name, 
                        page_desc: page.page_desc, 
                        tokens: page.tokens, 
                        text: page.text, 
                        scenes: fountain.parseJSON(page.text, true, function (output) {
                            console.log('OUTPUT!', output)
                            console.log('SCENES!!', output.script.scenes)
                            return fountainActions.parseScenes(output.script.scenes)
                        }),
                        html: page.html
                    })
                })
            })
        },
        PARSE_SCENES (context, payload) {
            fountain.parseJSON(payload.value, true, function (output) {
                console.log('OUTPUT!', output)
                console.log('SCENES!!', output.script.scenes)
                return output.script.scenes
            })
        }
    }
}

export default FountainModule
