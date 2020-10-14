<template>
  <div id="app">
    <user-msg />
    <div id="nav" class="flex align-center justify-between space-between">
      <h2><router-link to="/">Books 'R' Us</router-link></h2>
      <div class="flex">
        <div><router-link to="/addBook">Add Book| </router-link></div>
        <div><router-link to="/userProfile">User Profile| </router-link></div>
        <div><router-link to="/about">About</router-link></div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import UserMsg from '@/cmps/UserMsg';

export default {
  components: {
    // AppHeader,
    // AppFooter,
    UserMsg,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 10vh;
  background: #ffffff99;
  padding: 0 25px;
  margin-bottom: 100px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #097f4a;
    }
  }
}
</style>
