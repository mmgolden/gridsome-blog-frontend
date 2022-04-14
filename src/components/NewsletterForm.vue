<template>
  <div class="flex flex-col w-full lg:w-4/6">
    <div class="flex flex-col lg:flex-row">
      <!-- Left -->
      <div class="left mx-auto lg:mx-0 mb-7 lg:mb-0 lg:mr-10">
        <g-image
          src="~/assets/pngs/avatar.png"
          quality="100"
          alt="Headshot of Melinda Golden"
          class="avatar rounded-full"
        />
      </div>

      <!-- Right -->
      <div class="flex-1">
        <h2
          class="text-center lg:text-left text-3xl font-bold text-navy dark:text-gray pb-4"
        >
          Learn more about <span class="highlight">front-end development</span>
        </h2>
        <p
          class="text-center lg:text-left text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray mb-4"
        >
          Hi, my name is Melinda Golden. I'm a front-end developer. Find out
          when I publish new content by subscribing to my newsletter. Find me on
          Twitter
          <a href="https://twitter.com/melindamgolden" target="_blank">
            @melindamgolden
          </a>
        </p>
      </div>
    </div>

    <!-- Form -->
    <div class="w-full mx-auto mt-6 mb-7">
      <div
        v-if="success"
        class="box flex items-center bg-green-100 border-2 border-green-500 rounded-sm py-2 px-4 text-green-900"
        @click="resetForm"
      >
        <p>Success! Now check your email to confirm your subscription.</p>
        <Close class="stroke-current ml-auto" />
      </div>

      <div
        v-else-if="error"
        class="box flex items-center bg-red-100 border-2 border-red-500 rounded-sm py-2 px-4 text-red-900"
        @click="resetForm"
      >
        <p>Oops, something went wrong. Please try again later.</p>
        <Close class="stroke-current ml-auto" />
      </div>

      <form
        v-else
        :action="formUrl"
        method="post"
        class="flex flex-col lg:flex-row"
        @submit="handleSubmit"
      >
        <fieldset class="flex flex-col flex-1 mb-4 lg:mb-0 lg:mr-4">
          <label for="email" class="sr-only">Email address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email_address"
            placeholder="Your email address"
            class="flex-1 p-2 outline-none border-2 bg-transparent rounded-sm text-navy dark:text-gray focus:border-primary"
            :class="{
              'border-navy dark:border-gray': !emailError,
              'border-red-700': emailError
            }"
          />
          <p v-if="emailError" class="text-sm mt-1 text-red-700">
            Email is required and must be a valid email
          </p>
        </fieldset>
        <button
          type="submit"
          class="bg-navy dark:bg-gray border-2 border-navy dark:border-gray rounded-sm px-4 py-2 transition-all outline-none lg:self-start text-gray dark:text-navy hover:bg-navy-dark dark:hover:bg-gray-dark"
        >
          Get Updates
        </button>
      </form>
    </div>

    <p
      class="mx-auto text-sm font-medium pb-5 lg:pb-0 text-navy dark:text-gray mb-4"
    >
      No spam. Unsubscribe whenever you want.
    </p>
  </div>
</template>

<script>
import Close from "~/assets/svgs/Close.svg";

const FORM_URL = "https://app.convertkit.com/forms/3173834/subscriptions";

export default {
  components: {
    Close
  },

  data() {
    return {
      formUrl: FORM_URL,
      email: "",
      emailError: false,
      success: false,
      error: false
    };
  },

  methods: {
    resetForm() {
      this.email = "";
      this.emailError = false;
      this.success = false;
      this.error = false;
    },

    async handleSubmit(event) {
      event.preventDefault();

      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.email === "" || !regex.test(this.email)) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }

      if (this.emailError) return;

      const data = new FormData(event.target);

      try {
        const response = await fetch(FORM_URL, {
          method: "post",
          body: data,
          headers: {
            accept: "application/json"
          }
        });

        this.email = "";
        const json = await response.json();

        if (json.status === "success") {
          this.success = true;
          return;
        }

        this.error = true;
      } catch (error) {
        this.error = true;
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.left {
  flex-basis: 160px;
}

.avatar {
  width: 160px;
}

.highlight {
  position: relative;
  display: inline-block;
  z-index: 9;
}

.highlight::after {
  content: "";
  width: 100%;
  height: 10px;
  background: #3abfc8;
  position: absolute;
  left: 0;
  bottom: 5%;
  z-index: -1;
}

.box:hover {
  cursor: pointer;
}
</style>
