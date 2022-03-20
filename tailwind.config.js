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
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          dark: "#EFF1F3",
          DEFAULT: "#F6F8FA"
        },
        navy: {
          dark: "#293443",
          DEFAULT: "#313E50"
        }
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme("colors.gray"),
              '[class~="lead"]': {
                color: theme("colors.gray")
              },
              a: {
                color: theme("colors.gray")
              },
              strong: {
                color: theme("colors.gray")
              },
              "ol > li::before": {
                color: theme("colors.gray")
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray")
              },
              hr: {
                borderColor: theme("colors.gray")
              },
              blockquote: {
                color: theme("colors.gray"),
                borderLeftColor: theme("colors.gray")
              },
              h1: {
                color: theme("colors.gray")
              },
              h2: {
                color: theme("colors.gray")
              },
              h3: {
                color: theme("colors.gray")
              },
              h4: {
                color: theme("colors.gray")
              },
              "figure figcaption": {
                color: theme("colors.gray")
              },
              code: {
                color: theme("colors.gray")
              },
              "a code": {
                color: theme("colors.gray")
              },
              pre: {
                color: theme("colors.gray"),
                backgroundColor: theme("colors.gray")
              },
              thead: {
                color: theme("colors.gray"),
                borderBottomColor: theme("colors.gray")
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray")
              }
            }
          ]
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ["dark"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
