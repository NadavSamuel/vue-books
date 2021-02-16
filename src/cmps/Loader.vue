<template>
  <div class="loader-wrapper">
      <black-screen :isCursorPointer="false"></black-screen>
    <div class="loader book">
      <figure class="page"></figure>
      <figure class="page"></figure>
      <figure class="page"></figure>
    </div>
    <h1>Reading</h1>
  </div>
</template>

<script>
import BlackScreen from './BlackScreen.vue';

export default {
      components:{
    BlackScreen
  },
};
</script>

