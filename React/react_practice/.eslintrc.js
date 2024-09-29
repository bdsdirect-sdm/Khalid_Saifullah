module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors. Should be last in extends array
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows parsing of modern ECMAScript features
    sourceType: "module", // Allows using import/export
    ecmaFeatures: {
      jsx: true, // Allows parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Automatically detects the react version
    },
  },
  rules: {
    // Specify ESLint rules here
    "react/react-in-jsx-scope": "off", // Not needed with React 17+
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
