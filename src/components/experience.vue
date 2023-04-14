<!-- eslint-disable -->
<template>
  <div
    class="h-fit overflow-hidden py-8 space-y-10 text-zinc-700 relative bg-[#FFFFFF] shadow-lg rounded-lg sm:rounded-xl px-4"
  >
    <p
      class="uppercase text-lg sm:text-xl font-semibold pb-3 border-b-4 w-56 border-[#3452FF]"
    >
      works & experiences
    </p>


    <div class="w-[97%] sm:w-11/12 m-auto space-y-6">
        <div class="text space-y-3">
        <p class="uppercase font-semibold">JEKAET</p>
        <ul class=" space-y-2">
        
        <li>Built a web app that provide visual appealing and easy usage for customers </li>
        <li>The motive was to bring customers and food sellers together on a platform </li>
        <li>The react web app was converted to a mobile app</li>
        <li>The code's components are structured for easy debugging and reusability</li>
        <li>Developed the web applications using Javascript, React and Redux.</li>
    
        </ul>

    </div>

    <div class="text space-y-3 ">
        <p class="uppercase font-semibold ">NIGIS</p>
        <ul class=" space-y-2">
        <li> Developed web application for easy estate management and land registration</li>
        <li>Developed the web applications using JavaScript, Vue, and Vuex.</li>
        <li>Developed and maintained reusable components for future use.</li>
        <li>Collaborated with product and design teams to ensure a user-friendly experience.</li>
        <li>Conducted rigorous testing and debugging processes to ensure the highest quality of code</li>
        <li>Optimized code for faster page loading speeds.</li>
        </ul>

    </div>

    </div>
   

  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import assets from "@/assets/svgimages.js";
export default {
  name: "ExperRience",

  data() {
    return {
      images: assets,
    };
  },
};
</script>

<style scoped>
/* eslint-disable */

.text {
  @apply text-zinc-700 bg-black bg-opacity-10 sm:text-lg text-sm lg:text-[15px] p-3 rounded-l-none sm:rounded-l-none   sm:rounded-r-lg rounded-md sm:rounded-lg border-l-4 border-l-[#3452FF];
}
.span {
  @apply sm:hidden group-hover:block text-zinc-700 p-1 absolute min-w-max border rounded-sm bg-white;
}

</style>
