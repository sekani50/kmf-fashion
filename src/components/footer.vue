<!-- eslint-disable -->
<template>
  <div class="bg-[#353535] w-full p-6 text-gray-300 text-sm sm:text-lg">
    <div class="flex flex-col sm:flex-row justify-around space-y-3">
      <div class="flex flex-col space-y-3 justify-start">
        <p class="capitalize underline">Location address</p>
        <p>No 34, Adebayi Street, Japan, Osun State, Nigeria</p>
      </div>
      <div class="flex flex-col space-y-3 justify-start">
        <p class="capitalize underline">Contact Info</p>
        <div class="flex space-x-2 items-center group">
          <span class="" v-html="images.tel"></span>
          <p class="group-hover:text-[#f0e68c]">+234813933165</p>
        </div>
        <div class="flex space-x-2 items-center group">
          <span class="" v-html="images.email"></span>
          <p class="group-hover:text-[#f0e68c]">scotmakinde1@gmail.com</p>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <div class="sm:h-8 sm:w-8 h-6 w-6">
          <a href="">
            <img src="@/assets/whatsapp.svg" alt="wht" />
          </a>
        </div>
        <div class="sm:h-8 sm:w-8 h-6 w-6">
          <a href="https://www.instagram.com/kmyfashionavenue/reels/">
            <img src="@/assets/insta.svg" alt="inst" />
          </a>
        </div>
        <div class="sm:h-8 sm:w-8 h-6 w-6">
          <a href="">
            <img src="@/assets/fb.svg" alt="fb" />
          </a>
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
  name: "Footer",

  data() {
    return {
      images: assets,
    };
  },
};
</script>

<style scoped>
/* eslint-disable */
</style>
