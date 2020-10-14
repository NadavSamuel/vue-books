<template>
  <article
    v-if="book"
    class="book-preview flex column justify-center align-center"
  >
    <button @click="onDeleteBook" class="align-self-start">X</button>
    <h3>{{ book.title }}</h3>
    <book-img :bookImgUrl="bookImg" :isOnSale="book.listPrice.isOnSale" />
    <p>by {{ bookAuthor }}</p>
    <span>{{ formatedPrice }}</span>
    <router-link :to="`/book/${book.id}`">Book page</router-link>
  </article>
</template>

<script>
import BookImg from '../cmps/BookImg';
export default {
  props: ['book'],
  created() {},
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
      return this.book.authors[0];
    },
    formatedPrice() {
      return new Intl.NumberFormat(this.book.listPrice.currencyCode, {
        style: 'currency',
        currency: this.book.listPrice.currencyCode,
      }).format(this.book.listPrice.amount);
    },
    bookImg() {
      return this.book.thumbnail;
    },
  },
  components: {
    BookImg,
  },
};
</script>
<style>
.img-wrapper {
  position: relative;
}
</style>