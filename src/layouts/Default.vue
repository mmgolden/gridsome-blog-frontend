<template>
  <div class="h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Page container -->
    <main class="pt-16 -mt-0.5">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
