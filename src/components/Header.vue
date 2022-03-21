<template>
  <header class="z-10 p-4 fixed inset-x-0 bg-gray-dark dark:bg-navy-dark">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div>
        <g-link
          to="/"
          class="flex items-center text-xl font-bold text-navy dark:text-gray"
        >
          <Logo class="w-8 mr-4" />
          {{ $static.metadata.siteName }}
        </g-link>
      </div>

      <!-- Navigation -->
      <div
        class="lg:block w-full lg:w-auto fixed lg:static top-16 left-0 right-0 bottom-0 flex flex-col lg:flex-row bg-gray-dark dark:bg-navy-dark"
        :class="{ hidden: !isMenuOpen }"
      >
        <div
          class="w-full lg:w-auto flex flex-col lg:flex-row justify-center items-center pt-10 lg:pt-0"
        >
          <nav class="flex flex-col lg:flex-row">
            <g-link
              class="py-4 lg:py-0 px-6 text-center text-2xl lg:text-xl font-medium text-navy dark:text-gray"
              to="/"
              @click="closeMenu"
            >
              Home
            </g-link>
            <g-link
              class="py-4 lg:py-0 px-6 text-center text-2xl lg:text-xl font-medium text-navy dark:text-gray"
              to="/about/"
              @click="closeMenu"
            >
              About
            </g-link>
          </nav>

          <div class="hidden lg:block h-7 w-px mx-6 bg-navy dark:bg-gray" />

          <ThemeSwitcher class="pt-6 lg:pt-0 lg:ml-4" />
        </div>
      </div>

      <!-- Mobile menu button -->
      <button
        v-if="!isMenuOpen"
        aria-label="Open menu"
        class="lg:hidden"
        @click="openMenu"
      >
        <Menu class="stroke-current text-navy dark:text-gray" />
      </button>

      <button
        v-else
        aria-label="Close menu"
        class="lg:hidden"
        @click="closeMenu"
      >
        <Close class="stroke-current text-navy dark:text-gray" />
      </button>
    </div>
  </header>
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
import Close from "~/assets/svgs/Close.svg";
import Menu from "~/assets/svgs/Menu.svg";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  components: {
    Logo,
    Close,
    Menu,
    ThemeSwitcher
  },

  data() {
    return {
      isMenuOpen: false
    };
  },

  methods: {
    openMenu() {
      this.isMenuOpen = true;
    },

    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>
