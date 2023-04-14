<!-- eslint-disable -->
<template>
  <div
    class="w-full h-full bg-[#1E1E1E] inset-0 fixed overflow-y-auto overflow-x-hidden"
  >
    <HeaderSect />

    <ContactCont />
    
        <NameAbout />

    
   
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import NameAbout from "@/components/footer.vue";
import HeaderSect from "@/components/header.vue";
import ContactCont from "@/components/contact.vue";

export default {
  name: "MainPage",
  components: {
    NameAbout,
    HeaderSect,
    ContactCont,
  },

  data() {
    return {};
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
