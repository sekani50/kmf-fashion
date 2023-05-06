<!-- eslint-disable -->
<template>
  <div
    @click.self="toggleminiDetails"
    class="w-full h-full collectio inset-0 bg-black z-40 bg-opacity-70 fixed"
  >
    <div
      class="w-[80%] h-[80%] overflow-auto sm:overflow-hidden transform transition duration-300 ease-in-out absolute inset-0 m-auto grid grid-cols-1 sm:grid-cols-2 bg-white rounded-lg sm:rounded-xl"
    >
    <div
    @click="toggleminiDetails"
    class="absolute top-[-30px] right-0" v-html="images.closedetail"></div>
      <div class="h-full w-full  rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none">
        <img
          class="w-full h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none object-cover"
          :src="image"
          alt=""
        />
      </div>
      <div class="sm:p-4 p-3 flex flex-col relative w-full h-full space-y-2 sm:space-y-5">
        <p class="uppercase font-semibold">{{ cats }}</p>
        <p class="font-semibold">{{ name }}</p>
        <div class="space-y-2 max-h-[100px] w-full">
          <p class="font-semibold">Description</p>
          <div class="w-full h-full"><p>{{ description }}</p></div>
        </div>
        <p v-if="price !== undefined || price === 0" class="self-end">{{ `₦${price}` }}</p>
        <button
          class="text-white w-[90%] rounded-md flex text-center justify-center p-2 text-sm sm:text-lg bg-zinc-700 outline-none hover:bg-zinc-800"
        >
          Explore
        </button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets } from "@/assets/svgimages.js";

export default {
  name: "MiniDetail",
  props: [
    "name",
    "description",
    "image",
    "price",
    "cats",
    "idx",
    "toggleminiDetails",
  ],
  data() {
    return {
      images:assets
    };
  },
  methods: {},
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
</style>
