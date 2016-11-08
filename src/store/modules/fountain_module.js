// Import libs
import fountain from '../../../static/js/fountain.js'

const FountainModule = {
    state: {
        title: '',
        html: {
            script: '',
            title_page: ''
        },
        tokens: [],
        preview_status: false
    },
    mutations: {
        // STORE SCRIPT DATA IN STATE
        PARSE_SCRIPT (state, payload) {
            console.log('MUTATOR PAYLOAD ', payload)
            state.title = payload.value.title
            state.html.script = payload.value.html.script
            state.html.title_page = payload.value.html.title_page
            state.tokens = payload.value.tokens
        }
    },
    actions: {
        // PARSE FOUNTAIN FROM STRING
        PARSE_FOUNTAIN (context, payload) {
            let tempState = {
                title: '',
                html: {
                    script: '',
                    title_page: ''
                },
                tokens: []
            }

            fountain.parse(payload.value, true, function (output) {
                console.log('FOUNTAIN OUTPUT', output)
                tempState.title = output.title
                tempState.html.script = output.html.script
                tempState.html.title_page = output.html.title_page
                tempState.tokens = output.tokens
            })

            context.commit('PARSE_SCRIPT', {
                value: tempState
            })
        }
    }
}

export default FountainModule
