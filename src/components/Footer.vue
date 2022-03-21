<template>
  <footer class="px-4 2xl:px-0 py-7 mt-auto">
    <div class="container mx-auto lg:flex items-center justify-between">
      <!-- Copyright -->
      <p class="text-base font-medium text-navy dark:text-gray">
        © Copyright {{ currentYear }} {{ $static.metadata.siteName }}
      </p>

      <!-- Links -->
      <p class="pt-2 lg:pt-0 text-base font-medium text-navy dark:text-gray">
        Follow me on
        <a href="https://twitter.com/melindamgolden" target="_blank"> Twitter</a
        >, <a href="https://github.com/mmgolden" target="_blank">GitHub</a>, and
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
