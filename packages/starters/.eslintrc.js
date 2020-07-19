module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue-a11y/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    graphql: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    parser: 'babel-eslint'
  },
  plugins: [
    'vue',
    'vue-a11y'
  ],
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
    'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'never' }]
  }
}
