<!-- eslint-disable -->
<template>
    <div class="w-[97%] sm:w-[95%] mx-auto p-2 sm:p-6 space-y-[5%] ">
    <P class="text-gray-300 sm:text-2xl text-lg font-medium">Explore Products</P>

    <div
      class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-[70px] text-gray-300"
    >
      <div v-for="(item, index) in arr" :key="index" class="group">
        <div
          class="rounded-lg group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
        >
          <div
            class="w-full h-[250px] sm:h-[350px] overflow-hidden rounded-t-lg"
          >
            <img
              :src="item.image"
              alt="new"
              class="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div class="sm:space-y-4 space-y-2 p-2 sm:p-6">
            <p
              class="font-semibold text-[15px] sm:text-xl sm:pr-[10%]"
            >
              {{ item.name }}
            </p>
            <p class="text-sm sm:text-lg font-thin sm:pr-[10%]">
              {{ item.description }}
            </p>
            <div class="w-full mx-auto">
              <a href="https://wa.me/2348193667165" class="other-name p-2 rounded-md bg-[#f0e68c] text-black">Explore</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { featuredImages } from '@/assets/svgimages';

export default {
  name: "ExploreProducts",

  data() {
    return {
      arr:featuredImages
    };
  },
  mounted() {
  
  }
};
</script>

<style scoped>
/* eslint-disable */
</style>
