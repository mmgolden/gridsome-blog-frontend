<template>
  <VueMarkdown :source="source" />
</template>

<script>
import VueMarkdown from "vue-markdown";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript.min.js";

export default {
  components: {
    VueMarkdown
  },

  props: {
    source: {
      type: String,
      required: true
    }
  },

  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll();
    });
  }
};
</script>
