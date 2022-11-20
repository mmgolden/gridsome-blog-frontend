<template>
  <div v-if="posts.length > 0" class="py-44 transition duration-500">
    <div
      class="container mx-auto flex flex-col lg:flex-row lg:justify-between pb-16 px-4 2xl:px-0"
    >
      <h2 class="text-3xl font-bold pb-5 lg:pb-0 text-navy dark:text-gray">
        Latest Articles
      </h2>
      <g-link
        class="link flex items-center mr-auto lg:mr-0 lg:ml-auto text-lg font-bold text-navy dark:text-gray"
        to="/blog/"
      >
        More articles
        <ArrowRight class="ml-1 stroke-current text-navy dark:text-gray" />
      </g-link>
    </div>

    <div class="container mx-auto px-4 2xl:px-0">
      <div v-for="(post, index) in posts" :key="post.id">
        <PostCard :post="post" />

        <div
          v-if="index !== posts.length - 1"
          class="w-full h-px my-10 bg-border dark:bg-gray"
        />
      </div>
    </div>
  </div>
</template>

<static-query>
query AllPost {
  allPost(sortBy: "date", order: DESC, limit: 3) {
    edges {
      node {
        id
        title
        date(format: "MMMM D, Y")
        excerpt
        slug
        timeToRead
      }
    }
  }
}
</static-query>

<script>
import PostCard from "@/components/PostCard.vue";
import ArrowRight from "~/assets/svgs/ArrowRight.svg";

export default {
  components: {
    PostCard,
    ArrowRight
  },

  computed: {
    posts() {
      return this.$static.allPost.edges;
    }
  }
};
</script>

<style scoped>
.link {
  height: 29px;
}
</style>
