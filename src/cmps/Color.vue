<template>
  <li class="color cursor-pointer" @click="pickColor" v-bind:style="{ backgroundColor: color }">
    <input type="checkbox"  />
    <!-- <input type="checkbox" :checked="value" @change="toggleBtn" /> -->
  </li>
</template>

<script>
export default {
    props:{
        color:String
    },
    methods:{
        pickColor(){
            this.$emit('input',this.color)
        }
    }

}
</script>

<style>
.color input {
  position: absolute;
  opacity: 0;
}

</style>