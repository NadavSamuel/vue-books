export default {
    state: {
        msgData: null
    },
    getters: {
        msgToShow(state) {
            return state.msgData
        }
    },
    mutations: {
        clearMsg(state){
           state.msgData = null
        },
        setReviewAddedSuccess(state,  msgData) {
            // console.log('msg from action, ',msgData.msg.msgData)
            state.msgData = msgData.msg.msgData
        },
        setReviewRemovedSuccess(state, msgData ) {
            state.msgData = msgData
            state.msgData = msgData.msg.msgData
        },
    },
    actions: {
        async clearMsg(context) {
            context.commit({ type: 'clearMsg' })
        },
        async setReviewAddedSuccess({commit},msg) {
            commit({ type: 'setReviewAddedSuccess', msg })
        },
        async setReviewDeletedSuccess({commit},msg) {
            commit({ type: 'setReviewRemovedSuccess', msg })
        },

    },
    modules: {}
}
