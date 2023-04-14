<!-- eslint-disable -->
<template>
  <div class="px-6 w-full space-y-[5%]">
    <p class="text-gray-300 sm:text-2xl text-lg font-medium">
      Shop by Category
    </p>

    <div class="grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-1 gap-3">
      <div
        class="relative group sm:col-span-2 sm:row-span-2 bg-orange-200 rounded-md"
      >
        <div class="flex justify-center w-full h-full">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg sm:text-xl">Trending Now</span>
            <button class="other-name text-lg sm:text-xl border-b border-black">
              Explore
            </button>
          </div>
          <img
            class="object-cover transform duration-200 group-hover:scale-105 w-full h-full"
            src="@/assets/images/first.png"
          />
        </div>
      </div>
      <div class="rounded-md group relative bg-yellow-200">
        <div class="flex justify-center w-full h-full">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg">Lace Styles</span>
            <button class="other-name text-lg border-b border-black">
              Explore
            </button>
          </div>
          <img
            class="object-cover duration-200 group-hover:scale-105 w-full h-full"
            src="@/assets/images/lacerf.png"
          />
        </div>
      </div>
      <div class="relative group rounded-md bg-amber-300">
        <div class="flex justify-center w-full h-full">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg">Ankara Styles</span>
            <button class="other-name text-lg border-b border-black">
              Explore
            </button>
          </div>
          <img
            class="object-cover duration-200 group-hover:scale-105 w-full h-full"
            src="@/assets/images/ank.png"
          />
        </div>
      </div>
      <div class="relative group rounded-md bg-slate-300">
        <div class="flex justify-center w-full h-full">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg">Igbo Styles</span>
            <button class="other-name text-lg border-b border-black">Explore</button>
          </div>
          <img
            class="object-cover duration-200 group-hover:scale-105 w-full h-full"
            src="@/assets/images/ibo.png"
          />
        </div>
      </div>
      <div class="relative rounded-md group bg-green-200">
        <div class="flex justify-center w-full h-full">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg">Hausa Style</span>
            <button class="other-name text-lg border-b border-black">Explore</button>
          </div>
          <img
            class="object-cover duration-200 group-hover:scale-105 w-full h-full"
            src="@/assets/images/green.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */

export default {
  name: "ItemCategory",
  components: {},
  data() {
    return {};
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
</style>
