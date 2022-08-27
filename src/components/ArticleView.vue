<template>
  <Layout>
    <!-- Title -->
    <PageTitle :title="title" />

    <!-- Articles -->
    <div class="container mx-auto pt-16 lg:pt-32 px-4 2xl:px-0">
      <div v-for="(article, index) in articles" :key="article.id">
        <ArticleCard :article="article" />

        <div
          v-if="index !== articles.length - 1"
          class="w-full h-px my-10 bg-border dark:bg-gray"
        />
      </div>
    </div>

    <!-- Pagination -->
    <Pagination v-if="pagination" :pagination="pagination" />
  </Layout>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    PageTitle,
    ArticleCard,
    Pagination
  },

  props: {
    title: {
      type: String,
      required: true
    },

    articles: {
      type: Array,
      required: true
    },

    pagination: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
};
</script>
