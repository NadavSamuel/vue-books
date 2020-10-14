<template>
<p class="long-text" @click="toggleShortText">
    {{text}}
</p>
</template>

<script>
export default {
  name:'LongText',
  props: ['text'],
  methods:{
     toggleShortText(){
         this.$emit('toggleShortText')
     } 
  }
};
</script>

