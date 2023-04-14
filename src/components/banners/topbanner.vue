<!-- eslint-disable -->
<template>
  <div class="w-[98%] relative m-auto overflow-hidden my-3 mb-6 sm:my-6">
    <vueper-slides
      :gap="4"
      :visible-slides="1"
      slide-multiple
      :slide-ratio="1 / 3"
      :arrows="false"
      autoplay
    >
      <vueper-slide
        v-for="(item, id) in imageList"
        :key="item.id"
        :image="item.image"
      >
      <div :key="item.id">
        <img class="w-full object-cover" :src="item.image" />
        <div class="sec wave"></div>
      </div>
      

        <template #pause>
          <i class="icon pause_circle_outline"></i>
        </template>
      </vueper-slide>
    </vueper-slides>

    <div class=" h-6"></div>

    <!--
       <div class="absolute w-10 m-auto inset-x-0 bottom-10 flex space-x-2">
      <span class="w-2 h-2 bg-white rounded-full"></span>
      <span class="w-2 h-2 bg-white rounded-full"></span>
      <span class="w-2 h-2 bg-white rounded-full"></span>
    </div>
    -->
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets } from "@/assets/svgimages.js";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";


export default {
  name: "TopBanner",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
        
        imageList: [
        { image: assets.mdBannerOne },
        { image: assets.mdBannerTwo },
        { image: assets.mdBannerThree },
      ],
    
    };
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */

</style>
