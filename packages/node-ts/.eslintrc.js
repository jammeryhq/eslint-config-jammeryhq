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
  extends: ['standard-with-typescript', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    indent: ['error', 2],
    semi: 'off',
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    camelcase: ['off', { properties: 'never', ignoreDestructuring: true }],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'computed-property-spacing': ['error', 'always'],
    'linebreak-style': 0,
    'max-len': ['error', { code: 180 }],
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'space-in-parens': ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never']
  }
}
