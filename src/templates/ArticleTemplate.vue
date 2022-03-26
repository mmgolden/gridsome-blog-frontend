<template>
  <Layout>
    <PageTitle :title="article.title" />
  </Layout>
</template>

<page-query>
query GetArticle($id: ID!) {
  strapi {
    article(id: $id) {
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
    }
  }
}
</page-query>

<script>
import PageTitle from "@/components/PageTitle.vue";

export default {
  metaInfo() {
    return {
      title: this.article.title,
      titleTemplate: "%s"
    };
  },

  components: {
    PageTitle
  },

  computed: {
    article() {
      return this.$page.strapi.article.data.attributes;
    }
  }
};
</script>
