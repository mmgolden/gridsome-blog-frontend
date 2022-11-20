<template>
  <Layout>
    <!-- Title -->
    <PageTitle :title="tag.title" />

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
        v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        :page-info="$page.tag.belongsTo.pageInfo"
        :path="`tag/${tag.id}`"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag($id: ID!, $page: Int) {
  metadata {
    siteDescription
  }
  tag(id: $id) {
    id
    title
    belongsTo(page: $page, perPage: 6) @paginate {
      edges {
        node {
          ... on Post {
            title
            slug
            date(format: "MMMM D, Y")
            excerpt
            timeToRead
            tags {
              title
            }
          }
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
}
</page-query>

<script>
import PageTitle from "@/components/PageTitle.vue";
import PostCard from "@/components/PostCard.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  metaInfo() {
    return {
      title: this.tag.title,
      titleTemplate: "%s | Melinda Golden",
      link: [
        {
          rel: "canonical",
          content: `https://melindagolden.com/tag/${this.tag.id}`
        }
      ],
      meta: [
        {
          key: "og:title",
          name: "og:title",
          content: `${this.tag.title} | Melinda Golden`
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: `${this.tag.title} | Melinda Golden`
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
    tag() {
      return this.$page.tag;
    },

    posts() {
      return this.$page.tag.belongsTo.edges;
    }
  }
};
</script>
