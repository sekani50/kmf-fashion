<!-- eslint-disable -->
<template>
  <div
    class="let swipeIn w-full sm:pb-56 pt-[62px] sm:pt-[80px] space-y-[5%] mx-auto p-6"
  >
    <p class="text-zinc-900 sm:text-xl text-lg font-semibold collectio">
      {{ getcat }}
    </p>
    <div
      :class="
        asoebi &&
        asoebi.length !== 0 &&
        asoebi[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in asoebi"
        :key="index"
        @click="
            showMiniDetail(
              index,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'cooperate wear'
            )
          "
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg overflow-hidden  w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] md:w-[240px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.images[0].stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-900 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-900 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.description.stringValue }}</span> 
            </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="text-zinc-900 font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        bridal &&
        bridal.length !== 0 &&
        bridal[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in bridal"
        :key="index"
        @click="
            showMiniDetail(
              index,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'cooperate wear'
            )
          "
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg h-full w-full overflow-hidden  group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] md:w-[240px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.images[0].stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-900 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-900 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.description.stringValue }}</span> 
            </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="text-zinc-900 font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        cooperate &&
        cooperate.length !== 0 &&
        cooperate[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in cooperate"
        :key="index"
        @click="
            showMiniDetail(
              index,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'cooperate wear'
            )
          "
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full overflow-hidden  group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] md:w-[240px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.images[0].stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-900 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-900 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.description.stringValue }}</span> 
            </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="text-zinc-900 font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        fabrics &&
        fabrics.length !== 0 &&
        fabrics[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in fabrics"
        :key="index"

        @click="
            showMiniDetail(
              index,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'cooperate wear'
            )
          "
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full overflow-hidden  group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] md:w-[240px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.images[0].stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-900 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-900 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.description.stringValue }}</span> 
            </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="text-zinc-900 font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        bespoke &&
        bespoke.length !== 0 &&
        bespoke[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in bespoke"
        :key="index"
        @click="
            showMiniDetail(
              index,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'cooperate wear'
            )
          "
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg h-full w-full overflow-hidden  group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] md:w-[240px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.images[0].stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-900 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-900 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.description.stringValue }}</span> 
            </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="text-zinc-900 font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        muslim &&
        muslim.length !== 0 &&
        muslim[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in muslim"
        :key="index"
        @click="
            showMiniDetail(
              index,
              item.name.stringValue,
              item.description.stringValue,
              item.images,
              item.price.stringValue,
              'cooperate wear'
            )
          "
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full overflow-hidden  group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] md:w-[240px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.images[0].stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-900 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-900 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.description.stringValue }}</span> 
            </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="text-zinc-900 font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--mini detail-->
    <div class="inset-0 bg-black z-40 bg-opacity-70 fixed  w-full h-full" :class="isminiDetail ? 'block' : 'hidden'">
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
//import { mapGetters } from "vuex";
//import {getCategory} from "../../adminfirebase"

export default {
  name: "ProductWidget",
  props: [
    "getcat",
    "bespoke",
    "bridal",
    "asoebi",
    "muslim",
    "fabrics",
    "cooperate",
  ],
  components: {
    ProductWidgets,
    MiniDetail
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

  methods: {
    showMiniDetail(index, name, desc, img, price, cat) {
      this.isminiDetail = true;
      this.image = img.filter(
        (i) => i.stringValue !== undefined || i.stringValue !== ""
      );
      this.price = price;
      this.description = desc;
      this.name = name;
      this.idx = index;
      this.cats = cat;

      console.log(this.image);
    },
    toggleminiDetails() {
      this.isminiDetail = !this.isminiDetail;
    },
  },
};
</script>

<style scoped>
/* eslint-disable */

.grids {
  @apply mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-[3rem] lg:gap-[70px] text-zinc-900;
}
</style>
