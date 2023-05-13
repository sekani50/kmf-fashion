<!-- eslint-disable -->
<template>
  <div
    @click.self="toggleminiDetails"
    class="w-full h-full collectio overflow-hidden text-zinc-700 inset-0 bg-black z-40 bg-opacity-70 fixed"
  >
    <div
      class="w-[700px] max-[720px]:w-[550px] max-[565px]:w-[320px] h-[610px] sm:h-[80%] overflow-auto sm:overflow-hidden transform transition duration-300 ease-in-out absolute inset-0 m-auto grid grid-cols-1 sm:grid-cols-2 bg-white rounded-lg sm:rounded-xl"
    >
      <div
        @click="toggleminiDetails"
        class="absolute top-[-1px] right-0 rounded-full p-1 z-50 bg-gray-300"
        v-html="images.closedetail"
      ></div>
      <div
        class=" relative h-full w-full overflow-hidden rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none"
      >
      <a class="prev" @click="prev" href="#">&#10094;</a>
        <a class="next" @click="next" href="#">&#10095;</a>
      <div 
      ref="slide"
      class="hide-scroll overflow-x-auto w-full h-full">
       
        <div class="min-w-max flex h-full ">
          <div
          class="w-[400px] max-[720px]:w-[280px] max-[565px]:w-[320px] h-[370px] sm:h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none"
          v-for="(img, index) in image"
          :key="index"
          >
          <img
            class="w-full h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none object-fill"
            :src="img.stringValue"
            alt=""
          />
        </div>

        </div>

      </div>
       
      
      </div>
      <div
        class="sm:p-4 p-3 flex flex-col relative w-full h-full space-y-2 sm:space-y-5"
      >
      <!--
          <p class="uppercase font-semibold">{{ cats }}</p>
      -->
      
        <p class="font-semibold">{{ name }}</p>
        <div class="space-y-2 max-h-[100px] w-full">
          <p class="font-semibold">Description</p>
          <div class="w-full h-full">
            <p>{{ description }}</p>
          </div>
        </div>
        <p v-if="price !== undefined || price === 0" class=" font-semibold">
          {{ `Price: ₦${price}` }}
        </p>
        <button
        @click="chat"
          class="text-white w-full rounded-md flex text-center justify-center p-2 text-sm sm:text-lg bg-zinc-700 outline-none hover:bg-zinc-800"
        >
        <span v-if="!isSent">Explore</span>
        <div v-else class="flex justify-center items-center">
          <div
            class="rounded-full border-2 animate-spin border-r-0 border-b-0 w-6 h-6 border-slate-50"
          ></div>
        </div>
        </button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets } from "@/assets/svgimages.js"

import { sendToAdmin } from "../../adminfirebase";
import _ from 'lodash'

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
  components: {
  
  },
  data() {
    return {
      images: assets,
      isSent: false,
     
    };
  },
  methods: {
    
    prev () {
      //console.log(this.idx)
     
      let slide = this.$refs.slide;
      console.log('from slider',slide.scrollWidth)
      console.log(slide.offsetWidth)
      slide.scrollBy({ left: -slide.scrollWidth / 3, behavior: "smooth" });

    },
    next () {
      let slide = this.$refs.slide;
      slide.scrollBy({ left: slide.scrollWidth / 3, behavior: "smooth" });
      console.log(slide.scrollWidth)
      console.log(slide.offsetWidth)
    },
    async chat() {
      this.isSent = true;
      const payload = {
        name: this.name,
      description:this.description,
      image:this.image,
      price: this.price,
     category: this.cats,

      }
      console.log(payload);
      await sendToAdmin(payload)
        .then((res) => {
          console.log(res);
          console.log(res.id);
          this.isSent = false;
          const url =
            "https://wa.me/2348118617926?text=" + `  `+ `https://kmyfashion.vercel.app/checkout/${res.id}` +  `     `+
            `I like this ${this.name}`;

          window.open(url, "blank").focus();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  padding:3px 12px;
  background:rgba(0,0,0,0.6);
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 50%;
  text-decoration: none;
  user-select: none;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
.hide-scroll::-webkit-scrollbar {
  display: none;
}
</style>
