<template>
  <div class="container mx-auto py-44 px-4 2xl:px-0">
    <div class="flex flex-col lg:flex-row lg:justify-between pb-16">
      <h2 class="text-4xl font-bold pb-5 lg:pb-0 text-navy dark:text-gray">
        About
      </h2>
      <g-link
        class="link flex items-center mr-auto lg:mr-0 lg:ml-auto text-lg font-bold text-navy dark:text-gray"
        to="/about/"
      >
        Read more
        <ArrowRight class="ml-1 stroke-current text-navy dark:text-gray" />
      </g-link>
    </div>

    <p class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray">
      I have experience with Vue, React, TypeScript, Apollo, and GraphQL. What I
      enjoy about development is bringing together design with code. There isn’t
      a better feeling than creating something from nothing. I get excited about
      coding a beautiful UI, and I can honestly say that I love CSS. That’s why
      I specialize in front-end development.
    </p>
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

<style scoped>
.link {
  height: 29px;
}
</style>
