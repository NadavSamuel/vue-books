<template>
  <section class="book-app main-container page">
    <div class="hero">
      <h1>Bookit</h1>
      <img :src="heroGif" alt="" />
    <h2>A second-hand books online platform.</h2> 
    </div>
    <div class="featured-books-wrapper">
      <h2>Top Rated Books</h2>
      <book-list @onDeleteBook="onDeleteBook" :books="popularBooks" />
    </div>
    <div class="featured-books-wrapper">
      <h2>New on the shelf</h2>
      <book-list @onDeleteBook="onDeleteBook" :books="newBooks" />
    </div>
  </section>
</template>

<script>
import BookList from '../cmps/BookList';
import BookFilter from '../cmps/BookFilter';
import NoBooks from '../cmps/NoBooks';
import { mixins } from '../services/mixins';

export default {
  name: 'BookApp',
  data() {
    return {
      books: [],
      filterBy: null,
    };
  },
  async created() {
    mixins.scrollToTop();
    await this.loadBooks();
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow;
    },
    popularBooks() {
      return this.$store.getters.popularBooks;
    },
    newBooks() {
      return this.$store.getters.newBooks;
    },
    heroGif() {
      return require('../assets/imgs/Hero.gif');
    },
  },
  methods: {
    onSetFilter(filterBy) {
      this.$store.dispatch({ type: 'toggleLoaderOn' });
      this.$store.commit({ type: 'setBooksFilterBy', filterBy });
      this.$store.dispatch({ type: 'toggleLoaderOff' });
    },
    async loadBooks() {
      this.$store.dispatch({ type: 'loadBooks' });
    },
    async onDeleteBook(id) {
      this.$store.dispatch({ type: 'removeBook', id });
    },
  },
  components: {
    BookList,
    BookFilter,
    NoBooks
  },
};
</script>
