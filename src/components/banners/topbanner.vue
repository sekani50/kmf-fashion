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
        class="w-full h-full"
        v-for="(item, id) in imageList"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :content="item.content"
      >
        <template #pause>
          <i class="icon pause_circle_outline"></i>
        </template>
      </vueper-slide>
    </vueper-slides>

    <div class="h-6"></div>

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
//import { assets } from "@/assets/svgimages.js";
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
        {
          image: require("@/assets/images/slideAt.png"),
          title:
            '<p style= "font-size:1.5rem;color:black;position:absolute;left:10%;font-weight:bold;padding:1%;border: 3px solid black;">TOP SELLER<p>',
        },
        {
          image: require("@/assets/images/slideCt.png"),
          title:
            '<p style= "font-size:1.5rem;color:black;position:absolute;right:10%;font-weight:bold;padding:1%;border: 3px solid black;">FLASH SALES<p>',
        },
        {
          image: require("@/assets/images/slideBt.png"),
          title:
            '<p style= "font-size:1.5rem;color:white;padding:1%;position:absolute;left:10%;font-weight:bold;border: 3px solid white;">FLASH SALES<p>',
        },
      ],
    };
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
</style>
