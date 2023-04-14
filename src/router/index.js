/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/mainpage.vue";
import ContactView from "@/views/contactview.vue";
import AboutView from "@/views/aboutview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
