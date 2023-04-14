<!-- eslint-disable -->
<template>
  <div class=" w-full mt-[60px] sm:mt-[68px] space-y-[5%]">
   <TopBanner/>
   <ItemCategory/>
   <ExploreProducts/>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import TopBanner from "@/components/banners/topbanner.vue";
import ItemCategory from "@/components/itemcategories.vue";
import ExploreProducts from "@/components/collection.vue"


export default {
  name: "HomePage",
  components: {
    TopBanner,
    ItemCategory,
    ExploreProducts,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
/* eslint-disable */
</style>
