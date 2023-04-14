<!-- eslint-disable -->
<template>
  <div
    class="h-fit w-full text-gray-300 text-sm sm:text-lg fixed inset-0 bg-[#1E1E1E] shadow-lg z-30"
  >
 <div class="px-[5%] sm:py-4 py-3 w-full flex items-center justify-between">
  <router-link to="/">
    <div class="flex items-center space-x-2">
  <div class="rounded-full h-4 w-4 sm:h-8 sm:w-8 bg-[#f0e68c] relative">
    <span class="absolute h-[105%] w-1 sm:w-2 transform rotate-45 top-[-4px] right-1/2 bg-[#1E1E1E]"></span>
  </div>
   <p class="name text-[#f0e68c] text-2xl sm:text-4xl font-medium">KMF</p>
   <p class="other-name text-[#f0e68c] text-xl sm:text-3xl font-medium">Fashion Avenue</p>
  </div>
  </router-link>
 
  <div class="hidden text-white  sm:flex items-center space-x-10">
    <router-link to="/">
      <button class="navs relative text-gray-300">Home</button>
    </router-link>
    <router-link to="/contact">
      <button class="navs relative text-gray-300">Contact</button>
    </router-link>
    <router-link to="/about">
      <button class="navs relative text-gray-300">About</button>
    </router-link>
   
    
    </div>
    <div
    @click="menuClick"
     class="sm:hidden" v-html="images.menu"></div>

 </div>

 
 <div
 @click.self="menuClick"
 :class="isVisible ? 'block' : 'hidden' "
  class=" bg-opacity-70 bg-[#1E1E1E] fixed w-full h-full overflow-hidden inset-0">
    <div class=" absolute right-0 top-0 bg-[#1E1E1E] w-1/3 h-full">
      <div class="flex flex-col justify-end items-end p-[18px]">
      <div
      @click="menuClick"
      class=" " v-html="images.close"></div>

      </div>
      <div class="flex flex-col w-full justify-start space-y-3 px-6">
        <router-link to="/">Home</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/about">About</router-link>
       
        

      </div>
      
    </div>
 </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { assets } from "@/assets/svgimages.js";
export default {
  name: "HeaderSect",

  data() {
    return {
      images:assets,
      isVisible: false
      
    };
  },
  methods: {
    menuClick() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style scoped>
/* eslint-disable */
.show {
  @apply sm:block
}
.hide {
  @apply sm:hidden
}
.text {
    @apply text-zinc-700 bg-black bg-opacity-10 sm:text-lg text-sm lg:text-[15px] p-3 rounded-l-none sm:rounded-l-none   sm:rounded-r-lg rounded-md sm:rounded-lg border-l-4 border-l-[#3452FF];
}
</style>
