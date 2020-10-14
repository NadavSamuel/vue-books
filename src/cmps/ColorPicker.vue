<template>
<div class="color-picker  ">
    <h1>Pick your color:</h1>
  <ul class="card-grid">
      <color v-for="color in colors" :key="color" :color="color" v-model="pickedColor"></color>

  </ul>
  </div>
</template>

<script>
import Color from "@/cmps/Color";
export default {
    data(){
        return{
            colors:['#4D4D4D','blue',
            'yellow','orange',
            '#999999','green',
            ,'#F44E3B','lightsalmon'
            ],
            pickedColor:null
        }
    },
    methods:{
        colorPicked(color){
            this.$emit('setUserColor',color)
        }
    },
    components:{
        Color
    },
    watch:{
        pickedColor(nextState,prevState){
            this.$emit('setFavoriteColor',nextState)
        }
    }

}
</script>

<style>

</style>