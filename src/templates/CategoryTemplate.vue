<template>
  <ArticleView :title="category.name" :articles="articles" />
</template>

<script>
import ArticleView from "@/components/ArticleView.vue";

export default {
  metaInfo() {
    return {
      title: this.category.name,
      titleTemplate: "%s | Melinda Golden",
      meta: [
        {
          key: "og:title",
          name: "og:title",
          content: `${this.category.name} | Melinda Golden`
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: `${this.category.name} | Melinda Golden`
        },
        {
          key: "description",
          name: "description",
          content: this.category.description
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.category.description
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.category.description
        }
      ]
    };
  },

  components: {
    ArticleView
  },

  computed: {
    category() {
      return {
        name: "Category"
      };
    },

    articles() {
      return [];
    }
  }
};
</script>
