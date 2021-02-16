<template>
  <div class="book-option flex align-center space-evenly">
    <div class="option-details column-layout">
      <h2>{{ book.title }}</h2>
      <button @click="onSetBookToEdit(book)">Add</button>
    </div>
    <img :src="book.thumbnail" v-if="book" />
  </div>
</template>

<script>
export default {
  props: ['book'],
  methods: {
    onSetBookToEdit() {
      this.$emit('onSetBookToEdit', this.book);
    },
  },
};
</script>

<style>
</style>