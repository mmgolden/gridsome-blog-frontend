<template>
  <div class="container mx-auto flex items-center pb-44 px-4 2xl:px-0">
    <!-- Previous -->
    <g-link
      v-if="pagination.page !== 1"
      class="flex items-center text-lg font-bold text-navy dark:text-gray"
      :to="pagination.page === 2 ? '/blog/' : `/blog/${pagination.page - 1}`"
    >
      <ArrowLeft class="mr-1 stroke-current text-navy dark:text-gray" />
      Prev
    </g-link>

    <!-- Next -->
    <g-link
      v-if="pagination.page !== pagination.pageCount"
      class="flex items-center ml-auto text-lg font-bold text-navy dark:text-gray"
      :to="`/blog/${pagination.page + 1}`"
    >
      Next
      <ArrowRight class="ml-1 stroke-current text-navy dark:text-gray" />
    </g-link>
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
    pagination: {
      type: Object,
      required: true
    }
  }
};
</script>
