<template>
  <transition name="fade">
    <li v-enter class="review column-layout">
      <button @click="onDeleteReview" class="align-self-start">X</button>
      <h2>By {{ review.by }}</h2>
      <stars :rate="rate" :isReadyReview="true" />
      <!-- <span class="align-self-start">Rate: {{ review.rate }}</span -->
      ><br />
      <span class="align-self-start">Read at {{ review.date }}</span>
      <p>{{ review.txt }}</p>
    </li>
  </transition>
</template>

<script>
import Stars from '@/cmps/Stars'
export default {
  name:'BookReview',
  props: ['review'],
  data(){
    return{
      rate:null
    }
  },
  created(){
    this.rate = this.review.rate
  },
  methods: {
    onDeleteReview() {
      this.$emit('onDeleteReview', this.review.id);
    },
  },
  components:{
    Stars
  }
};
</script>

<style>
</style>