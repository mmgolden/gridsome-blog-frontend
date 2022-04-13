<template>
  <article class="flex flex-col">
    <g-link :to="`/${article.attributes.slug}`" class="no-underline">
      <!-- Title -->
      <h3 class="text-3xl font-bold text-navy dark:text-gray pb-4">
        {{ article.attributes.title }}
      </h3>

      <!-- Date and read time -->
      <p class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray mb-4">
        {{ formatPublishDate(article.attributes.publishedAt) }}
        <span v-if="article.attributes.readingTime">
          • {{ article.attributes.readingTime }}
        </span>
      </p>

      <!-- Description -->
      <p class="text-lg font-medium pb-5 lg:pb-0 mb-4 text-navy dark:text-gray">
        {{ article.attributes.description }}
      </p>
    </g-link>
    <g-link
      v-if="!hideReadMore"
      class="read-more flex items-center mr-auto text-lg font-bold text-navy dark:text-gray"
      :to="`/${article.attributes.slug}`"
    >
      Read more
      <ArrowRight class="ml-1 stroke-current text-navy dark:text-gray" />
    </g-link>
  </article>
</template>

<script>
import ArrowRight from "~/assets/svgs/ArrowRight.svg";
import formatDate from "@/utils/formatDate.js";

export default {
  components: {
    ArrowRight
  },

  props: {
    article: {
      type: Object,
      required: true
    },

    hideReadMore: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    formatPublishDate(date) {
      return formatDate(date);
    }
  }
};
</script>
