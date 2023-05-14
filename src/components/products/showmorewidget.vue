<!-- eslint-disable -->
<template>
  <div
    class=" w-full relative sm:pb-56 pt-[62px] sm:pt-[80px] space-y-[5%] mx-auto p-6"
  >
    <p class="text-zinc-700 sm:text-xl text-lg font-semibold collectio">
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
      v-if=" asoebi &&
        asoebi.length !== 0 &&
        asoebi[0].category.stringValue === getcat"
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in asoebi"
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
            <div class="sm:space-y-4 bg-white space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
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
                class="text-zinc-700 font-semibold text-sm sm:text-lg text-end"
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
      v-else-if="bridal &&
        bridal.length !== 0 &&
        bridal[0].category.stringValue === getcat"
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in bridal"
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
            <div class="sm:space-y-4 bg-white space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
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
                class="text-zinc-700 font-semibold text-sm sm:text-lg text-end"
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
      v-else-if="cooperate &&
        cooperate.length !== 0 &&
        cooperate[0].category.stringValue === getcat"
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in cooperate"
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
            <div class="sm:space-y-4 bg-white space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
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
                class="text-zinc-700 font-semibold text-sm sm:text-lg text-end"
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
      v-else-if=" fabrics &&
        fabrics.length !== 0 &&
        fabrics[0].category.stringValue === getcat"
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in fabrics"
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
            <div class="sm:space-y-4 bg-white space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
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
                class="text-zinc-700 font-semibold text-sm sm:text-lg text-end"
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
      v-else-if="bespoke &&
        bespoke.length !== 0 &&
        bespoke[0].category.stringValue === getcat"
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in bespoke"
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
            <div class="sm:space-y-4 bg-white space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
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
                class="text-zinc-700 font-semibold text-sm sm:text-lg text-end"
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
      v-else-if=" muslim &&
        muslim.length !== 0 &&
        muslim[0].category.stringValue === getcat"
    >
      <div
        class="h-fit  md:w-[240px] sm:h-fit"
        v-for="(item, index) in muslim"
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
            <div class="sm:space-y-4 bg-white space-y-3 p-2 sm:p-6">
              <p class="truncate  w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">{{ item.name.stringValue }}</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
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
                class="text-zinc-700 font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div v-else class=" text-sm sm:text-[16px] h-[70vh] justify-center items-center inset-0 flex flex-col absolute space-y-3 m-auto rounded-lg w-fit p-4  sm:rounded-xl">
       <div class="space-y-2 flex flex-col justify-center items-center h-fit">
        <div class="sm:h-20 sm:w-20 h-16 w-16">
            <img class="w-full h-full" src="@/assets/images/emptybox.png" alt="" />
        </div>
        
        <p>Oops! sorry, no item added</p>

        <router-link to="/" class="text-white p-2 text-[16px] text-sm rounded-md bg-zinc-600">Go Back</router-link>
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
  },
};
</script>

<style scoped>
/* eslint-disable */

.grids {
  @apply mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-[3rem] lg:gap-[70px] text-zinc-700;
}
</style>
