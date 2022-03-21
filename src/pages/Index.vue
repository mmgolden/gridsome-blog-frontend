<template>
  <Layout>
    <Hero />
    <Introduction />
  </Layout>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Introduction from "@/components/Introduction.vue";

export default {
  components: {
    Hero,
    Introduction
  },

  metaInfo: {
    title: "Melinda Golden",
    titleTemplate: "%s"
  }
};
</script>
