<template>
  <div class="transition duration-500 pt-16 bg-gray-dark dark:bg-navy-dark">
    <div class="container mx-auto px-4 pt-20 pb-32 2xl:px-0">
      <div class="lg:max-w-xl">
        <!-- Avatar -->
        <div class="w-28 mb-6">
          <g-image
            src="~/assets/pngs/avatar.png"
            quality="100"
            alt="Headshot of Melinda Golden"
            class="avatar rounded-full"
          />
        </div>

        <h1
          class="text-4xl lg:text-5xl mb-4 font-bold text-navy dark:text-gray"
        >
          Hello, I'm <span class="highlight">Melinda Golden</span>.
        </h1>

        <p class="text-xl font-medium text-navy dark:text-gray">
          I’m a software developer based in Asheville, NC. I went from working
          as a photographer to a front-end developer at startups. I share my
          journey building products.
        </p>
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
