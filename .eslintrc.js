module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    'indent': ['error', 2],
    'semi': ["error", "never", { "beforeStatementContinuationChars": "always"}],
    'quotes': ['off', 'single'],
    'no-console': 'off',
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 1 }],
    'space-in-parens': ['error', 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-blocks': [
      'error',
      'always'
    ],
    'no-empty': 'error',
    'no-duplicate-imports': 'error',
    'vue/multi-word-component-names': 'off'
  }
}
