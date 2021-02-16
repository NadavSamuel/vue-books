<template>
  <section class="new-edit-book-container flex full">
    <div class="new-edit-form column-layout">
      <form @submit.prevent="onSubmitBook" class="new-book-form column-layout">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="relevantBook.title" />
        <label for="subtitle">Subtitle</label>
        <input type="text" name="subtitle" v-model="relevantBook.subtitle" />
        <label for="thumbnail">Thumbnail</label>
        <input
          type="text"
          name="thumbnail"
          placeholder="Enter img URL"
          v-model="relevantBook.thumbnail"
        />
        <label for="description">Book description</label>
        <textarea
          rows="10"
          name="description"
          v-model="relevantBook.description"
        />
        <label for="subtitle">Authors (Seperate by comma)</label>
        <input type="text" name="authors" v-model="relevantBook.authors" />
        <label for="publish">Publish date</label>
        <input
          type="date"
          value="1990-01-01"
          name="publish"
          v-model="relevantBook.publishedDate"
        />
        <label for="page-count">Page count </label>
        <input
          type="number"
          name="page-count"
          v-model="relevantBook.pageCount"
        />
        <label for="categories">Categories</label>
        <select
        class="categories"
          name="categories"
          multiple="multiple"
          v-model="relevantBook.categories"
        >
         <option v-for="category in categories" :value="category" :key="category">
           <template v-if="category !== 'All Books' ">
           {{category}}
          </template>
           </option>
         
        </select>
        <label for="language">Language</label>
        <select name="language" v-model="relevantBook.language">
          <option value="en">English</option>
          <option value="iw">Hebrew</option>
        </select>
        <label for="currency">Currency</label>
        <select name="currency" v-model="relevantBook.listPrice.currencyCode">
          <option value="EUR">Euro</option>
          <option value="USD">U.S Dollar</option>
          <option value="NIS">New Israeli Sheqel</option>
        </select>
        <label for="price">Price </label>
        <input
          type="number"
          name="price"
          v-model="relevantBook.listPrice.amount"
        />
        <div class="on-sale-box">
          <label for="price">On sale ? </label>
          <input
            type="checkbox"
            name="price"
            v-model="relevantBook.listPrice.isOnSale"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
    <div class="thumbnail-wrapper">
      <img @error="onImgError" :src="thumbnailURL" alt="" />
      <div  v-if="isImgError" class="no-thumbnail">
      <img  src="@/assets/imgs/emptyBook.png" alt="" />

      <h2>Please enter a valid image URL.</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      relevantBook: this.getEmptyForm(),
      thumbnailURL: '',
      isImgError: false,
      categories:this.$store.state.bookModule.categories,
    };
  },
  created() {
    if (this.$store.state.bookModule.bookToEdit) {
      this.relevantBook = this.$store.state.bookModule.bookToEdit;
      this.bookToEditId = this.relevantBook._id;
      this.$store.dispatch({
        type: 'setBookToEdit',
        book: null,
      });
    }
  },
  methods: {
    onImgError() {
      this.isImgError = true;
    },
    onChangeUrl() {
      console.log('humus');
    },
    async onSubmitBook() {
      try {
        if(!this.bookToEditId && this.$store.state.userProfile.currUser ) this.relevantBook.byUserId = this.$store.state.userProfile.currUser._id;
        const newBook = await this.$store.dispatch({
          type: 'saveBook',
          book: this.relevantBook,
        });
        const newOrEdit = this.bookToEditId ? 'edited' : 'added';
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: {
            msg: `Book ${newOrEdit} succssfully!`,
            type: 'success',
            bookId: newBook._id,
          },
        });
        this.$router.push('/');
      } catch (err) {
        const newOrEdit = this.bookToEditId ? 'edit' : 'add';
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: {
            msg: `OOPS! Something went wrong, could not ${newOrEdit} book`,
            type: 'faliure',
          },
        });
      }
    },
    getEmptyForm() {
      return {
        title: '',
        subtitle: '',
        description: '',
        authors: [],
        publishedDate: '',
        pageCount: 0,
        categories: [],
        reviews: [],
        thumbnail: '',
        language: '',
        averageRating:2,
        listPrice: {
          amount: 0,
          currencyCode: 'EUR',
          isOnSale: false,
        },
      };
    },
  },
  watch: {
    relevantBook: {
      handler: function (newVal, oldVal) {
        this.isImgError = false;
        this.thumbnailURL = newVal.thumbnail;
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>