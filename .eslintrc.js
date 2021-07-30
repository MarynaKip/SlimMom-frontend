module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'require-jsdoc': 0,
  },
}
