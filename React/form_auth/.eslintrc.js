module.exports = {
    parser: 'babel-eslint', // Use Babel for parsing
    extends: [
      'eslint:recommended', // Use recommended ESLint rules
      'plugin:react/recommended', // Use recommended rules from the React plugin
      'plugin:prettier/recommended' // Integrate Prettier with ESLint
    ],
    settings: {
      react: {
        version: 'detect' // Automatically detect the React version
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'prettier/prettier': 'error' // Show Prettier errors as ESLint errors
    }
  };
  