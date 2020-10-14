<template>
  <section class="add-review">
    <h4>What did you think?</h4>
    <form @submit.prevent="onSendReview" class="column-layout">
      <div class=" flex space-between">
      <input type="text" ref="input" placeholder="Enter your name" v-model="review.by" />
      <input type="date" v-model="review.date" />
      <stars :rate="review.rate" @changeRate="changeRate"/>
      
<!-- 
      <input
        type="number"
        placeholder="Enter rate"
        v-model="review.rate"
        min="1"
        max="5"
      /> -->
      </div>
      <textarea placeholder="Enter your opinion" v-model="review.txt" />
      <button>Send</button>
    </form>
  </section>
</template>

<script>
import Stars from '@/cmps/Stars'
export default {
  date() {
    return {
      review: null,
    };
  },
  created() {
  this.setEmptyReview()

  },
    mounted() {
    this.focusInput()
  },
  methods: {
    onSendReview() {
      this.$emit('onReviewAdd', this.review);
      this.setEmptyReview()
    },
    changeRate(newRate){
      this.review.rate = newRate
    },
    focusInput() {
    this.$refs.input.focus()
},
setEmptyReview(){
        this.review = {
        by: '',
        rate: 3,
        txt: '',
        date: '',
      };
}

  },
  components:{
    Stars
  }
};
</script>

<style>
</style>