module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: ['standard-with-typescript', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  rules: {
    indent: ['error', 2],
    semi: 'off',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    camelcase: [
      'off',
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 0,
    'object-curly-spacing': ['error', 'always'],
    'computed-property-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    '@typescript-eslint/semi': ['error', 'never'],
    'prettier/prettier': 'error'
  }
}
