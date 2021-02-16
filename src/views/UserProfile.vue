<template>
  <section class="user-profile main-container">
    <router-view></router-view>
  </section>
</template>
<script>
import Signup from '@/cmps/Signup.vue';
import Login from '../cmps/Login.vue';
import { mixins } from '../services/mixins';

export default {
  methods: {
    getRightRoute() {
      if (!this.$store.state.userProfile.currUser) this.$router.push('/userProfile/login');
      else this.$router.push('/userProfile/user-page');
    },
  },
  created() {
    mixins.scrollToTop();
    this.getRightRoute();
  },
  watch: {
    $route(to) {
      if (to.fullPath === '/userProfile') this.getRightRoute();
    },
  },
  components: {
    Signup,
    Login,
  },
};
</script>




















