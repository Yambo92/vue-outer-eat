// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    "@vue/prettier",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard'
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
        printWidth: 160,
        endOfLine: "auto",
      },
    ],
  },
};
