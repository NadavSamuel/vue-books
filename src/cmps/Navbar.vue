
<template>
  <nav id="nav" class="navbar">
    <div class="navbar-container flex align-center">
      <div class="nav-links">
      <h2><router-link to="/">Bookit</router-link></h2>
      <svg
        @click="toggleMenu()"
        class="cursor-pointer phone-view"
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="20" rx="8"></rect>
        <rect y="30" width="100" height="20" rx="8"></rect>
        <rect y="60" width="100" height="20" rx="8"></rect>
      </svg>
      <div class="main-nav-container" :class="{ hide: !isShowMenu }">
        <ul :class="navbarLayout">
          <li @click="toggleMenu(true)"><router-link  to="/categories">Categories</router-link></li>
          <li @click="toggleMenu(true)"><router-link  to="/addBook">Add Book</router-link></li>
          <li @click="toggleMenu(true)"><router-link  to="/userProfile">User Profile </router-link></li>
          <li @click="toggleMenu(true)"><router-link  to="/about">About</router-link></li>
        <li class="user-greet" v-if="currUser">
          <div class="user-greet-info">
            <p>Hello,{{currUser}}</p>
            <div>
  <sui-icon-group size="large">
    <sui-icon name="circle"  size="big" outline style="margin-right:0px" />
        <sui-popup hoverable name="popup" inline="true" class="popup" style="margin:0px" position="top center">
          <button @click="onLogout">Logout</button>

    <sui-icon slot="trigger" name="user" />
        </sui-popup>

  </sui-icon-group>
  </div>
            </div>
            </li>
        </ul>
      </div>
      </div>
    </div>
    <div @click="toggleMenu()">
      <black-screen :isCursorPointer="true"  v-if="isShowMenu"></black-screen>
    </div>
  </nav>
</template>

<script>
import BlackScreen from '@/cmps/BlackScreen';
import UserPopup from '@/cmps/UserPopup';
export default {
  components:{
    BlackScreen,UserPopup
  },
  data() {
    return {
      isShowMenu: false,
      windowSize: true,
    };
  },

  methods: {
    onLogout(){
        this.$store.dispatch({ type: 'onLogout'});
        this.isShowMenu = false;
        if(this.$router.currentRoute.fullPath !== '/')this.$router.push('/');
    },
    toggleMenu(isMobile = false) {
      if (isMobile) {
        this.isShowMenu = false;
        return;
      }
      this.isShowMenu = !this.isShowMenu;
    },
  },
  components: {
    BlackScreen,
  },
  computed: {
    currUser(){
      if(this.$store.state.userProfile.currUser) return this.$store.state.userProfile.currUser.username

    },
    navbarLayout() {
      return !this.windowSize
        ? 'main-nav-container clean-list column-layout mobile-links'
        : 'main-nav-container clean-list';
    },
  },
};
</script>



