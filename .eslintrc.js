module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'quotes': [
      'error',
      'single',
    ],
    'indent': [
      'error',
      2,
    ],
  }
};