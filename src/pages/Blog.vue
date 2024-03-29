<template>
  <Layout>
    <!-- Title -->
    <PageTitle title="Blog" />

    <!-- Posts -->
    <div class="container mx-auto py-16 lg:py-32 px-4 2xl:px-0">
      <div v-for="(post, index) in posts" :key="post.id">
        <PostCard :post="post" />

        <div
          v-if="index !== posts.length - 1"
          class="w-full h-px my-10 bg-border dark:bg-gray"
        />
      </div>

      <!-- Pagination -->
      <Pagination
        v-if="$page.allPost.pageInfo.totalPages > 1"
        :page-info="$page.allPost.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query AllPost($page: Int) {
  metadata {
    siteDescription
  }
  allPost(sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate {
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
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
  }
}
</page-query>

<script>
import PageTitle from "@/components/PageTitle.vue";
import PostCard from "@/components/PostCard.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  metaInfo() {
    return {
      title: "Blog",
      titleTemplate: "%s | Melinda Golden",
      link: [
        {
          rel: "canonical",
          content: "https://melindagolden.com/blog/"
        }
      ],
      meta: [
        {
          key: "og:title",
          name: "og:title",
          content: "Blog | Melinda Golden"
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Blog | Melinda Golden"
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
    PageTitle,
    PostCard,
    Pagination
  },

  computed: {
    posts() {
      return this.$page.allPost.edges;
    }
  }
};
</script>
