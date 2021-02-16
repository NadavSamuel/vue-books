<template>
      <div v-if="bookImgUrl" class="img-wrapper flex ">
      <div v-if="isOnSale" class="ribbon-wrapper">
        <div class="ribbon">
          </div>
        </div>
    <img :src="bookImgUrl"/>
    <div class="pusher"></div>
          </div>
 
</template>

<script>
export default {
props: ["bookImgUrl","isOnSale"],
name:"BookImg"
}
</script>

<style>

</style>