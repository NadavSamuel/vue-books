<template>
  <section class="userBooks-container">
      <h2 class="userBooks-header">The books you sell</h2>
    <book-list :books="userBooks" />
        <h1 v-if ="!userBooks.length">It looks like your whishlist is currentley empty</h1>

  </section>
</template>


<script>
import BookList from '../cmps/BookList';
import { bookService } from '../services/bookService';

export default {
  components: {
    BookList,
  },
  props:{
      userBooks: Array,
  },
//   created() {
//     this.$store.dispatch({ type: 'toggleLoaderOn' });
//     this.getUserBooks();
//     this.$store.dispatch({ type: 'toggleLoaderOff' });

//   },
//   methods: {
//     async getUserBooks() {
//     const byUserId = this.$store.state.userProfile.currUser._id
//     const userBooks = await bookService.query({byUserId});
//     this.userBooks = userBooks;
//     },
//   },
};
</script>

