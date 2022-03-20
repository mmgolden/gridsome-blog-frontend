<template>
  <div class="h-screen flex flex-col bg-gray dark:bg-navy">
    <!-- Header -->
    <header class="p-4 bg-gray-dark dark:bg-navy-dark">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Left -->
        <div>
          <g-link
            to="/"
            class="flex items-center text-xl font-bold text-navy dark:text-gray"
          >
            <Logo class="w-8 mr-4" />
            {{ $static.metadata.siteName }}
          </g-link>
        </div>

        <!-- Right -->
        <div class="flex items-center">
          <nav>
            <g-link
              class="px-6 text-xl font-medium text-navy dark:text-gray"
              to="/"
            >
              Home
            </g-link>
            <g-link
              class="px-6 text-xl font-medium text-navy dark:text-gray"
              to="/about/"
            >
              About
            </g-link>
          </nav>

          <div class="h-7 w-px mx-6 bg-navy dark:bg-gray" />

          <ThemeSwitcher />
        </div>
      </div>
    </header>

    <!-- Page container -->
    <main class="container mx-auto">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="py-7 mt-auto">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Copyright -->
        <p class="text-base font-medium text-navy dark:text-gray">
          © Copyright {{ currentYear }} Melinda Golden
        </p>

        <!-- Links -->
        <p class="text-base font-medium text-navy dark:text-gray">
          Follow me on
          <a href="https://twitter.com/melindamgolden" target="_blank">
            Twitter</a
          >, <a href="https://github.com/mmgolden" target="_blank">GitHub</a>,
          and
          <a href="https://www.linkedin.com/in/melindamgolden/" target="_blank">
            LinkedIn</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from "~/assets/svgs/Logo.svg";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  components: {
    Logo,
    ThemeSwitcher
  },

  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
