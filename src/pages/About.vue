<template>
  <Layout>
    <!-- Title -->
    <PageTitle title="About" />

    <!-- Content -->
    <div class="container mx-auto py-16 lg:py-32 px-4 2xl:px-0">
      <g-image
        src="~/assets/pngs/about.png"
        quality="100"
        class="w-full rounded"
        alt="Melinda Golden standing on rock"
      />

      <p class="text-lg font-medium text-navy dark:text-gray pt-10 pb-7">
        Hi, my name is Melinda Golden. I’m a front-end developer based in
        Asheville, NC. I have experience with Vue, React, TypeScript, Apollo,
        and GraphQL. What I enjoy about development is bringing together design
        with code. There isn’t a better feeling than creating something from
        nothing. I get excited about coding a beautiful UI, and I can honestly
        say that I love CSS. That’s why I specialize in front-end development.
      </p>
      <p class="text-lg font-medium text-navy dark:text-gray pb-7">
        Before I got into software development, I owned my own wedding
        photography business. I began teaching myself how to build websites with
        WordPress. Then, I started working at a web design company as a web
        developer and stayed there for three years. While working full-time, I
        completed an online bootcamp in full-stack JavaScript.
      </p>
      <p class="text-lg font-medium text-navy dark:text-gray pb-7">
        While I spend much of my free time learning, I regularly attend local
        tech meetups. I am the organizer for the Asheville Women in Tech meetup.
        I have volunteered to give presentations about JavaScript and share my
        knowledge with other developers. Besides coding, I enjoy traveling,
        hiking, kayaking, and photography.
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
      title: "About",
      titleTemplate: "%s | Melinda Golden",
      link: [
        {
          rel: "canonical",
          content: "https://melindagolden.com/about/"
        }
      ],
      meta: [
        {
          key: "og:title",
          name: "og:title",
          content: "About | Melinda Golden"
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "About | Melinda Golden"
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
