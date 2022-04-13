<template>
  <button
    class="theme-button flex justify-center items-center"
    :aria-label="theme === 'light' ? 'Toggle dark theme' : 'Toggle light theme'"
    @click="toggleTheme"
  >
    <Sun v-if="theme === 'light'" class="w-6" />
    <Moon v-else class="w-6" />
  </button>
</template>

<script>
import Sun from "~/assets/svgs/Sun.svg";
import Moon from "~/assets/svgs/Moon.svg";

export default {
  components: {
    Sun,
    Moon
  },

  data() {
    return {
      theme: ""
    };
  },

  mounted() {
    const isDarkTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultTheme = isDarkTheme ? "dark" : "light";

    const theme = localStorage.getItem("THEME") || defaultTheme;

    this.setTheme(theme);
  },

  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";

      this.setTheme(newTheme);
    },

    setTheme(newTheme) {
      this.theme = newTheme;

      if (this.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      localStorage.setItem("THEME", newTheme);
    }
  }
};
</script>

<style scoped>
.theme-button:focus-visible {
  outline: none;
  border: 2px solid #3abfc8;
}
</style>
