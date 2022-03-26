<template>
  <Layout>
    <!-- Title -->
    <PageTitle title="About" />

    <!-- Content -->
    <div class="container mx-auto py-16 lg:py-32 px-4 2xl:px-0">
      <g-image
        src="~/assets/pngs/about.png"
        quality="100"
        immediate
        class="w-full rounded"
        alt="Melinda Golden standing on rock"
      />

      <p class="text-lg font-medium text-navy dark:text-gray pt-10 pb-6">
        Hi, my name is Melinda Golden. I'm a front-end developer based in
        Asheville, NC. During my 3+ years in software development, I have used
        Vue, React, TypeScript, Apollo, and GraphQL.
      </p>
      <p class="text-lg font-medium text-navy dark:text-gray pb-6">
        What I enjoy about development is bringing together design with code.
        For me, there isn't a better feeling than creating something from
        nothing. I get excited about coding a beautiful UI and I can honestly
        say that I love CSS. That's why I specialize in front-end development.
      </p>
      <p class="text-lg font-medium text-navy dark:text-gray pb-6">
        Before I got into software development, I owned my own wedding
        photography business. I began teaching myself how to build websites with
        WordPress. Then, I started working at a web design company as a web
        developer and stayed there for three years. While working full-time, I
        completed an online bootcamp in full-stack JavaScript.
      </p>
      <p class="text-lg font-medium text-navy dark:text-gray pb-6">
        While I spend much of my free time learning, I also regularly attend
        local tech meetups. I am the organizer for the Asheville Women in Tech
        meetup. And I have volunteered to give presentations about JavaScript
        and share my knowledge with other developers. Besides coding, I enjoy
        traveling, hiking, kayaking, and photography.
      </p>
      <p class="text-lg font-medium text-navy dark:text-gray pb-6">
        You can find me on Twitter
        <a href="https://twitter.com/melindamgolden" target="_blank">
          @melindamgolden
        </a>
      </p>
    </div>
  </Layout>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";

export default {
  metaInfo: {
    title: "About",
    titleTemplate: "%s | Melinda Golden"
  },

  components: {
    PageTitle
  }
};
</script>
