module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // 禁止在循环中 出现 await
    'no-await-in-loop': true,
    // 禁用 console
    'no-console': {
      allow: ['warn', 'error']
    },
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
    ],
    // 强制所有控制语句使用一致的括号风格
    curly: ['error', 'all'],
    // 要求 switch 语句中有 default 分支
    'default-case': ['error'],
    // 强制在点号之前和之后一致的换行
    'dot-location': ['error'],
    // 强制尽可能地使用点号
    'dot-notation': ['error'],
    // 要求使用 === 和 !==
    eqeqeq: ['error'],
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': ['error'],
    // 强制每个文件中包含的的类的最大数量
    'max-classes-per-file': ['error', 2],
    // 禁用 alert、confirm 和 prompt
    'no-alert': ['error'],
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': ['error'],
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 'error',
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 'error',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'error',
    // 禁止出现空函数
    'no-empty-function': 'error',
    // 禁止使用空解构模式
    'no-empty-pattern': 'error',
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 'error',
    // 禁用 eval()
    'no-eval': 'error',
    // 禁止扩展原生对象
    'no-extend-native': 'error',
    // 禁止不必要的函数绑定
    'no-extra-bind': 'error',
    // 禁用不必要的标签
    'no-extra-label': 'error',
    // 禁止 case 语句落空
    'no-fallthrough': 'error',
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'error',
    // 禁止使用短符号进行类型转换
    // 'no-implicit-coercion': 'error'
    // 禁止在全局范围内使用变量声明和 function 声明
    'no-implicit-globals': 'error',
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 'error',
    // 禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': 'error',
    // 禁用 __iterator__ 属性
    'no-iterator': 'error',
    // 禁用标签语句
    'no-labels': 'error',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',
    // 禁止在循环语句中出现包含不安全引用的函数声明
    'no-loop-func': 'error',
    // 禁止使用魔术数字, 忽略0，1
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1]
      }
    ],
    // 禁止出现多个空格
    'no-multi-spaces': 'error',
    // 禁止多行字符串
    'no-multi-str': 'error',
    // 禁止使用 new 以避免产生副作用
    'no-new': 'error',
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': 'error',
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',
    // 禁用八进制字面量
    'no-octal': 'error',
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 'error',
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 'error',
    // 禁用 __proto__ 属性
    'no-proto': 'error',
    // 禁止多次声明同一变量
    'no-redeclare': 'error',
    // 禁止使用对象的某些属性
    // 'no-restricted-properties': 'error',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'error',
    // 禁用不必要的 return await
    'no-return-await': 'error',
    // 禁止使用 javascript: url
    'no-script-url': 'error',
    // 禁止自我赋值
    'no-self-assign': 'error',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 禁用逗号操作符
    'no-sequences': 'error',
    // 禁止抛出异常字面量
    'no-throw-literal': 'error',
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 'error',
    // 禁止出现未使用过的表达式
    'no-unused-expressions': 'error',
    // 禁用出现未使用过的标
    'no-unused-labels': 'error',
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 'error',
    // 禁止不必要的 catch 子句
    'no-useless-catch': 'error',
    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': 'error',
    // 禁用不必要的转义字符
    'no-useless-escape': 'error',
    // 禁止多余的 return 语句
    'no-useless-return': 'error',
    // 禁用 void 操作符
    'no-void': 'error',
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': [
      'error',
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ],
    // 禁用 with 语句
    'no-with': 'error',
    // 建议在正则表达式中使用命名捕获组
    // 'prefer-named-capture-group': 'error',
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    // 'prefer-promise-reject-errors': [
    //   'error',
    //   {
    //     'allowEmptyReject': true
    //   }
    // ],
    // 强制在 parseInt() 使用基数参数
    radix: 'error',
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'error',
    // 强制在 RegExp 上使用 u 标志
    // 'require-unicode-regexp': 'error',
    // 要求 IIFE 使用括号括起来
    'wrap-iife': 'error',
    // 要求或禁止 “Yoda” 条件
    yoda: ['error', 'never'],

    // 这些规则与变量声明有关：
    // 禁止删除变量
    'no-delete-var': 'error',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'error',
    // 禁止将标识符定义为受限的名字, 关键字不能被遮蔽
    'no-shadow-restricted-names': 'error',
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 'error',
    // 禁止将变量初始化为 undefined
    'no-undef-init': 'error',
    // 禁止将 undefined 作为标识符
    'no-undefined': 'error',
    // 禁止出现未使用过的变量
    'no-unused-vars': 'error',
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 'error',

    // 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的
    // 强制返回callback函数
    'callback-return': 'error',
    // 强制回调错误处理
    'handle-callback-err': 'error',
    // 禁用 Buffer() 构造函数
    'no-buffer-constructor': 'error',
    // 禁止混合常规变量声明和 require 调用
    'no-mixed-requires': 'error',
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 'error',
    // 禁用 process.env
    // 'no-process-env': 'error',
    // 禁用 process.exit()
    'no-process-exit': 'error',
    // 禁用通过 require 加载的指定模块
    // 'no-restricted-modules': 'error',
    // 禁用同步方法
    // 'no-sync': 'error',

    // 这些规则是关于风格指南的
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3
      }
    ],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': [
      'error',
      'never',
      {
        objectsInArrays: true,
        arraysInArrays: true
      }
    ],
    // 强制数组元素间出现换行
    // 'array-element-newline': [
    //   'error',
    //   {
    //     'multiline': true,
    //     'minItems': 3
    //   }
    // ],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 'error',
    // 大括号风格要求
    'brace-style': [
      'error',
      'stroustrup'
    ],
    // 禁止使用拖尾逗号
    'comma-dangle': 'error',
    // 强制在逗号前后使用一致的空格
    'comma-spacing': 'error',
    // 强制使用一致的逗号风格
    'comma-style': 'error',
    // 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': ['error', 'never'],
    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': ['error', 'context'],
    // 文件末尾保留一行空行
    'eol-last': ['error', 'always'],
    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],
    // 强制在函数括号内使用一致的换行
    'function-paren-newline': [
      'error',
      {
        minItems: 4
      }
    ],
    // 强制使用一致的缩进
    indent: ['error', 2],
    // 强制在 JSX 属性中使用一致的单引号或双引号
    'jsx-quotes': ['error', 'prefer-single'],
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': [
      'error',
      {
        afterColon: true
      }
    ],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [
      'error',
      {
        before: true
      }
    ],
    // 强制行注释的位置
    'line-comment-position': [
      'error',
      {
        position: 'above'
      }
    ],
    // 要求注释周围有空格
    'lines-around-comment': [
      'error',
      {
        // 块级注释之前有空行
        beforeBlockComment: true,
        // 行注释之前有空行
        beforeLineComment: true
      }
    ],
    // 类成员之间空行
    'lines-between-class-members': [
      'error',
      'always'
    ],
    // 强制可嵌套的最大深度
    'max-depth': ['error', 6],
    // 强制一行的最大长度
    'max-len': ['error', 120],
    // 强制最大行数
    // 'max-lines': ['error', 600]
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['error', 4],
    // 构造函数首字母大写
    'new-cap': 'error',
    // 强制或禁止调用无参构造函数时有圆括号
    'new-parens': 'error',
    // 方法链中每个调用都有一个换行符
    'newline-per-chained-call': [
      'error',
      {
        // 允许在同一行成链的深度
        ignoreChainWithDepth: 2
      }
    ],
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁止使用内联注释
    'no-inline-comments': 'error',
    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 不允许多个空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 2,
        maxBOF: 2
      }
    ],
    // 禁用否定的表达式
    // 'no-negated-condition': 'error',
    // 禁用嵌套的三元表达式
    'no-nested-ternary': 'error',
    // 禁用 Object 的构造函数
    'no-new-object': 'error',
    // 禁用行尾空白
    'no-trailing-spaces': 'error',
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 'error',
    // 禁止可以表达为更简单结构的三元操作符
    'no-unneeded-ternary': 'error',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 强制单个语句的位置
    'nonblock-statement-body-position': [
      'error',
      'below'
    ],
    // 强制在花括号内使用一致的换行符
    'object-curly-newline': [
      'error',
      'always'
    ],
    // 强制在花括号中使用一致的空格
    'object-curly-spacing': [
      'error',
      'never'
    ],
    // 强制将对象的属性放在不同的行上
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false
      }
    ],
    // 强制函数中的变量在一起声明或分开声明
    'one-var': [
      'error',
      'never'
    ],
    // 强制操作符使用一致的换行符风格
    'operator-linebreak': [
      'error',
      'before'
    ],
    // 要求或禁止块内填充
    'padded-blocks': [
      'error',
      'never'
    ],
    // 要求或禁止在语句间填充空行
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],
    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    'prefer-object-spread': 'error',
    // 要求对象字面量属性名称使用引号
    'quote-props': [
      'error',
      'consistent-as-needed'
    ],
    // 使用单引号
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    // 使用分号结尾
    semi: [
      'error',
      'always'
    ],
    // 分号前后无空格
    'semi-spacing': [
      'error',
      {
        before: false,
        after: false
      }
    ],
    // 分号在末尾
    'semi-style': [
      'error',
      'last'
    ],
    // 'sort-keys': 'error',
    // 语句块之前的空格
    'space-before-blocks': [
      'error',
      'always'
    ],
    // 圆括号内的空格
    'space-in-parens': [
      'error',
      'never'
    ],
    // 要求操作符周围有空格
    'space-infix-ops': [
      'error',
      'always'
    ],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    // 在注释前有空白
    'spaced-comment': [
      'error',
      'always'
    ],
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    // 以下规则只与 ES6 有关
    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false
      }
    ],
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],
    // 禁止重复导入
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true
      }
    ],
    // 禁用不必要的构造函数
    'no-useless-constructor': 'error',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 要求对象字面量简写语法
    'object-shorthand': [
      'error',
      'always'
    ],
    // 建议使用const
    'prefer-const': [
      'error',
      'always'
    ],
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: true
      }
    ],
    // 要求使用剩余参数而不是 arguments
    'prefer-rest-params': 'error',
    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': 'error',
    // 要求使用模板字面量而非字符串连接
    'prefer-template': 'error',
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': 'error',
    // 要求 symbol 描述
    'symbol-description': 'error',
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': [
      'error',
      'never'
    ],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ]

    // react/jsx规则 https://github.com/yannickcr/eslint-plugin-react
  }
};
