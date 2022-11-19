<template>
  <div
    v-if="articles.length > 0"
    class="py-44 transition duration-500 bg-gray-dark dark:bg-navy-dark"
  >
    <div
      class="container mx-auto flex flex-col lg:flex-row lg:justify-between pb-16 px-4 2xl:px-0"
    >
      <h2 class="text-4xl font-bold pb-5 lg:pb-0 text-navy dark:text-gray">
        Latest Articles
      </h2>
      <g-link
        class="link flex items-center mr-auto lg:mr-0 lg:ml-auto text-lg font-bold text-navy dark:text-gray"
        to="/blog/"
      >
        More articles
        <ArrowRight class="ml-1 stroke-current text-navy dark:text-gray" />
      </g-link>
    </div>

    <div class="container mx-auto px-4 2xl:px-0">
      <div v-for="(article, index) in articles" :key="article.id">
        <ArticleCard :article="article" />

        <div
          v-if="index !== articles.length - 1"
          class="w-full h-px my-10 bg-border dark:bg-gray"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import ArrowRight from "~/assets/svgs/ArrowRight.svg";

export default {
  components: {
    ArticleCard,
    ArrowRight
  },

  computed: {
    articles() {
      return [];
    }
  }
};
</script>

<style scoped>
.link {
  height: 29px;
}
</style>
