<!-- eslint-disable -->
<template>
  <div
  @click.self="setOpen"
  :class="isOpen ? 'wrapper' :'nowrapper'"
    class="fixed cursor-pointer let swipeInLeft  text-gray-300  h-full"

  >
  <div
  
  :class="isOpen ? 'menuhide' :'menu'"
  class="p-1 sm:p-2 let swipeInLeft">
    <img
    @click="setOpen"
    src="@/assets/admenu.svg" alt="" />
   </div>
   
  <div 
  :class="isOpen ? 'dashhideshow':'dashshow'"
  class="px-4 space-y-3 sm:space-y-4  sm:px-12  h-full ">
    <p class="uppercase font-bold ">Dashboard</p>
    <p class="font-semibold">Add product</p>
    <p class="font-semibold">Categories</p>
    <div class="font-semibold space-y-3 sm:space-y-4">
        <p>Bespoke</p>
        <p>Bridal Wears</p>
        <p>Muslim Wears</p>
        <p>Asoebi</p>
        <p>Cooperate Wears</p>
        <p>Fabrics</p>
       
    </div>
  </div>
  
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
//import { assets } from "@/assets/svgimages.js";

export default {
  name: "AdminDashboard",

  data() {
    return {
        isOpen: false,
    };
  },
  methods: {
    setOpen () {
        this.isOpen = !this.isOpen;
        console.log('clicked')
    }
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */

.wrapper {
 @apply w-full bg-black bg-opacity-60 inset-0 z-30;
}
.nowrapper {
    @apply w-fit bg-zinc-600 inset-y-0 left-0;
}
.menu {
    @apply  min-[1000px]:hidden;
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
