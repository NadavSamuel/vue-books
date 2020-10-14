<template>
  <section :class ="tpyeClass" class="user-msg" v-if="uMsg">
    <p>{{ uMsg.msg }}</p>
    <p v-if="uMsg.bookId"><router-link :to="`/book/${uMsg.bookId}`">Go to book page </router-link></p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
    };
  },
  updated() {
    if (this.$store.getters.msgToShow) {
      setTimeout(() => {
        this.$store.dispatch({ type: 'clearMsg' });
      },2500);
    }
  },
  computed: {
    msgToShow() {
      if (this.$store.state.shouldMsgShow) {
        const userMsgData = this.$store.getters.msgData;
        return userMsgData;
      }
    },
    uMsg() {
      return this.$store.getters.msgToShow;
    },
    tpyeClass() {
      return this.uMsg.type === 'success' ? 'success' : 'faliure';
    },
  },
 
};
</script>
