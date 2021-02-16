import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/global.scss'
import Vuelidate from 'vuelidate'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import VueSocialSharing from 'vue-social-sharing'
import vueDebounce from 'vue-debounce'
require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(vueDebounce)
Vue.use(VueSocialSharing);
Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(SuiVue);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
