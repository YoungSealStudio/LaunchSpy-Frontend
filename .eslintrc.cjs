const prettierConfig = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
}

module.exports = {
  extends: ['tonyfromundefined'],
  root: true,
  rules: {
    'prettier/prettier': ['error', prettierConfig, { usePrettierrc: false }],
  },
}
