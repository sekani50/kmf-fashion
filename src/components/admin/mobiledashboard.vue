<!-- eslint-disable -->
<template>
  <div
    class="w-full sm:hidden h-fit text-sm fixed bottom-0 inset-x-0 shadow-lg border-t text-zinc-900 bg-white z-50"
  >
    <div class="w-full flex justify-between items-center py-2 px-6">
      <router-link
        to="/admindashboard/0"
        class="flex flex-col space-y-1 items-center justify-center"
      >
        <span>
          <img
            v-if="currentRoute === 'AdminDashboard'"
            src="@/assets/addfill.svg"
            alt="add"
          />
          <img v-else src="@/assets/add.svg" alt="add" />
        </span>
        <span> Add products </span>
      </router-link>

      <div
      
        class="relative flex flex-col space-y-1 items-center justify-center"
      >
        <span
        @click="showCats"
        >
          <img
            v-if="currentRoute === 'AdminCategory'"
            src="@/assets/catsfill.svg"
            alt="cats"
          />
          <img v-else src="@/assets/cats.svg" alt="cats" />
        </span>
        <span> Category </span>
        
        <div
        @click="showCats"
        :class="isCat ? 'block' : 'hidden'"
        class="fixed inset-0 bg-none w-full flex justify-center h-full">
        <div class="bg-white p-3 ml-4 shadow-xl space-y-3 bottom-[65px] rounded-md min-h-max min-w-max absolute">
            <div
         v-for="(cat, index) in cats"
         :key="index"
       >
         <p @click="showItems(cat)">{{ cat }}</p>
       </div>
        </div>
         
        </div>
    </div>

      <router-link
        to="/"
        class="flex flex-col space-y-1 items-center justify-center"
      >
        <span>
         
          <img src="@/assets/home.svg" alt="check" />
        </span>
        <span> Home </span>
      </router-link>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
//import { assets } from "@/assets/svgimages.js";
import { mapActions } from "vuex";

export default {
  name: "MobileDashboard",

  data() {
    return {
      cats: [
        "Unisex Bespoke",
        "Bridal wears",
        "Asoebi",
        "Cooperate",
        "Muslimah",
        "Fabrics",
      ],
      isCat: false,
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions(["updateCategory"]),
    showCats() {
        console.log('clicked')
        this.isCat = !this.isCat;
        //console.log(this.isCat)
    },
    setOpen() {
      this.isOpen = !this.isOpen;
      console.log("clicked");
    },
    checkCats() {
      this.isCat = !this.isCat;
      console.log("clicked");
    },
    showItems(cat) {
      this.currcat = cat;
      this.updateCategory(cat);
      this.isCat = !this.isCat;
      if (this.$route.name !== "AdminCategory") {
        this.$router.push("/category");
      }
    },
    showCheckOut() {
      this.$router.push("/checkout/''");
    },
   
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
</style>
