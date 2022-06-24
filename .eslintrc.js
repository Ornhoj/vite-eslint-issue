module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // Docs: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'no-use-before-define': 'error',
    'prefer-template': 'error',

    'prettier/prettier': [
      'warn',
      {
        // prettier config in here
        // - Docs: https://prettier.io/docs/en/options.html
        endOfLine: 'crlf',
        tabWidth: 2,
        useTabs: false,
        semi: false,
        printWidth: 80,
        bracketSameLine: true,
        bracketSpacing: true,
        arrowParens: 'always',
        trailingComma: 'es5',
        singleQuote: true,
        singleAttributePerLine: true,
      },
    ],

    'vue/no-undef-properties': ['error'],

    // 'vue/max-len': [
    //   'error',
    //   {
    //     code: 80,
    //     template: 80,
    //     tabWidth: 2,
    //     comments: 80,
    //   },
    // ],

    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1,
      },
    ],

    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],

    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          'emits',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'methods',
          ['components', 'directives', 'filters'],
          'created',
          'mounted',
          'unmounted',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],

    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    'vue/no-textarea-mustache': 'off',
    'vue/no-deprecated-destroyed-lifecycle': 'off',
    'vue/mustache-interpolation-spacing': ['error', 'always'],
  },
}
