<template>
  <ArticleView :title="category.name" :articles="articles" />
</template>

<page-query>
query GetCategory($id: ID!) {
  strapi {
    category(id: $id) {
      data {
        id
        attributes {
          name
          slug
          description
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
    }
  }
}
</page-query>

<script>
import ArticleView from "@/components/ArticleView.vue";

export default {
  metaInfo() {
    return {
      title: this.category.name,
      titleTemplate: "%s | Melinda Golden"
    };
  },

  components: {
    ArticleView
  },

  computed: {
    category() {
      return this.$page.strapi.category.data.attributes;
    },

    articles() {
      return this.category.articles.data;
    }
  }
};
</script>
