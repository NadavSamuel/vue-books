<template>
<section class="user-profile main-container" >
    <h1 v-bind:style="{ color: userColor }">User Profile</h1>
    <color-picker @setFavoriteColor="setFavoriteColor"/>

</section>
  
</template>

<script>
import ColorPicker from "@/cmps/ColorPicker";
export default {
    name:'UserProfile',
    date(){
        return{
            favColor:null
        }
    },
    computed:{
        userColor(){
        const pickedColor = this.$store.getters.pickedColor;
        return pickedColor;

        }

    },
    components:{
        ColorPicker
    },
    methods:{
       setFavoriteColor(pickedColor){
       this.$store.dispatch({ type: 'setPickedColor',pickedColor} )
            // this.favColor = favoriteColor
            // console.log('favColor is :',this.favColor)

        }
    }

}
</script>

<style>

</style>