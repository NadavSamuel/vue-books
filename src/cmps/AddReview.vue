<template>
  <section class="add-review">
    <h4 class="review-statment">What did you think?</h4>
    <form @submit.prevent="onSendReview" class="column-layout">
      <div class="review-spesifics flex space-between">
        <input
          type="text"
          ref="by"
          placeholder="Enter your name"
          v-model.trim="review.by"
        />
        <input type="date" v-model="review.date" />
        <stars :rate="review.rate" @changeRate="changeRate" />
      </div>
      <textarea
        placeholder="Enter your opinion"
        ref="txt"
        v-model="review.txt"
      />
      <button>Send</button>
    </form>
  </section>
</template>

<script>
import Stars from '@/cmps/Stars';
import { required, minLength, between } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      review: this.setEmptyReview(),
      errors: [],
    };
  },
  // validations: {
  //   by: {
  //     required,
  //     minLength: minLength(2),
  //   },
  //   date: {},
  //   stars: {},
  //   txt: {
  //     required,
  //     minLength: minLength(15),
  //   },
  // },
  // created() {
  //   this.setEmptyReview();
  // },
  mounted() {
    // this.focusInput();
  },
  methods: {
    checkInputFailed(inputType) {
      if (
        this.errors &&
        this.errors.filter((err) => (err.filed = inputType)).length === 1
      )
        return 'faliure';
      else return '';
    },
    onSendReview() {
      this.errors = [];
      if (this.review.by.length < 2) {
        this.errors.push({ msg: 'Name to short', filed: 'by' });
        // this.$refs.by.classList.add('faliure');
      }
      if (this.review.txt.length < 15)
        this.errors.push({ msg: 'Review to short', filed: 'txt' });
      if (this.errors.length >= 1) {
        const oneOrMany = this.errors.length === 1 ? 'reason' : 'reasons';
        this.$store.dispatch({
          type: 'setReviewAddedSuccess',
          msgData: {
            msg: `OOPS! Your review was rejected for the following ${oneOrMany}: `,
            type: 'faliure',
            requiered: this.errors.map((err) => err.msg),
          },
        });
        return;
      }
      this.$emit('onReviewAdd', this.review);
      this.review = this.setEmptyReview()
      // this.$refs.by.classList.remove('faliure');
    },
    changeRate(newRate) {
      this.review.rate = newRate;
    },
    // focusInput() {
    //   this.$refs.input.focus();
    // },
    setEmptyReview() {
      return {
        by: '',
        rate: 5,
        txt: '',
        date: '',
      };
    },
  },
  // computed:{
  //   getInputClass(inputType){
  //     if(this.checkInputFailed(inputType)) return 'faliure'
  //     else return ''
  //   }
  // },
  watch: {
    errors: {
      handler: function (newVal, oldVal) {
        console.log(newVal);
        // this.errors.forEach((err) => {
        //   if (err.filed === 'by') this.$refs.by.classList.add('faliure');
        //   else this.$refs.by.classList.remove('faliure');
        // });
      },
      deep: true,
    },
  },
  components: {
    Stars,
  },
};
</script>

<style>
</style>