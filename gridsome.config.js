const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "Melinda Golden",
  siteDescription:
    "A blog by Melinda Golden, a software developer based in Asheville, NC.",
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
      use: "gridsome-plugin-plausible-analytics",
      options: {
        dataDomain: "melindagolden.com",
        outboundLinkTracking: false
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {}
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        },
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          }
        }
      }
    }
  ],
  templates: {
    Post: "/:slug",
    Tag: "/tag/:id"
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
