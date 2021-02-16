<template>
  <section class="user-page">
    <div class="profile-header flex space-between full">
      <h2 class="user-greet">Hello, {{ username }}</h2>
      <div class="action-btns">
        <button @click="onLogout">Logout</button>
      </div>
    </div>
    <user-books :userBooks="userBooks" v-if="userBooks" />
    <whishlist :whishlistItems="whishlistItems" v-if="whishlistItems" />
  </section>
</template>

<script>
import Whishlist from '../cmps/Whishlist';
import UserBooks from '../cmps/UserBooks';
import { bookService } from '../services/bookService';

export default {
  components:{
    Whishlist,
    UserBooks
  },
  data() {
    return {
      currUser: this.$store.state.userProfile.currUser,
      whishlistItems:null,
      userBooks:null
    };
  },
  created(){
    this.getUserData();
  },
  methods: {
    async getUserData(){
    this.$store.dispatch({ type: 'toggleLoaderOn' });
    await this.getUserBooks();
    await this.getWhishedBooks();
    this.$store.dispatch({ type: 'toggleLoaderOff' });
    },
        async getWhishedBooks() {
      await this.$store.dispatch({ type: 'getUserWhishlist' });
      const whishlist = this.$store.state.userProfile.whishlist;
      this.whishlistItems = await Promise.all(
        whishlist.map(async (book) => {
          const currBook = await bookService.getById(book.bookId);
          return currBook[0];
        })
      );
    },   
     async getUserBooks() {
    const byUserId = this.$store.state.userProfile.currUser._id;
    const userBooks = await bookService.query({byUserId});
    this.userBooks = userBooks;
    },
    onLogout() {
      try {
        this.$store.dispatch({
          type: 'onLogout',
        });
        this.$router.push('/');
      } catch (err) {
        console.log('error, ', err);
      }
    },
  },
  computed: {
    username() {
      return this.currUser.username;
    },
  },
};
</script>

<style>
</style>