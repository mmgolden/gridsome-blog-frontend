module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.pug",
      "./src/**/*.html",
      "./src/**/*.md",
      "./posts/*.md"
    ]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
