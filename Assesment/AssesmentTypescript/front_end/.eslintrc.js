// eslint-disable-next-line no-undef
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // Integrates Prettier with ESLint
    ],
    ignores: [
      'build', // specify the paths you want to ignore
      'node_modules',
    ],
    plugins: ['react', '@typescript-eslint'],
    rules: {
      // Add any specific rules here
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  