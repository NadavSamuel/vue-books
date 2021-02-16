<template>
  <div id="app">
    <user-msg />
    <loader v-if="this.$store.state.usrMsgModule.isLoader" />
    <navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer-cmp />
  </div>
</template>
<script>
import UserMsg from '@/cmps/UserMsg';
import Navbar from '@/cmps/Navbar';
import Loader from '@/cmps/Loader';
import FooterCmp from '@/cmps/FooterCmp';
import 'vue2-animate/dist/vue2-animate.min.css';

export default {
  data() {
    return {
      isLoader: this.$store.state.usrMsgModule.isLoader,
    };
  },
  async created() {
    this.$store.dispatch({ type: 'toggleLoaderOn' });
    this.loadBooks();
    await this.getLoggedInUserData();
    this.$store.dispatch({ type: 'toggleLoaderOff' });
  },

  methods: {
    loadBooks() {
      this.$store.dispatch({ type: 'loadBooks' });
    },
    getLoggedInUserData() {
      if (this.$store.state.userProfile.currUser)
        this.$store.dispatch({ type: 'getUserWhishlist' });
    },
  },
  components: {
    UserMsg,
    Loader,
    Navbar,
    FooterCmp,
  },
};
</script>
