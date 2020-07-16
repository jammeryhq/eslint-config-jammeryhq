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
    semi: ['error', 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    camelcase: ['off', {
      properties: 'never',
      ignoreDestructuring: true
    }],
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
    ]
  }
}
