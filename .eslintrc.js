module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 使用分号结尾
    semi: [
      'error',
      'always'
    ],
    // 禁止不必要的括号
    'no-extra-parens': [
      'error',
      'all',
      {
        nestedBinaryExpressions: false,
        ignoreJSX: 'multi-line'
      }
    ],
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 'error',

    // 这些规则是关于最佳实践的
    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': [
      'error', {
        allowImplicit: true
      }],
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'error',
    // 强制类方法使用 this
    'class-methods-use-this': 'error',
    // 指定程序中允许的最大环路复杂度
    complexity: ['error', { max: 5 }],
    // 要求使用一致的 return 语句, 指定返回值或隐式返回 undefined
    'consistent-return': [
      'error', {
        treatUndefinedAsUnspecified: false
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
};
