<template>
  <section class="category-container main-container">
    <h1 class="p50 rem2">{{ category }}</h1>
    <book-filter @filtered="onSetFilter" />
    <book-list v-if="books" :books="booksToShow" /> 
        <no-books v-if="!booksToShow||!booksToShow.length ||!books " />
  </section>
</template>

<script>
import BookList from '../cmps/BookList';
import BookFilter from '../cmps/BookFilter.vue';
import NoBooks from '../cmps/NoBooks';
import { mixins } from '../services/mixins';

export default {
  components: {
    BookList,
    BookFilter,
    NoBooks
  },
  data() {
    return {
      category: null,
      books:null
    };
  },
  async created() {
    mixins.scrollToTop();
    this.$store.dispatch({ type: 'toggleLoaderOn' });
    this.category = this.$route.params.currCategory;
    try {
      await this.loadCategoryBooks();
    } catch (err) {
      console.log('error while loading category, ', err);
    }
    finally{
      this.$store.dispatch({ type: 'toggleLoaderOff' });

    }
  },
  computed: {
    booksToShow() {
       if (this.$store.getters.booksToShow) return this.$store.getters.booksToShow;
       else return null;
    },
  },
  methods: {
    async loadCategoryBooks() {
      try{
        const category =  this.category === 'All Books' ? '' : this.category;
        await this.$store.dispatch({
          type: 'loadBooks',
          filterBy: { category },
        });
        this.books = this.$store.getters.booksToShow;
      }
      catch(err){
        console.log('Could not load books,',err)
                this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: {
            msg: 'Sorry, could not load proper books',
            type: 'faliure',
          },
        });
      }
    },
    onSetFilter(filterBy) {
      this.$store.dispatch({ type: 'toggleLoaderOn' });
      this.$store.commit({ type: 'setBooksFilterBy', filterBy });
      this.$store.dispatch({ type: 'toggleLoaderOff' });
    },
  },
};
</script>

<style>
</style>