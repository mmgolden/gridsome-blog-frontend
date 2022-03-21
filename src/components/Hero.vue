<template>
  <div class="bg-gray-dark dark:bg-navy-dark">
    <div class="container mx-auto lg:grid grid-cols-2 px-4 2xl:px-0">
      <!-- Introduction -->
      <div class="py-16 lg:py-36">
        <h1
          class="text-4xl lg:text-5xl mb-2.5 font-bold text-navy dark:text-gray"
        >
          Hello, I'm Melinda Golden.
        </h1>
        <p class="text-2xl lg:text-3xl font-medium text-navy dark:text-gray">
          I'm a front end developer based in Asheville, NC.
        </p>
      </div>

      <!-- Image -->
      <div class="relative lg:flex justify-center">
        <div class="image lg:absolute -bottom-14 2xl:-bottom-20 lg:ml-14">
          <g-image
            src="~/assets/pngs/cutout.png"
            quality="100"
            immediate
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  .image {
    width: 359px;
  }
}
</style>
