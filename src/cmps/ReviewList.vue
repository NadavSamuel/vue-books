<template >
    <ul v-if="reviews[0]" class="review-list clean-list review-grid ">
      <h1> Reviews for this book</h1>
        <book-review @onDeleteReview ="onDeleteReview" v-for="currReview in reviews" :key="currReview.id" :review="currReview" />
    </ul>
    <h2 class="p60" v-else>No reviews for this book yet</h2>
</template>

<script>
import BookReview from '@/cmps/BookReview'
export default {
  props: ['reviews'],
  methods:{
      onDeleteReview(reviewId){
      this.$emit('onDeleteReview',reviewId)
    }
  },
  components: {
    BookReview,
  },
};
</script>