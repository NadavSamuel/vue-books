<template>
  <div class="stars flex justify-center" :class="cursorPointer" v-if="rate">
    <img v-for="n in 5" :key="n" @click = onChangeRate(n) :src="(n <= stars) ?  fullStar : blankStar" />
  </div>
</template>

<script>
import BlankStar from '../cmps/BlankStar.vue';

export default {
  name:'Stars',
  props: ['rate','isReadyReview'],
  data() {
    return {
      stars: null,
      maxRate: 5,
    };
  },
  created() {
    this.stars = this.rate;
  },
  computed:{
      cursorPointer(){
          if(!this.isReadyReview) return 'cursor-pointer'
      },
      fullStar(){
          return  require('@/assets/imgs/star-solid.svg')
      },
      blankStar(){
          return  require('@/assets/imgs/star-regular.svg')
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
  },
  components:{
    BlankStar
  }

};
</script>

<style scoped>
img{
  width: 30px;
}
</style>