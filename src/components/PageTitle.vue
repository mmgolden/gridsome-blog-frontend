<template>
  <div class="transition duration-500 bg-gray-dark dark:bg-navy-dark">
    <div
      class="container mx-auto py-28 flex flex-col justify-center items-center"
    >
      <h1
        class="text-4xl lg:text-5xl lg:leading-snug text-center font-bold text-navy dark:text-gray"
      >
        {{ title }}
      </h1>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
