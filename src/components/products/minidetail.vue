<!-- eslint-disable -->
<template>
  <div
    @click.self="toggleminiDetails"
    class="w-full h-full collectio inset-0 bg-black z-40 bg-opacity-70 fixed"
  >
    <div
      class="w-[700px] max-[720px]:w-[550px] max-[565px]:w-[350px] h-[80%] overflow-auto sm:overflow-hidden transform transition duration-300 ease-in-out absolute inset-0 m-auto grid grid-cols-1 sm:grid-cols-2 bg-white rounded-lg sm:rounded-xl"
    >
      <div
        @click="toggleminiDetails"
        class="absolute top-[-30px] right-0"
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
          class="w-[400px] max-[720px]:w-[280px] max-[565px]:w-[350px] h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none object-cover"
          v-for="(img, index) in image"
          :key="index"
          >
          <img
            class="w-full h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none object-cover"
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
        <p class="uppercase font-semibold">{{ cats }}</p>
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
        @click="explore(image)"
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
import { assets } from "@/assets/svgimages.js"
import { mapActions } from "vuex";

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
    };
  },
  methods: {
    ...mapActions(["updateDetails"]),
    prev () {
      let slide = this.$refs.slide;
      console.log(slide.scrollWidth)
      console.log(slide.offsetWidth)
      slide.scrollBy({ left: -slide.scrollWidth / 4, behavior: "smooth" });

    },
    next () {
      let slide = this.$refs.slide;
      slide.scrollBy({ left: slide.scrollWidth / 4, behavior: "smooth" });
      console.log(slide.scrollWidth)
      console.log(slide.offsetWidth)
    },
    explore () {
        const toStore = {
            name: this.name,
            description: this.description,
            image:this.image,
             price:this.price,
            cats:this.cats
        }

        this.updateDetails(toStore)
        this.$router.push("/moredetail")
        
      }
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
