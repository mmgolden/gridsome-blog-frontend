module.exports = function (api) {
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
        path: `/blog/${node.attributes.slug}`,
        component: "./src/templates/Article.vue",
        context: {
          id: node.id
        }
      });
    });
  });
};
