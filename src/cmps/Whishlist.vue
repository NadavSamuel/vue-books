<template>
  <section class="whishlist-container">
      <h2 class="whishlist-header">Your Whishlist</h2>
    <book-list v-if="currWhishlist" :books="currWhishlist" />
    <h1 v-if ="!whishlistItems.length">It looks like your whishlist is currentley empty</h1>
  </section>
</template>

<script>
import BookList from '../cmps/BookList';
export default {
  data(){
    return{
      currWhishlist:null
    }
  },
  components: {
    BookList,
  },
  props:{
      whishlistItems: Array,
  },
  created() {
    this.currWhishlist= this.whishlistItems.filter(book => book);
  },


};
</script>
