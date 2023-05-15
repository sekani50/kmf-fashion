<!-- eslint-disable -->
<template>
  <div
    class="collectio w-[97%] sm:w-[95%] mx-auto p-2 sm:p-6 space-y-[5%] mt-[-5px]"
  >
    <div class="flex w-full justify-center items-center space-x-2">
      <span class="h-[2px] w-16 sm:w-24 bg-zinc-700 relative">
        <span
          class="absolute w-[6px] h-[6px] transform rotate-45 bg-zinc-700 right-0 top-[-2px]"
        ></span>
      </span>
      <P class="other-name text-zinc-700 sm:text-2xl text-lg font-medium"
        >Our Services</P
      >
      <span class="h-[2px] w-16 sm:w-24 bg-zinc-700 relative">
        <span
          class="absolute w-[6px] h-[6px] transform rotate-45 bg-zinc-700 left-0 top-[-2px]"
        ></span>
      </span>
    </div>
    <!--second banner.... chat with admin-->
    <div @click="sendMessage(`Hi, I want to sew my clothes`)" class="w-full">
      <SecBanner />
    </div>

    <div class="flex flex-col space-y-2">
      <div class="flex justify-between items-center">
        <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">
          Asoebi
        </p>
      </div>

      <div
        class="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-[3rem] lg:gap-[70px] text-zinc-700"
      >
        <div
          class="h-fit md:w-[240px] sm:h-fit"
          v-for="(item, index) in asoebi.slice(0, 4)"
          :key="index"
          @click="
            showMiniDetail(
              item.id,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'asoebi'
            )
          "
        >
          <!--

          "Unisex Bespoke",
        "Bridal wears",
        "Asoebi",
        "Cooperate",
        "Muslimah Wears",
        "Fabrics",
        -->
          <ProductWidgets
            :name="item.name.stringValue"
            :description="item.description.stringValue"
            :image="item.images[0].stringValue"
            :price="item.price.stringValue"
          />
        </div>
      </div>
      <button
        @click="showMore('Asoebi')"
        class="text-white bg-zinc-700 self-end text-[14px] sm:text-lg justify-center flex items-center rounded-sm sm:rounded-md w-[20%] p-2"
      >
        <span> more</span>
      </button>
    </div>

    <!---->
    <div class="flex flex-col space-y-2">
      <div class="flex justify-between items-center">
        <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">
          Muslim Wears
        </p>
      </div>

      <div class="grids">
        <div
          class="h-fit md:w-[240px] sm:h-fit"
          v-for="(item, index) in muslim.slice(0, 4)"
          :key="index"
          @click="
            showMiniDetail(
              item.id,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'muslim wears'
            )
          "
        >
          <ProductWidgets
            :name="item.name.stringValue"
            :description="item.description.stringValue"
            :image="item.images[0].stringValue"
            :price="item.price.stringValue"
          />
        </div>
      </div>

      <button
        @click="showMore('Muslim Wears')"
        class="text-white bg-zinc-700 self-end text-[14px] sm:text-lg justify-center flex items-center rounded-sm sm:rounded-md w-[20%] p-2"
      >
        <span> more</span>
      </button>
    </div>

    <!---->
    <div class="flex flex-col space-y-2">
      <div class="flex justify-between items-center">
        <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">
          Unisex Bespoke
        </p>
      </div>

      <div class="grids">
        <div
          class="h-fit md:w-[240px] sm:h-fit"
          v-for="(item, index) in bespoke.slice(0, 4)"
          :key="index"
          @click="
            showMiniDetail(
              item.id,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'unisex bespoke'
            )
          "
        >
          <ProductWidgets
            :name="item.name.stringValue"
            :description="item.description.stringValue"
            :image="item.images[0].stringValue"
            :price="item.price.stringValue"
          />
        </div>
      </div>

      <button
        @click="showMore('Unisex Bespoke')"
        class="text-white bg-zinc-700 self-end text-[14px] sm:text-lg justify-center flex items-center rounded-sm sm:rounded-md w-[20%] p-2"
      >
        <span> more</span>
      </button>
    </div>

    <TopBanner class="w-full" />

    <div class="flex flex-col space-y-2">
      <div class="flex justify-between text-zinc-700 items-center">
        <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">
          Bridal Wears
        </p>
      </div>

      <div class="grids">
        <div
          class="h-fit md:w-[240px] sm:h-fit"
          v-for="(item, index) in bridal.slice(0, 4)"
          :key="index"
          @click="
            showMiniDetail(
              item.id,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'bridal wear'
            )
          "
        >
          <ProductWidgets
            :name="item.name.stringValue"
            :description="item.description.stringValue"
            :image="item.images[0].stringValue"
            :price="item.price.stringValue"
          />
        </div>
      </div>
      <button
        @click="showMore('Bridal wears')"
        class="text-white bg-zinc-700 self-end text-[14px] sm:text-lg justify-center flex items-center rounded-sm sm:rounded-md w-[20%] p-2"
      >
        <span> more</span>
      </button>
    </div>

    <div class="flex flex-col space-y-2">
      <div class="flex justify-between items-center">
        <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">
          Cooperate and Casual Wears
        </p>
      </div>

      <div class="grids">
        <div
          class="h-fit md:w-[240px] sm:h-fit"
          v-for="(item, index) in cooperate.slice(0, 4)"
          :key="index"
          @click="
            showMiniDetail(
              item.id,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'cooperate wear'
            )
          "
        >
          <ProductWidgets
            :name="item.name.stringValue"
            :description="item.description.stringValue"
            :image="item.images[0].stringValue"
            :price="item.price.stringValue"
          />
        </div>
      </div>
      <button
        @click="showMore('Cooperate')"
        class="text-white bg-zinc-700 self-end text-[14px] sm:text-lg justify-center flex items-center rounded-sm sm:rounded-md w-[20%] p-2"
      >
        <span> more</span>
      </button>
    </div>

    <div class="flex flex-col space-y-2">
      <div class="flex justify-between items-center">
        <p class="text-zinc-700 sm:text-xl text-[14px] font-semibold collectio">
          Fabrics
        </p>
      </div>

      <div class="grids">
        <div
          class="h-fit md:w-[240px] sm:h-fit"
          v-for="(item, index) in fabrics.slice(0, 4)"
          :key="index"
          @click="
            showMiniDetail(
              item.id,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'fabrics'
            )
          "
        >
          <ProductWidgets
            :name="item.name.stringValue"
            :description="item.description.stringValue"
            :image="item.images[0].stringValue"
            :price="item.price.stringValue"
          />
        </div>
      </div>

      <button
        @click="showMore('Fabrics')"
        class="text-white bg-zinc-700 self-end text-[14px] sm:text-lg justify-center flex items-center rounded-sm sm:rounded-md w-[20%] p-2"
      >
        <span> more</span>
      </button>
    </div>

    <!--training.... chat with admin-->
    <div
      @click="
        sendMessage(
          `I'm interested in the fashion design training. How do i get started?`
        )
      "
      class="relative w-full h-[140px] sm:h-[300px] rounded-sm sm:rounded-md"
    >
      <img
        class="w-full h-full object-cover rounded-sm sm:rounded-md"
        src="@/assets/images/training.png"
        alt="training"
      />
      <div
        class="absolute inset-0 w-full h-full bg-black bg-opacity-60 space-y-[1%] sm:space-y-[4%] md:space-y-[3%] sm:p-6 p-1"
      >
        <p
          class="capitalize text-gray-300 text-center font-semibold text-xl sm:text-4xl md:text-5xl collectio"
        >
          Unleash your creativity
        </p>
        <p
          class="text-center text-gray-300 font-medium capitalize text-sm sm:text-lg md:text-xl other-name"
        >
          With our
          <span
            class="font-semibold uppercase text-[#daa520] p-1 bg-black text-xl sm:text-4xl md:text-5xl tracking-wider collectio"
            >fashion design</span
          >
        </p>
        <p class="text-center font-semibold uppercase">
          <span
            class="text-[#daa520] rounded-sm md:rounded-md p-1 bg-black text-xl sm:text-4xl md:text-5xl tracking-wider collectio"
            >Training</span
          >
        </p>
        <div
          class="w-full text-[#daa520] justify-center collectio uppercase flex items-center"
        >
          <button
            class="bg-black bg-opacity-80 flex items-center space-x-1 sm:space-x-2 px-1 rounded-sm md:rounded-md"
          >
            <span class="">Chat with us</span>
            <div class="w-3 h-3 sm:h-4 sm:w-4 mr-3">
              <img class="w-full h-full" src="@/assets/whatsapp.svg" alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>

    <!--mini detail-->
    <div :class="isminiDetail ? 'block' : 'hidden'">
      <MiniDetail
        :image="image"
        :name="name"
        :description="description"
        :cats="cats"
        :price="price"
        :idx="idx"
        :toggleminiDetails="toggleminiDetails"
      />
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import ProductWidgets from "./widget.vue";
import MiniDetail from "./minidetail.vue";
import TopBanner from "@/components/banners/topbanner.vue";
import SecBanner from "@/components/banners/secondbanner.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ExploreProducts",
  props: ["bespoke", "bridal", "asoebi", "muslim", "fabrics", "cooperate"],
  components: {
    ProductWidgets,
    SecBanner,
    TopBanner,
    MiniDetail,
  },
  data() {
    return {
      image: null,
      isminiDetail: false,
      name: "",
      description: "",
      cats: "",
      price: "",
      idx: "",
    };
  },
  computed: {},
  methods: {
    ...mapActions(["updateCategory"]),
    showMiniDetail(id, name, desc, img, price, cat) {
      this.isminiDetail = true;
      this.image = img.filter(
        (i) => i.stringValue !== undefined || i.stringValue !== ""
      );
      this.price = price;
      this.description = desc;
      this.name = name;
      this.idx = id;
      this.cats = cat;

      console.log(this.image);
    },
    toggleminiDetails() {
      this.isminiDetail = !this.isminiDetail;
    },

    showMore(cat) {
      this.$router.push("/product");
      this.updateCategory(cat);
    },
    sendMessage(text) {
      const url =
        "https://wa.me/2348118617926?text=" + text;

      window.open(url, "blank").focus();
    },
  },
};
</script>

<style scoped>
/* eslint-disable */
.grids {
  @apply mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-[3rem] lg:gap-[70px] text-zinc-700;
}
</style>
