<template>
  <div class="h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Page container -->
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    twitter {
      site
      creator
    }
  }
}
</static-query>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  metaInfo() {
    return {
      meta: [
        { key: "author", name: "author", content: "Melinda Golden" },
        {
          key: "twitter:site",
          name: "twitter:site",
          content: this.$static.metadata.twitter.site
        },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: this.$static.metadata.twitter.creator
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          key: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/melindagolden/image/upload/v1649532939/gridsome-blog/meta-og.png"
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content:
            "https://res.cloudinary.com/melindagolden/image/upload/v1649532939/gridsome-blog/meta-twitter.png"
        }
      ]
    };
  },

  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
html,
body {
  font-family: Lora, ui-serif, serif;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
