<!-- eslint-disable -->
<template>
  <div
    @click.self="setOpen"
    :class="isOpen ? 'wrapper let swipeInLeft' : 'nowrapper  let swipeInLeft'"
    class="fixed cursor-pointer hs h-full"
  >
    <div
      :class="isOpen ? 'menuhide let swipeInLeft' : 'menu let swipeInLeft'"
      class="p-1 sm:p-2"
    >
      <img @click="setOpen" src="@/assets/admenu.svg" alt="" />
    </div>

    <div
      :class="
        isOpen ? 'dashhideshow let swipeInLeft' : 'dashshow let swipeInLeft'
      "
      class="px-4 space-y-3 sm:space-y-4 sm:px-12 h-full"
    >
      <div class="uppercase font-bold text-white">Dashboard</div>
      <div class="bg-none h-2 w-2"></div>
      <router-link
        :class="
          currentRoute === 'AdminDashboard' ? 'text-white' : 'text-gray-300'
        "
        to="/admindashboard"
        class="font-semibold"
        >Add product</router-link
      >
      <div
      @click="checkcat"
      class="font-semibold text-white flex items-center">
        <span>Categories </span
        ><span
        :class="isCat ?'rotate-[270deg]' :'' "
        class="sm:h-8 sm:w-8 w-6 h-6  "><img class="w-full h-full mt-[1px]" src="@/assets/arrow.svg" alt="" /></span>
        </div>
      <div
      :class="isCat ? 'block': 'hidden'"
      v-for="(cat, index) in cats"
      :key="index"
      class="font-semibold pl-2 space-y-3  sm:space-y-4">
        <p
        :class="currcat === cat ? 'text-white': 'text-gray-300'"
        @click="showItems(cat)"
        >{{ cat }}</p>
      
      </div>
      <p 
      @click="showCheckOut"
      :class="currentRoute === 'CheckoutView' ? 'text-white':'text-gray-300'"
      class="font-semibold">Checkouts</p>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
//import { assets } from "@/assets/svgimages.js";
import { mapActions } from "vuex";

export default {
  name: "AdminDashboard",

  data() {
    return {
      isOpen: false,
      isCat: false,
      cats: [
      "Unisex Bespoke",
      "Bridal wears",
      "Asoebi",
      "Cooperate",
      "Muslimah",
      "Fabrics"


      ],
      currcat:''
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions(["updateCategory"]),
    setOpen() {
      this.isOpen = !this.isOpen;
      console.log("clicked");
    },
    checkcat() {
      this.isCat = !this.isCat;
    },
    showItems (cat) {
      this.currcat = cat
      this.updateCategory(cat);
      if(this.$route.name !== 'AdminCategory') {
        this.$router.push("/category");
      }
      
    },
    showCheckOut () {
      this.$router.push("/checkout");
    }
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
.hs {
  @apply hidden sm:block;
}
.wrapper {
  @apply w-full  bg-black bg-opacity-60 inset-0 z-30;
}
.nowrapper {
  @apply w-fit  bg-zinc-600 inset-y-0 left-0;
}
.menu {
  @apply min-[1000px]:hidden;
}
.menuhide {
  @apply hidden;
}
.dashshow {
  @apply hidden min-[1000px]:block w-full pt-[14%];
}

.dashhideshow {
  @apply bg-zinc-600 w-fit block pt-[7%];
}
</style>
