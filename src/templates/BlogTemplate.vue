<template>
  <ArticleView title="Blog" :articles="articles" :pagination="pagination" />
</template>

<page-query>
query {
  metadata {
    siteDescription
  }
}
</page-query>

<script>
import ArticleView from "@/components/ArticleView.vue";

export default {
  metaInfo() {
    return {
      title: "Blog",
      titleTemplate: "%s | Melinda Golden",
      meta: [
        {
          key: "og:title",
          name: "og:title",
          content: "Blog | Melinda Golden"
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Blog | Melinda Golden"
        },
        {
          key: "description",
          name: "description",
          content: this.$page.metadata.siteDescription
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.metadata.siteDescription
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.metadata.siteDescription
        }
      ]
    };
  },

  components: {
    ArticleView
  },

  computed: {
    articles() {
      return [];
    },

    pagination() {
      return {
        page: 1,
        pageCount: 1,
        pageSize: 6,
        total: 0
      };
    }
  }
};
</script>
