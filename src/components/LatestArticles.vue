<template>
  <div class="py-44 bg-gray-dark dark:bg-navy-dark">
    <div
      class="container mx-auto flex flex-col lg:flex-row lg:justify-between pb-16 px-4 2xl:px-0"
    >
      <h2 class="text-4xl font-bold pb-5 lg:pb-0 text-navy dark:text-gray">
        Latest Articles
      </h2>
      <g-link
        class="more-articles flex items-center mr-auto lg:mr-0 lg:ml-auto text-lg font-bold text-navy dark:text-gray"
        to="/blog/"
      >
        More articles
        <ArrowRight class="ml-1 stroke-current text-navy dark:text-gray" />
      </g-link>
    </div>

    <div class="container mx-auto lg:grid grid-cols-3 gap-4 px-4 2xl:px-0">
      <div v-for="article in articles" :key="article.id" class="mb-10 lg:mb-0">
        <g-link :to="`/blog/${article.attributes.slug}`">
          <h3 class="text-2xl font-bold text-navy dark:text-gray pb-4">
            {{ article.attributes.title }}
          </h3>
        </g-link>
        <div
          class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray mb-4"
        >
          {{ formatPublishDate(article.attributes.publishedAt) }}
          -
          {{ article.attributes.category.data.attributes.name }}
        </div>
        <p class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray">
          {{ article.attributes.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<static-query>
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
</static-query>

<script>
import ArrowRight from "~/assets/svgs/ArrowRight.svg";
import formatDate from "@/utils/formatDate.js";

export default {
  components: {
    ArrowRight
  },

  computed: {
    articles() {
      return this.$static.strapi.articles.data.slice(0, 3);
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
.more-articles {
  height: 29px;
}
</style>
