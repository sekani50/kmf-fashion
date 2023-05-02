<!-- eslint-disable -->
<template>
  <div class="collection w-[97%] sm:w-[95%] mx-auto p-2 sm:p-6 space-y-[5%]">
    <div class="flex w-full justify-center items-center space-x-2">
      <span class="h-[2px] w-16 sm:w-24 bg-zinc-700 relative">
        <span class="absolute w-[6px] h-[6px] transform rotate-45 bg-zinc-700 right-0 top-[-2px]"></span>
      </span>
      <P class="other-name text-zinc-700 sm:text-2xl text-lg font-medium"
      >Our Services</P
    >
      <span class="h-[2px] w-16 sm:w-24 bg-zinc-700 relative">
        <span class="absolute w-[6px] h-[6px] transform rotate-45 bg-zinc-700 left-0 top-[-2px]"></span>
      </span>
    </div>
 <!--second banner.... chat with admin-->
 <div
 @click="sendMessage(`Hi, I want to sew my clothes`)"
 class="w-full"
 >
 <SecBanner/>
 </div>
  
   
    <div class="flex justify-between items-center">
      <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">Asoebi</p>
      <button
      @click="showMore(asoebi[0].category.stringValue)"
      class="text-[#daa520] text-s[13px] sm:text-lg flex items-center space-x-2">
        <p> more</p>
        <div class="w-6 h-6 sm:w-6 pt-1 sm:h-6 items-center flex">
          <img src="@/assets/more.svg" class="w-full h-full" alt="" />
         </div>
      </button>
    </div>
   
    <div
      class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-[70px] text-zinc-700"
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
      <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">Muslimah Wears</p>
      <button class="text-[#daa520] text-s[13px] sm:text-lg flex items-center space-x-2">
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
      <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">Unisex Bespoke</p>
      <button class="text-[#daa520] text-s[13px] sm:text-lg flex items-center space-x-2">
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
    <TopBanner class="w-full"/>
    <div class="flex justify-between items-center">
      <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">Bridal Wears</p>
      <button class="text-[#daa520] text-s[13px] sm:text-lg flex items-center space-x-2">
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
      <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">Cooperate and Casual Wears</p>
      <button class="text-[#daa520] text-s[13px] sm:text-lg flex items-center space-x-2">
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
      <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">Fabrics</p>
      <button class="text-[#daa520] text-s[13px] sm:text-lg flex items-center space-x-2">
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
    <!--training.... chat with admin-->
    <div
    @click="sendMessage(`I'm interested in the fashion design training. How do i get started?`)"
    class="relative w-full h-[140px] sm:h-[300px] rounded-sm sm:rounded-md">
     <img class="w-full h-full object-cover rounded-sm sm:rounded-md" src="@/assets/images/training.png" alt="training" />
      <div class="absolute inset-0 w-full h-full bg-black bg-opacity-60 space-y-[2%] sm:space-y-[3%] sm:p-6 p-1">
        <p class="capitalize text-gray-300 text-center font-semibold text-xl sm:text-5xl collectio">Unleash your creativity</p>
        <p class="text-center text-gray-300 font-medium capitalize text-sm sm:text-xl other-name">With our <span class="font-semibold uppercase text-[#daa520] p-1 bg-black text-xl sm:text-5xl tracking-wider collectio">fashion design</span></p>
        <p class="text-center font-semibold uppercase "><span class="text-[#daa520]  rounded-sm md:rounded-md p-1 bg-zinc-700 bg-opacity-80 text-xl sm:text-5xl tracking-wider collectio">Training</span></p>
        <div class="w-full text-[#daa520] justify-center collectio uppercase flex items-center ">
          <button class="bg-black  bg-opacity-80 flex items-center space-x-1 sm:space-x-2 px-1 rounded-sm md:rounded-md">
            <span class="">Chat with us</span>
          <div class="w-3 h-3 sm:h-4 sm:w-4 mr-3">
            <img class="w-full h-full" src="@/assets/whatsapp.svg" alt="" />
          </div>
          </button>
         
        </div>
      </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import ProductWidgets from "./widget.vue"
import TopBanner from "@/components/banners/topbanner.vue";
import SecBanner from "@/components/banners/secondbanner.vue"
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ExploreProducts",
  props: ["bespoke", "bridal", "asoebi", "muslim", "fabrics", "cooperate"],
  components:{
    ProductWidgets,
    SecBanner,
    TopBanner,
  },
  data() {
    return {
      image: "",

    };
  },
  methods: {
    ...mapActions(["updateCategory"]),
    sendMessage(text) {
      const url =
        "https://wa.me/2348118617926?text=" + text;

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
