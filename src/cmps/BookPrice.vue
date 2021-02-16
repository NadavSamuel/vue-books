<template>
  <span v-if="listPrice.amount" :class="priceClass"> {{ formatPrice }}</span>
</template>

<script>
export default {
  props: {
    listPrice: Object,
  },
  computed: {
    priceClass() {
      if (this.listPrice.amount<= 30) return 'special-price cheap';
      if (this.listPrice.amount >= 150) return 'special-price expensive';
    },
      formatPrice() {
      return new Intl.NumberFormat(this.listPrice.currencyCode, {
        style: 'currency',
        currency: this.listPrice.currencyCode,
      }).format(this.listPrice.amount);
    },
  },
};
</script>

<style>
</style>