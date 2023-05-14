<!-- eslint-disable -->
<template>
  <div
  
    class="w-full h-full  bg-gray-50 inset-0 fixed overflow-y-auto overflow-x-hidden"
  >
    <AdminDashboard />

    <CatAdmin :getcat="getACategory"  />

    <MobileDashboard :showCats="showCats" :isCat="isCat" />
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import AdminDashboard from "@/components/admin/dashboard.vue";
import { getCategory } from "../adminfirebase";
import { mapGetters, mapActions } from "vuex";
import CatAdmin from "@/components/admin/catadmin.vue";
import MobileDashboard from "@/components/admin/mobiledashboard.vue";
export default {
  name: "AdminCategory",
  components: {
    AdminDashboard,
    CatAdmin,
    MobileDashboard,
  },

  data() {
    return {
      bespoke: [],
      bridal: [],
      asoebi: [],
      muslim: [],
      fabrics: [],
      cooperate: [],
      isCat: false,
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
    );
    await this.storeCurr();
  },
  methods: {
    ...mapActions(["updateCurrent"]),
    showCats() {
      this.isCat = !this.isCat;
    },
    storeCurr() {
      console.log(this.bridal)
      this.updateCurrent({
        bespoke: this.bespoke,
        bridal: this.bridal,
        asoebi: this.asoebi,
        muslim: this.muslim,
        fabrics: this.fabrics,
        cooperate: this.cooperate,
      });
    },
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
