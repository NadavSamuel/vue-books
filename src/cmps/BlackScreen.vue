<template>
  <div class="black-screen" :class="cursorPointer"></div>
</template>

<script>
export default {
  props:{
    isCursorPointer:Boolean
  },
  computed:{
    cursorPointer(){
      if(this.isCursorPointer) return 'cursor-pointer'
      else return ''
    }
  }
}
</script>

