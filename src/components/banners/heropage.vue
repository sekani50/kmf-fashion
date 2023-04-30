<!-- eslint-disable -->
<template>
  <div
    class="w-full relative m-auto overflow-hidden my-3 sm:my-6   md:h-[400px] lg:h-[500px] h-fit"
  >
    <div class="flex flex-col relative text-gray-200 bg-opacity-80 sm:bg-opacity-100 bg-[#1E1E1E] space-y-6 w-full sm:p-6 px-3 pt-3 h-full sm:grid sm:text-[#1E1E1E] grid-cols-6 sm:bg-[#f0e68c]">
        <div class="w-full h-full inset-0 absolute -z-10 block ">
        <img class="w-full h-full object-fill" src="@/assets/images/try.jpg" alt="dd" />
        
      </div>
        <div
        class="collectio p-4 sm:p-0 col-span-2 flex flex-col sm:space-y-3 space-y-2 justify-center items-center"
      >
     
        <div class="text-creat text-sm md:text-[16px] text-center w-full lg:text-2xl font-bold sm:font-semibold">
          <span class="tracking-widest"
            >We Create
            <span class="tracking-widest text-">Tech'Style</span></span
          >
        </div>
        <div class="descript leading-7 text-sm lg:text-lg text-center">
          Our goal is to create unique and stylish pieces. From casual outfits
          to formal ensembles. We work closely with our clients to ensure their
          vision becomes reality.
        </div>
        <router-link to="/contact">
            <button 
        
        class="sm:bg-[#1E1E1E] text-sm lg:text-lg rounded-md p-2 text-[#1E1E1E] bg-[#f0e68c] sm:text-[#f0e68c]">Contact us</button>

        </router-link>
       
      </div>

      <div class="flex justify-center items-center h-full m-auto">
        <div
          class="rounded-full transform rotate-[134deg] sm:rotate-[0deg]  bg-[#1E1E1E] relative md:w-20 md:h-20 w-12 h-12 lg:w-24 lg:h-24"
        >
          <div
            class="absolute bg-[#f0e68c] transform rotate-[135deg] sm:rotate-[0deg] bg-opacity-70 sm:bg-opacity-100 sm:bg-[#f0e68c] w-[2px] md:w-[4px] top-[-1px]  sm:top-0 left-[24px] sm:left-[22px] lg:left-[45px] md:left-[36px] md:h-24 h-[3rem] sm:h-16 lg:h-28"
          >
        <span class="rounded-full md:w-[8px] md:h-[8px] transform rotate-[135deg] sm:rotate-[0deg]  w-[6px] h-[6px] bg-[#f0e68c]  bg-opacity-70 sm:bg-opacity-100 sm:bg-[#f0e68c] absolute left-[-2px] top-[19px]  sm:top-[21px] md:top-[37px] lg:top-[41px]"></span>
        </div>
        </div>
      </div>

      <div class="col-span-3 h-full sm:relative">
        <div class="w-full h-full sm:absolute bottom-[-24px]">
            <img src="@/assets/images/wishtx.png" alt="ss" class="w-full h-full object-contain" />

        </div>
        

      </div>
    </div>
   
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
//import { assets } from "@/assets/svgimages.js";

export default {
  name: "HeroPage",

  data() {
    return {};
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
</style>
