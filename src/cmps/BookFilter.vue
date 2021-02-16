<template>
  <section class="book-filter">
    <form v-debounce:500="emitFilter" class="column-layout">
      <input
        class="search-txt-input"
        type="text"
        placeholder="Enter book name"
        v-model="filterBy.txt"
      />
      <div class="additional-filters flex space-between full-width">
        <round-slider
          v-model="circleVals"
          sliderType="range"
          min="1"
          max="200"
          radius="70"
          startValue="200"
        />
        <div class="auth-and-sale column-layout">
        <input
          class="additional-input"
          type="text"
          placeholder="Enter author name"
          v-model="filterBy.author"
        />
        <div class="full-width flex space-between align-center">
<label for="onlyOnSale" > Only books on sale </label>
<input @click="emitFilter(true)" type="checkbox" class="checkbox" v-model="filterBy.onlyOnSale" name="onlyOnSale">
</div>
</div>


      </div>
    </form>
  </section>
</template>

<script>
import RoundSlider from 'vue-round-slider';
import { debounce } from 'vue-debounce';

export default {
  name: 'BookFilter',
  data() {
    return {
      filterBy: {
        txt: '',
        author: '',
        minPrice: null,
        maxPrice: null,
        onlyOnSale:false
      },
      circleVals: null,
    };
  },
  created() {
    this.filterBy = JSON.parse(JSON.stringify(this.$store.state.bookModule.booksFilterBy));
  },
  methods: {
    emitFilter(isToggleOnlyOnSale = false) {
      if(isToggleOnlyOnSale) this.filterBy.onlyOnSale = !this.filterBy.onlyOnSale;
      this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
  components: {
    RoundSlider,
  },
  watch: {
    circleVals(nextState) {
      const newVals = nextState.split(',');
      const filters = newVals.map((numAsSting) => Number(numAsSting));
      this.filterBy.minPrice = filters[0];
      this.filterBy.maxPrice = filters[1];
      const debounceFilter = debounce(() => {
        this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
      }, '500ms');
      debounceFilter();
    },
  },
};
</script>