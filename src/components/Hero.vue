<template>
  <div class="transition duration-500 pt-16 bg-gray-dark dark:bg-navy-dark">
    <div
      class="container mx-auto px-4 pt-4 pb-12 2xl:px-0 md:grid grid-cols-2 gap-4 items-center"
    >
      <!-- Introduction -->
      <div class="py-8 md:py-0">
        <h1
          class="text-4xl lg:text-5xl mb-2.5 font-bold text-navy dark:text-gray"
        >
          Hello, I'm <span class="highlight">Melinda Golden</span>.
        </h1>
        <p class="text-2xl lg:text-3xl font-medium text-navy dark:text-gray">
          I'm a front-end developer based in Asheville, NC.
        </p>
      </div>

      <!-- Image -->
      <div class="justify-self-center">
        <div class="image">
          <g-image
            src="~/assets/pngs/cutout.png"
            quality="100"
            alt="Headshot of Melinda Golden"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .image {
    max-width: 280px;
  }
}

@media screen and (min-width: 1024px) {
  .image {
    max-width: 332px;
  }
}

.highlight {
  position: relative;
  display: inline-block;
  z-index: 9;
}

.highlight::after {
  content: "";
  width: 100%;
  height: 14px;
  background: #3abfc8;
  position: absolute;
  left: 0;
  bottom: 5%;
  z-index: -1;
}
</style>
