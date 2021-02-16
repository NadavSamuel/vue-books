<template>
  <section class="categories-container main-container">
    <category-list :categories="categories" />
  </section>
</template>

<script>
import CategoryList from '@/cmps/CategoryList.vue';
import { mixins } from '../services/mixins';

export default {
  components: { CategoryList },
  created() {
    mixins.scrollToTop();
  },
  data() {
    return {
      categories: this.$store.state.bookModule.categories,
    };
  },
};
</script>

<style>
</style>