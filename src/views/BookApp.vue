<template>
  <div class="book-app main-container">
    <h1>Books R Us!</h1>
    <BookFilter @filtered="setFilter" />
    <BookList @onDeleteBook="onDeleteBook" :books="booksToShow" />
  </div>
</template>

<script>
// @ is an alias to /src
import { bookService } from '../services/bookService';
import BookList from '../cmps/BookList';
import BookFilter from '../cmps/BookFilter';
export default {
  name: 'BookApp',
  data() {
    return {
      books: [],
      filterBy: null,
    };
  },
  async created() {
    this.loadBooks();
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow;
    },
  },
  methods: {
    setFilter(filterBy) {
      this.$store.commit({ type: 'setBooksFilterBy', filterBy });
    },
    async loadBooks() {
      this.$store.dispatch({ type: 'loadBooks' });
    },
    async onDeleteBook(id) {
      this.$store.dispatch({ type: 'removeBook',id });
    },
  },
  components: {
    BookList,
    BookFilter,
  },
};
</script>
