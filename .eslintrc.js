module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:gridsome/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "gridsome/format-query-block": "error"
  }
};
