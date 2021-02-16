<template>
  <section class="add-book-container main-container column-layout">
    <div class="new-book-nav full">
      <div><router-link to="/addBook">Add Book| </router-link></div>
      <div>
        <router-link to="/addBook/google-books">Search Books </router-link>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import NewEditBook from '../cmps/NewEditBook';
import { mixins } from '../services/mixins';

export default {
  name: 'AddBook',
  created() {
    mixins.scrollToTop();
  },
  methods: {
    async getRelevantBooks() {
      try {
        if (!this.bookName) {
          this.relevantBooks = null;
          return;
        }
        const books = await googleBookService.getArrangedBooks(this.bookName);
        this.relevantBooks = books;
      } catch (err) {
        console.log('error, ', err);
      }
    },
    async addBook(book) {
      try {
        const newBook = await this.$store.dispatch({ type: 'saveBook', book });
        console.log('newBook, ', newBook);
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: {
            msg: 'Book added succssfully!',
            type: 'success',
            bookId: newBook.id,
          },
        });
        this.$router.push('/');
      } catch (err) {
        console.log('error in msg! ', err);
      }
    },
  },

  components: {
    NewEditBook,
  },
};
</script> 

<style>
</style>