<template>
  <section class="book-list">
    <ul class="clean-list card-grid">
      <li class="book-in-list " v-for="currBook in books" :key="currBook.id">
        <BookPreview @onDeleteBook="onDeleteBook" :book="currBook" />
      </li>
    </ul>
  </section>
</template>

<script>
import BookPreview from '@/cmps/BookPreview.vue'
export default {
  props: ['books'],
  methods:{
    onDeleteBook(id){
      this.$emit('onDeleteBook',id)

    }
  },
  components: {
    BookPreview,
  },
};
</script>