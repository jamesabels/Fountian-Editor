const TokenModule = {
    state: {
        current_tokens: []
    },
    mutations: {
        GET_TOKENS (state, payload) {
            state.current_tokens = payload.value
        }
    },
    actions: {
        GET_TOKENS (context, payload) {
            console.log('GETTING TOKENS!')
            console.log(payload.value)
            context.commit('GET_TOKENS', payload)
        }
    }
}

export default TokenModule
