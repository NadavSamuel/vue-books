<template>

  <main class="about-page flex align-center justify-center ">
      <article class="about column-layout" >
    <h1>Hi! my name is Nadav Samuel, and i'm a Full-Stack developer! </h1>
    <img :src="myImg"/>
    <p><span>Bookit</span> is the world's most exciting fictive bookstore in the world! I built it in order to master and learn <span>Vue.js</span> . </p>
    <div class="links-container column-layout">
              <a target="_blank" href="https://nadav-samuel-portfolio.herokuapp.com/#/"> Check out my portfolio!</a>

          <a target="_blank" href="https://www.linkedin.com/in/nadav-samuel-0b51291b9/"> Check out my linkedin page!</a>
          <strong>samuelna9@gmail.com </strong>
</div>
    </article>
  </main>
</template>
<script>
import { mixins } from '../services/mixins';

export default {
  created(){
    mixins.scrollToTop;
  },
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
