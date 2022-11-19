<template>
  <footer class="py-7 mt-auto">
    <div
      class="container mx-auto lg:flex items-center justify-between px-4 2xl:px-0"
    >
      <!-- Copyright -->
      <div class="lg:flex">
        <p class="text-base font-medium text-navy dark:text-gray">
          © Copyright {{ currentYear }} {{ $static.metadata.siteName }}
        </p>
        <p class="hidden lg:block mx-2 text-navy dark:text-gray">|</p>
        <p class="pt-2 lg:pt-0 text-base font-medium text-navy dark:text-gray">
          Built with
          <a href="https://gridsome.org/" target="_blank">Gridsome</a>
        </p>
      </div>

      <!-- Links -->
      <p class="pt-2 lg:pt-0 text-base font-medium text-navy dark:text-gray">
        Follow me on
        <a href="https://github.com/mmgolden" target="_blank">GitHub</a> and
        <a href="https://www.linkedin.com/in/melindamgolden/" target="_blank">
          LinkedIn</a
        >.
      </p>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
