<template>
  <div class="flex flex-col w-full lg:w-4/6">
    <div class="flex flex-col lg:flex-row">
      <div class="mx-auto lg:mx-0 mb-7 lg:mb-0 lg:mr-10">
        <g-image
          src="~/assets/pngs/avatar.png"
          quality="100"
          alt="Headshot of Melinda Golden"
          class="w-40 lg:w-96 rounded-full"
        />
      </div>
      <div>
        <h2
          class="text-center lg:text-left text-3xl font-bold text-navy dark:text-gray pb-4"
        >
          Learn more about <span class="highlight">front-end development</span>
        </h2>
        <p
          class="text-center lg:text-left text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray mb-4"
        >
          Hi, my name is Melinda Golden. I'm a front-end developer based in
          Asheville, NC. Find out when I publish new content by subscribing to
          my newsletter.
        </p>
      </div>
    </div>
    <div class="newsletter-form w-full mx-auto mt-6 mb-7">
      <ConvertKitForm v-bind="config" />
    </div>
    <p
      class="mx-auto text-sm font-medium pb-5 lg:pb-0 text-navy dark:text-gray mb-4"
    >
      No spam. Unsubscribe whenever you want.
    </p>
  </div>
</template>

<script>
import ConvertKitForm from "convertkit-vue";

export default {
  components: {
    ConvertKitForm
  },

  data() {
    return {
      config: {
        formId: 3173834,
        hideName: true,
        emailPlaceholder: "Your email address",
        submitText: "Get Updates"
      }
    };
  }
};
</script>

<style scoped>
.newsletter-form form {
  display: flex;
  flex-direction: column;
}

.newsletter-form input {
  flex: 1;
  margin-bottom: 1rem;
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

@media screen and (min-width: 768px) {
  .newsletter-form form {
    flex-direction: row;
  }

  .newsletter-form input {
    margin-right: 0.5rem;
    margin-bottom: 0;
  }
}
</style>
