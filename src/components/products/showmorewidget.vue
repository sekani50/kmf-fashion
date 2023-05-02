<!-- eslint-disable -->
<template>
  <div
    class="let swipeIn w-full sm:pb-56 mt-[60px] sm:mt-[68px] space-y-[5%] mx-auto p-6 text-gray-300"
  >
    <p class="text-gray-300 sm:text-xl text-lg font-semibold collectio">
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
        class="h-fit sm:w-[300px] sm:h-fit"
        v-for="(item, index) in asoebi"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.image.stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
                {{ item.name.stringValue }}
              </p>
             <div class="text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden w-full">
              <span>{{ item.description.stringValue }}</span>
            </div>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
              <div class="w-full mx-auto">
                <button
                  @click="
                    sendMessage(item.name.stringValue)
                  "
                  class="other-name py-1 px-2 rounded-md bg-[#daa520] text-black"
                >
                  Explore
                </button>
              </div>
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
        class="h-fit sm:w-[300px] sm:h-fit"
        v-for="(item, index) in bridal"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg h-full w-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.image.stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
                {{ item.name.stringValue }}
              </p>
              <p class="text-sm sm:text-lg font-thin sm:pr-[10%]">
                {{ item.description.stringValue }}
              </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
              <div class="w-full mx-auto">
                <button
                  @click="
                    sendMessage(item.name.stringValue)
                  "
                  class="other-name py-1 px-2 rounded-md bg-[#daa520] text-black"
                >
                  Explore
                </button>
              </div>
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
        class="h-fit sm:w-[300px] sm:h-fit"
        v-for="(item, index) in cooperate"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.image.stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
                {{ item.name.stringValue }}
              </p>
              <p class="text-sm sm:text-lg font-thin sm:pr-[10%]">
                {{ item.description.stringValue }}
              </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
              <div class="w-full mx-auto">
                <button
                  @click="
                    sendMessage(item.name.stringValue)
                  "
                  class="other-name py-1 px-2 rounded-md bg-[#daa520] text-black"
                >
                  Explore
                </button>
              </div>
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
        class="h-fit sm:w-[300px] sm:h-fit"
        v-for="(item, index) in fabrics"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.image.stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
                {{ item.name.stringValue }}
              </p>
              <p class="text-sm sm:text-lg font-thin sm:pr-[10%]">
                {{ item.description.stringValue }}
              </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
              <div class="w-full mx-auto">
                <button
                  @click="
                    sendMessage(item.name.stringValue)
                  "
                  class="other-name py-1 px-2 rounded-md bg-[#daa520] text-black"
                >
                  Explore
                </button>
              </div>
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
        class="h-fit sm:w-[300px] sm:h-fit"
        v-for="(item, index) in bespoke"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg h-full w-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.image.stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
                {{ item.name.stringValue }}
              </p>
              <p class="text-sm sm:text-lg font-thin sm:pr-[10%]">
                {{ item.description.stringValue }}
              </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
              <div class="w-full mx-auto">
                <button
                  @click="
                    sendMessage(item.name.stringValue)
                  "
                  class="other-name py-1 px-2 rounded-md bg-[#daa520] text-black"
                >
                  Explore
                </button>
              </div>
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
        class="h-fit sm:w-[300px] sm:h-fit"
        v-for="(item, index) in muslim"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="item.image.stringValue"
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p class="font-semibold text-[15px] sm:text-xl sm:pr-[10%]">
                {{ item.name.stringValue }}
              </p>
              <p class="text-sm sm:text-lg font-thin sm:pr-[10%]">
                {{ item.description.stringValue }}
              </p>
              <p
                :class="
                 item.price.stringValue === undefined ||
                  item.price.integerValue === '0' ||
                  item.price.stringValue === ''
                    ? 'hidden'
                    : 'block'
                "
                class="font-semibold text-sm sm:text-lg text-end"
              >
                {{ `₦${item.price.stringValue}` }}
              </p>
              <div class="w-full mx-auto">
                <button
                  @click="
                    sendMessage(item.name.stringValue)
                  "
                  class="other-name py-1 px-2 rounded-md bg-[#daa520] text-black"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import ProductWidgets from "./widget.vue";
//import { mapGetters } from "vuex";
//import {getCategory} from "../../adminfirebase"

export default {
  name: "ProductWidgets",
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
  },
  data() {
    return {};
  },

  methods: {
    sendMessage(name) {
      const url =
        "https://wa.me/2348118617926?text=  I like the " + name;

      window.open(url, "blank").focus();
    },
  },
};
</script>

<style scoped>
/* eslint-disable */

.grids {
  @apply grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 text-gray-300;
}
</style>
