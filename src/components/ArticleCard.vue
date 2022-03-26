<template>
  <div>
    <!-- Title -->
    <g-link :to="`/blog/${article.attributes.slug}`">
      <h3 class="text-2xl font-bold text-navy dark:text-gray pb-4">
        {{ article.attributes.title }}
      </h3>
    </g-link>

    <!-- Date and category -->
    <div class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray mb-4">
      {{ formatPublishDate(article.attributes.publishedAt) }}
      -
      {{ article.attributes.category.data.attributes.name }}
    </div>

    <!-- Description -->
    <p class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray">
      {{ article.attributes.description }}
    </p>
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate.js";

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  methods: {
    formatPublishDate(date) {
      return formatDate(date);
    }
  }
};
</script>
