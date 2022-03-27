<template>
  <Layout>
    <Hero />
    <Introduction />
    <LatestArticles />
  </Layout>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Introduction from "@/components/Introduction.vue";
import LatestArticles from "@/components/LatestArticles.vue";

export default {
  components: {
    Hero,
    Introduction,
    LatestArticles
  },

  metaInfo: {
    title: "Melinda Golden",
    titleTemplate: "%s",
    link: [
      {
        rel: "canonical",
        content: "https://melindagolden.com"
      }
    ],
    meta: [
      {
        key: "og:title",
        name: "og:title",
        content: "Melinda Golden"
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: "Melinda Golden"
      }
    ]
  }
};
</script>
