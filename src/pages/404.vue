<template>
  <Layout>
    <!-- Title -->
    <PageTitle title="Page Not Found" />

    <!-- Content -->
    <div class="container mx-auto py-16 lg:py-32 px-4 2xl:px-0">
      <p
        class="text-2xl text-center font-bold leading-normal text-navy dark:text-gray"
      >
        Oops, I can't seem to find that page. Want to return
        <g-link to="/">home</g-link>?
      </p>
    </div>
  </Layout>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";

export default {
  metaInfo: {
    title: "Page Not Found",
    titleTemplate: "%s | Melinda Golden"
  },

  components: {
    PageTitle
  }
};
</script>
