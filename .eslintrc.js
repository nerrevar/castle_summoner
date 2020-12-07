module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'warn',
    'comma-dangle': ['warn',
      {
        "objects": "always-multiline",
      }
    ],
    "object-curly-spacing": ["warn", "never"],
    "array-bracket-spacing": ["warn", "never"],
    "computed-property-spacing": ["warn", "never"],
    "curly": ["warn", "multi"],
    "brace-style": ["warn", "stroustrup", { "allowSingleLine": true }],
    "no-return-assign": "warn",
    "prefer-const": 0
  }
}
