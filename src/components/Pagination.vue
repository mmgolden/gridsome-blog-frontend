<template>
  <div class="container mx-auto mt-8">
    <div class="w-full h-px my-10 bg-border dark:bg-gray" />

    <div class="flex items-center">
      <!-- Previous -->
      <g-link
        v-if="!pageInfo.isFirst"
        class="flex items-center text-lg font-bold text-navy dark:text-gray"
        :to="
          pageInfo.currentPage === 2
            ? `/${path}/`
            : `/${path}/${pageInfo.currentPage - 1}`
        "
      >
        <ArrowLeft class="mr-1 stroke-current text-navy dark:text-gray" />
        Prev
      </g-link>

      <!-- Next -->
      <g-link
        v-if="!pageInfo.isLast"
        class="flex items-center ml-auto text-lg font-bold text-navy dark:text-gray"
        :to="`/${path}/${pageInfo.currentPage + 1}`"
      >
        Next
        <ArrowRight class="ml-1 stroke-current text-navy dark:text-gray" />
      </g-link>
    </div>
  </div>
</template>

<script>
import ArrowLeft from "~/assets/svgs/ArrowLeft.svg";
import ArrowRight from "~/assets/svgs/ArrowRight.svg";

export default {
  components: {
    ArrowLeft,
    ArrowRight
  },

  props: {
    pageInfo: {
      type: Object,
      required: true
    },

    path: {
      type: String,
      required: false,
      default: "blog"
    }
  }
};
</script>
