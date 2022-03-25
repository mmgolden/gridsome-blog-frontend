<template>
  <Layout>
    <PageTitle title="Blog" />
  </Layout>
</template>

<page-query>
query {
  strapi {
    articles {
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
  metaInfo: {
    title: "Blog",
    titleTemplate: "%s | Melinda Golden"
  },

  components: {
    PageTitle
  }
};
</script>
