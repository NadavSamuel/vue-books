<template>
  <section class="login main-container flex">
    <h2>Login</h2>
    <form class="column-layout" @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="user.email"
          name="email"
          :class="{ 'is-invalid': submitted && $v.user.email.$error }"
        />
        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
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
        </div>
        <div
          v-if="isWrongCreds"
          class="invalid-feedback"
        >
          <span v-if="isWrongCreds">Incorrect password or email, please try again</span>
        </div>
      </div>
      
      <button>Login</button>
    </form>
    <router-link to="/userProfile/signup"
      ><button class="auth-routing-btn">
        Dont have an account? <span>Signup!</span>
      </button></router-link
    >
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      submitted: false,
      isWrongCreds: false,
    };
  },
  validations: {
    user: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    async handleLogin() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) return;
      try {
        await this.$store.dispatch({ type: 'onLogin', user: this.user });
        this.$router.push('/userProfile/user-page')
      } catch (err) {
        console.log('OOPS!, ', err);
        if (err === 401) {
          this.isWrongCreds = true;
          setTimeout(() => this.isWrongCreds = false, 4500);
        }
      }
    },
  },
};
</script>