module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    graphql: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019
  },
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
    'space-in-parens': ['error', 'never']
  }
}
