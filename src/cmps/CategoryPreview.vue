<template>
<li class="book-preview flex column justify-center align-center">
     <router-link :to="`/category/${category}`"><div class="img-wrapper">
    <img :src="categoryImg" class="category-preview " alt="">
    </div>
    </router-link>
    {{category}}
    </li>
</template>

<script>
export default {
    props:['category'],
        computed:{
        categoryImg(){
          return  require(`@/assets/categories/${this.category}.jpg`)
        }
    }
}
</script>

<style>

</style>