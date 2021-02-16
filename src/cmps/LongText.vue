<template>
  <p class="long-text" :class="bookDescription" @click="toggleShortText">
    {{ textToShow }}
  </p>
</template>

<script>
export default {
  name: 'LongText',
  props: ['text', 'isShortText'],
  methods: {
    toggleShortText() {
      if (!this.text) return
      this.$emit('toggleShortText');
    },
  },
  computed: {
    textToShow() {
      if (!this.text) return 'No Avilable description for this book.'
        if (!this.isShortText || this.text.length <100 ) return this.text;
        else return this.text.substring(0, 100) + '...';
    },
    bookDescription(){
      if(this.text) return 'cursor-pointer book-description';
      else return '';
    }
  },
};
</script>

