<template>
  <section class="edit-modal-container flex justify-center align-center cursor-pointer" @click="onToggleEditModal">
      <div class="edit-modal column-layout" >
          <button @click="onToggleEditModal" class="align-self-start">X</button>
          <h1>Edit</h1>
          <form >
              <!-- <input v-bind="book.title"/> -->

          </form>
      </div>
  </section>
</template>

<script>
export default {
  props: ['book'],
  methods:{
      onToggleEditModal(event, value = false){
          
          if(value) return
          this.$emit('toggleEditModal')
      }
  },

  created() {
  },
};
</script>

<style>
</style>