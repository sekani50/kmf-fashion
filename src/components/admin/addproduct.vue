<!-- eslint-disable -->
<template>
  <div
    class="let swipeIn w-full sm:w-[95%] min-[1000px]:w-[85%] pb-[5rem] sm:pb-[5rem] space-y-[5%] float-right p-6 text-zinc-600"
  >
    <div class="space-y-[5%] w-full sm:w-[80%] mx-auto">
      <div class="flex items-center justify-between">
        <div class="w-6 h-6 bg-none"></div>
        <p class="font-medium text-center text-lg sm:text-xl uppercase">
          product details
        </p>
        <div class="w-6 h-6 bg-none"></div>
      </div>

      <div
        class="rounded-md relative p-3 sm:p-6 border space-y-[5%] border-zinc-600"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            class="relative w-full border text-sm h-[160px] sm:h-[230px] rounded-md border-zinc-600"
          >
            <div
              :class="selectedImageObj.first ? 'block' : 'hidden'"
              class="w-full h-[160px] sm:h-[230px] rounded md"
            >
              <img
                :src="selectedImageObj.first"
                alt=""
                class="w-full h-full object-cover rounded-md"
              />
            </div>
            <div
              :class="selectedImageObj.first ? 'hidden' : 'block'"
              class="w-[50%] absolute inset-0 m-auto h-fit flex flex-col justify-center items-center"
            >
              <div class="w-8 h-8 sm:w-6 sm:h-6">
                <img src="@/assets/sel.svg" alt="" />
              </div>
              <div class="flex flex-row">
                <label class="label text-center">
                  <input
                    type="file"
                    name="file"
                    id="first"
                    accept="image/jpeg, image/png, image/jpg"
                    @change="chooseImage($event)"
                  />
                  <span class="font-normal text-zinc-900">
                    Select an image
                  </span>
                </label>
              </div>
            </div>
            <button
              :class="selectedImageObj.first ? 'block' : 'hidden'"
              @click="removeImage($event)"
              id="first"
              class="absolute text-white py-1 px-2 bg-zinc-600 rounded-md right-0 top-0"
            >
              Edit
            </button>
          </div>

          <div
            class="relative w-full text-sm border h-[160px] sm:h-[230px] rounded-md border-zinc-600"
          >
            <div
              :class="selectedImageObj.second ? 'block' : 'hidden'"
              class="w-full h-[160px] sm:h-[230px] rounded md"
            >
              <img
                :src="selectedImageObj.second"
                alt=""
                class="w-full h-full object-cover rounded-md"
              />
            </div>
            <div
              :class="selectedImageObj.second ? 'hidden' : 'block'"
              class="w-[50%] absolute inset-0 m-auto h-fit flex flex-col justify-center items-center"
            >
              <div class="w-8 h-8 sm:w-6 sm:h-6">
                <img src="@/assets/sel.svg" alt="" />
              </div>
              <div class="flex flex-row">
                <label class="label text-center">
                  <input
                    type="file"
                    name="file"
                    id="second"
                    accept="image/jpeg, image/png, image/jpg"
                    @change="chooseImage($event)"
                  />
                  <span class="font-normal text-zinc-600">
                    Select an image
                  </span>
                </label>
              </div>
            </div>
            <button
              :class="selectedImageObj.second ? 'block' : 'hidden'"
              @click="removeImage($event)"
              id="second"
              class="absolute text-white py-1 px-2 bg-zinc-600 rounded-md right-0 top-0"
            >
              Edit
            </button>
          </div>

          <div
            class="relative w-full text-sm border h-[160px] sm:h-[230px] rounded-md border-zinc-600"
          >
            <div
              :class="selectedImageObj.third ? 'block' : 'hidden'"
              class="w-full h-[160px] sm:h-[230px] rounded md"
            >
              <img
                :src="selectedImageObj.third"
                alt=""
                class="w-full h-full object-cover rounded-md"
              />
            </div>
            <div
              :class="selectedImageObj.third ? 'hidden' : 'block'"
              class="w-[50%] absolute inset-0 m-auto h-fit flex flex-col justify-center items-center"
            >
              <div class="w-8 h-8 sm:w-6 sm:h-6">
                <img src="@/assets/sel.svg" alt="" />
              </div>
              <div class="flex flex-row">
                <label class="label text-center">
                  <input
                    type="file"
                    name="file"
                    id="third"
                    accept="image/jpeg, image/png, image/jpg"
                    @change="chooseImage($event)"
                  />
                  <span class="font-normal text-center text-zinc-600">
                    Select an image
                  </span>
                </label>
              </div>
            </div>
            <button
              :class="selectedImageObj.third ? 'block' : 'hidden'"
              @click="removeImage($event)"
              id="third"
              class="absolute text-white py-1 px-2 bg-zinc-600 rounded-md right-0 top-0"
            >
              Edit
            </button>
          </div>

          <div
            class="relative w-full text-sm border h-[160px] sm:h-[230px] rounded-md border-zinc-600"
          >
            <div
              :class="selectedImageObj.forth ? 'block' : 'hidden'"
              class="w-full h-[160px] sm:h-[230px] rounded md"
            >
              <img
                :src="selectedImageObj.forth"
                alt=""
                class="w-full h-full object-cover rounded-md"
              />
            </div>
            <div
              :class="selectedImageObj.forth ? 'hidden' : 'block'"
              class="w-[50%] absolute inset-0 m-auto h-fit flex flex-col justify-center items-center"
            >
              <div class="w-8 h-8 sm:w-6 sm:h-6">
                <img src="@/assets/sel.svg" alt="" />
              </div>
              <div class="flex flex-row">
                <label class="label text-center">
                  <input
                    type="file"
                    name="file"
                    id="forth"
                    accept="image/jpeg, image/png, image/jpg"
                    @change="chooseImage($event)"
                  />
                  <span class="font-normal text-zinc-600">
                    Select an image
                  </span>
                </label>
              </div>
            </div>
            <button
              :class="selectedImageObj.forth ? 'block' : 'hidden'"
              @click="removeImage($event)"
              id="forth"
              class="absolute text-white py-1 px-2 bg-zinc-600 rounded-md right-0 top-0"
            >
              Edit
            </button>
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <p class="text-sm sm:text-lg"><b>Select Category</b></p>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center justify-center"
          >
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
          class="rounded-md text-white p-2 w-full font-medium bg-zinc-600 hover:bg-zinc-700"
        >
          <span v-if="!isSubmit">Submit</span>
          <div v-else class="flex justify-center items-center">
            <div
              class="rounded-full border-2 animate-spin border-r-0 border-b-0 w-6 h-6 border-slate-50"
            ></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import "vue-toast-notification/dist/theme-bootstrap.css";
import { getData, getExistingDoc } from "../../adminfirebase";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddProduct",
  props: ["togglepage"],
  data() {
    return {
      isSubmit: false,
      categories: [
        "Unisex Bespoke",
        "Bridal wears",
        "Asoebi",
        "Cooperate",
        "Muslim Wears",
        "Fabrics",
      ],
      selectedCategory: "",
      isChecked: false,
      description: "",
      name: "",
      imageFile: {
        first: { img: null, isEdit: false },
        second: { img: null, isEdit: false },
        third: { img: null, isEdit: false },
        forth: { img: null, isEdit: false },
      },
      selectedImage: null,
      isEditButton: false,
      downloadedImage: null,

      selectedImageObj: {
        first: null,
        second: null,
        third: null,
        forth: null,
      },
      price: 0,
      edit: false,
    };
  },
  computed: {
    ...mapGetters(["getEdit"]),
  },
  async mounted() {
    console.log(this.$route.params.id);
    //console.log(this.getEdit)
    if (this.getEdit && this.$route.params.id === "1") {
      console.log(this.getEdit);
      await getExistingDoc(this.getEdit, "productDetails")
        .then((res) => {
          console.log(res);
          const { category, description, name, price, image } = res;
          this.selectedCategory = category;

          this.description = description;
          (this.name = name),
            (this.imageFile = {
              first:{ img:image[0], isEdit:false},
              second:{ img:image[1], isEdit:false},
              third:{ img:image[2], isEdit:false},
              forth: { img:image[3], isEdit:false},
            });
          this.selectedImageObj = {
            first: image[0],
            second: image[1],
            third: image[2],
            forth: image[3],
          };
          this.price = price;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },

  methods: {
    ...mapActions(["editCategory"]),
    selectedFn(cat) {
      this.selectedCategory = cat;
      console.log(cat);
      //this.editCategory(null);
      // console.log(cat.target.value)
    },

    chooseImage(e) {
      //this.editCategory(null);
      //this.edit = true
      //const imageData = { ...this.selectedImageObj }
      if (e.target.files[0]) {
        const file = e.target.files[0];
        this.selectedImageObj[e.target.id] = file;
        this.imageFile[e.target.id].img = file;
        this.imageFile[e.target.id].isEdit = true;
        if (file.size > 3000000) {
          this.$toast.error("Image size should not exceeds 3MB");
          return;
        }
        // console.log(imageData)
        this.selectedImageObj[e.target.id] = URL.createObjectURL(file);

        console.log(this.imageFile);
      }
    },
    removeImage(e) {
      this.selectedImageObj[e.target.id] = null;
      this.imageFile[e.target.id].img = null;
      this.imageFile[e.target.id].isEdit = true;
      //this.edit = true;
    },
    async saveToDatabse() {
      this.isSubmit = true;
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
        id: this.getEdit,
      };

      await getData(payload)
        .then((res) => {
          console.log(res);
          this.isSubmit = false;

          this.$toast.success("Saved successfully");

          this.name = "";
          this.description = "";
          //this.imageFile = null;
          this.selectedCategory = "";
          this.price = 0;
          this.selectedImageObj = {
            first: null,
            second: null,
            third: null,
            forth: null,
          };
          //this.editCategory(null);
          //this.$toast.error("Error");
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
  @apply border bg-white text-zinc-600 border-zinc-600 rounded-md focus:outline-none w-full h-8 sm:h-11 px-2;
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
  top: 3px;
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
  @apply bg-zinc-600;
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
