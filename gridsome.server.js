module.exports = function (api) {
  // Create paginated blog pages
  api.createPages(async ({ graphql, createPage }) => {
    // Get total page count
    const { data: pageCountData } = await graphql(`
      {
        strapi {
          articles(pagination: { page: 1, pageSize: 6 }) {
            meta {
              pagination {
                total
                page
                pageSize
                pageCount
              }
            }
          }
        }
      }
    `);

    const pageCount = pageCountData.strapi.articles.meta.pagination.pageCount;

    // Start loop at 2 - do not need /blog/1
    for (let i = 2; i <= pageCount; i++) {
      // Get pagination data for blog page
      const { data: paginationData } = await graphql(`
      {
        strapi {
          articles(pagination: { page: ${i}, pageSize: 6 }) {
            meta {
              pagination {
                total
                page
                pageSize
                pageCount
              }
            }
          }
        }
      }
    `);

      const {
        total,
        page,
        pageSize,
        pageCount
      } = paginationData.strapi.articles.meta.pagination;

      createPage({
        path: `/blog/${i}`,
        component: "./src/templates/BlogTemplate.vue",
        context: {
          blogTotal: total,
          blogPage: page,
          blogPageSize: pageSize,
          blogPageCount: pageCount
        }
      });
    }
  });

  // Create category pages
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        strapi {
          categories {
            data {
              id
              attributes {
                slug
              }
            }
          }
        }
      }
    `);

    data.strapi.categories.data.forEach((node) => {
      createPage({
        path: `/categories/${node.attributes.slug}`,
        component: "./src/templates/CategoryTemplate.vue",
        context: {
          id: node.id
        }
      });
    });
  });

  // Create individual article pages
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        strapi {
          articles {
            data {
              id
              attributes {
                slug
              }
            }
          }
        }
      }
    `);

    data.strapi.articles.data.forEach((node) => {
      createPage({
        path: `/${node.attributes.slug}`,
        component: "./src/templates/ArticleTemplate.vue",
        context: {
          id: node.id
        }
      });
    });
  });
};
