<!-- eslint-disable -->
<template>
  <div
    class="let swipeIn w-full sm:pb-56 mt-[60px] sm:mt-[68px] space-y-[5%] mx-auto p-6 text-zinc-900"
  >
    <div class="space-y-[5%] w-full sm:w-[60%] mx-auto">
      <p class="font-medium text-center text-lg sm:text-xl uppercase">Admin</p>

      <div class="rounded-md p-3 sm:p-6 border space-y-[5%] border-zinc-700">
        <div class="form-group space-y-3">
          <label class="block form__label text-sm sm:text-lg" for=""
            ><b>Email address</b></label
          >
          <input
            @change=""
            class="block form__input input-field"
            type="email"
            name=""
            placeholder="Enter your email address"
            v-model.trim="email"
          />
        </div>
        <div class="form-group space-y-3">
          <label class="block form__label text-sm sm:text-lg" for="psw"
            ><b>Password</b></label
          >
          <input
            @change=""
            class="block form__input input-field"
            type="password"
            name="psw"
            placeholder="Enter your password"
            v-model.trim="password"
          />
        </div>

        <button
          @click="getUserInfo"
          class="rounded-md text-white p-2 w-full font-medium bg-zinc-800 hover:bg-black"
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
import { adminlogin } from "../../adminfirebase";
import 'vue-toast-notification/dist/theme-bootstrap.css';


export default {
  name: "AdminPage",
  components: {},
  data() {
    return {
      password: "",
      email: "",
    };
  },

  methods: {
    getUserInfo() {
    adminlogin(this.email, this.password)
      .then ((res) => {
        console.log(res)
        this.$toast.success("Login successful")
      
        this.email =""
        this.password = ""
        this.$router.push("/admindashboard")

      })
      .catch((err) => {
        console.log(err)
        this.$toast.error(err.code)
        this.email =""
        this.password = ""
      })
    },
   
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
.input-field {
  @apply border bg-white text-zinc-900 border-zinc-900 rounded-md focus:outline-none w-full h-8 sm:h-11 px-2;
}
</style>
