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
  ]
};
