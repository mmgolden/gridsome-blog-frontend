<template>
  <div class="transition duration-500 bg-gray-dark dark:bg-navy-dark">
    <div class="container mx-auto lg:grid grid-cols-2 gap-4 px-4 2xl:px-0">
      <!-- Introduction -->
      <div class="pt-16 pb-96 lg:pt-36 lg:pb-36">
        <h1
          class="text-4xl lg:text-5xl mb-2.5 font-bold text-navy dark:text-gray"
        >
          Hello, I'm Melinda Golden.
        </h1>
        <p class="text-2xl lg:text-3xl font-medium text-navy dark:text-gray">
          I'm a front-end developer based in Asheville, NC.
        </p>
      </div>

      <!-- Image -->
      <div class="relative lg:flex justify-center">
        <div class="image absolute -bottom-24 2xl:-bottom-20 lg:ml-14">
          <g-image src="~/assets/pngs/cutout.png" quality="100" immediate />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 100%;
  max-width: 359px;
}
</style>
