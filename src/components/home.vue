<!-- eslint-disable -->
<template>
  <div class="w-full mt-[60px] sm:mt-[80px] space-y-[5%]">
    <HeroPage />
    <ExploreProducts
      :bespoke="bespoke"
      :bridal="bridal"
      :asoebi="asoebi"
      :muslim="muslim"
      :fabrics="fabrics"
      :cooperate="cooperate"
    />
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */

import HeroPage from "@/components/banners/heropage.vue";
import ExploreProducts from "@/components/products/collection.vue";
import { getCategory } from "../adminfirebase";
export default {
  name: "HomePage",
  components: {
    HeroPage,
    ExploreProducts,
  },

  data() {
    return {
      bespoke: [],
      bridal: [],
      asoebi: [],
      muslim: [],
      fabrics: [],
      cooperate: [],
    };
  },

  async mounted() {
    await getCategory(
      this.bespoke,
      this.bridal,
      this.asoebi,
      this.muslim,
      this.fabrics,
      this.cooperate
    );
  },
  methods: {},
};
</script>

<style scoped>
/* eslint-disable */
</style>
