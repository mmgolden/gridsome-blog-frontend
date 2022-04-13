<template>
  <div class="container mx-auto lg:grid grid-cols-3 gap-4 py-44 px-4 2xl:px-0">
    <h2 class="text-4xl font-bold pb-5 lg:pb-0 text-navy dark:text-gray">
      I bridge the gap between design and code.
    </h2>

    <p class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray">
      I have experience with Vue, React, TypeScript, Apollo, and GraphQL. What I
      enjoy about development is bringing together design with code.
    </p>

    <div class="flex flex-col">
      <p class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray">
        There isn’t a better feeling than creating something from nothing. I get
        excited about coding a beautiful UI.
      </p>
      <g-link
        class="flex items-center mr-auto lg:mr-0 lg:ml-auto text-lg font-bold text-navy dark:text-gray"
        to="/about/"
      >
        Read more
        <ArrowRight class="ml-1 stroke-current text-navy dark:text-gray" />
      </g-link>
    </div>
  </div>
</template>

<script>
import ArrowRight from "~/assets/svgs/ArrowRight.svg";

export default {
  components: {
    ArrowRight
  }
};
</script>
