<template>
  <section v-if="book" class="book-details main-container">
      <h1 class= "p30">{{book.title}}</h1>
      <article class="details column-layout">
      <book-img :bookImgUrl="bookImg"  :isOnSale="book.listPrice.isOnSale"/>
         <h2> By:{{bookAuthor}}</h2>
         <ul class="clean-list">
           <li>{{determinReadingLvl}}</li>
           <li>Publish{{determinBookSeniority}}</li>
           <li :class="priceClass">Price:{{formatPrice}}</li>
         </ul>
         <LongText :text="book.description" :class="{shortText:shortText}" @toggleShortText="toggleShortText"/>
         <!-- <button @click="toggleEditModal"> Edit</button> -->
         <reviews @updateReviews="onAddReview" @onDeleteReview="onDeleteReview" :bookReviews="book.reviews"/>
      </article>
  <!-- <edit-modal v-if="isEditModal" :book="book" @toggleEditModal="toggleEditModal" /> -->
  </section>
  
</template>

<script>
// @ is an alias to /src
import { bookService } from '../services/bookService';
import eventBusService from '@/services/eventBusService'
import  LongText  from '../cmps/LongText';
import BookImg from '../cmps/BookImg'
import Reviews from '../cmps/Reviews'
// import EditModal from '../cmps/EditModal'

export default {
  name: 'BookDetails',
    data() {
    return {
      book:null,
      shortText:false,
      // isEditModal:false
    };
  },
  async created() {
    this.loadBook()

  },
  computed: {
    bookAuthor(){
      if(this.book.authors.length === 1)return this.book.authors[0]
      else return this.book.authors.join(',')
    },
    formatPrice(){
      return new Intl.NumberFormat(this.book.listPrice.currencyCode,{ style: 'currency', currency: this.book.listPrice.currencyCode }).format(this.book.listPrice.amount)
    },
    bookImg(){
      return this.book.thumbnail
    },
    determinReadingLvl(){
      const currBook = this.book
      const readinglvl = () =>{
        if (currBook.pageCount >500) return ' - Long Reading'
        if (currBook.pageCount >200 && currBook.pageCount <=499) return ' - Descent Reading'
        if (currBook.pageCount <100) return ' - Easy Reading'
        else return ''
      }
      return currBook.pageCount.toString()+ readinglvl()
    },
     determinBookSeniority(){
      const currBook = this.book
      const seniority = () =>{
        const currDate = new Date
        const currYear = currDate.getFullYear()
        if (currYear - currBook.publishedDate > 10 ) return ' - Veteran Book'
        if (currYear - currBook.publishedDate <= 1 ) return ' - New Book'
        else return ''
      }
      return currBook.publishedDate + seniority()
    },
    priceClass(){
    const currBookPrice = this.book.listPrice.amount
    return{
      expensive: currBookPrice>= 150,
      cheap: currBookPrice<= 20
    }
    }
  },
  methods:{
    // toggleEditModal(){
    //   this.isEditModal = !this.isEditModal 
    // },
    async loadBook(){
    const bookId = this.$route.params.bookId;
    const currBook = await bookService.getById(bookId);
    this.book = currBook
    },
    toggleShortText(){
      this.shortText = !this.shortText
    },
    async onAddReview(newReview){
      try{
        await bookService.reviewAdd(this.book.id,newReview)
        await this.loadBook()
       this.$store.dispatch({ type: 'setReviewAddedSuccess',msgData:{msg:'Review added succssfully!',type:'success'}} )
      }catch{
        eventBusService.$emit('showMsg',{msg:'OOPS! Somthing went wrong',type:'faliure'})
      }

    },
    async onDeleteReview(reviewId){
      try{
        await bookService.reviewDelete(this.book.id,reviewId)
        await this.loadBook()
       this.$store.dispatch({ type: 'setReviewDeletedSuccess',msgData:{msg:'Review removed succssfully!',type:'success'}} )
      }catch{
        eventBusService.$emit('showMsg',{msg:'OOPS! Somthing went wrong',type:'faliure'})
      }


    }
  },
  components: {
    LongText,
    BookImg,
    Reviews,
    // EditModal
  }
}
</script>
<style scoped>

.expensive{
  color:red
}
.cheap{
  color:green
}
.shortText{
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
width: 100%;
}
p{
  cursor: pointer;
}
</style>

