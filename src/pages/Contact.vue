<template>
  <Layout>
    <!-- Title -->
    <PageTitle title="Contact" />

    <!-- Content -->
    <div class="container mx-auto py-16 lg:py-32 px-4 2xl:px-0">
      <p
        class="text-2xl text-center font-bold leading-normal text-navy dark:text-gray pt-10 pb-6"
      >
        Want to get in touch? The best way to reach me is by email at
        <a href="mailto:info@melindagolden.com">info@melindagolden.com</a>. You
        can also message me on Twitter
        <a href="https://twitter.com/melindamgolden" target="_blank">
          @melindamgolden</a
        >. I look forward to hearing from you!
      </p>
    </div>
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
import PageTitle from "@/components/PageTitle.vue";

export default {
  metaInfo() {
    return {
      title: "Contact",
      titleTemplate: "%s | Melinda Golden",
      link: [
        {
          rel: "canonical",
          content: "https://melindagolden.com/contact/"
        }
      ],
      meta: [
        {
          key: "og:title",
          name: "og:title",
          content: "Contact | Melinda Golden"
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Contact | Melinda Golden"
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
  },

  components: {
    PageTitle
  }
};
</script>
