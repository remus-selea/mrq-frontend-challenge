module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/all",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:jsx-a11y/strict",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  settings: {
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
  rules: {
    "no-shadow": "error",
    "no-mixed-operators": "error",
    "no-return-assign": "error",
    "no-unused-expressions": ["error", { enforceForJSX: true }],
    "no-nested-ternary": "error",
    "no-console": "error",
    "no-eval": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-sort-props": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-max-depth": "off",
    "react/function-component-definition": "off",
    "react/prefer-read-only-props": "off",
    "react/forbid-component-props": "off",
  },
};
