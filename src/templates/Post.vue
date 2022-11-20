<template>
  <Layout>
    <article>
      <!-- Title -->
      <PageTitle :title="post.title">
        <p
          class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray mt-4"
        >
          {{ post.date }}
          {{ post.updated !== post.date ? `· Updated ${post.updated}` : "" }} ·
          {{ post.timeToRead }} min read
        </p>

        <!-- Tags -->
        <ul class="mt-2 lg:mt-8">
          <li>
            <g-link
              v-for="tag in post.tags"
              :key="tag.id"
              :to="`/tag/${tag.id}`"
              class="transition-colors no-underline bg-primary-light border-primary-light hover:bg-primary-hover text-primary-dark font-medium rounded-3xl px-4 py-2 mx-2"
            >
              {{ tag.title }}
            </g-link>
          </li>
        </ul>
      </PageTitle>

      <!-- Content -->
      <div
        class="post-content container mx-auto py-16 lg:py-32 text-lg font-medium text-navy dark:text-gray px-4 2xl:px-0"
      >
        <Markdown :source="post.content" />
      </div>
    </article>

    <div class="transition duration-500 pt-16 bg-gray-dark dark:bg-navy-dark">
      <div
        class="container mx-auto py-16 lg:py-28 flex flex-col justify-center items-center px-4 2xl:px-0"
      >
        <NewsletterForm />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post(path: $path) {
    title
    date(format: "MMMM D, Y")
    updated(format: "MMMM D, Y")
    content
    tags {
      id
      title
      path
    }
    timeToRead
  }
}
</page-query>

<script>
import PageTitle from "@/components/PageTitle.vue";
import Markdown from "@/components/Markdown.vue";
import NewsletterForm from "@/components/NewsletterForm.vue";

export default {
  metaInfo() {
    return {
      title: this.post.title,
      titleTemplate: "%s",
      link: [
        {
          rel: "canonical",
          content: `https://melindagolden.com/${this.post.slug}/`
        }
      ],
      meta: [
        {
          key: "og:title",
          name: "og:title",
          content: this.post.title
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.post.title
        },
        {
          key: "og:type",
          name: "og:type",
          content: "article"
        },
        {
          key: "og:url",
          name: "og:url",
          content: `https://melindagolden.com/${this.post.slug}/`
        },
        {
          key: "description",
          name: "description",
          content: this.post.excerpt
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.post.excerpt
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.post.excerpt
        }
      ]
    };
  },

  components: {
    PageTitle,
    Markdown,
    NewsletterForm
  },

  computed: {
    post() {
      return this.$page.post;
    }
  }
};
</script>

<style scoped>
::v-deep .post-content h1 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.75rem;
}

::v-deep .post-content h2 {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.25rem;
  margin-bottom: 1.75rem;
}

::v-deep .post-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  margin-bottom: 1.75rem;
}

::v-deep .post-content h4 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 1.75rem;
}

::v-deep .post-content h5 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 1.75rem;
}

::v-deep .post-content h6 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1.75rem;
}

::v-deep .post-content p {
  margin-bottom: 1.75rem;
}

::v-deep .post-content ul,
::v-deep .post-content ol {
  margin-bottom: 1.75rem;
}

::v-deep .post-content ul {
  list-style: disc;
  padding-left: 1.125rem;
}

::v-deep .post-content ol {
  list-style: decimal;
  padding-left: 1.5rem;
}

::v-deep .post-content blockquote {
  border-left: 5px solid #cecece;
  padding-left: 1.25rem;
  margin-bottom: 1.75rem;
}

::v-deep .post-content pre {
  margin-bottom: 1.75rem;
}

::v-deep .post-content pre code {
  background: transparent;
  padding: 0;
}
</style>
