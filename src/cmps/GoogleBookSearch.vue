<template>
  <section class="google-add-book">
    <input
      list="books"
      type="text"
      placeholder="Enter book name"
      v-model="bookName"
      v-debounce:500="getRelevantBooks"
      ref="input"
    />
    <google-book-preview
      :v-if="relevantBooks"
      v-for="(book, idx) in relevantBooks"
      :key="idx"
      @onSetBookToEdit="onSetBookToEdit"
      :book = "book"
    >
    </google-book-preview>
  </section>
</template>

<script>
import { googleBookService } from '../services/googleBooksService';
import  GoogleBookPreview  from '../cmps/GoogleBookPreview';

export default {
  name: 'GoogleBookSearch',
  data() {
    return {
      bookName: 'Dune',
      relevantBooks: null,
    };
  },
  mounted() {
    this.focusInput();
    this.getRelevantBooks()
  },
  methods: {
    async getRelevantBooks() {
      try {
        if (!this.bookName) {
          this.relevantBooks = null;
          return;
        }
        this.$store.dispatch({ type: 'toggleLoaderOn' });
        const books = await googleBookService.getArrangedBooks(this.bookName);
        this.relevantBooks = books;
        this.$store.dispatch({ type: 'toggleLoaderOff' });

      } catch (err) {
        console.log('error, ', err);
      }
    },
     onSetBookToEdit(book) {
      try {
        this.$store.dispatch({
          type: 'setBookToEdit',
          book
        });
        this.$router.push('/addBook')
      } catch(err){
          console.log('error, ',err)

      }
    },
    focusInput() {
      this.$refs.input.focus();
    },
  },
  components:{
    GoogleBookPreview
  }

};
</script>

<style>
</style>