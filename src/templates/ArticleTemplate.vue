<template>
  <Layout>
    <article>
      <!-- Title -->
      <PageTitle :title="article.title">
        <p
          class="text-lg font-medium pb-5 lg:pb-0 text-navy dark:text-gray mt-4"
        >
          {{ formatPublishDate(article.publishedAt) }}
          <span v-if="article.readingTime"> • {{ article.readingTime }} </span>
        </p>
        <g-link
          :to="`/category/${article.category.data.attributes.slug}`"
          class="text-lg font-medium text-navy dark:text-gray mt-4"
        >
          {{ article.category.data.attributes.name }}
        </g-link>
      </PageTitle>

      <!-- Content -->
      <div
        class="article-content container mx-auto py-16 lg:py-32 text-lg font-medium text-navy dark:text-gray px-4 2xl:px-0"
      >
        <Markdown :source="article.body" />
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

<script>
import PageTitle from "@/components/PageTitle.vue";
import Markdown from "@/components/Markdown.vue";
import NewsletterForm from "@/components/NewsletterForm.vue";

import formatDate from "@/utils/formatDate.js";

export default {
  metaInfo() {
    return {
      title: this.article.title,
      titleTemplate: "%s",
      link: [
        {
          rel: "canonical",
          content: `https://melindagolden.com/${this.article.slug}/`
        }
      ],
      meta: [
        {
          key: "og:title",
          name: "og:title",
          content: this.article.title
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.article.title
        },
        {
          key: "og:type",
          name: "og:type",
          content: "article"
        },
        {
          key: "og:url",
          name: "og:url",
          content: `https://melindagolden.com/${this.article.slug}/`
        },
        {
          key: "description",
          name: "description",
          content: this.article.description
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.article.description
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.article.description
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
    article() {
      return {
        body: "Body",
        description: "Description",
        publishedAt: "2022-03-17T23:06:15.434Z",
        readingTime: "4 min read",
        slug: "this-is-a-sample-blog-post",
        title: "This is a sample blog post",
        category: {
          data: {
            id: "1",
            attributes: {
              name: "Category",
              slug: "category"
            }
          }
        }
      };
    }
  },

  methods: {
    formatPublishDate(date) {
      return formatDate(date);
    }
  }
};
</script>

<style scoped>
::v-deep .article-content h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.75rem;
}

::v-deep .article-content h2 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
  margin-bottom: 1.75rem;
}

::v-deep .article-content h3 {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.25rem;
  margin-bottom: 1.75rem;
}

::v-deep .article-content h4 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  margin-bottom: 1.75rem;
}

::v-deep .article-content h5 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 1.75rem;
}

::v-deep .article-content h6 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 1.75rem;
}

::v-deep .article-content p {
  margin-bottom: 1.75rem;
}

::v-deep .article-content ul,
::v-deep .article-content ol {
  margin-bottom: 1.75rem;
}

::v-deep .article-content ul {
  list-style: disc;
  padding-left: 1.125rem;
}

::v-deep .article-content ol {
  list-style: decimal;
  padding-left: 1.5rem;
}

::v-deep .article-content blockquote {
  border-left: 5px solid #cecece;
  padding-left: 1.25rem;
  margin-bottom: 1.75rem;
}

::v-deep .article-content pre {
  margin-bottom: 1.75rem;
}

::v-deep .article-content pre code {
  background: transparent;
  padding: 0;
}
</style>
