<template>
  <section class = "reviews column-layout">
      <add-review @onReviewAdd="onReviewAdd" />
      <review-list @onDeleteReview="onDeleteReview" :reviews="bookReviews"/>
  </section>
</template>

<script>
import ReviewList from '../cmps/ReviewList'
import AddReview from '../cmps/AddReview'
export default {
    name:'reviews',
    props:['bookReviews'],
    created(){
    },
    components: {
    ReviewList,
    AddReview
  },
  methods:{
      onReviewAdd(newReview){
      this.$emit('updateReviews',newReview)
      },
      onDeleteReview(reviewId){
      this.$emit('onDeleteReview',reviewId)
    }
      
  }
}
</script>

<style>

</style>