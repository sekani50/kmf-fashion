<!-- eslint-disable -->
<template>  

    <div class="group w-full h-full">
        <div
          class="rounded-lg  overflow-hidden  collectio w-full flex flex-col h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
        >
          <div
            class="w-full h-[160px] md:w-[240px] sm:h-[280px] overflow-hidden rounded-t-lg"
          >
            <img
              :src="image"
              alt="new"
              class="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div class="sm:space-y-4 space-y-3 w-full p-2 sm:p-6">
            <p class="truncate  w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ name }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ description }}</span> 
            </p>
            <p
                :class="
                  price === undefined ||
                  price === '0' ||
                  price === ''
                    ? 'hidden'
                    : 'block'
                "
                class=" text-zinc-700 font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${price}` }}
              </p>
           
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
