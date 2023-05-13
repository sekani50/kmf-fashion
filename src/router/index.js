/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/mainpage.vue";
import ContactView from "@/views/contactview.vue";
import AboutView from "@/views/aboutview.vue";
import ProductView from "@/views/productview.vue";
import AdminView from "@/views/adminView.vue";
import ServicesView from "@/views/servicesview.vue";
import AdminDashboard from "@/views/adminDashboard.vue"
import AdminCategory from "@/views/adminCategory.vue"
import CheckoutView from "@/views/checkoutView.vue"

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
  {
    path: "/product",
    name: "ProductView",
    component: ProductView,
  },
  {
    path: "/admin",
    name: "AdminView",
    component: AdminView,
  },
  {
    path: "/category",
    name: "AdminCategory",
    component: AdminCategory,
  },
  {
    path: "/admindashboard/:id",
    name: "AdminDashboard",
    component: AdminDashboard,
    props:true
  },
  {
    path: "/checkout/:id",
    name: "CheckoutView",
    component: CheckoutView,
    props: true
  },
  {
    path: "/services",
    name: "ServicesView",
    component: ServicesView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
