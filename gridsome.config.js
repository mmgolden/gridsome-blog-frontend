const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "Melinda Golden",
  siteDescription:
    "A blog by Melinda Golden, a front-end developer based in Asheville, NC.",
  siteUrl: "https://melindagolden.com",
  metadata: {
    twitter: {
      site: "@melindamgolden",
      creator: "@melindamgolden"
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  plugins: [
    {
      use: "@gridsome/source-graphql",
      options: {
        url: process.env.GRIDSOME_API_URL,
        fieldName: "strapi",
        typeName: "strapiTypes",

        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
        }
      }
    },
    {
      use: "gridsome-plugin-plausible-analytics",
      options: {
        dataDomain: "melindagolden.com",
        outboundLinkTracking: false
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {}
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
