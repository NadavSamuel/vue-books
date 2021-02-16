
import userService from '@/services/userService'
import { whishlistService } from '../../services/whishlistService';

export default {
    state: {
        pickedColor: null,
        currUser: userService.checkExistingUser(),
        whishlist: null
    },
    getters: {
        pickedColor(state) {
            return state.pickedColor;
        }
    },
    mutations: {
        setPickedColor(state, { pickedColor }) {
            state.pickedColor = pickedColor
        },
        setCurrUser(state, { currUser }) {
            state.currUser = currUser
        },
        setWhishlist(state, { whishlist }) {
            state.whishlist = whishlist
        },
        removeBook(state, { id }) {
            const idx = state.books.findIndex(book => book.id === id)
            state.books.splice(idx, 1)
        },
    },
    actions: {
        async setPickedColor(context, { pickedColor }) {
            context.commit({ type: 'setPickedColor', pickedColor });
        },
        async signUser(context, { newUser }) {
            const userToSign = await userService.signup(newUser);
            context.commit({ type: 'setCurrUser', currUser: userToSign });
        },
        async onLogin({commit,dispatch}, { user }) {
            const currUser = await userService.login(user);
            commit({ type: 'setCurrUser', currUser });
            dispatch('getUserWhishlist');
        },
        getSigndUser({commit,dispatch}){
            const currUser = userService.checkExistingUser();
            commit({ type: 'setCurrUser', currUser });
        },
        async getUserWhishlist({state,commit}){
            const whishlist = await whishlistService.getWhishlist(state.currUser._id);
            commit({ type: 'setWhishlist', whishlist });
        },
        async getUserBooks({state,commit}){
            const whishlist = await whishlistService.getUserBooks(state.currUser._id);
            commit({ type: 'setWhishlist', whishlist });
        },
        async onRemoveWhishlist({commit}){
            commit({ type: 'setWhishlist', whishlist:null });
        },
        async onLogout({commit,dispatch}) {
            await userService.logout()
            commit({ type: 'setCurrUser', currUser: null });
            dispatch('onRemoveWhishlist');
        },
        async onUpdateWhishList({commit,state}, { whishlist }) {
            const updatedWhishlist = await whishlistService.update(whishlist,state.currUser._id);
            commit({ type: 'setWhishlist', whishlist: updatedWhishlist });
        },
    },
    modules: {}
}