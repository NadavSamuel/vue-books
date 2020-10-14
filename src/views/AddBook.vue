<template>
  <section class="add-book-container main-container">
    <input
      list="books"
      type="text"
      placeholder="Enter book name"
      v-model="bookName"
      @input="getRelevantBooks"
      ref="input"
    />
    <!-- <div v-for="book in relevantBooks" :key="book.title" >
        <h1>2222</h1>
    </div> -->
    <!-- <datalist for="books"> -->
    <div
      v-for="(book, idx) in relevantBooks"
      :key="idx"
      :v-if="relevantBooks"
      class="book-option flex align-center space-around"
    >
      <h2>{{ book.title }}</h2>
      <img :src="book.thumbnail" v-if="book" />
      <button @click="addBook(book)">+</button>
    </div>
    <!-- </datalist> -->
  </section>
</template>

<script>
import { googleBookService } from '../services/googleBooksService';
export default {
  name: 'AddBook',
  data() {
    return {
      bookName: '',
      relevantBooks: null,
    };
  },
  async created() {
    // console.log('expirement, ', await googleBookService.getArrangedBooks() )
  },
  mounted() {
    this.focusInput();
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
      } catch {
        console.log('aaaa');
      }
    },
    async addBook(book) {
      try {
        const newBook = await this.$store.dispatch({ type: 'saveBook', book });
        console.log('newBook, ', newBook);
        this.$store.dispatch({
          type: 'setReviewDeletedSuccess',
          msgData: {
            msg: 'Book added succssfully!',
            type: 'success',
            bookId: newBook.id,
          },
        });
      } catch {}
    },
    focusInput() {
      this.$refs.input.focus();
    },
  },
  computed: {
    // async booksToAdd() {
    //   if (this.bookName) {
    //     const relevantBooks = await googleBookService.getArrangedBooks(this.bookName);
    //     console.log(relevantBooks);
    //     return relevantBooks;
    //   } else return false;
    // },
  },
};
</script> 

<style>
</style>