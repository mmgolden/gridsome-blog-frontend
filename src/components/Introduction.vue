<template>
  <div class="container mx-auto lg:grid grid-cols-3 gap-4 py-44 px-4 2xl:px-0">
    <h2 class="text-4xl font-bold pb-5 lg:pb-0 text-navy dark:text-gray">
      I bridge the gap between design and code.
    </h2>

    <p class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray">
      I'm a front end developer with experience in Vue, React, TypeScript, and
      GraphQL. I'm interested in responsive design and cross-platform mobile app
      development. What I enjoy about development is bringing together design
      with code
    </p>

    <div class="flex flex-col">
      <p class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray">
        For me, there isn't a better feeling than creating something from
        nothing. I get excited about coding a beautiful UI and I can honestly
        say that I love CSS.
      </p>
      <g-link
        class="flex ml-auto text-lg font-bold text-navy dark:text-gray"
        to="/"
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

<style lang="scss" scoped></style>
