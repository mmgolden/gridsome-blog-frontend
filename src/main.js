// Import prism styles
import "prismjs/themes/prism.css";

// Import global styles
import "~/main.css";

// Import layout
import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
