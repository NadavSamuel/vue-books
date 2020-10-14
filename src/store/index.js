import Vue from 'vue'
import Vuex from 'vuex'
import bookModule from '@/store/modules/book.module.js'
import usrMsgModule from '@/store/modules/usrMsgModule.module.js'
import userProfile from '@/store/modules/userProfile.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // user: {
    //   name: 'jj',
    //   address: 'metola'
    // },
  },
  getters: {
    // user(state) {
    //   return state.user
    // },
  },
  mutations: {
    // setNewUser(state, payload) {
    //   // if (state.user === 'jj') console.log('jj was here');
    //   state.user = payload.user
    // },
  },
  actions: {

  },
  modules: {
    bookModule,
    usrMsgModule,
    userProfile
  }
})
