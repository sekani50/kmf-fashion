<!-- eslint-disable -->
<template>
  <div class=" fixed right-0 swipeDown  -z-10 h-full w-full min-[1000px]:w-[90%] pb-[5rem] sm:pb-[5rem] space-y-[5%] float-right p-6 text-zinc-600 bg-black bg-opacity-60">
    <div
      :class="!isSubmit ? 'block' : 'hidden'"
      class="bg-white let swipeDown  text-sm sm:text-[16px] h-fit inset-0 flex flex-col absolute space-y-3 m-auto rounded-lg w-[330px] p-4 sm:w-[500px] sm:rounded-xl"
    >
      <div class="form-group space-y-3">
        <label class="block form__label flex-start text-sm sm:text-lg" for=""
          ><b>Enter the ID</b></label
        >
        <input
          @change=""
          class="block form__input input-field"
          type="text"
          name=""
          placeholder=""
          v-model.trim="id"
        />
      </div>

      <button
      @click="submit"
        class="rounded-md text-white p-2 sm:p-3 w-[50%] mx-auto flex justify-center items-center font-medium bg-zinc-600 hover:bg-zinc-700"
      >
        <span v-if="!isSent">Submit</span>
        <div v-else class="flex justify-center items-center">
          <div
            class="rounded-full border-2 animate-spin border-r-0 border-b-0 w-6 h-6 border-slate-50"
          ></div>
        </div>
      </button>
    </div>
    <div
      :class="isSubmit ? 'block' : 'hidden'"
      class="marg-style let swipeDown w-[650px] max-[710px]:w-[500px] max-[565px]:w-[320px] h-[80%] overflow-auto sm:overflow-hidden transform transition duration-300 ease-in-out absolute inset-0 m-auto grid grid-cols-1 sm:grid-cols-2 bg-white rounded-lg sm:rounded-xl"
    >
      <div
        class="absolute top-[-30px] right-0"
        v-html="images.closedetail"
      ></div>
      <div
        class="relative h-full w-full overflow-hidden rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none"
      >
        <a class="prev" @click="prev" href="#">&#10094;</a>
        <a class="next" @click="next" href="#">&#10095;</a>
        <div ref="slide" class="hide-scroll overflow-x-auto w-full h-full">
          <div class="min-w-max flex h-full">
            <div
              class="w-[400px] max-[710px]:w-[280px] max-[565px]:w-[350px] h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none object-cover"
              v-for="(img, index) in photo"
              :key="index"
            >
              <img
                class="w-full h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none object-cover"
                :src="img.stringValue"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="sm:p-4 p-3 flex flex-col relative w-full h-full space-y-2 sm:space-y-5"
      >
        <p class="uppercase font-semibold">{{ cats }}</p>
        <p class="font-semibold">{{ name }}</p>
        <div class="space-y-2 max-h-[100px] w-full">
          <p class="font-semibold">Description</p>
          <div class="w-full h-full">
            <p>{{ description }}</p>
          </div>
        </div>
        <p v-if="price !== undefined || price === 0" class="font-semibold">
          {{ `Price: ₦${price}` }}
        </p>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets } from "@/assets/svgimages.js";
import { getExistingDoc } from "../../adminfirebase";

export default {
  name: "CheckOut",

  components: {},
  data() {
    return {
      images: assets,
      isSubmit: false,
      isSent:false,
      id: this.$route.params.id||"",
      cats: "",
      name: "",
      description: "",
      photo: null,
      price: 0,
      
    };
  },

  methods: {
    prev() {
      let slide = this.$refs.slide;
      console.log(slide.scrollWidth);
      console.log(slide.offsetWidth);
      slide.scrollBy({ left: -slide.scrollWidth / 4, behavior: "smooth" });
    },
    next() {
      let slide = this.$refs.slide;
      slide.scrollBy({ left: slide.scrollWidth / 4, behavior: "smooth" });
      console.log(slide.scrollWidth);
      console.log(slide.offsetWidth);
    },
    async submit() {
        console.log(this.id)
      if (!this.id) {
        this.$toast.error("Please enter an ID");
        return;
      }
      this.isSent = true;

      console.log();
      await getExistingDoc(this.id, 'checkout')
        .then((res) => {
          console.log(res);
          this.isSubmit = true;
          const { category, description, name, price, image } = res;
          this.cats = category;
          this.name = name;
          this.description = description;
          this.photo = image;
          this.price = price;
          this.id = ''
          this.isSent = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  padding: 3px 12px;
  background: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 50%;
  text-decoration: none;
  user-select: none;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
.hide-scroll::-webkit-scrollbar {
  display: none;
}
.marg-style {
  margin-top: 90px;
}
.input-field {
  @apply border bg-white text-zinc-600 border-zinc-600 rounded-md focus:outline-none w-full h-8 sm:h-11 px-2;
}

.let {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  .swipeDown {
    animation-name: swipeUp;
    -webkit-animation-name: swipeUp;
  }
  
  @keyframes swipeUp {
    0% {
      transform: translateY(-100%);
    }
  
    100% {
      transform: translateY(0px);
    }
  }
  
  @-webkit-keyframes swipeUp {
    0% {
      -webkit-transform: translateY(-100%);
    }
  
    100% {
      -webkit-transform: translateY(0px);
    }
  }
</style>
