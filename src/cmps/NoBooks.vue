<template>
  <div class="no-books column-layout">
    <h2>Seem's like we dont have the book that you are looking for.</h2>
    <img :src="sadBookImg" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    sadBookImg() {
      const sadBookImg = require('../assets/imgs/sadbook.jpg');
      return sadBookImg;
    },
  },
};
</script>

<style>
img{
    width: 50%;
}
</style>