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
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$static.metadata.siteDescription
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$static.metadata.siteDescription
        },
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
            "https://res.cloudinary.com/melindagolden/image/upload/v1648401743/gridsome-blog/ufblni9gujjglmxjfol2.png"
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content:
            "https://res.cloudinary.com/melindagolden/image/upload/v1648401743/gridsome-blog/ufblni9gujjglmxjfol2.png"
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
