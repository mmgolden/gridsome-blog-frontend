<template>
  <article class="flex flex-col">
    <g-link :to="`/${post.node.slug}`" class="no-underline">
      <!-- Title -->
      <h3 class="text-2xl font-bold text-navy dark:text-gray pb-4">
        {{ post.node.title }}
      </h3>
    </g-link>

    <!-- Date -->
    <p class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray mb-4">
      {{ post.node.date }} · {{ post.node.timeToRead }} min read
    </p>

    <!-- Excerpt -->
    <p class="text-lg font-medium pb-5 lg:pb-0 mb-4 text-navy dark:text-gray">
      {{ post.node.excerpt }}
    </p>

    <!-- Read more -->
    <g-link
      v-if="!hideReadMore"
      class="read-more flex items-center mr-auto text-lg font-bold text-navy dark:text-gray"
      :to="`/${post.node.slug}`"
    >
      Read more
      <ArrowRight class="ml-1 stroke-current text-navy dark:text-gray" />
    </g-link>
  </article>
</template>

<script>
import ArrowRight from "~/assets/svgs/ArrowRight.svg";

export default {
  components: {
    ArrowRight
  },

  props: {
    post: {
      type: Object,
      required: true
    },

    hideReadMore: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
