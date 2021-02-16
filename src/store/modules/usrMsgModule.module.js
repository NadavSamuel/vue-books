export default {
    state: {
        msgData: null,
        isLoader:false
    },
    getters: {
        msgToShow(state) {
            return state.msgData;
        }
    },
    mutations: {
        clearMsg(state){
           state.msgData = null;
        },
        toggleLoaderOn(state){
           state.isLoader = true;
        },
        toggleLoaderOff(state){
           state.isLoader = false;
        },
        setReviewAddedSuccess(state,  msgData) {
            state.msgData = msgData.msg.msgData;
        },
        setReviewRemovedSuccess(state, msgData ) {
            state.msgData = msgData;
            state.msgData = msgData.msg.msgData;
        },
    },
    actions: {
        async clearMsg(context) {
            context.commit({ type: 'clearMsg' });
        },
         toggleLoaderOn({commit}) {
         commit({ type: 'toggleLoaderOn' });
        },
         toggleLoaderOff({commit}) {
         setTimeout(() => commit({ type: 'toggleLoaderOff' }),1000);
        },
        async setReviewAddedSuccess({commit,state},msg) {
            if(state.msgData) {
                commit({ type: 'clearMsg' });
                setTimeout(() => commit({ type: 'setReviewAddedSuccess', msg }),10);
            }
           else commit({ type: 'setReviewAddedSuccess', msg });
        },
        async setReviewDeletedSuccess({commit},msg) {
            commit({ type: 'setReviewRemovedSuccess', msg });
        },

    },
    modules: {}
}
