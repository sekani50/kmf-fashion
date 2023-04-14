<!-- eslint-disable -->
<template>
  <div class="w-full mt-[60px] sm:mt-[68px] space-y-[5%] mx-auto p-6 text-gray-300">
    <div class="space-y-[5%] w-full sm:w-[60%] mx-auto">
        <p class="other-name font-medium text-center text-lg sm:text-xl">Get In Touch</p>
        <div class="rounded-md p-3 sm:p-6 border space-y-[5%] border-gray-300">
            <div class="form-group space-y-3">
          <label
            class="block form__label text-sm sm:text-lg"
            for=""
            ><b>Enter your email address</b></label
          >
          <input
            @change=""
            class="block form__input input-field"
            type="email"
            name=""
            placeholder="Enter your email address"
            v-model.trim="email"
          />
        </div>
        <div class="form-group space-y-3">
            <label
            class="block form__label text-sm sm:text-lg"
            for=""
            ><b>Type your message</b></label
          >
            <textarea
            placeholder="Write a message"
            v-model.trim="message"
            class="w-full h-28 p-3 sm:p-4 rounded-md resize-none bg-[#1E1E1E] text-gray-300 border border-gray-300"
            >

            </textarea>
        </div>
        <button class="rounded-md text-black p-2 w-full font-medium bg-[#f0e68c]">
            Submit
        </button>
        </div>
        
    </div>
    <div class="space-y-[5%] sm:p-6 p-3 font-medium rounded-md w-full sm:w-[60%] bg-[#f0e68c] text-[#1E1E1E] mx-auto">
        <div class="flex flex-col space-y-3 justify-start">
        <p class="capitalize underline">Location address</p>
        <p>No 34, Adebayi Street, Japan, Osun State, Nigeria</p>
      </div>
      <div class="flex flex-col space-y-3 justify-start">
        <p class="capitalize underline">Contact Info</p>
        <div class="flex space-x-2 items-center group">
          <span class="sm:h-6 sm:w-6 h-4 w-4">
            <img src="@/assets/tel.svg" alt="wht" />
          </span>
          <p class="">+234813933165</p>
        </div>
        <div class="flex space-x-2 items-center group">
            <span class="sm:h-6 sm:w-6 h-4 w-4">
            <img src="@/assets/email.svg" alt="wht" />
          </span>
          <p class="">scotmakinde1@gmail.com</p>
        </div>
      </div>
      <div class="flex items-center justify-center space-x-2">
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
  name: "ContactCont",
  components: {},

  data() {
    return {
        email:"",
        message: "",
        images: assets,
    };
  },
};
</script>

<style scoped>
/* eslint-disable */

.input-field {
  @apply border bg-[#1E1E1E] text-gray-300 border-gray-300 rounded-md focus:outline-none w-full h-10 sm:h-14 px-2;
}

</style>
