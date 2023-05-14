<!-- eslint-disable -->
<template>
  <div
    class="w-full h-full  bg-gray-50 inset-0 fixed overflow-y-auto overflow-x-hidden"
  >
    <HeaderSect />

    <ShowMoreWidget
      :bespoke="bespoke"
      :bridal="bridal"
      :asoebi="asoebi"
      :muslim="muslim"
      :fabrics="fabrics"
      :cooperate="cooperate"
      :getcat="getACategory"
    />
   
   <div class="w-full inset-x-0 bottom-0 fixed">
    <NameAbout />
   </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import NameAbout from "@/components/footer.vue";
import HeaderSect from "@/components/header.vue";
import { mapGetters } from "vuex";
import ShowMoreWidget from "@/components/products/showmorewidget.vue";
import { getCategory } from "../adminfirebase";

export default {
  name: "MainPage",
  components: {
    NameAbout,
    HeaderSect,
    ShowMoreWidget,
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
  computed: {
    ...mapGetters(["getACategory"]),
  },
  async mounted() {
    await getCategory(
      this.bespoke,
      this.bridal,
      this.asoebi,
      this.muslim,
      this.fabrics,
      this.cooperate
    )
 
  },
};
</script>

<style>
/* eslint-disable */
/*#FFECD8 */
@media (max-width: 1024px) {
}
html,
body {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  z-index: -100;
}
html {
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 10px;
  height: 18px;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
}

::-webkit-scrollbar-track {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
