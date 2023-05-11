<!-- eslint-disable -->
<template>
  <div
    class="w-full h-full bg-[#FFF] inset-0 sm:pb-56 fixed overflow-y-auto overflow-x-hidden"
  >
   

    <AdminDashboard/>
    <div class="w-full h-full">
      <AddProduct />
    </div>

     
    <MobileDashboard/>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */



import AddProduct from "@/components/admin/addproduct.vue";
import AdminDashboard from "@/components/admin/dashboard.vue";
import MobileDashboard from "@/components/admin/mobiledashboard.vue"

export default {
  name: "MainPage",
  components: {
    AddProduct,
    AdminDashboard,
    MobileDashboard

  },

  data() {
    return {
      isAddImage: false,
    };
  },
  methods: {
    togglepage() {
      this.isAddImage = !this.isAddImage;
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
