<template>
  <div class="h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Page container -->
    <transition name="fade" appear>
      <main class="pt-16 -mt-0.5">
        <slot />
      </main>
    </transition>

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

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
