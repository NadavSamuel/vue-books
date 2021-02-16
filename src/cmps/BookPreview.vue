<template>
  <article
    v-if="book"
    class="book-preview flex column justify-center align-center"
  >
   <router-link :to="`/book/${book._id}`"> <book-img :bookImgUrl="bookImg" :isOnSale="book.listPrice.isOnSale" /></router-link>
   <div class="preview-details">
    <h3 class="book-title">{{ book.title }}</h3>
    <h4>{{ bookAuthor }}</h4>
    <book-price :listPrice="book.listPrice" />
    </div>
  </article>
</template>

<script>
import BookImg from '../cmps/BookImg';
import { mixins } from '../services/mixins';
import BookPrice from '../cmps/BookPrice';

export default {
  props: ['book'],
  methods: {
    onDeleteBook() {
      this.$emit('onDeleteBook', this.book.id);
      this.$store.dispatch({
        type: 'setReviewDeletedSuccess',
        msgData: {
          msg: 'Book removed succssfully!',
          type: 'success',
        },
      });
    },
  },
  computed: {
    bookAuthor() {
      if ( typeof(this.book.authors) === 'string') return this.book.authors + '.';
      else return this.book.authors.join(',') + '.';
    },
    bookImg() {
      return this.book.thumbnail;
    },
  },
  components: {
    BookImg,BookPrice
  },
};
</script>
