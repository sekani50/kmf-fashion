/* eslint-disable*/
import router from "./router";
import store from "./store";
import Vue from "vue";
import App from "./App.vue";
import "./assets/styles.css";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuelidate from "vuelidate";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(Vuelidate);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount("#app");
