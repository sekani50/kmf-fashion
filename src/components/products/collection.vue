<!-- eslint-disable -->
<template>
  <div class="collection w-[97%] sm:w-[95%] mx-auto p-2 sm:p-6 space-y-[5%]">
    <div class="flex w-full justify-center items-center space-x-2">
      <span class="h-[2px] w-16 sm:w-24 bg-gray-300 relative">
        <span class="absolute w-[6px] h-[6px] transform rotate-45 bg-gray-300 right-0 top-[-2px]"></span>
      </span>
      <P class="other-name text-gray-300 sm:text-2xl text-lg font-medium"
      >Our Services</P
    >
      <span class="h-[2px] w-16 sm:w-24 bg-gray-300 relative">
        <span class="absolute w-[6px] h-[6px] transform rotate-45 bg-gray-300 left-0 top-[-2px]"></span>
      </span>
    </div>

   
   
    <div class="flex justify-between items-center">
      <p class="text-gray-300 sm:text-xl text-[16px] font-semibold collectio">Asoebi</p>
      <button
      @click="showMore(asoebi[0].category.stringValue)"
      class="text-[#f0e68c] text-s[13px] sm:text-lg flex items-center space-x-2">
        <p> more</p>
        <div class="w-6 h-6 sm:w-6 pt-1 sm:h-6 items-center flex">
          <img src="@/assets/more.svg" class="w-full h-full" alt="" />
         </div>
      </button>
    </div>
   
    <div
      class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-[70px] text-gray-300"
    >
   
    <div class="h-fit sm:w-[300px] sm:h-fit" v-for="(item, index) in asoebi.slice(0,4)" :key="index">
      <ProductWidgets 
      :name="item.name.stringValue"
      :description="item.description.stringValue"
      :image="item.image.stringValue"
      :price="item.price.stringValue"
    
    />
    </div>
   

    </div>

    <div class="flex justify-between items-center">
      <p class="text-gray-300 sm:text-xl text-[16px] font-semibold collectio">Muslimah Wears</p>
      <button class="text-[#f0e68c] text-s[13px] sm:text-lg flex items-center space-x-2">
        <p> more</p>
        <div class="w-6 h-6 sm:w-6 pt-1 sm:h-6 items-center flex">
          <img src="@/assets/more.svg" class="w-full h-full" alt="" />
         </div>
      </button>
    </div>

    <div class="grids">
      <div class="h-fit sm:w-[300px] sm:h-fit" v-for="(item, index) in muslim.slice(0,4)" :key="index">
      <ProductWidgets 
      :name="item.name.stringValue"
      :description="item.description.stringValue"
      :image="item.image.stringValue"
    
    />
    </div>
   

    </div>

    <div class="flex justify-between items-center">
      <p class="text-gray-300 sm:text-xl text-[16px] font-semibold collectio">Unisex Bespoke</p>
      <button class="text-[#f0e68c] text-s[13px] sm:text-lg flex items-center space-x-2">
        <p> more</p>
        <div class="w-6 h-6 sm:w-6 pt-1 sm:h-6 items-center flex">
          <img src="@/assets/more.svg" class="w-full h-full" alt="" />
         </div>
      </button>
    </div>

    <div class="grids">
      <div class="h-fit sm:w-[300px] sm:h-fit" v-for="(item, index) in bespoke.slice(0,4)" :key="index">
      <ProductWidgets 
      :name="item.name.stringValue"
      :description="item.description.stringValue"
      :image="item.image.stringValue"
    
    />
    </div>
   

    </div>
    <div class="flex justify-between items-center">
      <p class="text-gray-300 sm:text-xl text-[16px] font-semibold collectio">Bridal Wears</p>
      <button class="text-[#f0e68c] text-s[13px] sm:text-lg flex items-center space-x-2">
        <p> more</p>
        <div class="w-6 h-6 sm:w-6 pt-1 sm:h-6 items-center flex">
          <img src="@/assets/more.svg" class="w-full h-full" alt="" />
         </div>
      </button>
    </div>

    <div class="grids">
      <div class="h-fit sm:w-[300px] sm:h-fit" v-for="(item, index) in bridal.slice(0,4)" :key="index">
      <ProductWidgets 
      :name="item.name.stringValue"
      :description="item.description.stringValue"
      :image="item.image.stringValue"
    
    />
    </div>
   

    </div>
    <div class="flex justify-between items-center">
      <p class="text-gray-300 sm:text-xl text-[16px] font-semibold collectio">Cooperate and Casual Wears</p>
      <button class="text-[#f0e68c] text-s[13px] sm:text-lg flex items-center space-x-2">
        <p> more</p>
        <div class="w-6 h-6 sm:w-6 pt-1 sm:h-6 items-center flex">
          <img src="@/assets/more.svg" class="w-full h-full" alt="" />
         </div>
      </button>
    </div>
    
    <div class="grids">
      <div class="h-fit sm:w-[300px] sm:h-fit" v-for="(item, index) in cooperate.slice(0,4)" :key="index">
      <ProductWidgets 
      :name="item.name.stringValue"
      :description="item.description.stringValue"
      :image="item.image.stringValue"
    
    />
    </div>
   

    </div>
    <div class="flex justify-between items-center">
      <p class="text-gray-300 sm:text-xl text-[16px] font-semibold collectio">Fabrics</p>
      <button class="text-[#f0e68c] text-s[13px] sm:text-lg flex items-center space-x-2">
        <p> more</p>
        <div class="w-6 h-6 sm:w-6 pt-1 sm:h-6 items-center flex">
          <img src="@/assets/more.svg" class="w-full h-full" alt="" />
         </div>
      </button>
    </div>

    <div class="grids">
      <div class="h-fit sm:w-[300px] sm:h-fit" v-for="(item, index) in fabrics.slice(0,4)" :key="index">
      <ProductWidgets 
      :name="item.name.stringValue"
      :description="item.description.stringValue"
      :image="item.image.stringValue"

    
    />
    </div>
   

    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import ProductWidgets from "./widget.vue"
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ExploreProducts",
  props: ["bespoke", "bridal", "asoebi", "muslim", "fabrics", "cooperate"],
  components:{
    ProductWidgets,
  },
  data() {
    return {
      image: "",

    };
  },
  methods: {
    ...mapActions(["updateCategory"]),
    sendMessage(name) {
      const url =
        "https://wa.me/2348118617926?text= Hi there, i like this " + name;

      window.open(url, "blank").focus();
    },
    showMore(cat) {

      this.updateCategory(cat)
      this.$router.push("/product")
    }
  },
};
</script>

<style scoped>
/* eslint-disable */
.grids {
  @apply grid grid-cols-2 lg:grid-cols-3 gap-1 xl:grid-cols-4  text-gray-300;
}
</style>
