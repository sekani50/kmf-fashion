<!-- eslint-disable -->
<template>
  <div
    class="let swipeIn w-full mt-[60px] sm:mt-[68px] pb-[20rem] sm:pb-[20rem] space-y-[5%] mx-auto p-6 text-gray-300"
  >
    <div class="space-y-[5%] w-full sm:w-[60%] mx-auto">
      <div class="flex items-center justify-between">
        <div @click="togglepage" class="sm:w-8 sm:h-8 w-6 h-6">
          <img class="w-full h-full" src="@/assets/back.svg" alt="back" />
        </div>
        <p class="font-medium text-center text-lg sm:text-xl uppercase">
          product details
        </p>
        <div class="w-6 h-6 bg-none"></div>
      </div>

      <div
        class="rounded-md relative p-3 sm:p-6 border space-y-[5%] border-gray-300"
      >
        <div
          class="relative w-full border h-[300px] rounded-md border-gray-300"
        >
          <div
            :class="selectedImage ? 'block' : 'hidden'"
            class="w-full h-[300px] rounded md"
          >
            <img
              :src="selectedImage"
              alt=""
              class="w-full h-full object-cover rounded-md"
            />
          </div>
          <div
            :class="selectedImage ? 'hidden' : 'block'"
            class="w-[50%] absolute inset-0 m-auto h-fit flex flex-col justify-center items-center"
          >
            <div class="w-8 h-8 sm:w-6 sm:h-6">
              <img src="@/assets/sel.svg" alt="" />
            </div>
            <div class="flex flex-row">
              <label class="label">
                <input
                  type="file"
                  name="file"
                  accept="image/jpeg, image/png, image/jpg"
                  @change="chooseImage($event)"
                />
                <span class="font-normal text-[#f0e68c]">
                  Select an image
                </span>
              </label>
            </div>
          </div>
          <button
            :class="selectedImage ? 'block' : 'hidden'"
            @click="removeImage"
            class="absolute text-black py-1 px-2 bg-[#f0e68c] rounded-md right-[18px] sm:right-[-24px] top-[-50px] sm:top-[-64px]"
          >
            Edit
          </button>
        </div>

        <div class="flex flex-col space-y-2">
          <p class="text-sm sm:text-lg"><b>Select Category</b></p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <label
              v-for="(cat, index) in categories"
              :key="index"
              class="container text-sm mr-1"
            >
              {{ cat }}
              <input
                type="checkbox"
                :checked="selectedCategory === cat"
                @change="selectedFn(cat)"
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <div class="form-group space-y-3">
          <label class="block form__label text-sm sm:text-lg" for=""
            ><b>Name</b></label
          >
          <input
            @change=""
            class="block form__input input-field"
            type="text"
            name=""
            placeholder=""
            v-model.trim="name"
          />
        </div>
        <div class="form-group space-y-3">
          <label class="block form__label text-sm sm:text-lg" for=""
            ><b>Price</b></label
          >
          <input
            @change=""
            class="block form__input input-field"
            type="number"
            name=""
            placeholder="Price in ₦"
            v-model.trim="price"
          />
        </div>
        <div class="form-group relative space-y-3">
          <label class="block form__label text-sm sm:text-lg" for="desc"
            ><b>Description</b></label
          >

          <input
            class="block form__input pr-6 relative input-field"
            type="text"
            name=""
            maxlength="50"
            placeholder="Description"
            v-model.trim="description"
          />
          <span class-="fixed right-[3px] sm:text-sm text-[13px] top-0">{{
            description.length + "/ 50"
          }}</span>
        </div>

        <button
          @click="saveToDatabse"
          class="rounded-md text-black p-2 w-full font-medium bg-[#f0e68c]"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import "vue-toast-notification/dist/theme-bootstrap.css";
import { getData } from "../../adminfirebase";

export default {
  name: "AddProduct",
  props: ["togglepage"],
  data() {
    return {
      categories: [
        "Unisex Bespoke",
        "Bridal wears",
        "Asoebi",
        "Cooperate",
        "Muslimah",
        "Fabrics",
      ],
      selectedCategory: "",
      isChecked: false,
      description: "",
      name: "",
      imagefile: "",
      selectedImage: null,
      isEditButton: false,
      downloadedImage: null,
      imageFile: null,
      price: 0,
    };
  },

  methods: {
    selectedFn(cat) {
      this.selectedCategory = cat;
      console.log(cat);
      // console.log(cat.target.value)
    },

    chooseImage(e) {
      if (e.target.files[0]) {
        const file = e.target.files[0];
        this.imageFile = file;
        if (file.size > 3000000) {
          this.$toast.warn("Image size should not exceeds 3MB");
          return;
        }

        this.selectedImage = URL.createObjectURL(file);
      }
    },
    removeImage() {
      this.selectedImage = null;
      this.imageFile = null;
    },
    async saveToDatabse() {
      const validateData = {
        name: this.name,
        description: this.description,
        image: this.imageFile,
        category: this.selectedCategory,
      };

      for (let i in validateData) {
        if (validateData[i] === "") {
          this.$toast.error(`${i} is empty`);
          return;
        }
      }

      const payload = {
        name: this.name,
        description: this.description,
        image: this.imageFile,
        category: this.selectedCategory,
        price: this.price,
      };

      await getData(payload)
        .then((res) => {
          console.log(res);

          if (res) {
            this.$toast.success("Saved successfully");

            this.name = "";
            this.description = "";
            this.imageFile = null;
            this.selectedCategory = "";
            this.price = 0;
            this.selectedImage = null;
          } else {
            this.$toast.error("Error");
          }
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
.input-field {
  @apply border bg-[#1E1E1E] text-gray-300 border-gray-300 rounded-md focus:outline-none w-full h-10 sm:h-14 px-2;
}

label.label input[type="file"] {
  position: absolute;
  top: -1000px;
}
.label {
  cursor: pointer;
  margin-left: 3px;
  display: inline-block;
}
/* The container */
.container {
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox rounded-full w-3 h-3 bg-black*/
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid #ccc;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: white;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #f0e68c;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
</style>
