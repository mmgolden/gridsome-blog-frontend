// Import global styles
require("~/main.css");

import DefaultLayout from "~/layouts/Default.vue";
import VueGtag from "vue-gtag";

export default function (Vue, { router, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Configure Google analytics
  if (isClient) {
    Vue.use(
      VueGtag,
      {
        config: { id: process.env.GRIDSOME_GOOGLE_TAG }
      },
      router
    );
  }
}
