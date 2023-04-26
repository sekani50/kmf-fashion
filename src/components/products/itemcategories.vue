<!-- eslint-disable -->
<template>
  <div class="px-6 w-full space-y-[5%]">
    <p class="text-gray-300 sm:text-2xl text-lg font-medium">
      Shop by Category
    </p>

    <div class="grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-1 gap-3">
      <router-link
        to="/product"
        class="relative group sm:col-span-2 sm:row-span-2 bg-orange-200 rounded-md"
      >
        <div class="flex justify-center w-full h-full overflow-hidden">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg sm:text-xl">Maxi</span>
            <button class="other-name text-lg sm:text-xl border-b border-black">
              Explore
            </button>
          </div>
          <img
            class="object-cover transform duration-200 group-hover:scale-105  w-full h-full"
            src="@/assets/images/first.png"
          />
        </div>
      </router-link>
      <router-link
        to="/product"
        class="rounded-md group relative bg-yellow-200"
      >
        <div class="flex justify-center w-full h-full overflow-hidden">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg">Prom</span>
            <button class="other-name text-lg border-b border-black">
              Explore
            </button>
          </div>
          <img
            class="object-cover duration-200 group-hover:scale-105 w-full h-full"
            src="@/assets/images/owanbe.png"
          />
        </div>
      </router-link>
      <router-link to="/product" class="relative group rounded-md bg-amber-300">
        <div class="flex justify-center w-full h-full overflow-hidden">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg">Skirt & Blouse</span>
            <button class="other-name text-lg border-b border-black">
              Explore
            </button>
          </div>
          <img
            class="object-cover duration-200 group-hover:scale-105 w-full h-full"
            src="@/assets/images/ank.png"
          />
        </div>
      </router-link>
      <router-link to="/product" class="relative group rounded-md bg-blue-200">
        <div class="flex justify-center w-full h-full overflow-hidden">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg">Ankara</span>
            <button class="other-name text-lg border-b border-black">
              Explore
            </button>
          </div>
          <img
            class="object-cover duration-200 group-hover:scale-105 w-full h-full"
            src="@/assets/images/gown.png"
          />
        </div>
      </router-link>
      <router-link :to="{ name: 'ProductView', params: {msg: 'Others' }}" class="relative rounded-md group bg-slate-300">
        <div class="flex justify-center w-full h-full overflow-hidden">
          <div
            class="absolute top-6 left-4 flex flex-col justify center items-center"
          >
            <span class="other-name text-lg">Others</span>
            <button class="other-name text-lg border-b border-black">
              Explore
            </button>
          </div>
          <img
            class="object-cover duration-200 group-hover:scale-105 w-full h-full"
            src="@/assets/images/lacer.png"
          />
        </div>
      </router-link>
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
