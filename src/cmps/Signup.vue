<template>
  <section class="signup main-container flex">
    <h2>Sign Up</h2>
    <form class="column-layout" @submit.prevent="handleSignup">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="user.username"
          name="username"
          :class="{ 'is-invalid': submitted && $v.user.username.$error }"
          autocomplete="off"
        />
        <div
          v-if="submitted && !$v.user.username.required"
          class="invalid-feedback"
        >
          Username is required
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="user.email"
            name="email"
            :class="{ 'is-invalid': submitted && $v.user.email.$error }"
          />
          <div
            v-if="submitted && $v.user.email.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.email.required">Email is required</span>
            <span v-if="!$v.user.email.email">Email is invalid</span>
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="user.password"
            id="password"
            name="password"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.user.password.$error }"
          />
          <div
            v-if="submitted && $v.user.password.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.password.required">Password is required</span>
            <span v-if="!$v.user.password.minLength"
              >Password must be at least 6 characters</span
            >
          </div>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            v-model="user.confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            class="form-control"
            :class="{
              'is-invalid': submitted && $v.user.confirmPassword.$error,
            }"
          />
          <div
            v-if="submitted && $v.user.confirmPassword.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.confirmPassword.required"
              >Confirm Password is required</span
            >
            <span  v-else-if="!$v.user.confirmPassword.sameAsPassword"
              >Passwords must match</span
            >
          </div>
        </div>
      </div>
      <button>Submit</button>
    </form>
         <router-link to="/userProfile/login"> <button  class="auth-routing-btn">Already have an account? <span>Login!</span></button></router-link>

  </section>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
    name: 'signup',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      username: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
    },
  },
  methods: {
    async handleSignup() {
      this.submitted = true;
      this.$v.$touch();
     if (this.$v.$invalid) return;
      try{
          await this.$store.dispatch({ type: 'signUser', newUser:this.user });
          this.$router.push('/userProfile/user-page')
          }
          catch(err){
              console.log('OOPS!, ',err)
          }
    },
    getEmptyUser(){
        return{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    }
  },
};
</script>