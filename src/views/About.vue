<template>
  <main class="about-page flex align-center justify-center vh100 ">
    <section class ='about-container  main-container '>
      <article class="about column-layout" >
    <h1>Hi! my name is Nadav Samuel, and i'm a Full-Stack developer! </h1>
    <img :src="myImg"/>
    </article>
    </section>
  </main>
</template>
<script>
export default {
  computed: {
    myImg(){
      const myImg = require('../assets/me.jpg')
      return myImg
    }
  },
};
</script>
<style  scoped>

img{
  width:50%
}

</style>
