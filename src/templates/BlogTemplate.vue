<template>
  <BlogView :articles="articles" :pagination="pagination" />
</template>

<page-query>
query GetArticles($blogPage: Int, $blogPageSize: Int) {
  strapi {
    articles(pagination: { page: $blogPage, pageSize: $blogPageSize }) {
      data {
        id
        attributes {
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
import BlogView from "@/components/BlogView.vue";

export default {
  metaInfo: {
    title: "Blog",
    titleTemplate: "%s | Melinda Golden"
  },

  components: {
    BlogView
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
