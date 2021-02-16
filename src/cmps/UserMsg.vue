<template>
  <section :class="tpyeClass" class="user-msg" v-if="uMsg">
    <p>{{ uMsg.msg }}</p>
    <p v-if="uMsg.bookId">
      <router-link :to="`/book/${uMsg.bookId}`">Go to book page </router-link>
    </p>
    <ul class="clean-list" v-if="uMsg.requiered">
      <li v-for="req in uMsg.requiered" :key="req">
        <span>{{ req }}</span>
      </li>
    </ul>
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
    clearTimeout(this.clreaneceTimeout);
    if (this.$store.getters.msgToShow) {
      this.clreaneceTimeout =setTimeout(() => {
        this.$store.dispatch({ type: 'clearMsg' });
      }, 4000);
    }
  },
  destroyed(){
    clearTimeout(this.clreaneceTimeout);
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
