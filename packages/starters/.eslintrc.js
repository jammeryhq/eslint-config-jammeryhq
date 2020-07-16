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
    ecmaVersion: 2019,
    parser: 'babel-eslint'
  },
  plugins: [
    'vue',
    'vue-a11y'
  ],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 0,
    'object-curly-spacing': ['error', 'always'],
    'computed-property-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    camelcase: ['off', {
      properties: 'never',
      ignoreDestructuring: true
    }],
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }]
  }
}
