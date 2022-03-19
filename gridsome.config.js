const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-graphql",
      options: {
        url: process.env.GRIDSOME_API_URL,
        fieldName: "strapi",
        typeName: "strapi",

        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
