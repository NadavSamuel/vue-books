<template>
  <div class="stars" :class="cursorPointer" v-if="rate">
    <span v-for="n in 5" :key="n" @click = onChangeRate(n)>{{(n <= stars) ?  '&#x2605;' : '&#x2606;' }}</span>
  </div>
</template>

<script>
export default {
  name:'Stars',
  props: ['rate','isReadyReview'],
  data() {
    return {
      stars: null,
      maxRate: 5,
      fullStar: '&#x2605',
      blankStar: '&#x2605',
    };
  },
  created() {
    this.stars = this.rate;
  },
  computed:{
      cursorPointer(){
          if(!this.isReadyReview) return 'cursor-pointer'
      }
  },
  methods:{
      onChangeRate(newRate){
          if(this.isReadyReview) return
          this.stars = newRate
          
      }
  },
  watch:{
      stars(newVal,oldVal){
      this.$emit('changeRate',newVal)
    }
  }

};
</script>

<style>
</style>