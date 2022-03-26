<template>
  <Layout>
    <!-- Title -->
    <PageTitle :title="article.title">
      <div
        class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray mt-4"
      >
        {{ formatPublishDate(article.publishedAt) }}
        -
        <g-link :to="`/category/${article.category.data.attributes.slug}`">
          {{ article.category.data.attributes.name }}
        </g-link>
      </div>
    </PageTitle>

    <!-- Content -->
    <div
      class="article-content container mx-auto py-16 lg:py-32 text-lg font-medium text-navy dark:text-gray px-4 2xl:px-0"
    >
      <Markdown :source="article.body" />
    </div>
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
import Markdown from "@/components/Markdown.vue";
import formatDate from "@/utils/formatDate.js";

export default {
  metaInfo() {
    return {
      title: this.article.title,
      titleTemplate: "%s"
    };
  },

  components: {
    PageTitle,
    Markdown
  },

  computed: {
    article() {
      return this.$page.strapi.article.data.attributes;
    }
  },

  methods: {
    formatPublishDate(date) {
      return formatDate(date);
    }
  }
};
</script>

<style scoped>
::v-deep .article-content h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.5rem;
}

::v-deep .article-content h2 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
  margin-bottom: 1.5rem;
}

::v-deep .article-content h3 {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
}

::v-deep .article-content h4 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  margin-bottom: 1.5rem;
}

::v-deep .article-content h5 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
}

::v-deep .article-content h6 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
}

::v-deep .article-content p {
  margin-bottom: 1.5rem;
}

::v-deep .article-content ul,
::v-deep .article-content ol {
  margin-bottom: 1.5rem;
}

::v-deep .article-content ul {
  list-style: disc;
  padding-left: 1.125rem;
}

::v-deep .article-content ol {
  list-style: decimal;
  padding-left: 1.5rem;
}

::v-deep .article-content blockquote {
  border-left: 5px solid #cecece;
  padding-left: 1.25rem;
  margin-bottom: 1.5rem;
}

::v-deep .article-content pre {
  margin-bottom: 1.5rem;
}

::v-deep .article-content pre code {
  background: transparent;
  padding: 0;
}
</style>
