<template>
<section class="book-details">
  <div v-if="book && isWhishlistExist" class=" main-container">
    <h1 class="p50 rem2">{{ book.title }}</h1>
    <article class="details column-layout">
      <div class="book-details-main flex full-width">
        <div class="img-social-wapper">
        <book-img :bookImgUrl="bookImg" :isOnSale="book.listPrice.isOnSale" />
              <section class="like-social-btns">
        <social-share-btns :url="currUrl" :book="book" />       
        <div class="heart-wrapper">
        <heart :isLiked="isBookLiked" @onToggleLike="onToggleLike" /> 
        </div>
      </section>
</div>
        <div class="details-container">
          <ul class="clean-list dry-details">
            <li>
              By: <strong>{{ bookAuthor }}</strong>
            </li>
            <br />
            <li>Categories: {{ bookCategories }}</li>
            <li>Page-count: {{ determinReadingLvl }}</li>
            <li>Language: {{ bookLanguage }}</li>
            <li>Published: {{ determinBookSeniority }}</li>
            <li v-if="bookSeller">Seller: {{ bookSeller.username }}</li>
            <li >Price:<book-price :listPrice="book.listPrice" /></li>
            <li class="inline-flex" v-if="book.reviews.length">
              Average rating:
              <stars
                class="average-rate"
                :rate="averageRating"
                :isReadyReview="true"
              />
            </li>
          </ul>
          <long-text
            :text="book.description"
            @toggleShortText="toggleShortText"
            :isShortText="isShortText"
          />
        </div>
      </div>
      <section class="action-btns full-width flex align-center space-between">
        <div v-if="isSellerWatching" class="btns-container">
        <button @click="onEditBook">Edit Book</button>
        <button @click="onDeleteBook">Delete Book</button>
        </div>
      </section>
      <reviews
        @updateReviews="onAddReview"
        @onDeleteReview="onDeleteReview"
        :bookReviews="book.reviews"  />
    </article>
  </div>
  </section>
</template>
<script>
import { bookService } from '../services/bookService';
import { reviewService } from '../services/reviewService';
import { mixins } from '../services/mixins';
import  userService  from '../services/userService';
import LongText from '../cmps/LongText';
import BookPrice from '../cmps/BookPrice';
import BookImg from '../cmps/BookImg';
import Reviews from '../cmps/Reviews';
import Stars from '../cmps/Stars';
import Heart from '../cmps/Heart.vue';
import SocialShareBtns from '../cmps/SocialShareBtns.vue';

export default {
  name: 'BookDetails',
  data() {
    return {
      book: null,
      isShortText: true,
      currUser: this.$store.state.userProfile.currUser,
      whishlist: this.$store.state.userProfile.whishlist,
      isBookLiked: false,
      bookSeller:''
    };
  },
  async created() {
    this.$store.dispatch({ type: 'toggleLoaderOn' });
    await this.loadBook();
    mixins.scrollToTop();
    if(this.book.byUserId) await this.getBookSeller();
    this.determinLikedBook();
    this.$store.dispatch({ type: 'toggleLoaderOff' });
  },
  computed:{
    isWhishlistExist() {
      if (!this.$store.state.userProfile.currUser) return true;
      if (this.$store.state.userProfile.currUser && this.$store.state.userProfile.whishlist) return true;
      else return false;
    },
    averageRating() {
      return Math.round(this.book.averageRating);
    },
    bookAuthor() {
      if (typeof this.book.authors === 'string') return this.book.authors + '.';
      else return this.book.authors.join(',') + '.';
    },
    bookCategories() {
      if (this.book.categories.length === 1) return this.book.authors[0] + '.';
      else return this.book.categories.join(',') + '.';
    },
    bookImg() {
      return this.book.thumbnail;
    },
    bookAddedBy() {
      return this.book.thumbnail;
    },
    bookLanguage() {
      switch (this.book.bookLanguage) {
        case 'en':
          return 'English.';
        case 'iw':
          return 'Hebrew.';
        case 'he':
          return 'Hewbrew.';
        default:
          return 'English.';
      }
    },
    determinReadingLvl() {
      const currBook = this.book;
      const readinglvl = () => {
        if (currBook.pageCount > 500) return ' - Long Reading.';
        if (currBook.pageCount > 200 && currBook.pageCount <= 499)
          return ' - Descent Reading.';
        if (currBook.pageCount < 100) return ' - Easy Reading.';
        else return '';
      };
      return currBook.pageCount.toString() + readinglvl();
    },
    determinBookSeniority() {
      const currBook = this.book;
      const seniority = () => {
        const currDate = new Date();
        const currYear = currDate.getFullYear();
        if (currYear - currBook.publishedDate > 10) return ' - Veteran Book.';
        if (currYear - currBook.publishedDate <= 1) return ' - New Book.';
        else return '';
      };
      return currBook.publishedDate + seniority();
    },
    currUrl(){
      return window.location.href;
    },
    priceClass() {
      const currBookPrice = this.book.listPrice.amount;
      return mixins.getSpecialPriceClass(currBookPrice);
    },
    isSellerWatching(){
      if(!this.currUser && this.book.byUserId || this.currUser && this.currUser._id !== this.book.byUserId) return false;
      if(!this.currUser &&!this.book.byUserId || this.currUser._id === this.book.byUserId || !this.book.byUserId) return true;
    }
  },
  methods: {
    calculateBookRateingAvarage(){
      const rates = this.book.reviews.map((review) => review.rate);
      const ratesSum = rates.reduce((acc, rate) => acc + rate, 0);
      const average = ratesSum / rates.length;
      return average;
    },
    async getBookSeller(){
      try{
        const bookSeller = await userService.getById(this.book.byUserId);
        this.bookSeller = bookSeller;
      }
      catch(err){
        console.log('err, couldnt fint book seller ',err)
      }
    },
    async determinLikedBook() {
      const whishlist = this.$store.state.userProfile.whishlist;
      if(!whishlist) return;
      const bookId = this.book._id;
      const isBookLiked = whishlist.find((whishedBook) => whishedBook.bookId === bookId);
      this.isBookLiked = isBookLiked;
    },
    async onToggleLike() {
      const whishlist = this.$store.state.userProfile.whishlist;
      if (!this.currUser) {
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: {
            msg: 'You must be logged in order to add books to your whishlist',
            type: 'faliure',
          },
        });
        return;
      }
      if (!whishlist) {
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: {
            msg:
              'OOPS! something went wrong, couldn not update your whishlist.',
            type: 'faliure',
          },
        });
        return;
      }
      let newWhishlist;
      if (!this.isBookLiked) {
        const bookToAdd = { bookId: this.book._id };
        newWhishlist = [...whishlist, bookToAdd];
      } else
        newWhishlist = whishlist.filter(
          (likedBook) => likedBook.bookId !== this.book._id
        );
      try {
        await this.$store.dispatch({
          type: 'onUpdateWhishList',
          whishlist: newWhishlist,
        });
        this.isBookLiked = !this.isBookLiked;
      } catch (err) {
        console.log('error, ', err);
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: {
            msg: 'OOPS! something went wrong, could not add to whishlist',
            type: 'faliure',
          },
        });
      }
    },
    onEditBook() {
      try {
        this.$store.dispatch({
          type: 'setBookToEdit',
          book: this.book,
        });
        this.$router.push('/addBook');
      } catch (err) {
        console.log('error, ', err);
      }
    },
    async onDeleteBook() {
      try {
        this.$store.dispatch({ type: 'removeBook', id: this.book._id });
        this.$router.push('/');
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: { msg: 'Book removed succssfully!', type: 'success' },
        });
      } catch (err) {
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: {
            msg: 'OOPS! Could not remove book, please try again.',
            type: 'faliure',
          },
        });
        console.log('err, ', err);
      }
    },
    async loadBook() {
      const bookId = this.$route.params.bookId;
      const currBook = await bookService.getById(bookId);
      this.book = currBook[0];
    },
    toggleShortText() {
      this.isShortText = !this.isShortText;
    },
    async onAddReview(newReview) {
      try {
        await reviewService.reviewAdd(this.book._id, newReview);        
          await this.$store.dispatch({
          type: 'saveBook',
          book: this.book,
          isUpdateAverageRating:true
        });
        await this.loadBook();
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: { msg: 'Review added succssfully!', type: 'success' },
        });
      } catch {
        eventBusService.$emit('showMsg', {
          msg: 'OOPS! Somthing went wrong',
          type: 'faliure',
        });
      }
    },
    async onDeleteReview(reviewId) {
      try {
        await reviewService.reviewDelete(this.book.id, reviewId);
        await this.loadBook();
        this.$store.dispatch({
          type: 'setReviewDeletedSuccess',
          msgData: { msg: 'Review removed succssfully!', type: 'success' },
        });
      } catch {
        eventBusService.$emit('showMsg', {
          msg: 'OOPS! Somthing went wrong',
          type: 'faliure',
        });
      }
    },
  },
  components: {LongText, BookImg, Reviews,Stars,Heart,SocialShareBtns,BookPrice},
};
</script>
