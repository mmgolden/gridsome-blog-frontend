<template>
  <ArticleView title="Blog" :articles="articles" :pagination="pagination" />
</template>

<page-query>
query GetArticles($blogPage: Int, $blogPageSize: Int) {
  metadata {
    siteDescription
  }
  strapi {
    articles(pagination: { page: $blogPage, pageSize: $blogPageSize }) {
      data {
        id
        attributes {
          readingTime
          title
          description
          slug
          author {
            data {
              id
              attributes {
                name
                avatar_url
              }
            }
          }
          category {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
          body
          publishedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
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
      return this.$page.strapi.articles.data;
    },

    pagination() {
      return this.$page.strapi.articles.meta.pagination;
    }
  }
};
</script>
