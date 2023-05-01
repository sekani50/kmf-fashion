<!-- eslint-disable -->
<template>  

    <div class="group w-full h-full">
        <div
          class="rounded-lg w-full flex flex-col h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
        >
          <div
            class="w-full h-[160px] sm:w-[300px] sm:h-[280px] overflow-hidden rounded-t-lg"
          >
            <img
              :src="image"
              alt="new"
              class="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
            <div class="font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              {{ name }}
            </div>
            <div class="text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden w-full">
              <span>{{ description }}</span>
            </div>
            <p
                :class="
                  price === '0' ||
                  price === ''
                    ? 'hidden'
                    : 'block'
                "
                class="font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${price}` }}
              </p>
            <div class="w-full mx-auto">
              <button
                @click="sendMessage(name)"
                class="other-name py-1 px-2 rounded-md bg-[#f0e68c] text-black"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */

export default {
  name: "ProductWidgets",
  props:["name","description","image", "price"],

  data() {
    return {
      
    };
  },
  methods: {
    sendMessage(name) {

      
      const url =
        "https://wa.me/2348118617926?text=  I like the " + name;

      window.open(url, "blank").focus();

    },
  },
};
</script>

<style scoped>
/* eslint-disable */
</style>
