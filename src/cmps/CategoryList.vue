<template>
  <ul class="category-list card-grid clean-list">
    <category-preview v-for="category in categories" :key="category" :category="category" />
  </ul>
</template>

<script>
import CategoryPreview from '../cmps/CategoryPreview'
export default {
    components:{CategoryPreview},
    props:{
        categories:Array
    },

};
</script>

<style>
</style>