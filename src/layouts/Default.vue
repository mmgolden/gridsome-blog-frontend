<template>
  <div class="h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Page container -->
    <main class="container pt-16 mx-auto">
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
