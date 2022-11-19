<template>
  <Layout>
    <Hero />
    <LatestArticles />
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteDescription
  }
}
</page-query>

<script>
import Hero from "@/components/Hero.vue";
import LatestArticles from "@/components/LatestArticles.vue";

export default {
  components: {
    Hero,
    LatestArticles
  },

  metaInfo() {
    return {
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
        },
        {
          key: "description",
          name: "description",
          content: this.$page.metadata.siteDescription
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.metadata.siteDescription
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.metadata.siteDescription
        }
      ]
    };
  }
};
</script>
