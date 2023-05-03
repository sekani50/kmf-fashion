<!-- eslint-disable -->
<template>
  <div
    class="w-full sm:w-[99%] relative m-auto overflow-hidden my-3 sm:mb-6 md:h-[400px] lg:h-[500px] h-[220px]"
  >
    <transition-group name="fade" tag="div">
      <div class="relative w-full h-full" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
        <div
          class="absolute colectio w-[70%] text-sm sm:text-lg md:top-[100px] lg:top-[150px] top-[50px] left-10 text-start right-0 h-fit text-zinc-900"
          v-html="currentText"
        ></div>
        
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094;</a>
    <a class="next" @click="next" href="#">&#10095;</a>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
//import { assets } from "@/assets/svgimages.js";
import {
  herotexta,
  herotextb,
  herotextc,
  herotextd,
} from "@/components/banners/herotext/herotextA.js";

export default {
  name: "HeroPage",

  data() {
    return {
      images: [
      "https://imagetolink.com/ib/NPXTzQbD09.png",
        "https://imagetolink.com/ib/8BqmmD7I2g.png",
        "https://imagetolink.com/ib/o4YPbfocIS.png",
        "https://imagetolink.com/ib/IHizuTrQRF.png",
      ],
      texts: [herotexta, herotextb, herotextc, herotextd],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },

    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    currentText: function () {
      return this.texts[Math.abs(this.currentIndex) % this.texts.length];
    },
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  height: 100%;
  position: absolute;

  width: 100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  height: 100%;
  width: 100%;
  opacity: 0;
}
img {
  width: 100%;
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
/* Position the "next button" to the right */
.next {
  right: 0;
}
.prev {
  left: 0;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
.style {
  font-family: "Poppins";
}
</style>
