<!-- eslint-disable -->
<template>
  <div
  @click.self="showCats"
    class="let swipeIn w-full relative sm:w-[95%] min-[1000px]:w-[85%] pb-[5rem] sm:pb-[5rem] space-y-[5%] float-right p-6 text-zinc-600"
  >
    <p class="text-zinc-700 sm:text-xl text-lg font-semibold collectio">
      {{ getcat }}
    </p>
    <div
      :class="
        getCurrent.asoebi &&
        getCurrent.asoebi?.length !== 0 &&
        getCurrent.asoebi[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
      v-if=" getCurrent.asoebi &&
        getCurrent.asoebi?.length !== 0 &&
        getCurrent.asoebi[0].category.stringValue === getcat"
    >
      <div
        class="h-fit md:w-[240px] sm:h-fit"
        v-for="(item, index) in getCurrent.asoebi"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
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
              <p
                class="truncate w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.name.stringValue }}</span
                >
              </p>
              <p
                class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.description.stringValue }}</span
                >
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

              <div
                class="flex justify-between text-white items-center text-sm sm:text-[16px]"
              >
                <button
                  @click="editCat(item.id, getCurrent.asoebi)"
                  class="bg-zinc-600 p-1"
                >
                  Edit
                </button>
                <button
                  @click="deleteItem(item.id, getCurrent.asoebi)"
                  class="bg-red-600 p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        getCurrent.bridal &&
        getCurrent.bridal.length !== 0 &&
        getCurrent.bridal[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
      v-else-if="getCurrent.bridal &&
        getCurrent.bridal.length !== 0 &&
        getCurrent.bridal[0].category.stringValue === getcat"
    >
      <div
        class="h-fit md:w-[240px] sm:h-fit"
        v-for="(item, index) in getCurrent.bridal"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg h-full w-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] md:w-[240px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="
                  item.images[0].stringValue
                "
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p
                class="truncate w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.name.stringValue }}</span
                >
              </p>
              <p
                class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.description.stringValue }}</span
                >
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
              <div
                class="flex justify-between text-white items-center text-sm sm:text-[16px]"
              >
                <button
                  @click="editCat(item.id, getCurrent.bridal)"
                  class="bg-zinc-600 rounded-sm p-1"
                >
                  Edit
                </button>
                <button
                  @click="deleteItem(item.id, getCurrent.bridal)"
                  class="bg-red-600 rounded-sm p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        getCurrent.cooperate &&
        getCurrent.cooperate.length !== 0 &&
        getCurrent.cooperate[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
      v-else-if="getCurrent.cooperate &&
        getCurrent.cooperate.length !== 0 &&
        getCurrent.cooperate[0].category.stringValue === getcat"
    >
      <div
        class="h-fit md:w-[240px] sm:h-fit"
        v-for="(item, index) in getCurrent.cooperate"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
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
              <p
                class="truncate w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.name.stringValue }}</span
                >
              </p>
              <p
                class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.description.stringValue }}</span
                >
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
              <div
                class="flex justify-between text-white items-center text-sm sm:text-[16px]"
              >
                <button
                  @click="editCat(item.id, getCurrent.cooperate)"
                  class="bg-zinc-600 p-1"
                >
                  Edit
                </button>
                <button
                  @click="deleteItem(item.id, getCurrent.cooperate)"
                  class="bg-red-600 p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        getCurrent.fabrics &&
        getCurrent.fabrics.length !== 0 &&
        getCurrent.fabrics[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
      v-else-if="getCurrent.fabrics &&
        getCurrent.fabrics.length !== 0 &&
        getCurrent.fabrics[0].category.stringValue === getcat"
    >
      <div
        class="h-fit md:w-[240px] sm:h-fit"
        v-for="(item, index) in getCurrent.fabrics"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
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
              <p
                class="truncate w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.name.stringValue }}</span
                >
              </p>
              <p
                class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.description.stringValue }}</span
                >
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
              <div
                class="flex justify-between text-white items-center text-sm sm:text-[16px]"
              >
                <button
                  @click="editCat(item.id, getCurrent.fabrics)"
                  class="bg-zinc-600 p-1"
                >
                  Edit
                </button>
                <button
                  @click="deleteItem(item.id, getCurrent.fabrics)"
                  class="bg-red-600 p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        getCurrent.bespoke &&
        getCurrent.bespoke.length !== 0 &&
        getCurrent.bespoke[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
      v-else-if=" getCurrent.bespoke &&
        getCurrent.bespoke.length !== 0 &&
        getCurrent.bespoke[0].category.stringValue === getcat"
    >
      <div
        class="h-fit md:w-[240px] sm:h-fit"
        v-for="(item, index) in getCurrent.bespoke"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg h-full w-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
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
              <p
                class="truncate w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.name.stringValue }}</span
                >
              </p>
              <p
                class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.description.stringValue }}</span
                >
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
              <div
                class="flex justify-between text-white items-center text-sm sm:text-[16px]"
              >
                <button
                  @click="editCat(item.id, getCurrent.bespoke)"
                  class="bg-zinc-600 p-1"
                >
                  Edit
                </button>
                <button
                  @click="deleteItem(item.id, getCurrent.bespoke)"
                  class="bg-red-600 p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="
        getCurrent.muslim &&
        getCurrent.muslim.length !== 0 &&
        getCurrent.muslim[0].category.stringValue === getcat
          ? 'grids'
          : 'hidden'
      "
      v-else-if="getCurrent.muslim &&
        getCurrent.muslim.length !== 0 &&
        getCurrent.muslim[0].category.stringValue === getcat"
    >
      <div
        class="h-fit md:w-[240px] sm:h-fit"
        v-for="(item, index) in getCurrent.muslim"
        :key="index"
      >
        <div class="group w-full h-full">
          <div
            class="rounded-lg w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
          >
            <div
              class="w-full h-[160px] md:w-[240px] sm:h-[280px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="
                 item.images[0].stringValue
                "
                alt="new"
                class="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div class="sm:space-y-4 space-y-3 p-2 sm:p-6">
              <p
                class="truncate w-[100vw] text-zinc-700 font-semibold text-[15px] sm:text-xl sm:pr-[10%]"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.name.stringValue }}</span
                >
              </p>
              <p
                class="truncate w-[98vw] text-zinc-700 text-sm sm:text-lg font-thin sm:pr-[10%] flex flex-wrap overflow-hidden"
              >
                <span
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]"
                  >{{ item.description.stringValue }}</span
                >
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
              <div
                class="flex justify-between text-white items-center text-sm sm:text-[16px]"
              >
                <button
                  @click="editCat(item.id, getCurrent.muslim)"
                  class="bg-zinc-600 p-1"
                >
                  Edit
                </button>
                <button
                  @click="deleteItem(item.id, getCurrent.muslim)"
                  class="bg-red-600 p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class=" text-sm sm:text-[16px] h-[100vh] justify-center items-center inset-0 flex flex-col absolute space-y-3 m-auto rounded-lg w-fit p-4  sm:rounded-xl">
       <div class="space-y-2 flex flex-col justify-center items-center h-fit">
        <div class="sm:h-20 sm:w-20 h-16 w-16">
            <img class="w-full h-full" src="@/assets/images/emptybox.png" alt="" />
        </div>
        
        <p>No item added</p>

        <router-link to="/admindashboard" class="text-white p-2 text-[16px] text-sm rounded-md bg-zinc-600">Add product</router-link>
       </div>
     
      </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */

//import { mapGetters } from "vuex";
import { deleteFromCat } from "../../adminfirebase";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CatAdmin",
  props: ["getcat","showCats"],
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCurrent"]),
  },

  methods: {
    ...mapActions(["updateCurrent", "editCategory"]),
    async editCat(id, data) {
      await  this.editCategory(id)
      this.$router.push("/admindashboard")
    
    


    },
    async deleteItem(id) {
      await deleteFromCat(id)
        .then((res) => {
          console.log(res);
          this.updateCurrent({
            bespoke: this.getCurrent.bespoke.filter((item) => item.id !== id),
            bridal: this.getCurrent.bridal.filter((item) => item.id !== id),
            asoebi: this.getCurrent.asoebi.filter((item) => item.id !== id),
            muslim: this.getCurrent.muslim.filter((item) => item.id !== id),
            fabrics: this.getCurrent.fabrics.filter((item) => item.id !== id),
            cooperate: this.getCurrent.cooperate.filter((item) => item.id !== id),
          });
          this.$toast.success("Item deleted successfully");
        })
        .catch((err) => {
          console.log(err);
        });
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
